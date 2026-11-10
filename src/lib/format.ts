// Fonctions pures, sans import : testées directement par node --test (format.test.mjs).

const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const MOIS_LONGS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

export function formatDate(isoDate: string, long = false): string {
  const [year, month, day] = isoDate.slice(0, 10).split('-').map(Number);
  if (!year || !month || !day) {
    return isoDate;
  }
  return `${day} ${(long ? MOIS_LONGS : MOIS)[month - 1]} ${year}`;
}

export function candidatureText({ statut, date }: { statut: string; date: string }): string {
  const jour = formatDate(date);
  switch (statut) {
    case 'officielle':
      return `Candidature officielle, liste du Conseil constitutionnel du ${jour}`;
    case 'designee':
      return `Candidature désignée par son parti le ${jour}`;
    case 'sous_condition':
      return `Candidature annoncée sous condition le ${jour}`;
    case 'pressentie':
      return `Candidature pressentie, pas encore annoncée (source du ${jour})`;
    default:
      return `Candidature annoncée le ${jour}`;
  }
}

export function programmeText({ statut, date }: { statut: string; date?: string }): string {
  if (statut === 'aucun') {
    return 'Pas de programme 2027 publié : mesures tirées d’un programme précédent ou de prises de position.';
  }
  return `Programme 2027 ${statut === 'complet' ? 'complet' : 'partiel (premières mesures)'}${date ? `, publié le ${formatDate(date)}` : ''}`;
}

export function plural(count: number, singular: string, pluralForm = `${singular}s`): string {
  return `${count} ${count > 1 ? pluralForm : singular}`;
}

/** Comparaison insensible à la casse et aux accents (même règle que la recherche de l'app). */
export function normalize(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

export function slug(text: string): string {
  return normalize(text).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export const compareFr = (a: string, b: string) => a.localeCompare(b, 'fr', { sensitivity: 'base' });

/** Nom de famille d'abord (« Marine Le Pen » rangée à L), pour un ordre qui ne favorise personne. */
export function compareFamilyName(a: string, b: string): number {
  const family = (nom: string) => nom.split(' ').slice(1).join(' ') || nom;
  return compareFr(family(a), family(b)) || compareFr(a, b);
}

/** Même repli que reportUrl() de l'app : ticket GitHub pré-rempli, en attendant le formulaire du site. */
export function buildReportUrl(repoUrl: string, ref?: string, titre?: string): string {
  const params = new URLSearchParams({
    template: 'erreur-donnees.yml',
    title: ref ? `Erreur ${ref}${titre ? ` : ${titre}` : ''}` : 'Erreur dans les données',
    reference: ref ?? '',
  });
  return `${repoUrl}/issues/new?${params.toString()}`;
}

/** D'où viennent les données affichées : la version publiée de l'app, jamais « la vôtre ». */
export function dataOrigin(version: string | null, generatedAt: string): string {
  const date = formatDate(generatedAt, true);
  return version
    ? `Données de la version ${version} de l'app, la dernière publiée (compilées le ${date})`
    : `Données d'une copie locale de l'app, hors version publiée (compilées le ${date})`;
}
