# élire - site vitrine

Site de présentation de [élire](https://github.com/danny-gca/elire-app), l'app citoyenne, neutre et open source pour la présidentielle 2027.

> Ce README décrit l'état **actuel** du site. Le plan de construction est dans [docs/plan.md](docs/plan.md).

## Pages

1. **Présentation** (`src/pages/index.astro`, fait) : accroche et feuille en quatre temps (lire, noter, comparer, vérifier), principe, fonctionnement (questions communes, gomme, partage d'images) avec un essai du geste du vote (le visiteur note lui-même, rien n'est enregistré), « Votez comme au Parlement » (scrutin réel et hémicycle anonyme), « Votre surligneur », valeurs, méthode de calcul (propositions, questions communes, scrutins et fiabilité du score), « Vos questions » (FAQ des testeurs), open source, appel vers l'app web. Propositions, avis et scrutin affichés sont tirés au hasard à chaque visite (`src/data/exemples.json`, une par thème, douze candidats différents ; `src/data/scrutins.json`, huit scrutins réels anonymes générés depuis le dataset de l'app).
2. **Mentions légales** (`src/pages/mentions-legales.astro`, fait) : même texte que l'app, dans `src/data/legal.ts` (éditeur, hébergeur, données personnelles, propriété), lien en pied de page. La méthode de calcul et la politique de correction restent dans l'app.
3. **Signaler une erreur** (à faire) : formulaire sans compte, qui crée un ticket sur le dépôt de l'app. Pré-rempli depuis l'app (`?ref=P-531&titre=...`).

Navigation centrée, sélecteur de surligneur et lien GitHub en haut à droite, surligneur qui balaie au survol des liens et boutons, indicateur de lecture en bas à droite. Liens, stores, chiffres et surligneurs : `src/config.ts`.

Surligneur : 4 couleurs (jaune, rose, vert, bleu), comme dans l'app. Le choix du visiteur est enregistré dans le `localStorage` du navigateur (clé `elire-marker`), jamais envoyé, sans cookie ; sans choix, une couleur est tirée au hasard à chaque visite. Les mots clés déjà surlignés gardent leur couleur (`data-tone`).

## Principes

- Site statique sur GitHub Pages, aucune requête tierce, aucun traceur, aucun cookie.
- Polices : Literata, Atkinson Hyperlegible Next et Caveat, auto-hébergées (`src/assets/fonts/`, licences SIL OFL 1.1 dans `public/fonts/`), les mêmes que l'app.
- Les exemples (`src/data/exemples.json`, `src/data/scrutins.json`) reprennent les titres et questions du dataset de l'app : les régénérer quand ils changent.
- Même univers visuel que l'app : voir [DESIGN.md](DESIGN.md) (repris de l'app) et [PRODUCT.md](PRODUCT.md).

## Développement

- `npm install` (Node 22), puis `npm run dev` : http://localhost:4321/elire-website/
- `npm run check` : vérification Astro et build statique dans `dist/`.
- Déploiement : `.github/workflows/deploy.yml` publie sur GitHub Pages à chaque push sur `main` (Settings > Pages > Source : GitHub Actions).
- Stack : Astro 7 (version figée), aucune dépendance côté visiteur.

## Licence

Code sous [MIT](LICENSE). Code de conduite : [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Contribuer : [CONTRIBUTING.md](CONTRIBUTING.md) (Conventional Commits).
