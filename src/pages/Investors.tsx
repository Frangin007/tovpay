import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { GlobeIcon, TrendingUpIcon, HandshakeIcon, CoinsIcon, BuildingIcon, NetworkIcon, MailIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
}

const kpis = [
  { label: 'Clients actifs', y24: '50', y25: '330', y26: '2 000' },
  { label: 'Crédits accordés (M FCFA)', y24: '25', y25: '200', y26: '1 200' },
  { label: 'Taux recouvrement', y24: '92%', y25: '85%', y26: '83%' },
  { label: 'Pays opérationnels', y24: '1', y25: '4', y26: '6' },
  { label: 'Revenue (M FCFA)', y24: '2.5', y25: '22', y26: '140' },
  { label: 'Marge opérationnelle', y24: '-40%', y25: '-15%', y26: '18%' },
]

const points = [
  { Icon: GlobeIcon, title: 'Marché géant', desc: '500M+ personnes non bancarisées en Afrique. TAM: $50B+', color: '#00B98E' },
  { Icon: TrendingUpIcon, title: 'Croissance 7×', desc: 'Revenue CAGR 120% 2024-2026. Profitabilité en vue.', color: '#9fe870' },
  { Icon: HandshakeIcon, title: 'Orabank backing', desc: 'Adossement bancaire solide. Conformité BCEAO garantie.', color: '#F5A623' },
]

const profiles = [
  { Icon: CoinsIcon, title: 'Family Offices', desc: 'Impact investing africain + rendements solides' },
  { Icon: BuildingIcon, title: 'VC Panafricains', desc: 'Spécialisés fintech inclusive' },
  { Icon: NetworkIcon, title: 'Impact Funds', desc: 'SDG 1, 5, 8, 10 — Inclusion financière mesurable' },
]

export default function Investors() {
  return (
    <>
      <PageHero
        breadcrumb="Accueil / Investisseurs"
        title="Opportunité d'investissement"
        desc="Participez à la révolution de l'inclusion financière africaine."
        bgImage={IMAGES.heroInvestors}
      />

      {/* Points clés */}
      <section className="relative py-28 px-[5%] overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.impact3} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/95" />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>POURQUOI INVESTIR</motion.span>
            <motion.h2 className="font-display font-extrabold text-[2.4rem] text-white text-center mt-3" variants={fadeUp} custom={1}>
              Une opportunité unique.
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {points.map((p, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', y: -6 }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${p.color}20`, color: p.color }}>
                  <p.Icon size={24} />
                </div>
                <h4 className="font-display font-bold text-white text-xl mb-2">{p.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Table */}
      <section className="py-28 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>MODÈLE ÉCONOMIQUE</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>Données financières.</motion.h2>
          </motion.div>
          <motion.div
            className="overflow-x-auto rounded-2xl border border-g100 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <table className="w-full border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left text-white/80 text-xs font-semibold uppercase tracking-wider py-4 px-6">Métrique</th>
                  <th className="text-right text-white/80 text-xs font-semibold uppercase tracking-wider py-4 px-6">2024</th>
                  <th className="text-right text-white/80 text-xs font-semibold uppercase tracking-wider py-4 px-6">2025E</th>
                  <th className="text-right text-teal text-xs font-semibold uppercase tracking-wider py-4 px-6">2026P</th>
                </tr>
              </thead>
              <tbody>
                {kpis.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-g50'}>
                    <td className="text-g600 text-sm py-3.5 px-6">{r.label}</td>
                    <td className="text-right text-navy text-sm font-medium py-3.5 px-6">{r.y24}</td>
                    <td className="text-right text-navy text-sm font-medium py-3.5 px-6">{r.y25}</td>
                    <td className="text-right text-navy text-sm font-bold py-3.5 px-6">{r.y26}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Série A */}
          <motion.div
            className="mt-12 bg-gradient-to-br from-navy to-blue rounded-3xl p-9 overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(159,232,112,0.15), transparent 70%)' }} />
            <h3 className="text-white text-2xl font-display font-bold mb-4">Levée de fonds Série A — 2M USD</h3>
            <p className="text-white/70 leading-relaxed mb-5 max-w-[600px]">
              Expansion 6 pays supplémentaires, tech IA/ML avancée, recrutement équipes locales. Closing prévu fin 2026.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MailIcon size={16} className="text-teal" />
              Contactez : <strong className="text-teal">investors@tovpay.com</strong>
            </div>
          </motion.div>

          {/* Profils */}
          <div className="mt-20">
            <motion.h2 className="section-title text-center mb-11" initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Profils d'investisseurs recherchés.
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {profiles.map((p, i) => (
                <motion.div
                  key={i}
                  className="bg-g50 rounded-3xl border border-g100 p-7 text-center group hover:shadow-lg hover:border-teal/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                  whileHover={{ y: -6 }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-teal/10 text-teal">
                    <p.Icon size={24} />
                  </div>
                  <h4 className="font-display font-bold text-navy text-xl mb-2">{p.title}</h4>
                  <p className="text-g600 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Investissez dans l'inclusion financière africaine."
        desc="Discutons de notre Série A et de notre vision panafricaine."
        primary={{ label: "Contacter l'équipe", to: 'mailto:investors@tovpay.com', mailto: true }}
        secondary={{ label: 'Découvrir TovPay →', to: '/about' }}
        bgImage={IMAGES.heroInvestors}
      />
    </>
  )
}
