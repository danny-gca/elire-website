// Mentions légales : même texte que l'app (elire-app/src/constants/legal.ts), à relire par un avocat.
export type LegalSection = { titre: string; paragraphes: string[] };

/** Éditeur à titre personnel, et son adresse de contact. */
export const EDITEUR = { nom: 'Danny Garcia', contact: 'contact@danny-garcia.fr' };
export const HEBERGEUR = 'GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis (GitHub Pages)';

const contact = `par courriel à ${EDITEUR.contact}`;

export const MENTIONS: LegalSection[] = [
  {
    titre: 'Éditeur',
    paragraphes: [
      `élire est édité à titre personnel et non professionnel par ${EDITEUR.nom}, directeur de la publication. Contact : ${contact}.`,
      "élire n'est lié à aucun parti, à aucun candidat ni à l'État, et ne reçoit aucun financement de leur part.",
    ],
  },
  { titre: 'Hébergement', paragraphes: [`Le site et la version web de l'app sont hébergés par ${HEBERGEUR}.`] },
  {
    titre: 'Données personnelles',
    paragraphes: [
      "Aucun compte, aucun cookie, aucun traceur. Vos votes et vos réglages restent sur votre appareil : ils ne sont jamais envoyés ni à l'éditeur ni à un tiers.",
      "Pour les effacer : « Réinitialiser mes votes » dans l'onglet Cahier de l'app, ou supprimez l'app (sur le web, les données du site dans votre navigateur). Ce site ne garde que la couleur de votre surligneur.",
      'Signaler une erreur ouvre GitHub, qui applique ses propres conditions.',
    ],
  },
  {
    titre: 'Propriété',
    paragraphes: [
      'Code sous licence MIT, données sous licence CC BY-SA 4.0.',
      "Les citations des candidats sont courtes, exactes et sourcées, au titre du droit de citation. Polices libres sous licence SIL OFL 1.1 (Literata, Atkinson Hyperlegible Next, Caveat) ; portraits et icônes : écran Crédits de l'app.",
    ],
  },
];
