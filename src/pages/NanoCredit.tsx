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
import { useT } from '../i18n/LanguageContext'
import { fr, en } from '../i18n/dictionaries/nanoCredit'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
}

const STEP_ICONS = [PhoneDownloadIcon, IdIcon, AiSparkIcon, CheckCircleIcon]

export default function NanoCredit() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroNanoCredit}
      />

      <LoanSimulator />

      {/* CONDITIONS */}
      <section className="py-20 px-[5%] bg-g50 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.conditions.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.conditions.title}
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
                <img src={IMAGES.howStep2} alt={t.conditions.criteresImgAlt} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </div>
              <div className="p-7">
                <div className="text-teal mb-3"><DocumentIcon size={24} /></div>
                <h4 className="font-display font-bold text-navy text-xl mb-4">{t.conditions.criteresTitle}</h4>
                <ul className="flex flex-col gap-2.5">
                  {t.conditions.criteres.map((c, i) => (
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
                <img src={IMAGES.impact4} alt={t.conditions.avantagesImgAlt} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              </div>
              <div className="p-7">
                <div className="text-lime mb-3"><AiSparkIcon size={24} /></div>
                <h4 className="font-display font-bold text-white text-xl mb-4">{t.conditions.avantagesTitle}</h4>
                <ul className="flex flex-col gap-2.5">
                  {t.conditions.avantages.map((a, i) => (
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
            {t.conditions.steps.map((s, i) => {
              const StepIcon = STEP_ICONS[i]
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl border border-g100 p-6 text-center relative hover:shadow-lg hover:border-teal/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute top-4 right-4 font-display font-extrabold text-4xl text-g100 leading-none">{String(i + 1).padStart(2, '0')}</div>
                  <div className="text-teal flex justify-center mb-3 relative z-10"><StepIcon size={26} /></div>
                  <h4 className="font-display font-bold text-navy text-base mb-1.5">{s.title}</h4>
                  <p className="text-g600 text-sm">{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
          <p className="text-g600 text-sm text-center max-w-xl mx-auto mt-10">
            {t.conditions.closing}
          </p>
        </div>
      </section>

      <FinalCta
        title={t.finalCta.title}
        desc={t.finalCta.desc}
        primary={{ label: t.finalCta.primary, to: '/contact' }}
        secondary={{ label: t.finalCta.secondary, to: '/faq' }}
        bgImage={IMAGES.whyImg1}
      />
    </>
  )
}
