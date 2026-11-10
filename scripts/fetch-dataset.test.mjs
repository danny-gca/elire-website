import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { checkDataset, parseVersion, TABLES } from './fetch-dataset.mjs';

const valid = () => ({
  metadata: { generatedAt: '2026-11-10T08:53:48.354Z' },
  ...Object.fromEntries(TABLES.map((t) => [t, [{ id: `${t}-1` }]])),
  candidats: [{ id: 'c1' }],
  thematiques: [{ id: 't1' }],
  propositions: [{ id: 'p1', ref: 'P-1', candidatId: 'c1', thematiqueId: 't1' }],
  lois: [{ id: 'l1', ref: 'L-1', thematiqueId: 't1', votes: { c1: { position: 'pour' } } }],
  enjeux: [{ id: 'e1', ref: 'E-01', thematiqueId: 't1', positions: [{ propositionId: 'p1', sens: 'pour' }] }],
});
const script = fileURLToPath(new URL('./fetch-dataset.mjs', import.meta.url));
const run = (appDir) => spawnSync(process.execPath, [script], { env: { ...process.env, ELIRE_APP_DIR: appDir }, encoding: 'utf8' });

test('jeu de données complet accepté', () => {
  assert.equal(checkDataset(valid()), null);
});

test('date de génération absente ou invalide refusée', () => {
  const d = valid();
  d.metadata.generatedAt = 'hier';
  assert.match(checkDataset(d), /generatedAt/);
  assert.match(checkDataset({ ...valid(), metadata: undefined }), /generatedAt/);
});

test('chaque tableau absent ou vide refusé', () => {
  for (const table of TABLES) {
    assert.match(checkDataset({ ...valid(), [table]: [] }), new RegExp(table));
    assert.match(checkDataset({ ...valid(), [table]: undefined }), new RegExp(table));
  }
});

test('dossier de l’app introuvable : échec du build, avec la marche à suivre', () => {
  const result = run(join(tmpdir(), 'elire-app-absent'));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /lecture impossible/);
  assert.match(result.stderr, /ELIRE_APP_DIR/);
});

test('fichier invalide : échec du build sans rien copier', () => {
  const appDir = mkdtempSync(join(tmpdir(), 'elire-app-'));
  mkdirSync(join(appDir, 'src/data'), { recursive: true });
  writeFileSync(join(appDir, 'src/data/dataset.json'), JSON.stringify({ ...valid(), lois: [] }));
  const result = run(appDir);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /lois/);
});

test('liens entre données cassés refusés', () => {
  const cases = [
    [(d) => (d.propositions[0].candidatId = 'absent'), /P-1 : candidat/],
    [(d) => (d.propositions[0].thematiqueId = 'absent'), /P-1 : thème/],
    [(d) => (d.lois[0].votes = { absent: { position: 'pour' } }), /L-1 : candidat/],
    [(d) => (d.lois[0].thematiqueId = 'absent'), /L-1 : thème/],
    [(d) => (d.enjeux[0].positions[0].propositionId = 'absente'), /E-01 : proposition/],
    [(d) => (d.enjeux[0].thematiqueId = 'absent'), /E-01 : thème/],
  ];
  for (const [casser, message] of cases) {
    const d = valid();
    casser(d);
    assert.match(checkDataset(d), message);
  }
});

test('version de l’app lue dans le tag de release', () => {
  assert.equal(parseVersion('v1.8.0'), '1.8.0');
  assert.equal(parseVersion('1.8.0'), '1.8.0');
  assert.equal(parseVersion(''), null);
  assert.equal(parseVersion(undefined), null);
  assert.equal(parseVersion('main'), undefined);
});
