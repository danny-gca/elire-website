# Contribuer au site d'élire

Merci de votre aide. Le site présente l'app : ses textes, chiffres et exemples viennent de l'app, la même neutralité s'applique. En participant, vous acceptez le [code de conduite](CODE_OF_CONDUCT.md).

- **Une erreur dans une proposition, un scrutin ou un candidat** : elle se corrige dans les données de l'app, voir le [guide de contribution de l'app](https://github.com/danny-gca/elire-app/blob/main/CONTRIBUTING.md).
- **Le site** : `npm install` (Node 22), `npm run dev`, puis `npm run check` (vérification Astro et build) avant toute PR. La direction visuelle est dans [DESIGN.md](DESIGN.md).

## Commits et pull requests

- Messages au format [Conventional Commits](https://www.conventionalcommits.org/fr/v1.0.0/) : `type(zone): description`, en français, à l'impératif et sans point final.
  - `feat` : nouvelle section ou fonction (`feat(methode): exemple de calcul`)
  - `fix` : correction (`fix(faq): lien vers les mentions légales`)
  - `docs`, `style`, `refactor`, `perf`, `test`, `ci`, `chore` (outillage, dépendances : `chore(deps): …`)
  - changement cassant : `!` après le type et une ligne `BREAKING CHANGE:` dans le corps.
- Une PR = un sujet. Décrivez quoi et pourquoi en quelques phrases.
