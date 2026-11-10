import dataset from './data/dataset.json';

// Liens et chiffres affichés : à tenir à jour avec le dépôt de l'app.
export const APP_URL = 'https://danny-gca.github.io/elire-app/';
export const REPO_URL = 'https://github.com/danny-gca/elire-app';
export const SITE_REPO_URL = 'https://github.com/danny-gca/elire-website';
/** Fiches des stores (ids de elire-app : eas.json ascAppId, app.json android.package) ; null masque le bouton. */
export const STORES: { ios: string | null; android: string | null } = {
  ios: 'https://apps.apple.com/fr/app/id6826817464',
  android: 'https://play.google.com/store/apps/details?id=fr.elire.app',
};

export const FUNDING = [
  { label: 'GitHub Sponsors', url: 'https://github.com/sponsors/danny-gca' },
  { label: 'Ko-fi', url: 'https://ko-fi.com/danny_gca' },
  { label: 'Buy Me a Coffee', url: 'https://buymeacoffee.com/danny_gca' },
];

// Chiffres du jeu de données : lus dans le fichier de l'app copié au build (scripts/fetch-dataset.mjs).
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
export const COUNTS = {
  candidats: dataset.candidats.length,
  propositions: dataset.propositions.length,
  enjeux: dataset.enjeux.length,
  scrutins: dataset.lois.length,
  themes: dataset.thematiques.length,
};
const generated = new Date(dataset.metadata.generatedAt);
export const DATA_DATE = `${generated.getUTCDate()} ${MOIS[generated.getUTCMonth()]} ${generated.getUTCFullYear()}`;

// Surligneurs du lecteur, mêmes couleurs que l'app ; aucune ne correspond à un parti.
export const MARKERS = [
  { id: 'jaune', label: 'Jaune' },
  { id: 'rose', label: 'Rose' },
  { id: 'vert', label: 'Vert' },
  { id: 'bleu', label: 'Bleu' },
] as const;
export const MARKER_KEY = 'elire-marker';
