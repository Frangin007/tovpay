import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { BankIcon, CreditIcon, SignalIcon, GavelIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
}

const partners = [
  { Icon: BankIcon, type: 'Partenaire bancaire visé (Bénin)', name: 'Orabank Bénin', desc: 'Convention de portage de fonds en cours de finalisation, via la Plateforme Interopérable du Système de Paiement Instantané (PI-SPI)' },
  { Icon: CreditIcon, type: 'Agrégateur de paiement', name: 'FeexPay SA', desc: 'Établissement agréé BCEAO (août 2025), certifié PCI DSS niveau 1' },
  { Icon: SignalIcon, type: 'Mobile Money envisagé', name: 'MTN MoMo · Moov Money', desc: 'Décaissement et remboursement - à confirmer pays par pays' },
  { Icon: SignalIcon, type: 'Mobile Money envisagé', name: 'TMoney · Flooz', desc: 'Décaissement et remboursement - à confirmer pays par pays' },
  { Icon: GavelIcon, type: 'Régulateur', name: 'BCEAO', desc: "Notification volontaire d'activité - Direction Nationale pour le Bénin, réponse du 16 juillet 2026" },
]

export default function Partners() {
  useDocumentMeta(
    'Nos partenaires',
    'Découvrez l\'écosystème de partenaires bancaires et Mobile Money qui portent le nano-crédit TOVPAY au Bénin.'
  )
  return (
    <>
      <PageHero
        breadcrumb="Accueil / Partenaires"
        title="Notre écosystème partenaire"
        desc="Les alliés stratégiques qui font la force et la crédibilité de TOVPAY."
        bgImage={IMAGES.heroPartners}
      />

      {/* Partenaires */}
      <section className="py-20 px-[5%] bg-white">
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

      {/* Présence géographique - statut réel */}
      <section className="relative py-20 px-[5%] overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.bgCity} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/95" />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>PRÉSENCE</motion.span>
            <motion.h2 className="font-display font-extrabold text-[2rem] sm:text-[2.8rem] text-white text-center mt-3" variants={fadeUp} custom={1}>
              1 pays aujourd'hui, 18 demain.
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <motion.div
              className="rounded-3xl border border-teal/30 bg-teal/10 p-8 text-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="text-4xl mb-3">🇧🇯</div>
              <h4 className="font-display font-bold text-white text-lg mb-1.5">Bénin</h4>
              <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3 bg-teal/25 text-teal">
                Phase pilote active
              </span>
              <p className="text-white/60 text-sm leading-relaxed">
                Activités notifiées à la BCEAO le 30 juin 2026, confirmées le 16 juillet 2026. Bureau régional à Cotonou.
              </p>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-display font-bold text-white text-lg mb-1.5">18 pays africains</h4>
              <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3 bg-gold/15 text-gold">
                Ambition de déploiement
              </span>
              <p className="text-white/60 text-sm leading-relaxed">
                Notre objectif à terme - pas encore une activité engagée hors du Bénin à ce jour.
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-white/40 text-xs text-center max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Siège opérationnel à Lomé (Togo) · Bureaux à Cotonou (Bénin) et Abidjan (Côte d'Ivoire) · Siège administratif en France
          </motion.p>
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
