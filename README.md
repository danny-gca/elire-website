# ÉLIRE - site vitrine

Site de présentation de [ÉLIRE](https://github.com/danny-gca/elire-app), l'app citoyenne, neutre et open source pour la présidentielle 2027.

> Ce README décrit l'état **actuel** du site. Le plan de construction est dans [docs/plan.md](docs/plan.md).

## Pages

1. **Présentation** (`src/pages/index.astro`, fait) : accroche et feuille en quatre temps (lire, noter, comparer, vérifier), principe, fonctionnement, valeurs, méthode de calcul, open source, appel vers l'app web. La proposition d'exemple et l'avis affiché sont tirés au hasard à chaque visite (`src/data/exemples.json`, une par thème, douze candidats différents).
2. **Signaler une erreur** (à faire) : formulaire sans compte, qui crée un ticket sur le dépôt de l'app. Pré-rempli depuis l'app (`?ref=P-531&titre=...`).

Navigation centrée, lien GitHub en haut à droite, surligneur jaune qui balaie au survol des liens et boutons, indicateur de lecture en bas à droite. Liens, stores et chiffres : `src/config.ts`.

## Principes

- Site statique sur GitHub Pages, aucune requête tierce, aucun traceur, aucun cookie.
- Même univers visuel que l'app : voir [DESIGN.md](DESIGN.md) (repris de l'app) et [PRODUCT.md](PRODUCT.md).

## Développement

- `npm install` (Node 22), puis `npm run dev` : http://localhost:4321/elire-website/
- `npm run check` : vérification Astro et build statique dans `dist/`.
- Déploiement : `.github/workflows/deploy.yml` publie sur GitHub Pages à chaque push sur `main` (Settings > Pages > Source : GitHub Actions).
- Stack : Astro 7 (version figée), aucune dépendance côté visiteur.

## Licence

Code sous [MIT](LICENSE). Code de conduite : [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
