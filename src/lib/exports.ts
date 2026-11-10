// Colonnes des CSV de téléchargement (/donnees/csv/<type>.csv), une ligne par élément, première colonne « ref ».
import type { Cell } from './csv';
import {
  candidatById,
  candidats,
  CHAMBRE_LABELS,
  enjeuById,
  enjeux,
  glossaire,
  lois,
  NATURE_LABELS,
  partis,
  POSITION_LABELS,
  propositionById,
  propositions,
  slug,
  STATUT_LABELS,
  themeById,
  TYPE_SOURCE_LABELS,
  TYPE_VOTE_LABELS,
} from './donnees';

const theme = (id: string) => themeById.get(id)?.titre ?? id;
const nom = (id: string) => candidatById.get(id)?.nom ?? id;

export const EXPORTS: Record<string, { label: string; header: string[]; rows: () => Cell[][] }> = {
  candidats: {
    label: 'Candidats',
    header: ['ref', 'nom', 'parti', 'parti_ref', 'biographie', 'candidature', 'candidature_date', 'candidature_source', 'programme', 'programme_url'],
    rows: () =>
      candidats.map((c) => [c.id, c.nom, c.parti, c.partiId, c.biographie, c.candidature.statut, c.candidature.date, c.candidature.sourceUrl, c.programme.statut, c.programme.url]),
  },
  partis: {
    label: 'Partis',
    header: ['ref', 'nom', 'sigle', 'site_web', 'nuance_officielle', 'nuance_libelle', 'nuance_election', 'nuance_source'],
    rows: () =>
      partis.map((p) => [p.id, p.nom, p.sigle, p.siteWeb, p.nuanceOfficielle?.code, p.nuanceOfficielle?.libelle, p.nuanceOfficielle?.election, p.nuanceOfficielle?.sourceUrl]),
  },
  propositions: {
    label: 'Propositions',
    header: ['ref', 'candidat', 'candidat_ref', 'thematique', 'titre', 'citation', 'contexte', 'type_source', 'date_declaration', 'source', 'question_commune', 'sens'],
    rows: () =>
      propositions.map((p) => [
        p.ref,
        nom(p.candidatId),
        p.candidatId,
        theme(p.thematiqueId),
        p.titre,
        p.description,
        p.contexte,
        TYPE_SOURCE_LABELS[p.typeSource] ?? p.typeSource,
        p.dateDeclaration,
        p.sourceUrl,
        p.enjeuId ? enjeuById.get(p.enjeuId)?.ref : '',
        p.sens,
      ]),
  },
  lois: {
    label: 'Scrutins',
    header: ['ref', 'date', 'chambre', 'nature', 'statut', 'thematique', 'titre', 'question', 'enjeu', 'resume', 'source_officielle'],
    rows: () =>
      lois.map((l) => [
        l.ref,
        l.dateVote,
        CHAMBRE_LABELS[l.chambre] ?? l.chambre,
        NATURE_LABELS[l.nature] ?? l.nature,
        STATUT_LABELS[l.statut] ?? l.statut,
        theme(l.thematiqueId),
        l.titre,
        l.question,
        l.enjeu,
        l.resume,
        l.sourceOfficielleUrl,
      ]),
  },
  votes: {
    label: 'Votes des candidats',
    header: ['ref', 'scrutin', 'candidat', 'candidat_ref', 'position', 'type_vote', 'groupe', 'explication', 'source'],
    rows: () =>
      lois.flatMap((l) =>
        Object.entries(l.votes).map(([id, v]) => [
          `${l.ref}/${id}`,
          l.ref,
          nom(id),
          id,
          POSITION_LABELS[v.position],
          TYPE_VOTE_LABELS[v.typeVote],
          v.groupe,
          v.explication,
          v.sourceUrl,
        ]),
      ),
  },
  enjeux: {
    label: 'Questions communes',
    header: ['ref', 'thematique', 'question', 'enjeu', 'propositions_pour', 'propositions_contre'],
    rows: () =>
      enjeux.map((e) => {
        const refs = (sens: string) =>
          e.positions
            .filter((p) => p.sens === sens)
            .map((p) => propositionById.get(p.propositionId)?.ref ?? p.propositionId)
            .join(' ');
        return [e.ref, theme(e.thematiqueId), e.question, e.enjeu, refs('pour'), refs('contre')];
      }),
  },
  glossaire: {
    label: 'Glossaire',
    header: ['ref', 'sigle', 'forme', 'definition'],
    rows: () => glossaire.map((g) => [slug(g.sigle), g.sigle, g.forme, g.definition]),
  },
};

