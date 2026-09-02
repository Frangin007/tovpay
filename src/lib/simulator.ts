// Moteur de calcul du simulateur - fonctions pures, aucun appel réseau, donc
// utilisables hors-ligne dès que la config produit (simulatorConfig.ts) est
// en mémoire.

import type { ProductConfig } from './simulatorConfig'

export interface ScheduleLine {
  n: number
  date: Date
  amount: number
}

export interface SimulationResult {
  amount: number
  interest: number
  interestRate: number
  total: number
  dueDate: Date
  /** Échéancier journalier, uniquement pour les produits à remboursement quotidien. */
  schedule?: ScheduleLine[]
  dailyPayment?: number
  /** Taux annualisé équivalent, à titre indicatif (transparence BCEAO). */
  effectiveAnnualRate: number
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

export function simulate(product: ProductConfig, amount: number, startDate: Date = new Date()): SimulationResult {
  const interest = Math.round(amount * product.rate)
  const total = amount + interest
  const effectiveAnnualRate = product.rate * (365 / product.durationDays) * 100

  if (product.repaymentType === 'quotidien' && product.installments) {
    const dailyPayment = Math.floor(total / product.installments)
    const schedule: ScheduleLine[] = []
    let cumulative = 0
    for (let n = 1; n <= product.installments; n++) {
      const isLast = n === product.installments
      const lineAmount = isLast ? total - cumulative : dailyPayment
      cumulative += lineAmount
      schedule.push({ n, date: addDays(startDate, n), amount: lineAmount })
    }
    return {
      amount, interest, interestRate: product.rate * 100, total,
      dueDate: addDays(startDate, product.installments),
      schedule, dailyPayment, effectiveAnnualRate,
    }
  }

  return {
    amount, interest, interestRate: product.rate * 100, total,
    dueDate: addDays(startDate, product.durationDays),
    effectiveAnnualRate,
  }
}

/** Résumé transféré vers le formulaire de demande réelle (/contact). */
export interface SimulationTransfer {
  productName: string
  amount: number
  total: number
  dueDateLabel: string
}

// Historique des 3 dernières simulations, persistant hors-ligne (localStorage).
const HISTORY_KEY = 'tovpay_simulation_history'
const HISTORY_LIMIT = 3

export interface SimulationHistoryEntry {
  id: string
  productId: string
  productName: string
  amount: number
  total: number
  timestamp: string
}

export function getSimulationHistory(): SimulationHistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    return raw ? (JSON.parse(raw) as SimulationHistoryEntry[]) : []
  } catch {
    return []
  }
}

export function pushSimulationHistory(entry: Omit<SimulationHistoryEntry, 'id' | 'timestamp'>): SimulationHistoryEntry[] {
  const deduped = getSimulationHistory().filter(h => !(h.productId === entry.productId && h.amount === entry.amount))
  const next = [{ ...entry, id: `${Date.now()}`, timestamp: new Date().toISOString() }, ...deduped].slice(0, HISTORY_LIMIT)
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next))
  } catch {
    // localStorage indisponible (navigation privée, quota) - historique non persisté pour cette session
  }
  return next
}
