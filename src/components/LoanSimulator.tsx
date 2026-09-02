import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CreditIcon, CalendarIcon, ChevronDownIcon } from './Icon'
import { PRODUCTS, CREDIT_MIN, CREDIT_MAX } from '../lib/simulatorConfig'
import { simulate, getSimulationHistory, pushSimulationHistory } from '../lib/simulator'
import type { SimulationHistoryEntry } from '../lib/simulator'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
}

const AMOUNT_STEP = 500

const fmt = (n: number) => n.toLocaleString('fr-FR')
const fmtDate = (d: Date) => d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })

function fmtRelative(iso: string) {
  const diffMin = Math.floor((Date.now() - new Date(iso).getTime()) / 60000)
  if (diffMin < 1) return "à l'instant"
  if (diffMin < 60) return `il y a ${diffMin} min`
  const diffH = Math.floor(diffMin / 60)
  if (diffH < 24) return `il y a ${diffH} h`
  return `il y a ${Math.floor(diffH / 24)} j`
}

const clampAmount = (value: number, plafond: number) =>
  Math.min(plafond, Math.max(CREDIT_MIN, Math.round(value / AMOUNT_STEP) * AMOUNT_STEP))

const PLAFOND = CREDIT_MAX

export default function LoanSimulator() {
  const [productId, setProductId] = useState(PRODUCTS[0].id)
  const product = PRODUCTS.find(p => p.id === productId) ?? PRODUCTS[0]

  const [amount, setAmount] = useState(() => clampAmount(10000, PLAFOND))
  const [scheduleOpen, setScheduleOpen] = useState(false)
  const [history, setHistory] = useState<SimulationHistoryEntry[]>(() => getSimulationHistory())

  const result = useMemo(() => simulate(product, amount), [product, amount])

  useEffect(() => {
    const t = setTimeout(() => {
      setHistory(pushSimulationHistory({ productId: product.id, productName: product.name, amount, total: result.total }))
    }, 1000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id, amount])

  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.span className="section-tag" variants={fadeUp} custom={0}>SIMULATEUR</motion.span>
          <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
            Calculez votre crédit en temps réel.
          </motion.h2>
          <motion.p className="section-sub max-w-xl mx-auto" variants={fadeUp} custom={2}>
            Une projection immédiate, hors-ligne, sans aucun engagement.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Saisie */}
          <motion.div
            className="bg-g50 rounded-3xl p-8 border border-g100"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mb-8">
              <label className="block text-navy text-xs font-semibold mb-3 uppercase tracking-wide">Produit</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRODUCTS.map(p => (
                  <motion.button
                    key={p.id}
                    onClick={() => setProductId(p.id)}
                    className={`text-left text-sm font-semibold rounded-xl py-3 px-4 transition-all duration-200 border-2 ${
                      p.id === productId ? 'text-white border-transparent' : 'bg-white text-navy border-g100 hover:border-g400'
                    }`}
                    style={p.id === productId ? { background: p.color, borderColor: p.color } : {}}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {p.name}
                    <span className={`block text-xs font-normal mt-0.5 ${p.id === productId ? 'text-white/75' : 'text-g400'}`}>
                      {p.durationLabel} · {(p.rate * 100).toFixed(0)}%
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-navy text-xs font-semibold mb-3 uppercase tracking-wide">Montant souhaité</label>
              <div className="flex items-baseline gap-2 mb-3">
                <input
                  type="number"
                  value={amount}
                  min={CREDIT_MIN}
                  max={PLAFOND}
                  step={AMOUNT_STEP}
                  onChange={e => setAmount(Number(e.target.value) || CREDIT_MIN)}
                  onBlur={e => setAmount(clampAmount(Number(e.target.value) || CREDIT_MIN, PLAFOND))}
                  className="w-full font-display font-extrabold text-[2.4rem] text-navy bg-transparent outline-none border-b-2 border-transparent focus:border-teal transition-colors"
                />
                <span className="text-[1.1rem] text-g400 font-medium shrink-0">FCFA</span>
              </div>
              <input
                type="range"
                min={CREDIT_MIN} max={PLAFOND} step={AMOUNT_STEP}
                value={Math.min(amount, PLAFOND)}
                onChange={e => setAmount(Number(e.target.value))}
                className="w-full accent-teal cursor-pointer mb-2"
                style={{ accentColor: product.color }}
              />
              <div className="flex justify-between text-g400 text-xs">
                <span>{fmt(CREDIT_MIN)} FCFA</span>
                <span>Plafond : {fmt(PLAFOND)} FCFA</span>
              </div>
            </div>
          </motion.div>

          {/* Résultat */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="bg-navy rounded-3xl p-8 text-white">
              <div className="text-white/55 text-xs mb-1">Montant emprunté</div>
              <div className="font-display font-bold text-2xl mb-5">{fmt(amount)} FCFA</div>

              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/55 text-sm">Intérêts</span>
                <span className="font-semibold">{fmt(result.interest)} FCFA <span className="text-white/40 font-normal">({result.interestRate.toFixed(0)}%)</span></span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/55 text-sm">Durée</span>
                <span className="font-semibold">{product.durationLabel}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/55 text-sm flex items-center gap-1.5"><CalendarIcon size={14} /> Échéance</span>
                <span className="font-semibold">{fmtDate(result.dueDate)}</span>
              </div>

              <div className="flex justify-between items-center pt-5 mt-2">
                <span className="text-white/70 font-semibold">Total à rembourser</span>
                <motion.span
                  key={result.total}
                  className="font-display font-extrabold text-2xl"
                  style={{ color: product.color }}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {fmt(result.total)} FCFA
                </motion.span>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 text-white/40 text-[11px] leading-relaxed">
                Taux annualisé équivalent (indicatif) : {result.effectiveAnnualRate.toFixed(0)}% - donnée fournie à titre de transparence.
              </div>
            </div>

            {product.repaymentType === 'quotidien' && result.schedule && (
              <div className="bg-g50 rounded-2xl border border-g100 overflow-hidden">
                <button
                  onClick={() => setScheduleOpen(o => !o)}
                  className="w-full flex justify-between items-center gap-3 p-5 text-left"
                >
                  <span className="text-sm font-semibold text-navy">
                    Échéancier - {product.installments} versements de ~{fmt(result.dailyPayment ?? 0)} FCFA/jour
                  </span>
                  <ChevronDownIcon size={18} className={`text-g400 shrink-0 transition-transform duration-200 ${scheduleOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {scheduleOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="max-h-72 overflow-y-auto px-5 pb-5">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-g400 text-xs uppercase tracking-wide">
                              <th className="text-left font-semibold py-1.5">#</th>
                              <th className="text-left font-semibold py-1.5">Date</th>
                              <th className="text-right font-semibold py-1.5">Montant</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.schedule.map(line => (
                              <tr key={line.n} className="border-t border-g100">
                                <td className="py-1.5 text-g400">{line.n}</td>
                                <td className="py-1.5 text-navy">{fmtDate(line.date)}</td>
                                <td className="py-1.5 text-navy text-right font-semibold">{fmt(line.amount)} FCFA</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <Link
              to="/contact"
              state={{ simulation: { productName: product.name, amount, total: result.total, dueDateLabel: fmtDate(result.dueDate) } }}
            >
              <motion.span
                className="flex items-center justify-center gap-2 bg-teal text-white font-semibold py-4 rounded-xl shadow-[0_8px_32px_rgba(0,185,142,0.35)] cursor-pointer w-full"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <CreditIcon size={18} />
                Faire une demande →
              </motion.span>
            </Link>

            <p className="text-center text-g400 text-xs leading-relaxed">
              Simulation indicative et non contractuelle · Le montant final dépend de l'évaluation de votre dossier.
            </p>
          </motion.div>
        </div>

        {/* Comparatif */}
        <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h3 className="font-display font-bold text-navy text-xl mb-6 text-center" variants={fadeUp} custom={0}>
            Comparer les 5 produits pour {fmt(Math.min(amount, PLAFOND))} FCFA
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRODUCTS.map((p, i) => {
              const r = simulate(p, Math.min(amount, PLAFOND))
              const active = p.id === productId
              return (
                <motion.button
                  key={p.id}
                  onClick={() => setProductId(p.id)}
                  className={`text-left rounded-2xl border-2 p-5 transition-all duration-200 ${active ? 'bg-white' : 'bg-g50 border-g100 hover:border-g400'}`}
                  style={active ? { borderColor: p.color } : {}}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <div className="text-navy font-semibold text-sm mb-3">{p.name}</div>
                  <div className="font-display font-bold text-navy text-lg mb-1">{fmt(r.total)} <span className="text-xs font-medium text-g400">FCFA</span></div>
                  <div className="text-xs text-g400 mb-3">dont {fmt(r.interest)} FCFA d'intérêt</div>
                  <div className="text-xs font-semibold" style={{ color: p.color }}>{p.durationLabel}</div>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Historique */}
        {history.length > 0 && (
          <motion.div className="mt-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h4 className="text-navy text-xs font-semibold uppercase tracking-wide mb-4 text-center">Vos dernières simulations</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {history.map(h => (
                <div key={h.id} className="flex items-center gap-3 bg-g50 border border-g100 rounded-xl px-4 py-2.5 text-sm">
                  <span className="font-semibold text-navy">{h.productName}</span>
                  <span className="text-g400">{fmt(h.amount)} → {fmt(h.total)} FCFA</span>
                  <span className="text-g400 text-xs">{fmtRelative(h.timestamp)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
