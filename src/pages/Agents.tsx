import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  MapPinIcon, IdIcon, CreditIcon, TrendingUpIcon, HandshakeIcon,
  CheckCircleIcon, CoinsIcon, ShieldIcon,
} from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
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

const roles = [
  { Icon: MapPinIcon, title: 'Prospection', desc: "De nouveaux clients dans sa zone d'affectation - marché, quartier, lieu de travail." },
  { Icon: IdIcon, title: 'Vérification d\'identité (KYC)', desc: "Pièce d'identité, photo, informations personnelles, saisies dans l'application dédiée." },
  { Icon: CreditIcon, title: 'Initiation du crédit', desc: 'Premier crédit en face à face, puis validation des demandes autonomes soumises par ses clients, sous 24 heures.' },
  { Icon: TrendingUpIcon, title: 'Recouvrement', desc: 'Relances en cas de retard de paiement, avec suivi tracé dans l\'application.' },
  { Icon: HandshakeIcon, title: 'Garant de groupe', desc: 'Dans le cas de crédits collectifs, lorsque ce type de produit est proposé.' },
]

const candidature = [
  { n: '01', title: 'Identité et contact', desc: 'Vos coordonnées et informations de base.' },
  { n: '02', title: 'Zone et motivations', desc: "Votre zone d'action souhaitée et vos motivations." },
  { n: '03', title: 'Vérification email', desc: 'Confirmation de votre adresse par code.' },
  { n: '04', title: 'Récapitulatif & consentement', desc: 'Validation finale et consentement au traitement des données.' },
]

const cautions = [
  { level: 'Débutant', caution: '50 000 F', plafond: '10 000 F', debloque: "20 clients max · Hebdomadaire + Duo Chauffeur uniquement", color: '#00B98E' },
  { level: 'Standard', caution: '100 000 F', plafond: '15 000 F', debloque: '50 clients max · + Express', color: '#1A3FA8' },
  { level: 'Senior', caution: '200 000 F', plafond: '20 000 F', debloque: '100 clients max · Tous les produits de crédit', color: '#7C3AED' },
]

const commissions = [
  { produit: 'Express · Hebdomadaire', taux: '40 % des intérêts bruts' },
  { produit: 'Duo Chauffeur · Cycle Marchand', taux: '25 % des intérêts bruts' },
  { produit: 'Fonctionnaire', taux: '1 000 FCFA forfait' },
]

const scoreEvents = [
  { label: 'Dossier KYC validé par l\'Administrateur', pts: '+2', positive: true },
  { label: 'Client ayant remboursé dans les délais', pts: '+3', positive: true },
  { label: 'Objectif mensuel atteint', pts: '+5', positive: true },
  { label: 'Dossier rejeté pour erreur', pts: '−5', positive: false },
  { label: 'Client frauduleux validé par l\'agent', pts: '−15', positive: false },
]

const niveaux = ['Élite', 'Confirmé', 'Actif', 'Surveillance', 'Suspension']

