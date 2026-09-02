// ── Bibliothèque d'images libres de droits (Unsplash)
// Licence Unsplash : usage commercial gratuit, attribution non requise
// Format CDN: https://images.unsplash.com/photo-{ID}?w=...
// Sélection 2026 : écosystème africain (marchés, équipes, mobile money),
// chaque image vérifiée manuellement (contenu + disponibilité) avant intégration.

// Défaut pensé pour les images de contenu (cartes ~340-620px de large) : pas besoin
// des 1600px/q80 d'origine, qui téléchargeaient bien plus de pixels que ce qui est
// jamais affiché. Les heroes plein écran ci-dessous reçoivent un override plus large.
const U = (id: string, params = 'w=960&q=70&auto=format&fit=crop') =>
  `https://images.unsplash.com/photo-${id}?${params}`

const HERO_PARAMS = 'w=1920&q=72&auto=format&fit=crop'

export const IMAGES = {
  // ── Hero principal
  hero: U('1687422809654-579d81c29d32', HERO_PARAMS),          // commerçante africaine souriante, téléphone en main, étal de marché

  // ── Heroes pages secondaires - images immersives uniques
  heroAbout:     U('1573164574511-73c773193279', HERO_PARAMS),  // équipe diverse en réunion, bureau moderne lumineux
  heroServices:  U('1775215595284-8eb97d44e761', HERO_PARAMS),  // vendeur africain de noix de coco, rue ensoleillée
  heroPartners:  U('1784202464389-de4ce60886df', HERO_PARAMS),  // hommes africains en costume, poignée de main, partenariat
  heroInvestors: U('1611974789855-9c2a0a7236a3', HERO_PARAMS),  // écran graphiques financiers, croissance
  heroFaq:       U('1761370980657-22586ea44093', HERO_PARAMS),  // marchande africaine souriante, étal de bananes
  heroContact:   U('1739298061707-cefee19941b7', HERO_PARAMS),  // équipe diverse en réunion, bureau clair
  heroNanoCredit:U('1579621970795-87facc2f976d', HERO_PARAMS),  // pièces de monnaie et pousse verte, épargne/crédit

  // ── Section Pourquoi TovPay
  whyImg1: U('1746171114403-f4c4877b1f04'),       // marché africain animé, étals colorés, minibus
  whyImg2: U('1687422809617-a7d97879b3b0'),       // vendeur africain devant son étal de fruits

  // ── Steps - processus d'obtention crédit
  howStep1: U('1512941937669-90a1b58e7e9c'),      // smartphone dans les mains, apps
  howStep2: U('1761370980776-93f2110a99a7'),      // jeune homme africain au marché, regard direct, vérification terrain
  howStep3: U('1678693362793-e2fffac536d0'),      // mains africaines comptant des billets, transaction
  howStep4: U('1633504214759-e1013f422ed7'),      // femme africaine, billets et téléphone, réaction joyeuse

  // ── Impact / Features
  impact1: U('1602516818688-715dfc1b77d5'),       // champs agricoles verdoyants, Afrique
  impact2: U('1765584829997-12ab011bb5b3'),       // femme africaine préparant des produits à son étal, marché
  impact3: U('1573167101669-476636b96cea'),       // équipe africaine au travail, ordinateurs portables
  impact4: U('1573165706511-3ffde6ef1fe3'),       // jeune équipe diverse, bureau, fintech

  // ── Backgrounds texturés
  bgCity: U('1636706519609-988babca3dd5'),        // skyline de Johannesburg au coucher du soleil
} as const

export default IMAGES
