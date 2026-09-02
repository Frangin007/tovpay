import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { GlobeIcon, ShieldIcon, HandshakeIcon, CoinsIcon, BuildingIcon, NetworkIcon, MailIcon } from '../components/Icon'
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

const identity = [
  { label: 'Filiation', val: 'Filiale de GROUPE TOV' },
  { label: 'Siège opérationnel', val: 'Lomé, Togo' },
  { label: 'Siège administratif', val: '102 impasse Darnaudet, 64300 Baigts de Béarn, France' },
  { label: 'Bureaux', val: 'Lomé (opérationnel) · Cotonou (régional) · Abidjan (commercial)' },
  { label: 'Pays d\'activité pilote', val: 'Bénin - activité notifiée à la BCEAO, phase pilote en cours' },
  { label: 'Date de démarrage', val: '30 juin 2026 (notification BCEAO), confirmée le 16 juillet 2026' },
  { label: 'Ambition de déploiement', val: '18 pays africains (objectif, hors activité confirmée à date)' },
  { label: 'RCCM', val: 'TG-LFW-01-2026-B13-00733' },
  { label: 'NIF', val: '1002113124' },
  { label: 'Capital social', val: '100 000 000 FCFA' },
]

const points = [
  { Icon: GlobeIcon, title: 'Marché géant', desc: '500M+ personnes non bancarisées en Afrique de l\'Ouest.', color: '#00B98E' },
  { Icon: ShieldIcon, title: 'Un modèle sans risque de crédit', desc: "TOVPAY ne prête jamais en son nom propre et ne supporte pas le risque de crédit - une plateforme technologique, pas un bilan bancaire.", color: '#9fe870' },
  { Icon: HandshakeIcon, title: 'Conformité dès le premier jour', desc: 'Notification volontaire à la BCEAO avant tout déploiement, démarche proactive au-delà de nos obligations directes.', color: '#F5A623' },
]

const profiles = [
  { Icon: CoinsIcon, title: 'Family Offices', desc: 'Impact investing africain + rendements solides' },
  { Icon: BuildingIcon, title: 'VC Panafricains', desc: 'Spécialisés fintech inclusive' },
  { Icon: NetworkIcon, title: 'Impact Funds', desc: 'SDG 1, 5, 8, 10 - Inclusion financière mesurable' },
]

export default function Investors() {
  useDocumentMeta(
    'Espace investisseurs',
    'Investissez dans l\'inclusion financière africaine : découvrez le modèle, le statut réel et la vision panafricaine de TOVPAY.'
  )
  return (
    <>
      <PageHero
        breadcrumb="Accueil / Investisseurs"
        title="Opportunité d'investissement"
        desc="Participez à la révolution de l'inclusion financière africaine."
        bgImage={IMAGES.heroInvestors}
      />

      {/* Points clés */}
      <section className="relative py-20 px-[5%] overflow-hidden">
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

      {/* Identité légale */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>IDENTITÉ & STATUT</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>Le réel, sans détour.</motion.h2>
            <motion.p className="section-sub max-w-xl mx-auto text-center" variants={fadeUp} custom={2}>
              Ce document reflète le statut réel de TOVPAY à date, et non une activité déjà engagée hors du Bénin.
            </motion.p>
          </motion.div>
          <motion.div
            className="overflow-x-auto rounded-2xl border border-g100 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <table className="w-full border-collapse min-w-[480px]">
              <tbody>
                {identity.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-g50'}>
                    <td className="text-g400 text-xs font-semibold uppercase tracking-wide py-3.5 px-6 whitespace-nowrap align-top">{r.label}</td>
                    <td className="text-navy text-sm font-medium py-3.5 px-6">{r.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Statut réel */}
          <motion.div
            className="mt-12 bg-gradient-to-br from-navy to-blue rounded-3xl p-9 overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(159,232,112,0.15), transparent 70%)' }} />
            <h3 className="text-white text-2xl font-display font-bold mb-4">Où en est TOVPAY aujourd'hui ?</h3>
            <p className="text-white/70 leading-relaxed mb-5 max-w-[600px]">
              TOVPAY est en phase pilote au Bénin depuis le 30 juin 2026, et en recherche active d'un partenaire bancaire (Orabank Bénin) pour porter les crédits distribués. Aucune levée de fonds n'est annoncée à ce jour - nous échangeons avec des investisseurs qui partagent notre vision panafricaine de l'inclusion financière.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MailIcon size={16} className="text-teal" />
              Contactez : <strong className="text-teal">dg@tovpay.africa</strong>
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
        desc="Discutons de notre phase pilote au Bénin et de notre vision panafricaine."
        primary={{ label: "Contacter l'équipe", to: 'mailto:dg@tovpay.africa', mailto: true }}
        secondary={{ label: 'Découvrir TovPay →', to: '/about' }}
        bgImage={IMAGES.heroInvestors}
      />
    </>
  )
}
