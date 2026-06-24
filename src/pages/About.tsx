import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { CheckCircleIcon } from '../components/Icon'
import Avatar from '../components/Avatar'
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

const timeline = [
  { year: '2023', title: 'Fondation de TOVPAY', desc: "Lancement de la plateforme en Côte d'Ivoire avec 50 clients pionniers" },
  { year: '2024 Q1', title: 'Partenariat Orabank', desc: "Accord d'adossement bancaire avec Orabank, leader bancaire panafricain" },
  { year: '2024 Q3', title: 'Expansion régionale', desc: 'Lancement en Sénégal, Togo et Bénin — 330+ clients actifs' },
  { year: '2025', title: 'Consolidation UEMOA', desc: 'Présence dans 6 pays UEMOA, intégration scoring IA avancé' },
  { year: '2026 →', title: 'Ambition 2028', desc: 'Série A en cours, expansion 12 pays africains prévue' },
]

const team = [
  { name: 'Youssouf Diallo', role: 'CEO & Co-Founder', bio: 'Ex-Orabank, 12 ans en fintech panafricaine. MBA ISM Dakar.' },
  { name: 'Ama Mensah', role: 'CTO', bio: 'Engineer IA/ML, Paytech Kenya. Spécialiste scoring mobile.' },
  { name: 'Mamadou Sow', role: 'CFO', bio: 'Ex-Bpifrance, CFA. Expert conformité BCEAO et financement structuré.' },
  { name: 'Sarah Kofi', role: 'COO', bio: 'Ex-MTN, 10 ans digital payments. Expansion UEMOA & partenariats.' },
]

const valeurs = [
  'Accessibilité : crédit pour tous, partout',
  'Transparence : zéro frais cachés',
  "Innovation : l'IA au service de l'humain",
  'Intégrité : conformité BCEAO totale',
]

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="Accueil / À Propos"
        title="Notre histoire"
        desc="Découvrez comment TOVPAY transforme l'inclusion financière en Afrique de l'Ouest."
        bgImage={IMAGES.heroAbout}
      />

      {/* MISSION */}
      <section className="py-28 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.span className="section-tag" variants={fadeUp} custom={0}>MISSION</motion.span>
              <motion.h2 className="section-title mt-3 mb-5" variants={fadeUp} custom={1}>
                Démocratiser le crédit
                <br /><span className="text-teal">en Afrique de l'Ouest.</span>
              </motion.h2>
              <motion.p className="text-g600 leading-relaxed text-[15px] mb-5" variants={fadeUp} custom={2}>
                TOVPAY est fondée sur la conviction que le crédit est un droit, pas un privilège. Chaque entrepreneur africain, quel que soit son statut bancaire, mérite une chance de financer son activité.
              </motion.p>
              <motion.p className="text-g600 leading-relaxed text-[15px]" variants={fadeUp} custom={3}>
                Notre réseau de chefs d'agence locaux forme la colonne vertébrale de notre modèle : proximité humaine et technologie IA pour un résultat concret.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {/* Image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden h-56 group"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <img
                  src={IMAGES.whyImg2}
                  alt="Mission TovPay"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
              </motion.div>

              {/* Valeurs */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                <motion.h3 className="font-display font-bold text-xl text-navy mb-4" variants={fadeUp} custom={0}>
                  Nos valeurs
                </motion.h3>
                <ul className="flex flex-col gap-2.5">
                  {valeurs.map((v, i) => (
                    <motion.li key={i} className="flex items-center gap-3" variants={fadeUp} custom={i + 1}>
                      <CheckCircleIcon size={17} className="text-teal shrink-0" />
                      <span className="text-g600 text-sm">{v}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-28 px-[5%] bg-g50 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: 'radial-gradient(rgba(0,185,142,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-[1280px] mx-auto relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>HISTOIRE</motion.span>
            <motion.h2 className="section-title mt-3 mb-12" variants={fadeUp} custom={1}>
              Une trajectoire remarquable.
            </motion.h2>
          </motion.div>
          <div className="relative pl-8 border-l-2 border-g100 flex flex-col gap-10">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <div className="absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-teal ring-4 ring-white" />
                <div className="text-teal font-display font-bold text-sm mb-1">{t.year}</div>
                <h4 className="font-display font-bold text-navy text-xl mb-1.5">{t.title}</h4>
                <p className="text-g600 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="py-28 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>ÉQUIPE</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>Notre leadership.</motion.h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl border border-g100 p-7 text-center flex flex-col items-center shadow-sm group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(0,185,142,0.12)' }}
              >
                <div className="relative mb-4">
                  <Avatar name={m.name} size={88} />
                  <div className="absolute inset-0 rounded-full ring-2 ring-teal/0 group-hover:ring-teal/30 transition-all duration-300" />
                </div>
                <h4 className="font-display font-bold text-navy text-base">{m.name}</h4>
                <div className="text-teal text-xs font-semibold mb-3">{m.role}</div>
                <p className="text-g600 text-[13px] leading-relaxed">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Construisons ensemble l'inclusion financière."
        desc="Client, partenaire ou investisseur — il y a une place pour vous chez TOVPAY."
        primary={{ label: 'Nous contacter', to: '/contact' }}
        secondary={{ label: 'Espace investisseurs →', to: '/investors' }}
        bgImage={IMAGES.impact3}
      />
    </>
  )
}
