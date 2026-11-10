// ── Bibliothèque d'images libres de droits (Unsplash)
// Licence Unsplash : usage commercial gratuit, attribution non requise.
// Les photos sont téléchargées au format WebP et hébergées dans public/images/ :
// le site ne charge plus rien depuis Unsplash.
// Sélection novembre 2026 : agents publics au travail (enseignement, santé, administration),
// sans uniforme, insigne, drapeau ni bâtiment officiel. Aucune photo ne représente un client
// réel ni l'équipe TOVPAY.
// Source de chaque fichier : https://unsplash.com/photos/{identifiant indiqué en commentaire}.

const img = (name: string) => `/images/${name}.webp`

export const IMAGES = {
  // ── Hero de l'accueil (préchargé dans index.html : garder le même fichier aux deux endroits)
  hero: img('accueil-enseignante'),                 // 1761604478724 : enseignante guidant des élèves en classe

  // ── Heroes des pages secondaires
  heroAdvance:  img('bureau-administration'),       // 1604783125462 : agent en costume à son bureau
  heroPartners: img('equipe-ordinateurs'),          // 1573167101669 : équipe au travail autour d'une table
  heroAbout:    img('reunion-bureau'),              // 1573164574511 : réunion dans un bureau lumineux
  heroFaq:      img('bureau-telephone'),            // 1758876202167 : agente au téléphone dans un bureau
  heroContact:  img('reunion-vue-dessus'),          // 1739298061707 : réunion de travail vue de dessus

  // ── Images de contenu
  classroom:     img('classe-enseignante'),         // 1698827623362 : enseignante devant sa classe
  teacher:       img('enseignant-classe'),          // 1744809482817 : enseignant face à ses élèves
  doctor:        img('medecin'),                    // 1643297654416 : médecin souriante, stéthoscope en main
  officeLaptop:  img('bureau-ordinateur'),          // 1674916972909 : agent prenant des notes devant son ordinateur
  readingFile:   img('lecture-dossier'),            // 1622295023876 : agent lisant un document à son bureau
  officeWoman:   img('bureau-agente'),              // 1642929456654 : agente souriante devant son ordinateur
  officeSmile:   img('bureau-agente-souriante'),    // 1758876202610 : agente à son bureau
  phoneAgent:    img('telephone-agent'),            // 1758519291531 : agent en chemise et cravate, téléphone en main
  smartphone:    img('smartphone'),                 // 1512941937669 : smartphone en main
  meeting:       img('reunion-equipe'),             // 1573165706511 : réunion d'équipe dans un bureau
  team:          img('equipe-ordinateurs'),         // 1573167101669 : même fichier que heroPartners, pour les appels de fin de page
} as const

export default IMAGES
