import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { BankIcon, WaveIcon, SignalIcon, BroadcastIcon, GavelIcon } from '../components/Icon'
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

const partners = [
  { Icon: BankIcon, type: 'Banque Adossement', name: 'Orabank', desc: 'Groupe bancaire panafricain privé, 12 pays' },
  { Icon: WaveIcon, type: 'Mobile Money', name: 'Wave', desc: "CI & Sénégal — Transferts instantanés" },
  { Icon: SignalIcon, type: 'Mobile Money', name: 'Orange Money', desc: 'Zone UEMOA complète (9 pays)' },
  { Icon: BroadcastIcon, type: 'Mobile Money', name: 'MTN MoMo', desc: 'Bénin, Nigeria, Mali, Mauritanie' },
  { Icon: SignalIcon, type: 'Tech SMS', name: "Africa's Talking", desc: 'Infrastructure SMS panafricaine, 55 pays' },
  { Icon: GavelIcon, type: 'Régulateur', name: 'BCEAO', desc: 'Conformité réglementaire zone UEMOA' },
]

const countries = [
  { flag: '🇨🇮', name: "Côte d'Ivoire", status: 'Actif', active: true, desc: 'Siège principal — 140+ clients' },
  { flag: '🇸🇳', name: 'Sénégal', status: 'Actif', active: true, desc: '100+ clients — Dakar' },
  { flag: '🇧🇯', name: 'Bénin', status: 'Actif', active: true, desc: '50+ clients — Cotonou' },
  { flag: '🇹🇬', name: 'Togo', status: 'Actif', active: true, desc: '40+ clients — Lomé' },
  { flag: '🇲🇱', name: 'Mali', status: 'Oct. 2026', active: false, desc: 'Préparation Q4 2026' },
  { flag: '🇳🇪', name: 'Niger', status: 'Q1 2027', active: false, desc: 'Lancement prévu 2027' },
]

export default function Partners() {
  return (
    <>
      <PageHero
        breadcrumb="Accueil / Partenaires"
        title="Notre écosystème partenaire"
        desc="Les alliés stratégiques qui font la force et la crédibilité de TOVPAY."
        bgImage={IMAGES.heroPartners}
      />

      {/* Partenaires */}
      <section className="py-28 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>PARTENAIRES CLÉS</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              Un réseau de confiance.
            </motion.h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                className="bg-g50 rounded-3xl border border-g100 p-7 flex gap-5 items-start group hover:shadow-lg hover:border-teal/20 hover:bg-white transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-teal/10 text-teal shrink-0">
                  <p.Icon size={24} />
                </div>
                <div>
                  <span className="text-g400 text-[10px] uppercase tracking-wider font-semibold">{p.type}</span>
                  <div className="font-display font-bold text-navy text-lg mt-0.5">{p.name}</div>
                  <div className="text-g600 text-sm mt-1 leading-snug">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carte pays avec image de fond */}
      <section className="relative py-28 px-[5%] overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.bgCity} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/95" />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>PRÉSENCE</motion.span>
            <motion.h2 className="font-display font-extrabold text-[2rem] sm:text-[2.8rem] text-white text-center mt-3" variants={fadeUp} custom={1}>
              6 pays, demain 12.
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((c, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl border p-5 text-center ${c.active ? 'bg-white/5 border-white/10' : 'bg-white/[0.03] border-white/[0.06]'} hover:bg-white/10 transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-2">{c.flag}</div>
                <h4 className="font-display font-bold text-white text-sm mb-1.5">{c.name}</h4>
                <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 ${c.active ? 'bg-teal/20 text-teal' : 'bg-gold/10 text-gold'}`}>
                  {c.status}
                </span>
                <p className="text-white/45 text-[11px] leading-snug">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Devenez partenaire de TOVPAY."
        desc="Banques, opérateurs, fintechs : rejoignez l'écosystème qui change l'Afrique."
        primary={{ label: 'Nous contacter', to: '/contact' }}
        secondary={{ label: 'Découvrir TovPay →', to: '/about' }}
        bgImage={IMAGES.impact1}
      />
    </>
  )
}
