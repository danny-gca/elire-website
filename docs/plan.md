# Plan - site vitrine élire

Deux pages statiques sur GitHub Pages, même univers visuel que l'app (« le cahier annoté », `elire-app/DESIGN.md`), construites avec impeccable.

## Décisions

| Sujet | Choix | Statut |
|---|---|---|
| Envoi du formulaire | Cloudflare Worker qui crée un ticket GitHub (label `via-formulaire`) : aucun compte demandé, tout reste public | Validé |
| Domaine | `danny-gca.github.io/elire-website` (base `/elire-website/`) ; domaine perso plus tard (`elire-app.fr` et `elire2027.fr` libres le 2026-10-13, `elire.fr` pris) | Validé |
| Outil | Astro : HTML statique, zéro JS par défaut, une mise en page commune aux 2 pages | Validé |
| App web | Export Expo publié sur GitHub Pages du dépôt `elire-app` | Validé |
| Stores | « Bientôt sur Android et iOS » tant que l'app n'est pas publiée (`STORES` dans `src/config.ts`) | Validé |

## Étapes

1. **Socle** : Astro, déploiement GitHub Actions vers Pages (base `/elire-website/`), README, licence MIT.
2. **Direction** (impeccable) : surface « vitrine » en mode Persuade, surface « formulaire » en mode Operate ; tokens repris de `elire-app/src/constants/theme.ts` en variables CSS ; police système, aucune requête tierce, aucun traceur.
3. **Page 1, one page** (fait, composition « Du programme au vote ») :
   - ouverture : élire, présidentielle 2027, « se faire son avis seul, au calme », bouton vers l'app web ;
   - fonctionnement en 4 temps avec vraies captures : voter à l'aveugle, classement en panneaux, lois et votes réels, explorer par thème ;
   - les 4 principes : neutralité, transparence, responsabilité, confidentialité ;
   - méthode : calcul du score, sources vérifiées, chiffres (96 propositions, 17 candidats, 26 scrutins) ;
   - open source : GitHub, contribuer, licences, soutien ;
   - pied de page : signaler une erreur, crédits, code de conduite, contact.
4. **Page 2, formulaire d'erreur** :
   - champs : référence (P-531, L-28), type (proposition, loi, autre), ce qui est inexact, source correcte, e-mail facultatif ;
   - pré-remplissage depuis l'URL (`?ref=P-531&titre=...`) ;
   - anti-spam (champ piège), états envoi / succès / erreur, aucune donnée gardée dans le navigateur.
5. **Envoi** : Cloudflare Worker (compte Cloudflare gratuit), jeton GitHub à grain fin limité aux tickets de `elire-app`, limite de débit par IP, origine autorisée = le site.
6. **App** (`elire-app`) : « Signaler une erreur » propose deux boutons, « Sur GitHub » (ticket pré-rempli) et « Par formulaire » (page 2 pré-remplie). Constante `WEBSITE_URL` à côté de `REPO_URL`.
7. **Vérification** : captures mobile et desktop des deux pages, contraste, clavier, envoi réel d'un ticket de test, revue impeccable, `DESIGN.md` du site.
8. **Mise en ligne** : Pages activé (Settings > Pages > GitHub Actions), liens croisés app, site et dépôts ; domaine perso plus tard (fichier `CNAME`).
