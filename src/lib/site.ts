// ── Constantes partagées du site (coordonnées, liens externes, conditions proposées) ──
// Un seul endroit à modifier si une coordonnée ou une condition change.

export const SITE_URL = 'https://tovpay.website'

export const CONTACT_EMAIL = 'dg@tovpay.africa'
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`

export const WHATSAPP_DISPLAY = '+33 7 67 96 26 34'
export const WHATSAPP_URL = 'https://wa.me/33767962634'

// Textes de l'application, publiés par son serveur (même texte que dans l'application) :
// on y renvoie plutôt que de les recopier sur le site.
export const APP_TERMS_URL = 'https://tovpay-mobile-production.up.railway.app/legal/terms'
export const APP_PRIVACY_URL = 'https://tovpay-mobile-production.up.railway.app/legal/privacy-policy'

// Pourcentage des frais proposé pour le pilote : condition proposée, susceptible
// d'évoluer avant le lancement. Toujours l'afficher avec cette mention.
export const PROPOSED_FEE_PERCENT = 14

// Le formulaire de contact lit ?sujet=... pour présélectionner le sujet.
export const PARTNERSHIP_CONTACT_PATH = '/contact?sujet=partenariat'

// Espace insécable (ex. « 14 % » sans retour à la ligne avant le signe %).
export const NBSP = String.fromCharCode(0xa0)
