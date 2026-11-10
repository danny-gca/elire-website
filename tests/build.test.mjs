// Vérifie le site construit (dist/) contre les données de l'app (src/data/dataset.json) : à lancer après le build (npm run test:build).
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { compareFamilyName } from '../src/lib/format.ts';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const dataset = JSON.parse(read('src/data/dataset.json'));
const { version } = JSON.parse(read('src/data/app-release.json'));
const page = (tab) => read(`dist/donnees/${tab ? `${tab}/` : ''}index.html`);
const votes = dataset.lois.reduce((n, l) => n + Object.keys(l.votes).length, 0);

/** Lecture RFC 4180 : guillemets doublés, virgules et retours à la ligne dans une cellule entourée. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        quoted = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ',') {
      row.push(cell);
      cell = '';
    } else if (ch === '\r' && text[i + 1] === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
      i++;
    } else {
      cell += ch;
    }
  }
  return rows;
}

test('le JSON publié est le fichier de l’app tel quel', () => {
  assert.deepEqual(JSON.parse(read('dist/donnees/dataset.json')), dataset);
});

const CSV = {
  candidats: dataset.candidats.length,
  partis: dataset.partis.length,
  propositions: dataset.propositions.length,
  lois: dataset.lois.length,
  votes,
  enjeux: dataset.enjeux.length,
  glossaire: dataset.glossaire.length,
};

for (const [type, count] of Object.entries(CSV)) {
  test(`CSV ${type} : BOM, colonne ref, une ligne par élément, références uniques`, () => {
    const text = read(`dist/donnees/csv/${type}.csv`);
    assert.ok(text.startsWith('﻿'), 'BOM UTF-8 pour Excel');
    const [header, ...rows] = parseCsv(text.slice(1));
    assert.equal(header[0], 'ref');
    assert.equal(rows.length, count);
    rows.forEach((r) => assert.equal(r.length, header.length, `colonnes de ${r[0]}`));
    assert.equal(new Set(rows.map((r) => r[0])).size, count);
  });
}

test('CSV propositions : la citation exacte survit à l’échappement', () => {
  const rows = parseCsv(read('dist/donnees/csv/propositions.csv').slice(1));
  const col = rows[0].indexOf('citation');
  for (const p of dataset.propositions) {
    assert.equal(rows.find((r) => r[0] === p.ref)?.[col], p.description);
  }
});

const TABS = {
  candidats: dataset.candidats.length,
  partis: dataset.partis.length,
  propositions: dataset.propositions.length,
  scrutins: dataset.lois.length,
  enjeux: dataset.enjeux.length,
  glossaire: dataset.glossaire.length,
};

for (const [tab, count] of Object.entries(TABS)) {
  test(`onglet ${tab} : une ligne par élément, rien de plus, rien de moins`, () => {
    assert.equal((page(tab).match(/\sdata-item[\s>]/g) ?? []).length, count);
  });
}

test('chaque proposition, scrutin et question commune a son ancre', () => {
  const ids = (html) => new Set([...html.matchAll(/<tr id="([^"]+)"/g)].map((m) => m[1]));
  const props = ids(page('propositions'));
  dataset.propositions.forEach((p) => assert.ok(props.has(p.ref), p.ref));
  const lois = ids(page('scrutins'));
  dataset.lois.forEach((l) => assert.ok(lois.has(l.ref), l.ref));
  const enjeux = ids(page('enjeux'));
  dataset.enjeux.forEach((e) => assert.ok(enjeux.has(e.ref), e.ref));
});

test('candidats dans l’ordre alphabétique du nom de famille', () => {
  const order = [...page('candidats').matchAll(/<tr id="([^"]+)"/g)].map((m) => m[1]);
  const expected = [...dataset.candidats].sort((a, b) => compareFamilyName(a.nom, b.nom)).map((c) => c.id);
  assert.deepEqual(order, expected);
});

test('les chiffres de l’accueil viennent des données', () => {
  const home = read('dist/index.html');
  assert.match(home, new RegExp(`<b[^>]*>${dataset.candidats.length}</b> candidats`));
  assert.match(home, new RegExp(`<b[^>]*>${dataset.propositions.length}</b> propositions`));
  assert.match(home, new RegExp(`<b[^>]*>${dataset.lois.length}</b> scrutins`));
  assert.match(home, /href="\/elire-website\/donnees\/"/);
});

test('pages de données : aucune requête tierce, aucun tiret cadratin', () => {
  for (const tab of ['', ...Object.keys(TABS)]) {
    const html = page(tab);
    assert.doesNotMatch(html, /<script[^>]+src="https?:/i, `script tiers (${tab || 'index'})`);
    assert.doesNotMatch(html, /<link[^>]+rel="(stylesheet|preload|preconnect)"[^>]+href="https?:/i, `ressource tierce (${tab || 'index'})`);
    assert.doesNotMatch(html, /<img[^>]+src="https?:/i, `image tierce (${tab || 'index'})`);
    assert.ok(!html.includes('—'), `tiret cadratin (${tab || 'index'})`);
  }
});

test('chaque onglet dit de quelle version de l’app viennent les données', () => {
  const attendu = version ? `Données de la version ${version} de l'app, la dernière publiée` : "Données d'une copie locale de l'app";
  for (const tab of ['', ...Object.keys(TABS)]) {
    assert.ok(page(tab).replaceAll('&#39;', "'").includes(attendu), tab || 'index');
  }
});
