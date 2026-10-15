// Liens et chiffres affichés : à tenir à jour avec le dépôt de l'app.
export const APP_URL = 'https://danny-gca.github.io/elire-app/';
export const REPO_URL = 'https://github.com/danny-gca/elire-app';
export const SITE_REPO_URL = 'https://github.com/danny-gca/elire-website';
/** Fiches des stores : null tant que l'app n'est pas publiée (le site affiche « bientôt »). */
export const STORES: { ios: string | null; android: string | null } = { ios: null, android: null };

export const FUNDING = [
  { label: 'GitHub Sponsors', url: 'https://github.com/sponsors/danny-gca' },
  { label: 'Ko-fi', url: 'https://ko-fi.com/danny_gca' },
  { label: 'Buy Me a Coffee', url: 'https://buymeacoffee.com/danny_gca' },
];

// Chiffres du jeu de données (elire-app, vérification du 2026-10-14).
export const COUNTS = { candidats: 25, propositions: 194, scrutins: 42, themes: 12 };
export const DATA_DATE = '14 octobre 2026';

// Surligneurs du lecteur, mêmes couleurs que l'app ; aucune ne correspond à un parti.
export const MARKERS = [
  { id: 'jaune', label: 'Jaune' },
  { id: 'rose', label: 'Rose' },
  { id: 'vert', label: 'Vert' },
  { id: 'bleu', label: 'Bleu' },
] as const;
export const MARKER_KEY = 'elire-marker';
