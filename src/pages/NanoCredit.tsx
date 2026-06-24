import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  DocumentIcon, AiSparkIcon, PhoneDownloadIcon, IdIcon,
  CheckCircleIcon, CreditIcon,
} from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
}

const durations = [
  { label: '1 semaine', dur: 1, rate: 0.10, color: '#00B98E' },
  { label: '2 semaines', dur: 2, rate: 0.15, color: '#1A3FA8' },
  { label: '3 semaines', dur: 3, rate: 0.20, color: '#7C3AED' },
  { label: '1 mois', dur: 4, rate: 0.25, color: '#F5A623' },
]

const criteres = ['Âge minimum 18 ans', 'Numéro de téléphone actif', 'Compte Mobile Money', 'Identité vérifiée', 'Résidence UEMOA']
const avantages = ['Sans garantie physique', "Sans justificatif d'emploi", 'Scoring instantané', 'Décaissement 15 min', 'Taux transparent']
const steps = [
  { Icon: PhoneDownloadIcon, n: '01', title: 'Télécharger', desc: 'App Store / Google Play' },
  { Icon: IdIcon, n: '02', title: 'Vérifier', desc: 'ID + téléphone (5 min)' },
  { Icon: AiSparkIcon, n: '03', title: 'Scorer', desc: 'IA analyse (1 min)' },
  { Icon: CheckCircleIcon, n: '04', title: 'Décaisser', desc: 'Fonds reçus (15 min)' },
]

export default function NanoCredit() {
  const [simDur, setSimDur] = useState(1)
  const [simAmount, setSimAmount] = useState(10000)

  const selectedDur = durations.find(d => d.dur === simDur) || durations[0]
  const interest = Math.round(simAmount * selectedDur.rate)
  const total = simAmount + interest

  return (
    <>
      <PageHero
        breadcrumb="Accueil / Nano-Crédit"
        title="Nano-Crédit Mobile"
        desc="Crédit instantané sans garantie — de 1 000 à 20 000 FCFA en 15 minutes."
        bgImage={IMAGES.heroNanoCredit}
      />

      {/* SIMULATEUR */}
      <section className="py-28 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>SIMULATEUR</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              Calculez votre crédit en temps réel.
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Simulateur */}
            <motion.div
              className="bg-g50 rounded-3xl p-8 border border-g100"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="mb-8">
                <label className="block text-navy text-xs font-semibold mb-3 uppercase tracking-wide">Montant souhaité</label>
                <div className="font-display font-extrabold text-[2.8rem] text-navy mb-3">
                  {simAmount.toLocaleString('fr-FR')}
                  <span className="text-[1.2rem] text-g400 font-medium ml-2">FCFA</span>
                </div>
                <input
                  type="range"
                  min="1000" max="20000" step="500"
                  value={simAmount}
                  onChange={e => setSimAmount(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer mb-2"
                  style={{ accentColor: selectedDur.color }}
                />
                <div className="flex justify-between text-g400 text-xs">
                  <span>1 000 FCFA</span><span>20 000 FCFA</span>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-navy text-xs font-semibold mb-3 uppercase tracking-wide">Durée de remboursement</label>
                <div className="grid grid-cols-2 gap-2.5">
                  {durations.map(d => (
                    <motion.button
                      key={d.dur}
                      onClick={() => setSimDur(d.dur)}
                      className={`text-sm font-semibold rounded-xl py-3 px-4 transition-all duration-200 border-2 ${
                        d.dur === simDur
                          ? 'text-white border-transparent'
                          : 'bg-white text-navy border-g100 hover:border-g400'
                      }`}
                      style={d.dur === simDur ? { background: d.color, borderColor: d.color } : {}}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {d.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-g400 text-center">
                Taux d'intérêt : <strong className="text-navy">{(selectedDur.rate * 100).toFixed(0)}%</strong>
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
                <div className="font-display font-bold text-2xl mb-5">{simAmount.toLocaleString('fr-FR')} FCFA</div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/55 text-sm">Taux d'intérêt</span>
                  <span className="font-semibold">{(selectedDur.rate * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/55 text-sm">Intérêts</span>
                  <span className="font-semibold">{interest.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/55 text-sm">Durée</span>
                  <span className="font-semibold">{selectedDur.label}</span>
                </div>
                <div className="flex justify-between items-center pt-5 mt-2">
                  <span className="text-white/70 font-semibold">Total à rembourser</span>
                  <motion.span
                    key={total}
                    className="font-display font-extrabold text-2xl"
                    style={{ color: selectedDur.color }}
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {total.toLocaleString('fr-FR')} FCFA
                  </motion.span>
                </div>
              </div>
              <Link to="/contact">
                <motion.span
                  className="flex items-center justify-center gap-2 bg-teal text-white font-semibold py-4 rounded-xl shadow-[0_8px_32px_rgba(0,185,142,0.35)] cursor-pointer w-full"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <CreditIcon size={18} />
                  Demander ce crédit →
                </motion.span>
              </Link>
              <div className="text-center text-g400 text-xs">
                Conforme BCEAO · Partenaire Orabank · Données chiffrées
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="py-28 px-[5%] bg-g50 relative overflow-hidden">
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