export default function Agents() {
  useDocumentMeta(
    'Devenir Chef d\'Agence',
    'Rejoignez le réseau TOVPAY : devenez Chef d\'Agence et distribuez le nano-crédit mobile dans votre quartier au Bénin.'
  )
  return (
    <>
      <PageHero
        breadcrumb="Accueil / Chefs d'Agence"
        title="Les Chefs d'Agence, moteur de TOVPAY"
        desc="L'acteur terrain qui rend possible la distribution du crédit là où les banques classiques n'opèrent pas."
        bgImage={IMAGES.heroServices}
      />

      {/* RÔLE */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span className="section-tag" variants={fadeUp} custom={0}>RÔLE & RESPONSABILITÉS</motion.span>
              <motion.h2 className="section-title mt-3 mb-6" variants={fadeUp} custom={1}>
                Le lien humain entre
                <br /><span className="text-teal">TOVPAY et le client.</span>
              </motion.h2>
              <motion.p className="text-g600 leading-relaxed text-[15px] mb-8" variants={fadeUp} custom={2}>
                Rémunéré exclusivement à la commission, sans salaire fixe, le Chef d'Agence prospecte, inscrit et accompagne les clients de sa zone grâce à une application mobile dédiée à la gestion de son portefeuille.
              </motion.p>
              <div className="flex flex-col gap-5">
                {roles.map((r, i) => (
                  <motion.div key={i} className="flex gap-4 items-start" variants={fadeUp} custom={i + 3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                      <r.Icon size={19} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy text-[15px] mb-0.5">{r.title}</div>
                      <div className="text-g600 text-sm leading-relaxed">{r.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden h-[560px]"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <img src={IMAGES.howStep2} alt="Chef d'Agence TOVPAY" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl shadow-xl px-5 py-4">
                <div className="text-navy font-display font-bold text-sm mb-1">Compétences clés</div>
                <div className="text-g600 text-sm">Sens du relationnel et de la prospection, rigueur dans le suivi des dossiers, bonne connaissance de son quartier, aisance avec une application mobile.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CANDIDATURE */}
      <section className="py-20 px-[5%] bg-g50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(0,185,142,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-[1280px] mx-auto relative">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>RECRUTEMENT</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              Candidature en 4 étapes.
            </motion.h2>
            <motion.p className="section-sub max-w-xl mx-auto text-center" variants={fadeUp} custom={2}>
              Directement depuis l'application. Chaque candidature est étudiée par TOVPAY avant activation du compte.
            </motion.p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidature.map((c, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl border border-g100 p-6 relative hover:shadow-lg hover:border-teal/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                whileHover={{ y: -6 }}
              >
                <div className="font-display font-extrabold text-4xl text-g100 leading-none mb-3">{c.n}</div>
                <h4 className="font-display font-bold text-navy text-base mb-1.5">{c.title}</h4>
                <p className="text-g600 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUTION */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>SYSTÈME DE CAUTION - 3 NIVEAUX</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              Un engagement sécurisé.
            </motion.h2>
            <motion.p className="section-sub max-w-xl mx-auto text-center" variants={fadeUp} custom={2}>
              La caution est intégralement restituée en fin de contrat, en l'absence de défaut.
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {cautions.map((c, i) => (
              <motion.div
                key={i}
                className="bg-g50 rounded-3xl border border-g100 p-8 group hover:shadow-lg hover:border-teal/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${c.color}15`, color: c.color }}>
                  <ShieldIcon size={24} />
                </div>
                <h4 className="font-display font-bold text-navy text-xl mb-1">{c.level}</h4>
                <div className="font-display font-extrabold text-2xl mb-1" style={{ color: c.color }}>{c.caution}</div>
                <div className="text-g400 text-xs mb-5">Plafond {c.plafond} / client</div>
                <p className="text-g600 text-sm leading-relaxed">{c.debloque}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION */}
      <section className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span className="section-tag" variants={fadeUp} custom={0}>RÉMUNÉRATION</motion.span>
              <motion.h2 className="section-title mt-3 mb-5" variants={fadeUp} custom={1}>
                À la commission,
                <br /><span className="text-teal">sur remboursement complet.</span>
              </motion.h2>
              <motion.p className="text-g600 leading-relaxed text-[15px]" variants={fadeUp} custom={2}>
                Aucune commission n'est versée sur un crédit en retard ou en défaut : elle n'est due qu'après le remboursement total du crédit par le client.
              </motion.p>
            </motion.div>
            <motion.div
              className="bg-white rounded-3xl border border-g100 overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              {commissions.map((c, i) => (
                <div key={i} className={`flex items-center justify-between gap-4 px-7 py-5 ${i % 2 === 0 ? 'bg-white' : 'bg-g50'}`}>
                  <div className="flex items-center gap-3">
                    <CoinsIcon size={18} className="text-teal shrink-0" />
                    <span className="text-navy font-semibold text-sm">{c.produit}</span>
                  </div>
                  <span className="text-teal font-display font-bold text-sm text-right shrink-0">{c.taux}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCORING AGENT */}
      <section className="py-20 px-[5%] bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>SCORING DE L'AGENT</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              Une performance mesurée en temps réel.
            </motion.h2>
            <motion.p className="section-sub max-w-xl mx-auto text-center" variants={fadeUp} custom={2}>
              Le score démarre à 0 et évolue à chaque événement, borné entre 0 et 100.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            <motion.div
              className="bg-g50 rounded-3xl border border-g100 p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h4 className="font-display font-bold text-navy text-lg mb-5">Événements de score</h4>
              <div className="flex flex-col gap-3">
                {scoreEvents.map((e, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-g600">{e.label}</span>
                    <span className={`font-display font-bold shrink-0 ${e.positive ? 'text-teal' : 'text-red-500'}`}>{e.pts}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-navy rounded-3xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h4 className="font-display font-bold text-white text-lg mb-5">Niveaux de performance</h4>
              <div className="flex flex-col gap-2.5">
                {niveaux.map((n, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircleIcon size={16} className={i < 2 ? 'text-teal' : i === 2 ? 'text-lime' : 'text-gold'} />
                    <span className="text-white/80 text-sm">{n}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/45 text-xs leading-relaxed mt-5 pt-5 border-t border-white/10">
                Ce score détermine votre quota de clients et vos avantages - avec des conséquences directes en cas de baisse durable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Rejoignez le réseau TOVPAY."
        desc="Devenez Chef d'Agence et soyez le moteur de l'inclusion financière dans votre quartier."
        primary={{ label: 'Devenir Chef d\'Agence', to: '/contact' }}
        secondary={{ label: 'Nous écrire →', to: 'mailto:dg@tovpay.africa', mailto: true }}
        bgImage={IMAGES.impact3}
      />
    </>
  )
}
