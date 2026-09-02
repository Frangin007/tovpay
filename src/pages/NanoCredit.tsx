import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  DocumentIcon, AiSparkIcon, PhoneDownloadIcon, IdIcon,
  CheckCircleIcon,
} from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import LoanSimulator from '../components/LoanSimulator'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
}

const criteres = ['Âge minimum 18 ans', 'Numéro de téléphone actif', 'Compte Mobile Money', 'Identité vérifiée', 'Résidence au Bénin (phase pilote)']
const avantages = ['Sans garantie physique', "Sans justificatif d'emploi", 'Scoring instantané', 'Décaissement 15 min', 'Taux transparent']
const steps = [
  { Icon: PhoneDownloadIcon, n: '01', title: 'Télécharger', desc: 'App Store / Google Play' },
  { Icon: IdIcon, n: '02', title: 'Vérifier', desc: 'ID + téléphone (5 min)' },
  { Icon: AiSparkIcon, n: '03', title: 'Scorer', desc: 'IA analyse (1 min)' },
  { Icon: CheckCircleIcon, n: '04', title: 'Décaisser', desc: 'Fonds reçus (15 min)' },
]

export default function NanoCredit() {
  useDocumentMeta(
    'Simulateur de Nano-Crédit Mobile',
    'Simulez votre nano-crédit ou micro-crédit mobile TOVPAY : de 1 000 à 20 000 FCFA, décaissé en moins de 15 minutes, sans garantie.'
  )
  return (
    <>
      <PageHero
        breadcrumb="Accueil / Nano-Crédit"
        title="Nano-Crédit Mobile"
        desc="Crédit instantané sans garantie - de 1 000 à 20 000 FCFA en 15 minutes."
        bgImage={IMAGES.heroNanoCredit}
      />

      <LoanSimulator />

      {/* CONDITIONS */}
      <section className="py-20 px-[5%] bg-g50 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>CONDITIONS</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              Accessible à tous.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {/* Critères */}
            <motion.div
              className="bg-white rounded-3xl border border-g100 overflow-hidden shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="relative h-40 overflow-hidden">
                <img src={IMAGES.howStep2} alt="Conditions" loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </div>
              <div className="p-7">
                <div className="text-teal mb-3"><DocumentIcon size={24} /></div>
                <h4 className="font-display font-bold text-navy text-xl mb-4">Critères obligatoires</h4>
                <ul className="flex flex-col gap-2.5">
                  {criteres.map((c, i) => (
                    <li key={i} className="flex items-center gap-3 text-g600 text-sm">
                      <CheckCircleIcon size={15} strokeWidth={2.2} className="text-teal shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Avantages */}
            <motion.div
              className="bg-navy rounded-3xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="relative h-40 overflow-hidden">
                <img src={IMAGES.impact4} alt="Avantages" loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              </div>
              <div className="p-7">
                <div className="text-lime mb-3"><AiSparkIcon size={24} /></div>
                <h4 className="font-display font-bold text-white text-xl mb-4">Avantages TOVPAY</h4>
                <ul className="flex flex-col gap-2.5">
                  {avantages.map((a, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/75 text-sm">
                      <CheckCircleIcon size={15} strokeWidth={2.2} className="text-lime shrink-0" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl border border-g100 p-6 text-center relative hover:shadow-lg hover:border-teal/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute top-4 right-4 font-display font-extrabold text-4xl text-g100 leading-none">{s.n}</div>
                <div className="text-teal flex justify-center mb-3 relative z-10"><s.Icon size={26} /></div>
                <h4 className="font-display font-bold text-navy text-base mb-1.5">{s.title}</h4>
                <p className="text-g600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Votre crédit vous attend."
        desc="Téléchargez l'app, vérifiez votre identité, recevez vos fonds en 15 minutes."
        primary={{ label: "Demander maintenant", to: '/contact' }}
        secondary={{ label: 'Voir la FAQ →', to: '/faq' }}
        bgImage={IMAGES.whyImg1}
      />
    </>
  )
}
