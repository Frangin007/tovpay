// Config "produits" du simulateur de crédit.
//
// En production, ce catalogue vit côté serveur (app Admin) et est
// synchronisé périodiquement vers les apps Client/Agent : changer un taux,
// une durée ou une commission ne doit jamais nécessiter une nouvelle version
// de l'app. Ce module est donc volontairement isolé du reste de l'UI - c'est
// le point d'intégration à brancher sur l'API de config le jour venu. Les
// fonctions de calcul (voir simulator.ts) restent pures et n'ont besoin que
// de ces objets en mémoire, ce qui permet à la simulation de fonctionner
// hors-ligne dès que la config est chargée.

export type RepaymentType = 'unique' | 'quotidien'

export type Commission =
  | { type: 'percent'; value: number }
  | { type: 'fixed'; value: number }

export interface ProductConfig {
  id: string
  name: string
  tagline: string
  /** Taux global sur toute la durée du produit (0.08 = 8 %). */
  rate: number
  durationDays: number
  durationLabel: string
  repaymentType: RepaymentType
  /** Nombre de versements, uniquement pour repaymentType === 'quotidien'. */
  installments?: number
  /** Commission agent - réservée à la future vue Agent, jamais affichée côté client. */
  commission: Commission
  color: string
}

export const PRODUCTS: ProductConfig[] = [
  {
    id: 'express-marche',
    name: 'Express Marché',
    tagline: 'Trésorerie du jour pour les commerçants de marché',
    rate: 0.08,
    durationDays: 1,
    durationLabel: '1 jour',
    repaymentType: 'unique',
    commission: { type: 'percent', value: 0.40 },
    color: '#00B98E',
  },
  {
    id: 'hebdomadaire',
    name: 'Hebdomadaire',
    tagline: 'Pour couvrir les besoins de la semaine',
    rate: 0.10,
    durationDays: 7,
    durationLabel: '7 jours',
    repaymentType: 'unique',
    commission: { type: 'percent', value: 0.40 },
    color: '#1A3FA8',
  },
  {
    id: 'duo-chauffeur',
    name: 'Duo Chauffeur',
    tagline: 'Financement pour chauffeurs et transporteurs',
    rate: 0.18,
    durationDays: 10,
    durationLabel: '10 jours',
    repaymentType: 'unique',
    commission: { type: 'percent', value: 0.25 },
    color: '#F5A623',
  },
  {
    id: 'cycle-marchand',
    name: 'Cycle Marchand',
    tagline: 'Capital renouvelé, remboursé chaque jour',
    rate: 0.20,
    durationDays: 24,
    durationLabel: '24 jours',
    repaymentType: 'quotidien',
    installments: 24,
    commission: { type: 'percent', value: 0.25 },
    color: '#7C3AED',
  },
  {
    id: 'fonctionnaire',
    name: 'Fonctionnaire',
    tagline: 'Avance sur salaire remboursée au jour de la paie',
    rate: 0.20,
    durationDays: 30,
    durationLabel: '1 mois',
    repaymentType: 'unique',
    commission: { type: 'fixed', value: 1000 },
    color: '#9fe870',
  },
]

// Grille score → plafond.
//
// Bornes globales du crédit, toutes offres confondues.
export const CREDIT_MIN = 1000
export const CREDIT_MAX = 20000

// PLACEHOLDER - la grille réelle de paliers est définie dans le cahier
// fonctionnel mais n'était pas disponible à l'implémentation. À remplacer
// par les vraies valeurs ; le reste du simulateur ne dépend que de cette
// liste (aucune autre valeur en dur ailleurs). Les plafonds restent dans
// [CREDIT_MIN, CREDIT_MAX].
export interface ScoreTier {
  id: string
  label: string
  minScore: number
  maxScore: number
  plafond: number
}

export const SCORE_TIERS: ScoreTier[] = [
  { id: 'nouveau', label: 'Nouveau client', minScore: 0, maxScore: 399, plafond: 3000 },
  { id: 'bronze', label: 'Bronze', minScore: 400, maxScore: 549, plafond: 6000 },
  { id: 'argent', label: 'Argent', minScore: 550, maxScore: 699, plafond: 10000 },
  { id: 'or', label: 'Or', minScore: 700, maxScore: 849, plafond: 15000 },
  { id: 'platine', label: 'Platine', minScore: 850, maxScore: 1000, plafond: CREDIT_MAX },
]

/** Plafond appliqué quand aucun score n'est disponible (ex. aucun client rattaché). */
export const DEFAULT_PLAFOND = SCORE_TIERS[0].plafond
