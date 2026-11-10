# Données publiques : page « Nos données » (2026-11-10)

> **Statut** : construit sur la branche `feat/donnees-publiques` (2026-11-10). Décisions validées par Danny le 2026-11-10 : noms et partis seulement sous `/donnees/`, ordre alphabétique du nom de famille ; « Signaler une erreur » = ticket GitHub pré-rempli (même repli que l'app) tant que le formulaire n'existe pas ; contrat de design posé ci-dessous et validé sur la PR.

## Pourquoi

**Transparence** : montrer à tout le monde, sans app ni GitHub, toutes les données qu'élire utilise. Sur l'accueil : « Toutes nos données sont là » -> page « Nos données » en onglets (candidats, partis, propositions, scrutins, enjeux, glossaire).

Le site lit **le fichier compilé de l'app** (`elire-app/src/data/dataset.json`) : ce que le visiteur voit est ce que l'app embarque.

## Objectifs, non-objectifs, anti-objectifs

**Objectifs**

- Page « Nos données » lisible sur téléphone, avec chaque élément, sa référence (`P-531`, `L-28`) et ses sources cliquables.
- Téléchargement brut : `dataset.json` et un CSV par type.
- Supprimer les chiffres codés en dur (`COUNTS`, `DATA_DATE` dans [src/config.ts](../src/config.ts), déjà faux : 25 candidats affichés pour 27, 196 propositions pour 191).

**Non-objectifs**

- **Rien dans elire-app** : pas de modif du code, du CI, du schéma ni des skills. L'app garde ses données embarquées, mises à jour à chaque release.
- Pas de synchro des données de l'app depuis le site (écartée le 2026-11-10, envisageable plus tard sans rien casser ici).
- Aucune modification des données en ligne, aucun compte.
- Pas de dérivation de `scrutins.json` / `exemples.json` du site (choix éditoriaux de l'accueil, on n'y touche pas).

**Anti-objectifs** (échec même si ça marche)

- Un tableau type Excel illisible sur mobile, ou un « air gouv » / base de données froide qui trahit la direction « cahier annoté ».
- Un site qui affiche des données que l'app n'a pas (ou l'inverse) au-delà du délai de publication.
- Une requête tierce ou un pistage (cf. `PRODUCT.md`).

## Architecture

```
elire-app (main, dépôt public)            elire-website (GitHub Pages)
src/data/dataset.json  ── actions/checkout ──> build : lit dataset.json
                                               publie /donnees/dataset.json
                                               publie /donnees/csv/*.csv
                                               pages /donnees/*
```

- **Déclencheurs du déploiement** : push sur `main` du site et `workflow_dispatch`, rien d'autre. Les données sont relues à chaque déploiement du site (pas de build planifié, décision du 2026-11-10).
- **Lecture locale, pas `raw.githubusercontent.com`** : son cache CDN peut servir l'ancienne version pendant quelques minutes.
- **URL publique** : `https://danny-gca.github.io/elire-website/donnees/`.
- **Données** : `metadata` (`generatedAt`, compteurs), `partis` (26), `candidats` (27), `thematiques` (12), `propositions` (191), `lois` (47, votes inclus), `enjeux` (16), `glossaire` (48). `mots` et `sujets` restent internes à l'app.

## Données

| Fichier | Changement |
|---|---|
| `scripts/fetch-dataset.mjs` (nouveau) | Avant `astro build` / `astro dev` : copie `src/data/dataset.json` depuis `ELIRE_APP_DIR` (défaut `../elire-app`), vérifie `metadata.generatedAt` et la présence des tableaux, écrit `src/data/dataset.json` (gitignoré). Fichier absent ou invalide = build en échec (le site en ligne reste l'ancien). |
| `package.json` | `prebuild` / `predev` -> `fetch-dataset`. |
| `.gitignore` | `src/data/dataset.json`. |
| [.github/workflows/deploy.yml](../.github/workflows/deploy.yml) | Étape `actions/checkout` de `danny-gca/elire-app` dans `elire-app/` avant le build, `ELIRE_APP_DIR=elire-app`. |
| [.github/workflows/ci.yml](../.github/workflows/ci.yml) | Même étape `actions/checkout` d'elire-app (le build en a besoin). |
| `src/pages/donnees/dataset.json.ts` (nouveau) | Endpoint statique : le dataset tel quel. |
| `src/pages/donnees/csv/[type].csv.ts` (nouveau) | Un CSV par type (candidats, partis, propositions, lois, votes, enjeux, glossaire), UTF-8 avec BOM pour Excel, une colonne `ref`. Test : guillemets, virgules et retours à la ligne échappés. |
| [src/config.ts](../src/config.ts) | `COUNTS` et `DATA_DATE` calculés depuis `metadata` au lieu d'être codés en dur. |

## Pages

| Route | Contenu |
|---|---|
| `/donnees/` | Intro courte (d'où viennent les données, date, comment signaler une erreur), compteurs, liens de téléchargement, onglets. |
| `/donnees/candidats/` | Fiches candidat : parti, statut de candidature et sa source, nombre de propositions et de votes. |
| `/donnees/partis/` | Partis. |
| `/donnees/propositions/` | Propositions, groupées par thématique. |
| `/donnees/scrutins/` | Lois et scrutins avec le vote de chaque candidat. |
| `/donnees/enjeux/` | Questions communes et leurs propositions. |
| `/donnees/glossaire/` | Glossaire. |

Choix de conception (à challenger) :

- **Une page statique par onglet**, pas un onglet JS : chaque onglet a une URL partageable, la page s'affiche sans JS, Astro génère tout au build.
- **Ancre par élément** (`/donnees/propositions/#P-531`) : lien direct depuis un signalement ou un article.
- **Fiches, pas tableau, sur mobile** : référence dans la ligne d'infos (pas de colonne de marge, même règle que l'app), sources en liens. Sur grand écran, l'impeccable shape décidera si un tableau dense apporte quelque chose.
- **Photos des candidats** : aucune (pas de requête tierce vers Wikimedia), initiales comme le repli de l'app.
- **Recherche et filtres** (texte, candidat, thématique) : petit script côté client, amélioration progressive ; sans JS tout reste listé.
- **« Signaler une erreur » sur chaque fiche** : lien vers le formulaire du site pré-rempli (référence + titre), même principe que `reportUrl(ref, titre)` de l'app.
- Accueil : un encart « Toutes nos données sont là » -> `/donnees/`, et lien dans le pied de page.

## Design avec le skill impeccable

Contexte : `PRODUCT.md`, `DESIGN.md`, `docs/reference/direction-app.md`, direction « cahier annoté » (papier `#F6F7F5`, encre, surligneur réservé au geste du lecteur, Literata / Atkinson Hyperlegible Next). À éviter : air gouv, base de données froide, gadget.

1. **Mettre à jour `PRODUCT.md`** : nouvelle page « Nos données », public (citoyens, journalistes, curieux, sur téléphone), but (vérifier, télécharger, signaler).
2. **`impeccable shape`** sur `/donnees/` et un onglet type (propositions, le plus dense) : structure, navigation entre onglets, fiche, recherche. Valider le contrat avec Danny avant de coder.
3. **Construire** les 7 pages sur le contrat validé.
4. **`impeccable critique`** puis **`impeccable audit`** : lisibilité à 360 px, accessibilité (onglets au clavier, contrastes, lecteurs d'écran), poids de page avec 191 propositions et 47 scrutins.
5. **`impeccable harden`** : recherche sans résultat, textes très longs, élément sans source, JS désactivé.
6. **`impeccable polish`**, puis mise à jour de `DESIGN.md` (impeccable-documenter) à partir de ce qui est livré.

### Contrat retenu (impeccable shape)

- **Mode** : Read, recherche en Operate. Thèse : le registre du cahier, des fiches réglées au filet, pas un tableau.
- **Structure** : en-tête (titre à mot posé, chapô, compteur, date, CSV), onglets entre deux filets (l'onglet en cours garde la bande du lecteur), feuille de recherche (texte, candidat, thème) cachée sans JS, puis les fiches en une colonne sur mobile, deux sur grand écran. Pas de tableau dense : les fiches suffisent et restent lisibles à 360 px.
- **Fiche** : ligne meta avec la référence (ancre), titre en 21, auteur, citation, contexte, Source et Signaler une erreur. Scrutin : question, enjeu, nature et statut, résumé, votes rangés Pour / Contre / Abstention (encre neutre), détail repliable vote par vote.
- **Vue d'ensemble** : chiffres en rangée réglée (liens vers les onglets), d'où viennent les données, téléchargements.
- **Hors scope** : finish review et audit complets (étapes 4 à 6) faits en une passe dans la session de construction ; à refaire si la PR change la direction.

## Doc

- `AGENTS.md` (« Two pages only » devient faux), `README.md` (d'où viennent les données, délai de publication, relancer avec `workflow_dispatch`, `ELIRE_APP_DIR` en local), `PRODUCT.md`, `docs/plan.md`.
- Pas de délai à annoncer : les données sont celles de `main` de l'app au dernier déploiement du site (date affichée sur chaque page).
