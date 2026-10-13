---
name: ÉLIRE (site vitrine)
description: Le site vitrine d'ÉLIRE, le cahier annoté de l'app étendu au web, où le surligneur devient aussi le geste de survol.
colors:
  paper: "#F6F7F5"
  sheet: "#FFFFFF"
  ink: "#1C1E21"
  ink-soft: "#3A3F45"
  graphite: "#5B6168"
  rule: "#D5D9DD"
  rule-soft: "#E8EBED"
  board: "#B9BFC5"
  board-edge: "#9AA1A8"
  mark: "#EADB3F"
  mark-band: "rgba(234, 219, 63, 0.88)"
  vote-impossible: "#8E3A1F"
  vote-contre: "#9C5530"
  vote-neutre: "#5B6168"
  vote-pour: "#3A7D60"
  vote-parfait: "#22654A"
  theme-environnement: "#3B7D4A"
  theme-environnement-tint: "#E6F0E8"
  theme-agriculture: "#6B7722"
  theme-agriculture-tint: "#EEF0DE"
  theme-economie: "#8C6A1A"
  theme-economie-tint: "#F2EDDF"
  theme-travail: "#A0532C"
  theme-travail-tint: "#F4E8E1"
  theme-logement: "#77593A"
  theme-logement-tint: "#EFE9E2"
  theme-sante: "#A3455C"
  theme-sante-tint: "#F4E5E8"
  theme-societe: "#40707A"
  theme-societe-tint: "#E3EEEF"
  theme-education: "#1F7A70"
  theme-education-tint: "#E0EFED"
  theme-numerique: "#2B6A8F"
  theme-numerique-tint: "#E1ECF2"
  theme-international: "#3D5E88"
  theme-international-tint: "#E3E9F1"
  theme-institutions: "#555E70"
  theme-institutions-tint: "#E8EAEE"
  theme-securite: "#5C5047"
  theme-securite-tint: "#ECE9E6"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 5vw, 72px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  display-close:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 6vw, 80px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(30px, 3.6vw, 48px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline-value:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 34px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.3
  lede:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 1.6vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1
  nav:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
  control:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label-strong:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  mini-panel: "4px"
  chip: "8px"
  control: "10px"
  button: "12px"
  sheet: "14px"
  phone: "22px"
  pill: "32px"
spacing:
  half: "4px"
  one: "8px"
  two: "16px"
  three: "24px"
  four: "32px"
  six: "48px"
  gutter: "clamp(16px, 5vw, 96px)"
  section: "clamp(64px, 9vw, 120px)"
  max: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
  button-github:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "44px"
  button-github-hover:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
  menu-summary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "44px"
  menu-panel:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.sheet}"
    padding: "8px 18px"
    width: "240px"
  top-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    padding: "0 clamp(16px, 5vw, 96px)"
    height: "72px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    padding: "12px 0"
  hero-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.sheet}"
    padding: "22px 24px 24px"
  mini-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  mini-vote:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    height: "40px"
  mini-board:
    backgroundColor: "{colors.board}"
    rounded: "{rounded.chip}"
    padding: "6px 6px 10px"
  mini-panel:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.mini-panel}"
    padding: "22px 4px 8px"
  rank-number:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    size: "18px"
  scale-chip:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "6px 10px"
  content-card:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sheet}"
    padding: "32px"
  reading-indicator:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 0 0 20px"
    height: "64px"
---

