import assert from 'node:assert/strict';
import { test } from 'node:test';
import { csvCell, toCsv } from './csv.ts';

test('cellule simple laissée telle quelle', () => {
  assert.equal(csvCell('Pour'), 'Pour');
  assert.equal(csvCell(42), '42');
  assert.equal(csvCell(null), '');
  assert.equal(csvCell(undefined), '');
});

test('guillemets doublés et cellule entourée', () => {
  assert.equal(csvCell('« SMIC à 2000 € », dit "le" dépliant'), '"« SMIC à 2000 € », dit ""le"" dépliant"');
});

test('virgule et retours à la ligne entourés', () => {
  assert.equal(csvCell('a,b'), '"a,b"');
  assert.equal(csvCell('ligne 1\nligne 2'), '"ligne 1\nligne 2"');
  assert.equal(csvCell('ligne 1\r\nligne 2'), '"ligne 1\r\nligne 2"');
});

test('fichier avec BOM, en-tête et CRLF', () => {
  const csv = toCsv(['ref', 'titre'], [['P-1', 'Un, deux'], ['P-2', '']]);
  assert.equal(csv, '﻿ref,titre\r\nP-1,"Un, deux"\r\nP-2,\r\n');
});
