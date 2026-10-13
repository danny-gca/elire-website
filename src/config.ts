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

// Chiffres du jeu de données (elire-app, vérification du 2026-10-13).
export const COUNTS = { candidats: 17, propositions: 96, scrutins: 26, themes: 12 };
export const DATA_DATE = '13 octobre 2026';
