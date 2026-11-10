// Données de l'app (src/data/dataset.json, copié au build par scripts/fetch-dataset.mjs) et libellés repris de elire-app/src/lib/format.ts.
import raw from '../data/dataset.json';
import release from '../data/app-release.json';
import { REPO_URL } from '../config';
import { buildReportUrl, compareFamilyName, compareFr, dataOrigin } from './format';

export { candidatureText, formatDate, normalize, plural, programmeText, slug } from './format';

export interface Parti {
  id: string;
  nom: string;
  sigle?: string;
  nuanceOfficielle?: { code: string; libelle: string; election: string; sourceUrl: string };
  siteWeb?: string;
}
export interface Candidat {
  id: string;
  nom: string;
  partiId?: string;
  parti: string;
  sigleParti?: string;
  avatar: string;
  biographie: string;
  candidature: { statut: string; date: string; sourceUrl: string };
  programme: { statut: string; url?: string; date?: string };
}
export interface Thematique {
  id: string;
  titre: string;
  description: string;
}
export interface Proposition {
  id: string;
  ref: string;
  candidatId: string;
  thematiqueId: string;
  titre: string;
  description: string;
  contexte: string;
  sourceUrl: string;
  typeSource: string;
  dateDeclaration?: string;
  enjeuId?: string;
  sens?: string;
}
export interface Vote {
  position: 'pour' | 'contre' | 'abstention';
  typeVote: 'individuel' | 'groupe_parti';
  groupe?: string;
  groupeNom?: string;
  explication?: string;
  sourceUrl: string;
}
export interface Loi {
  id: string;
  ref: string;
  thematiqueId: string;
  nature: string;
  titre: string;
  question: string;
  enjeu: string;
  resume: string;
  chambre: string;
  dateVote: string;
  statut: string;
  sourceOfficielleUrl: string;
  votes: Record<string, Vote>;
}
export interface Enjeu {
  id: string;
  ref: string;
  thematiqueId: string;
  question: string;
  enjeu: string;
  positions: { propositionId: string; sens: 'pour' | 'contre' }[];
}
export interface Terme {
  sigle: string;
  forme: string;
  definition?: string;
}
export interface Dataset {
  metadata: { generatedAt: string } & Record<string, unknown>;
  partis: Parti[];
  candidats: Candidat[];
  thematiques: Thematique[];
  propositions: Proposition[];
  lois: Loi[];
  enjeux: Enjeu[];
  glossaire: Terme[];
}

export const dataset = raw as unknown as Dataset;

export const GENERATED_AT = dataset.metadata.generatedAt;
/** Version de l'app dont viennent les données (dernière release en CI), null pour une copie locale. */
export const APP_VERSION: string | null = release.version;
export const DATA_ORIGIN = dataOrigin(APP_VERSION, GENERATED_AT);

export const CHAMBRE_LABELS: Record<string, string> = {
  assemblee_nationale: 'Assemblée nationale',
  senat: 'Sénat',
  parlement_europeen: 'Parlement européen',
};
export const NATURE_LABELS: Record<string, string> = {
  projet_loi: 'Projet de loi',
  proposition_loi: 'Proposition de loi',
  motion_censure: 'Motion de censure',
  declaration_gouvernement: 'Déclaration du gouvernement',
  resolution: 'Résolution',
  texte_europeen: 'Texte européen',
};
export const STATUT_LABELS: Record<string, string> = { adoptee: 'Adoptée', rejetee: 'Rejetée', en_cours: 'En cours' };
export const POSITION_LABELS: Record<Vote['position'], string> = { pour: 'Pour', contre: 'Contre', abstention: 'Abstention' };
export const TYPE_VOTE_LABELS: Record<Vote['typeVote'], string> = { individuel: 'Vote personnel', groupe_parti: 'Position du groupe' };
export const TYPE_SOURCE_LABELS: Record<string, string> = {
  programme_2027: 'Programme 2027',
  programme_anterieur: 'Programme précédent',
  prise_de_position: 'Prise de position',
};

// Accents thématiques de l'app (DESIGN.md, theme-*).
export const THEME_ACCENTS: Record<string, string> = {
  environnement: '#3B7D4A',
  agriculture: '#6B7722',
  economie: '#8C6A1A',
  travail: '#A0532C',
  logement: '#77593A',
  sante: '#A3455C',
  societe: '#40707A',
  education: '#1F7A70',
  numerique: '#2B6A8F',
  international: '#3D5E88',
  institutions: '#555E70',
  securite: '#5C5047',
};

export const candidats = [...dataset.candidats].sort((a, b) => compareFamilyName(a.nom, b.nom));
export const partis = [...dataset.partis].sort((a, b) => compareFr(a.nom, b.nom));
export const thematiques = [...dataset.thematiques].sort((a, b) => compareFr(a.titre, b.titre));
export const glossaire = [...dataset.glossaire].sort((a, b) => compareFr(a.sigle, b.sigle));
export const lois = [...dataset.lois].sort((a, b) => b.dateVote.localeCompare(a.dateVote) || compareFr(b.ref, a.ref));
export const enjeux = [...dataset.enjeux].sort((a, b) => compareFr(a.ref, b.ref));

export const candidatById = new Map(dataset.candidats.map((c) => [c.id, c]));
export const partiById = new Map(dataset.partis.map((p) => [p.id, p]));
export const themeById = new Map(dataset.thematiques.map((t) => [t.id, t]));
export const propositionById = new Map(dataset.propositions.map((p) => [p.id, p]));
export const enjeuById = new Map(dataset.enjeux.map((e) => [e.id, e]));

const candidatRank = new Map(candidats.map((c, i) => [c.id, i]));
export const byCandidat = (a: { candidatId: string }, b: { candidatId: string }) =>
  (candidatRank.get(a.candidatId) ?? 0) - (candidatRank.get(b.candidatId) ?? 0);

export const propositions = [...dataset.propositions].sort((a, b) => byCandidat(a, b) || compareFr(a.ref, b.ref));

export function votesOf(candidatId: string): number {
  return dataset.lois.filter((l) => candidatId in l.votes).length;
}

export const reportUrl = (ref?: string, titre?: string) => buildReportUrl(REPO_URL, ref, titre);

export const ONGLETS = [
  { id: 'candidats', label: 'Candidats', count: dataset.candidats.length },
  { id: 'partis', label: 'Partis', count: dataset.partis.length },
  { id: 'propositions', label: 'Propositions', count: dataset.propositions.length },
  { id: 'scrutins', label: 'Scrutins', count: dataset.lois.length },
  { id: 'enjeux', label: 'Questions communes', count: dataset.enjeux.length },
  { id: 'glossaire', label: 'Glossaire', count: dataset.glossaire.length },
] as const;
export type OngletId = (typeof ONGLETS)[number]['id'];
