// Copie le fichier compilé de l'app (src/data/dataset.json) avant le build : le site affiche ce que l'app embarque.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const TABLES = ['partis', 'candidats', 'thematiques', 'propositions', 'lois', 'enjeux', 'glossaire'];

/** Raison du refus, ou null si le jeu de données est utilisable. */
export function checkDataset(dataset) {
  if (Number.isNaN(Date.parse(dataset?.metadata?.generatedAt ?? ''))) {
    return 'metadata.generatedAt absent ou invalide';
  }
  for (const table of TABLES) {
    if (!Array.isArray(dataset[table]) || dataset[table].length === 0) {
      return `tableau « ${table} » absent ou vide`;
    }
  }
  // Liens entre données : un lien cassé ferait disparaître ou mal ranger un élément sans bruit.
  const ids = (table) => new Set(dataset[table].map((x) => x.id));
  const candidats = ids('candidats');
  const themes = ids('thematiques');
  const propositions = ids('propositions');
  for (const p of dataset.propositions) {
    if (!candidats.has(p.candidatId)) {
      return `proposition ${p.ref} : candidat « ${p.candidatId} » inconnu`;
    }
    if (!themes.has(p.thematiqueId)) {
      return `proposition ${p.ref} : thème « ${p.thematiqueId} » inconnu`;
    }
  }
  for (const l of dataset.lois) {
    if (!themes.has(l.thematiqueId)) {
      return `scrutin ${l.ref} : thème « ${l.thematiqueId} » inconnu`;
    }
    const inconnu = Object.keys(l.votes ?? {}).find((id) => !candidats.has(id));
    if (inconnu) {
      return `scrutin ${l.ref} : candidat « ${inconnu} » inconnu`;
    }
  }
  for (const e of dataset.enjeux) {
    if (!themes.has(e.thematiqueId)) {
      return `question ${e.ref} : thème « ${e.thematiqueId} » inconnu`;
    }
    const inconnue = (e.positions ?? []).find((pos) => !propositions.has(pos.propositionId));
    if (inconnue) {
      return `question ${e.ref} : proposition « ${inconnue.propositionId} » inconnue`;
    }
  }
  return null;
}

/** Tag de la release (« v1.8.0 ») ramené à « 1.8.0 » ; vide = copie locale (null) ; autre chose = undefined (refusé). */
export function parseVersion(raw) {
  if (!raw) {
    return null;
  }
  const match = /^v?(\d+\.\d+\.\d+)$/.exec(raw.trim());
  return match ? match[1] : undefined;
}

function fail(message) {
  console.error(`fetch-dataset : ${message}`);
  console.error('Clonez elire-app à côté du site, ou indiquez son dossier avec ELIRE_APP_DIR.');
  process.exit(1);
}

function main() {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const appDir = resolve(root, process.env.ELIRE_APP_DIR ?? '../elire-app');
  const source = resolve(appDir, 'src/data/dataset.json');
  const target = resolve(root, 'src/data/dataset.json');
  const version = parseVersion(process.env.ELIRE_APP_VERSION);
  if (version === undefined) {
    fail(`ELIRE_APP_VERSION « ${process.env.ELIRE_APP_VERSION} » n'est pas un tag de version (v1.8.0)`);
  }

  let dataset;
  try {
    dataset = JSON.parse(readFileSync(source, 'utf8'));
  } catch (error) {
    fail(`lecture impossible de ${source} (${error.message})`);
  }
  const problem = checkDataset(dataset);
  if (problem) {
    fail(problem);
  }

  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, JSON.stringify(dataset));
  writeFileSync(resolve(root, 'src/data/app-release.json'), JSON.stringify({ version }));
  const counts = TABLES.map((t) => `${dataset[t].length} ${t}`).join(', ');
  console.log(`fetch-dataset : version ${version ?? 'locale'}, ${dataset.metadata.generatedAt}, ${counts}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
