import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildReportUrl, candidatureText, compareFamilyName, dataOrigin, formatDate, normalize, plural, programmeText, slug } from './format.ts';

const NB = ' ';

test('dates en français, courtes et longues', () => {
  assert.equal(formatDate('2026-11-10'), `10${NB}nov.${NB}2026`);
  assert.equal(formatDate('2026-11-10T08:53:48.354Z', true), `10${NB}novembre${NB}2026`);
  assert.equal(formatDate('pas une date'), 'pas une date');
});

test('ordre alphabétique par nom de famille', () => {
  const noms = ['Marine Le Pen', 'Nathalie Arthaud', 'Jean-Luc Mélenchon', 'Nicolas Dupont-Aignan', 'Éric Zemmour', 'Gabriel Attal'];
  assert.deepEqual([...noms].sort(compareFamilyName), [
    'Nathalie Arthaud',
    'Gabriel Attal',
    'Nicolas Dupont-Aignan',
    'Marine Le Pen',
    'Jean-Luc Mélenchon',
    'Éric Zemmour',
  ]);
});

test('recherche insensible aux accents et à la casse', () => {
  assert.equal(normalize('Écologie ÉLÉMENTAIRE'), 'ecologie elementaire');
});

test('ancres du glossaire stables', () => {
  assert.equal(slug('PLFSS'), 'plfss');
  assert.equal(slug('Union européenne (UE)'), 'union-europeenne-ue');
});

test('pluriel', () => {
  assert.equal(plural(1, 'vote'), '1 vote');
  assert.equal(plural(45, 'vote'), '45 votes');
});

test('statuts de candidature et de programme repris de l’app', () => {
  assert.equal(candidatureText({ statut: 'designee', date: '2025-12-08' }), `Candidature désignée par son parti le 8${NB}déc.${NB}2025`);
  assert.equal(candidatureText({ statut: 'declaree', date: '2026-03-21' }), `Candidature annoncée le 21${NB}mars${NB}2026`);
  assert.match(programmeText({ statut: 'aucun' }), /^Pas de programme 2027 publié/);
  assert.equal(programmeText({ statut: 'partiel', date: '2026-06-26' }), `Programme 2027 partiel (premières mesures), publié le 26${NB}juin${NB}2026`);
});

test('lien « Signaler une erreur » pré-rempli comme dans l’app', () => {
  const url = new URL(buildReportUrl('https://github.com/danny-gca/elire-app', 'P-531', 'Un titre & une virgule, oui'));
  assert.equal(url.origin + url.pathname, 'https://github.com/danny-gca/elire-app/issues/new');
  assert.equal(url.searchParams.get('template'), 'erreur-donnees.yml');
  assert.equal(url.searchParams.get('title'), 'Erreur P-531 : Un titre & une virgule, oui');
  assert.equal(url.searchParams.get('reference'), 'P-531');
  assert.equal(new URL(buildReportUrl('https://x.test')).searchParams.get('title'), 'Erreur dans les données');
});

test('origine des données : la version publiée, ou une copie locale nommée comme telle', () => {
  assert.equal(dataOrigin('1.8.0', '2026-11-06T16:44:39.148Z'), `Données de la version 1.8.0 de l'app, la dernière publiée (compilées le 6${NB}novembre${NB}2026)`);
  assert.match(dataOrigin(null, '2026-11-06'), /^Données d'une copie locale de l'app/);
});
