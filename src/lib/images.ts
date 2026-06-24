// ── Bibliothèque d'images libres de droits (Unsplash)
// Licence Unsplash : usage commercial gratuit, attribution non requise
// Format CDN: https://images.unsplash.com/photo-{ID}?w=...

const U = (id: string, params = 'w=1600&q=80&auto=format&fit=crop') =>
  `https://images.unsplash.com/photo-${id}?${params}`

export const IMAGES = {
  // ── Hero principal
  hero: U('1531746020798-e6953c6e8e04'),        // femme africaine smartphone, sourire confiant

  // ── Heroes pages secondaires — images immersives uniques
  heroAbout:     U('1521791136064-7986c2920216'),  // réunion d'équipe diverse, table de travail
  heroServices:  U('1556742049-0cfed4f6a45d'),     // main tenant téléphone, paiement mobile
  heroPartners:  U('1454165804606-c3d57bc86b40'),  // poignée de main business, partenariat
  heroInvestors: U('1611974789855-9c2a0a7236a3'),  // écran graphiques financiers, croissance
  heroBlog:      U('1499750310107-5fef28a66643'),  // laptop ouvert, espace de travail moderne
  heroFaq:       U('1516321318423-f06f85e504b3'),  // personne avec téléphone, aide client
  heroContact:   U('1423345264291-ef113e5a1d18'),  // bureau moderne, communication
  heroNanoCredit:U('1579621970795-87facc2f976d'),  // billets de banque, argent, transaction

  // ── Section Pourquoi TovPay
  whyImg1: U('1589156280159-27698a70f29e'),       // femme africaine commerçante, étal tissu
  whyImg2: U('1488521787816-4ee05db8bef2'),       // jeune homme africain téléphone, souriant
  whyImg3: U('1460925895917-afdab827c52f'),       // entrepreneur, ordinateur portable

  // ── Steps — processus d'obtention crédit
  howStep1: U('1512941937669-90a1b58e7e9c'),      // smartphone dans les mains, apps
  howStep2: U('1563013544-824ae1b704d3'),         // carte d'identité, vérification
  howStep3: U('1551288831-5a04b974f651'),         // paiement mobile, transaction
  howStep4: U('1579621970795-87facc2f976d'),      // satisfaction client, succès

  // ── Témoignages — portraits réels (crop visage)
  testi1: U('1494790108377-be9c29b29330', 'w=200&h=200&q=80&auto=format&fit=crop&crop=faces'),
  testi2: U('1531746020798-e6953c6e8e04', 'w=200&h=200&q=80&auto=format&fit=crop&crop=faces'),
  testi3: U('1507003211169-0a1dd7228f2d', 'w=200&h=200&q=80&auto=format&fit=crop&crop=faces'),

  // ── Impact / Features
  impact1: U('1541777236-8d58dab020ee'),          // agriculture, verdure, Afrique
  impact2: U('1556742049-0cfed4f6a45d'),          // paiement sans contact, technologie
  impact3: U('1521791136064-7986c2920216'),       // réunion d'affaires africaine
  impact4: U('1529156069898-49953e39b3ac'),       // jeune équipe diverse, fintech

  // ── Backgrounds texturés
  bgCity:   U('1534430480872-3498386e7856'),      // skyline africaine la nuit
  bgDark:   U('1557683316-973673baf926'),         // fond abstrait géométrique sombre
} as const

export default IMAGES
