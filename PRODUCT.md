# Product

<!-- impeccable:product-schema 1 test -->

## Platform

web

## Users

Citoyens et électeurs français qui découvrent élire (par un lien, un article, un moteur de recherche) ou qui veulent signaler une erreur dans ses données, souvent sur téléphone.

## Product Purpose

Site vitrine de l'app élire : expliquer en une page ce qu'est l'app, comment elle fonctionne et pourquoi on peut lui faire confiance, puis mener vers l'app web. Deuxième page : un formulaire pour signaler une erreur dans les données, sans compte GitHub.

## Positioning

élire est un comparateur électoral 100 % local (zéro compte, zéro serveur, zéro télémétrie) et open source : vote à l'aveugle sur les propositions de campagne, puis confrontation aux votes réels au Parlement, chaque donnée avec sa source officielle.

## Operating Context

- Page 1 (one page) : lecture rapide sur mobile, quelques secondes pour comprendre, un appel clair vers l'app web.
- Page 2 (formulaire) : tâche courte et précise, souvent ouverte depuis l'app avec la référence pré-remplie (`?ref=P-531&titre=...`).
- Hébergement : GitHub Pages, site statique.

## Capabilities and Constraints

- Pages : one page de présentation et Mentions légales, rien de plus. La méthode de calcul et la politique de correction sont dans l'app.
- Le formulaire crée un ticket GitHub sur `danny-gca/elire-app` via un Cloudflare Worker (label `via-formulaire`) ; aucun compte demandé, e-mail facultatif.
- Aucune requête tierce côté visiteur (polices libres auto-hébergées, pas de CDN, pas d'analytics, pas de cookie), thème clair uniquement.
- Les chiffres et textes viennent de l'app : 25 candidats, 194 propositions vérifiées, 42 scrutins ; 4 niveaux de vote sur les propositions (Impossible, Contre, Pour, Parfait) et « Je ne sais pas », non compté, 3 sur les scrutins (Contre, Abstention, Pour : +2 comme le candidat, −2 à l'inverse, 0 si le candidat s'est abstenu, rien si le lecteur s'abstient, moitié pour un vote de groupe, rien pour un candidat qui ne siégeait pas ; les scrutins jamais plus de la moitié du score ; égalités dans un ordre tiré au hasard).
- Domaine : `danny-gca.github.io/elire-website` pour l'instant.

## Brand Commitments

- Nom : élire (Présidentielle 2027).
- Même univers que l'app : « le cahier annoté » (voir `DESIGN.md`). Papier blanc froid, encre, graphite, quatre surligneurs au choix du lecteur (jaune, rose, vert, bleu), sans signification, réservés à ses avis et à ses gestes ; Classement en panneaux électoraux identiques et numérotés.
- Palette neutre : ni l'État ni un parti, sans dégradé ni violet ; accents thématiques sourds.
- À ne jamais ressembler à : un site gouvernemental, une landing page de startup gadget ou gamifiée, les applis à cartes à swiper (dégradé violet).

## Evidence on Hand

- App et données : dépôt `danny-gca/elire-app` (README, PRODUCT.md, DESIGN.md, `docs/verification-donnees.md`).
- Principes déjà rédigés dans l'onboarding de l'app (`elire-app/src/app/onboarding.tsx`) : neutralité, transparence, responsabilité, confidentialité.
- Direction visuelle de l'app : `docs/reference/direction-app.md` ; système de design : `DESIGN.md` et `.impeccable/design.json`.
- Captures réelles de l'app : à produire depuis l'app web pour illustrer le fonctionnement.

## Product Principles

1. Neutralité et équité absolue entre tous les candidats : aucun nom, visage ou parti mis en avant sur le site.
2. Confidentialité totale : le site ne trace personne ; seul le formulaire envoie des données, et dit exactement lesquelles.
3. Rigueur des faits : chaque chiffre du site est vrai et vérifiable dans le dépôt.
4. Clarté et calme : comprendre vite, sans pression ni promesse exagérée.

## Accessibility & Inclusion

- Contraste WCAG AA, navigation clavier complète, focus visible.
- Responsive du 320 px au bureau, cibles tactiles de 44 px minimum.
- Formulaire : libellés explicites, erreurs nommées avec la correction, état d'envoi annoncé aux lecteurs d'écran ; animations coupées si « Réduire les animations ».