> Système du site vitrine, relevé sur le build du 2026-10-13 (`src/styles/global.css`, `src/layouts/Base.astro`, `src/pages/index.astro`). Il étend le cahier annoté de l'app ; pour les écrans de l'app elle-même (onglets, champ de recherche, contrôle segmenté, bouton de réinitialisation, feuille Voter en taille réelle), [elire-app/DESIGN.md](https://github.com/danny-gca/elire-app/blob/main/DESIGN.md) reste la référence.

# Design System: ÉLIRE (site vitrine)

## Overview

**Creative North Star: "Le cahier annoté"**

Le site reprend la matière de l'app : papier blanc froid, feuilles blanches à filets, encre presque noire, graphite pour le secondaire, police système, échelle de vote terre cuite à vert. Il n'invente pas de seconde identité ; il pose la même feuille à l'échelle d'un écran de bureau. La page se lit comme une suite de sections séparées par des filets hairline, sur une largeur de 1440px, avec une feuille pleine largeur en quatre colonnes dans le premier écran qui montre l'app en miniature.

Le jaune du surligneur garde son sens (une marque qu'on pose en lisant) et devient en plus le geste du site, par décision de l'utilisateur : une bande qui balaie de gauche à droite sous ce qu'on survole ou qu'on atteint au clavier, un bouton d'encre qui se remplit de jaune, et un mot clé posé dans chaque titre. Tout le reste reste en encre neutre, parce que le site, comme l'app, ne prend pas parti : aucune proposition n'est mise en avant (exemple tiré au hasard à chaque visite) et aucun candidat n'est nommé, montré ou associé à un parti.

Rejets confirmés : l'air de site gouvernemental, l'appli gadget ou gamifiée, la pile de cartes à swiper et le dégradé violet, la carte centrée à puce colorée du standard civique, les surtitres en capitales, la colonne de marge hors de la feuille de l'app. Thème clair uniquement.

**Key Characteristics:**
- Papier blanc froid, feuilles blanches, encre, graphite, filets ; jamais de crème.
- Le surligneur est le geste du site : bande qui balaie au survol et au focus, boutons qui se remplissent de jaune, un mot clé posé par titre.
- Sections séparées par des filets, listes réglées au filet plutôt qu'à puces.
- Mini-écrans de l'app construits en HTML, noms et visages masqués.
- Valeur de vote écrite en toutes lettres avec son signe, dans sa couleur d'échelle.
- Police système, aucune police distante ; chiffres tabulaires pour les numéros et compteurs.

## Colors

L'encre sur papier froid de l'app, sans couleur institutionnelle ni partisane ; le jaune appartient à la lecture.

### Primary
- **Encre de cahier** (ink): texte, bouton primaire, bordure du bouton GitHub, carré de rang, anneau de focus (2px, décalé de 3px). C'est la couleur d'action : il n'y a pas d'accent de marque.

### Secondary
- **Surligneur** (mark): le remplissage plein des boutons au survol et au focus, l'anneau de progression de l'indicateur de lecture, le liseré bas du niveau de vote choisi dans la mini rangée, et la bande du logo de l'app.
- **Bande de surligneur** (mark-band): la même teinte à 88% d'opacité, pour tout trait posé derrière du texte : mot clé des titres, balayage des liens, accroche, sélection de texte.

### Tertiary
- **Échelle de vote** (vote-impossible, vote-contre, vote-neutre, vote-pour, vote-parfait): les signes de la mini rangée de vote, les puces de l'échelle (« −2 Impossible ») et les notes du tableau de calcul. Héritée telle quelle de l'app.
- **Accents thématiques** (theme-*): les douze accents de l'app ; le site n'emploie que l'accent, en couleur du nom de thème dans la ligne meta de la mini feuille, tiré avec l'exemple de la visite. Les teintes accompagnent les données d'exemple.

### Neutral
- **Papier froid** (paper): fond de page et de la barre du haut (à 94%, flou de 8px dessous).
- **Feuille** (sheet): feuille du premier écran, cartes Explorer et calcul, mini-écrans, menu déroulant, indicateur de lecture.
- **Encre douce** (ink-soft): paragraphes de corps, chapeaux, listes réglées, libellés des chiffres clés.
- **Graphite** (graphite): notes sous les mini-écrans, mentions fines, en-tête du tableau de calcul, soulignement des liens.
- **Filet** (rule): séparateurs de sections, bordures des feuilles et cartes, filets des listes réglées, du tableau et des grilles.
- **Filet léger** (rule-soft): filets internes des mini-écrans et du tableau, disque des visages masqués, piste de l'anneau de lecture.
- **Tôle** (board) et **Bord de tôle** (board-edge): la tôle du mini Classement et son épaisseur basse. Plus sombres d'un cran que dans l'app (où la tôle est au filet et son bord à #B9BFC5), pour rester lisible en miniature.

### Named Rules
**The Highlighter Gesture Rule.** Le jaune a quatre emplois sur le site et pas d'autre : le geste de survol et de focus (bande qui balaie, bouton qui se remplit), le mot clé posé d'un titre ou d'une phrase forte, la note de l'utilisateur dans les mini-écrans, et la progression de l'indicateur de lecture. Le wordmark texte, les statuts, les issues parlementaires et les fonds de section ne sont jamais jaunes ; seul le logo de l'app porte sa bande.

**The Scale Is Yours Rule.** Les couleurs d'échelle n'expriment que des votes de l'utilisateur. Les issues parlementaires et les positions des candidats s'écrivent en encre neutre.

**The Cold Paper Rule.** Fond papier froid, feuilles blanches. Pas de crème, pas de violet, pas de dégradé décoratif ; les seuls `linear-gradient` du système sont la bande de surligneur et le remplissage jaune des boutons.

## Typography

**Display Font:** police système (pile `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`)
**Body Font:** la même

**Character:** une seule famille, celle de l'appareil, sans aucune requête tierce. Les grands titres serrent l'approche (jusqu'à −0.035em) et portent la voix ; le reste tient par la graisse (400 / 500 / 600 / 700) et les filets.

### Hierarchy
- **Display** (700, clamp(40px, 5vw, 72px), 1.06): l'accroche du premier écran seulement, sur deux lignes. Sa variante de clôture (display-close, jusqu'à 80px) sert à la phrase finale centrée.
- **Headline** (700, clamp(30px, 3.6vw, 48px), 1.1): titres de section, 22ch max, avec un mot clé surligné.
- **Headline value** (700, clamp(26px, 2.6vw, 34px), 1.15): nom de chaque valeur.
- **Title** (600, 21px, 1.3): titres de colonne de la feuille (numérotés « 1. »), intertitres des temps, d'Explorer et de l'open source, phrase forte d'une valeur.
- **Lede** (400, clamp(18px, 1.6vw, 21px), 1.55): chapeau sous un titre de section, encre douce, 62ch max.
- **Body** (400, 17px, 1.5): paragraphes, 58ch max ; libellés des boutons en 17 semi-gras.
- **Nav** (600, 15px): menu, liens du pied de page, mention des stores, en-tête du tableau de calcul.
- **Control** (600, 14px): bouton GitHub, résumé « Menu », nom de section de l'indicateur, puces de l'échelle (en 500).
- **Label** (400 / 600, 13px): notes sous les mini-écrans, mentions fines, ligne meta et liens des mini-écrans, numéro de l'indicateur (700). Le 12 et le 11 n'existent qu'à l'intérieur des mini-écrans.

### Named Rules
**The Small Steps Rule.** Sous le corps, le site descend en 15, puis 13 ; le 14 est réservé aux contrôles compacts de la barre et de l'indicateur. Les chiffres forts (24px pour les chiffres clés, 34px pour le résultat du calcul) sont des valeurs, pas des titres.

**The Written Value Rule.** Une note s'écrit en toutes lettres avec son signe : Impossible −2, Contre −1, Neutre 0, Pour +1, Parfait +2, avec le vrai signe moins (U+2212). Numéros (P-531, L-28), compteurs et scores en chiffres tabulaires.

## Layout

Chaque bande de page tient dans 1440px de large, centrée, avec une gouttière fluide (`clamp(16px, 5vw, 96px)`). Les sections prennent `clamp(64px, 9vw, 120px)` de marge verticale et sont séparées par un filet de 1px en haut ; le corps d'une section est une pile à 24px d'écart. Les colonnes de contenu s'écartent de 48px ; l'ancre d'une section tombe 88px sous le haut, sous la barre.

La barre du haut fait 72px, collante : logo et « ÉLIRE » à gauche, menu de cinq sections centré, bouton GitHub à droite, filet en bas. Sous 1080px le menu passe dans un menu déroulant « Menu » à droite ; sous 420px le bouton GitHub ne garde que son icône.

Le premier écran aligne l'accroche à gauche et, à droite, une colonne d'action de 320px (bouton, puis mention des stores), alignées par le bas ; sous 820px elles s'empilent. Dessous, la feuille en quatre colonnes passe en 2x2 sous 1180px puis en une colonne sous 820px. Les autres grilles (quatre temps, quatre valeurs, méthode, open source) suivent le même passage à une colonne sous 820px ; l'open source passe d'abord en deux colonnes sous 1180px. Les chiffres clés forment une rangée entre deux filets, et sous 600px une grille 2x2 réglée, le chiffre au-dessus du libellé.

### Named Rules
**The Margin Belongs to the App Sheet Rule.** Aucune colonne de marge sur le site. Le numéro d'une étape s'écrit dans son titre (« 1. Lire à l'aveugle »), la référence d'une proposition dans la ligne meta ; la marge large reste une affaire de la feuille Voter de l'app.

**The Ruled Page Rule.** On sépare au filet : entre sections, entre colonnes, entre les éléments d'une liste. Pas de bandes de fond alternées, pas de puces.

## Elevation & Depth

La page est plate : la profondeur se lit dans le contraste papier / feuille et les filets. La barre du haut flotte en papier translucide (94%) avec un flou de 8px. Seuls les éléments qui flottent au-dessus de la lecture portent une ombre diffuse. La tôle du mini Classement garde l'épaisseur basse de l'app, en ombre intérieure.

### Shadow Vocabulary
- **Menu déroulant** (`box-shadow: 0 12px 28px rgba(28, 30, 33, 0.12)`): le panneau ouvert du menu sous 1080px.
- **Indicateur de lecture** (`box-shadow: 0 6px 18px rgba(28, 30, 33, 0.1)`): la pastille fixe en bas à droite.
- **Épaisseur de tôle** (`box-shadow: inset 0 -4px 0 #9AA1A8`): bord bas de la tôle du mini Classement.
- **Contact de feuille** (`box-shadow: 0 1px 0 #E8EBED`): sous la mini feuille de proposition.

### Named Rules
**The Floating Only Rule.** Une ombre n'existe que pour ce qui flotte (menu ouvert, indicateur de lecture). Feuilles, cartes et listes posées sur la page n'en ont pas.

## Shapes

Des coins doux et retenus, par taille d'objet : 14px pour les feuilles et cartes (feuille du premier écran, Explorer, calcul, menu ouvert), 12px pour le bouton primaire, 10px pour les contrôles de barre et les mini feuilles, 8px pour les puces d'échelle, les mini niveaux de vote et la tôle, 4px pour les mini panneaux. Deux formes à part : le cadre de téléphone de la capture Explorer (22px) et l'indicateur de lecture en pastille (32px, anneau rond). Les visages masqués sont des disques, les noms masqués des barres arrondies de 6px. Les bordures sont des filets de 1px ; le bouton primaire et le bouton GitHub sont cerclés d'encre (1.5px et 1px).

## Components

### Buttons
Un bouton d'encre qu'on surligne.
- **Shape:** coins de 12px, hauteur minimale 52px, 26px de marge interne, flèche de 16px à 10px d'écart.
- **Primary:** encre pleine, bordure encre de 1.5px, texte blanc en 17 semi-gras ; une seule action, « Ouvrir l'app web », dans le premier écran et la clôture.
- **Hover / Focus:** le jaune remplit le bouton de gauche à droite en 280ms (`cubic-bezier(0.2, 0.7, 0.2, 1)`) et le texte passe à l'encre ; même effet au focus clavier, en plus de l'anneau encre.
- **GitHub (contour):** fond transparent, bordure encre de 1px, coins de 10px, 44px de haut, icône de 18px et libellé en 14 semi-gras ; il se remplit de jaune au survol et au focus de la même façon.

### Liens
- **Lien de lecture:** semi-gras, souligné graphite (1px, décalé de 3px) ; au survol le soulignement s'efface et la bande jaune balaie le libellé.
- **Liens de menu et de pied de page:** sans soulignement ; la bande balaie le libellé au survol ou au focus de toute la zone du lien. Le lien de la section en cours garde sa bande.

### Navigation
- **Barre:** 72px, papier translucide, filet bas, menu centré en 15 semi-gras avec 18 à 36px d'écart, cibles de 44px au minimum.
- **Mobile (sous 1080px):** résumé « Menu » sur feuille à filet (bordure encre quand il est ouvert), panneau de 240px à filets entre les liens, fermé après un choix.

### Feuille du premier écran (signature)
Une feuille blanche à filet, coins de 14px, en quatre colonnes séparées par des filets verticaux : « 1. Lire, sans savoir qui », « 2. Noter de −2 à +2 », « 3. Comparer, à égalité », « 4. Vérifier les votes réels ». Chaque colonne porte un titre numéroté en 21 semi-gras, un mini-écran de l'app construit en HTML et une note graphite en 13. Les mini-écrans : la mini feuille (ligne meta « P-123 · Thème » à l'accent du thème, titre en 17 semi-gras, lien source sous un filet léger), la proposition surlignée avec la mini rangée de vote (cinq niveaux de 40px, signe dans sa couleur d'échelle, le choix cerclé d'encre avec un liseré jaune de 4px en bas) et l'avis écrit en toutes lettres, le mini Classement (six panneaux identiques sur la tôle, carré de rang encre de 18px, visage en disque, nom en barre, score tabulaire), la mini carte de loi (L-28, lignes à filets léger, lien officiel).

### Listes réglées
Les listes n'ont pas de puces : un filet en haut, un filet sous chaque élément, 12px de marge verticale, texte encre douce, 58ch max. Les grilles de contenu suivent la même logique : quatre temps en deux colonnes à filet haut, quatre valeurs en 2x2 à filets vertical et horizontal, open source en quatre colonnes à filets verticaux.

### Cartes Explorer et calcul
Feuilles blanches à filet, coins de 14px, 32px (Explorer) ou 28px (calcul) de marge interne. Explorer pose la capture réelle de l'app dans un cadre de téléphone à filet (22px, recadrée en 390 / 600) à côté de son texte. Le calcul est un tableau à filets légers (numéro graphite, note en couleur d'échelle à droite), une ligne de somme sous un filet, le résultat en 34 gras avec la bande jaune, la formule en 13 graphite.

### Indicateur de lecture (signature)
Une pastille fixe en bas à droite (64px de haut, 52px sous 600px), feuille blanche à filet et ombre de flottement : le nom de la section en cours en 14 semi-gras, puis un anneau de 56px dont la piste est au filet léger et le remplissage jaune suit la progression de lecture, avec le numéro de section (« 03 ») tabulaire au centre. Elle apparaît après 60% du premier écran (fondu et légère montée en 280ms), remonte en haut au clic, et au survol le numéro laisse place à une flèche.

### Hérité de l'app
La feuille de proposition, la rangée de vote et le panneau électoral de l'app restent la référence des mini-écrans : mêmes proportions, mêmes couleurs, mêmes règles d'égalité, à l'échelle réduite.

### Named Rules
**The Highlighter Sweep Rule.** Le surligneur bouge toujours de la même façon : de gauche à droite, en 280ms (`cubic-bezier(0.2, 0.7, 0.2, 1)`), au survol ou au focus. L'accroche « qui parle » est la seule bande qui balaie d'elle-même, une fois, à l'arrivée (900ms après 250ms). Le mot clé des titres est posé, immobile. Tout mouvement suit « Réduire les animations ».

**The No Face Rule.** Le site ne montre aucun nom, visage ou parti de candidat : visages en disques vides, noms en barres, scores fictifs. La proposition d'exemple et l'avis affiché sont tirés au hasard à chaque visite.

**The Identical Furniture Rule.** Tous les panneaux du mini Classement sont identiques ; deux scores égaux partagent le même rang.

## Do's and Don'ts

### Do:
- **Do** faire répondre au survol et au focus chaque lien et bouton par le geste du surligneur : bande qui balaie de gauche à droite en 280ms, ou remplissage jaune pour les boutons.
- **Do** poser un mot clé surligné dans chaque titre de section, un seul.
- **Do** séparer les sections, colonnes et éléments de liste par des filets de 1px.
- **Do** numéroter les étapes dans leur titre (« 1. ») plutôt que dans une marge.
- **Do** écrire chaque note en toutes lettres avec son signe, dans sa couleur d'échelle.
- **Do** garder les mini-écrans anonymes : disques vides, barres à la place des noms, exemple tiré au hasard.
- **Do** donner 44px minimum à chaque cible.

### Don't:
- **Don't** mettre du jaune sur le wordmark texte, un statut, une issue parlementaire ou un fond de section.
- **Don't** colorer une position de candidat ou une issue parlementaire avec l'échelle de vote.
- **Don't** ajouter une colonne de marge hors de la feuille de l'app.
- **Don't** poser de surtitre en capitales au-dessus d'un titre.
- **Don't** utiliser de puces : les listes sont réglées.
- **Don't** montrer un nom, un visage ou un parti de candidat sur le site.
- **Don't** utiliser de crème, de violet ou de dégradé décoratif, ni d'ombre sur une feuille posée.
- **Don't** évoquer un site gouvernemental, une appli gamifiée ou des cartes à swiper.
