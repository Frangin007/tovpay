import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const faqs = [
  {
    cat: 'Crédit & Simulation',
    items: [
      {
        q: "Quel est le montant minimum et maximum d'un crédit ?",
        a: "Le montant minimum est 1 000 FCFA et le maximum est 20 000 FCFA. Le montant accordé dépend de votre score de crédit et de votre historique de remboursement."
      },
      {
        q: "Combien de temps faut-il pour recevoir le crédit ?",
        a: "Une fois votre demande validée par le Chef d'Agence, les fonds sont versés en espèces ou sur Mobile Money en moins de 15 minutes."
      },
      {
        q: "Quels sont les taux d'intérêt appliqués ?",
        a: "Cinq forfaits, chacun avec son propre taux : Express (8 % sur 1 jour), Hebdomadaire (10 % sur 7 jours), Duo Chauffeur (18 % sur 10 jours), Cycle Marchand (20 % sur 24 jours, remboursement quotidien) et Fonctionnaire (20 % sur 1 mois). Le taux et le total à rembourser sont toujours affichés avant validation, et une pénalité de retard de 2 %/jour s'applique au-delà de l'échéance."
      },
      {
        q: "Puis-je rembourser avant la date limite ?",
        a: "Oui, le remboursement anticipé est possible à tout moment sans pénalité. Les intérêts seront recalculés au prorata du temps réellement utilisé."
      },
      {
        q: "Puis-je avoir plusieurs crédits simultanément ?",
        a: "Non, un seul crédit actif à la fois. Une fois entièrement remboursé, vous pouvez en demander un nouveau immédiatement."
      },
    ]
  },
  {
    cat: 'Scoring & Éligibilité',
    items: [
      {
        q: "Qu'est-ce que le scoring TOVPAY ?",
        a: "Notre moteur d'IA analyse votre comportement transactionnel, votre stabilité téléphonique et d'autres signaux pour évaluer votre capacité de remboursement - sans historique bancaire requis."
      },
      {
        q: "Quels documents dois-je fournir ?",
        a: "Uniquement votre pièce d'identité valide (CNI, passeport) et votre numéro de téléphone Mobile Money. Aucun bulletin de salaire ni justificatif de domicile n'est exigé."
      },
      {
        q: "Mon score peut-il s'améliorer avec le temps ?",
        a: "Oui, chaque remboursement réussi améliore votre score. Plus vous remboursez à temps, plus vous accédez à des montants élevés."
      },
    ]
  },
  {
    cat: 'Sécurité & Conformité',
    items: [
      {
        q: "TOVPAY est-elle une entreprise fiable et réglementée ?",
        a: "TOVPAY n'est ni une banque ni une institution de microfinance : c'est une plateforme technologique de distribution, qui connecte les emprunteurs à un établissement de crédit agréé partenaire (Orabank Bénin, partenariat en cours de finalisation). TOVPAY a adressé une notification volontaire de démarrage d'activité à la BCEAO avant tout déploiement, démarche confirmée par la Direction Nationale pour le Bénin."
      },
      {
        q: "Mes données personnelles sont-elles protégées ?",
        a: "Oui. La vérification d'identité (KYC) est systématique avant toute validation de compte ou de crédit, et vos données ne sont jamais revendues à des tiers."
      },
      {
        q: "Que se passe-t-il si je ne rembourse pas à temps ?",
        a: "Une pénalité de retard de 2 %/jour s'applique au-delà de l'échéance. Un retard de plus de 30 jours affecte fortement votre score, et toute fraude détectée entraîne le blocage immédiat du compte."
      },
    ]
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className={`border-b border-g100 last:border-0 ${open ? 'bg-g50 -mx-5 px-5 rounded-xl' : ''} transition-colors duration-200`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: EASE }}
    >
      <button
        className="w-full flex justify-between items-center text-left py-5 gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-display font-semibold text-[15px] transition-colors duration-200 ${open ? 'text-teal' : 'text-navy group-hover:text-teal'}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-200 ${open ? 'bg-teal border-teal text-white' : 'border-g100 text-g400'}`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-g600 text-[15px] leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  useDocumentMeta(
    'Questions fréquentes',
    'Toutes les réponses sur le nano-crédit et le micro-crédit mobile TOVPAY : taux, délais, remboursement et conformité.'
  )
  return (
    <>
      <PageHero
        breadcrumb="Accueil / FAQ"
        title="Questions fréquentes"
        desc="Tout ce que vous devez savoir sur TOVPAY, le crédit mobile et l'inclusion financière."
        bgImage={IMAGES.heroFaq}
      />

      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">

            {/* Sidebar catégories */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <motion.span className="section-tag block mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  CATÉGORIES
                </motion.span>
                <div className="flex flex-col gap-2">
                  {faqs.map((cat, i) => (
                    <motion.a
                      key={i}
                      href={`#cat-${i}`}
                      className="text-g600 text-sm py-2 px-3 rounded-lg hover:bg-g50 hover:text-navy transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {cat.cat}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-10 bg-g50 rounded-2xl p-6 border border-g100">
                  <div className="font-display font-bold text-navy text-base mb-2">Une autre question ?</div>
                  <p className="text-g600 text-sm leading-relaxed mb-4">Notre équipe répond en moins de 24h.</p>
                  <a href="/contact" className="inline-flex items-center gap-1.5 text-teal text-sm font-semibold hover:gap-3 transition-all">
                    Nous contacter
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-14">
              {faqs.map((cat, ci) => (
                <div key={ci} id={`cat-${ci}`}>
                  <motion.h2
                    className="font-display font-extrabold text-2xl text-navy mb-6 pb-4 border-b-2 border-teal/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    {cat.cat}
                  </motion.h2>
                  <div>
                    {cat.items.map((item, qi) => (
                      <FaqItem key={qi} q={item.q} a={item.a} index={qi} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
