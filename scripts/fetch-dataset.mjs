// Copie le fichier compilé de l'app (src/data/dataset.json) avant le build : le site affiche ce que l'app embarque.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const appDir = resolve(root, process.env.ELIRE_APP_DIR ?? '../elire-app');
const source = resolve(appDir, 'src/data/dataset.json');
const target = resolve(root, 'src/data/dataset.json');
const TABLES = ['partis', 'candidats', 'thematiques', 'propositions', 'lois', 'enjeux', 'glossaire'];

function fail(message) {
  console.error(`fetch-dataset : ${message}`);
  console.error("Clonez elire-app à côté du site, ou indiquez son dossier avec ELIRE_APP_DIR.");
  process.exit(1);
}

let dataset;
try {
  dataset = JSON.parse(readFileSync(source, 'utf8'));
} catch (error) {
  fail(`lecture impossible de ${source} (${error.message})`);
}

if (Number.isNaN(Date.parse(dataset?.metadata?.generatedAt ?? ''))) {
  fail('metadata.generatedAt absent ou invalide');
}
for (const table of TABLES) {
  if (!Array.isArray(dataset[table]) || dataset[table].length === 0) {
    fail(`tableau « ${table} » absent ou vide`);
  }
}

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, JSON.stringify(dataset));
const counts = TABLES.map((t) => `${dataset[t].length} ${t}`).join(', ');
console.log(`fetch-dataset : ${dataset.metadata.generatedAt}, ${counts}`);
