import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  CreditIcon, AiSparkIcon, HandshakeIcon,
  PhoneDownloadIcon, IdIcon, CheckCircleIcon,
} from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/LanguageContext'
import { fr, en } from '../i18n/dictionaries/services'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
}

const SERVICES_DATA = [
  { icon: CreditIcon, color: '#00B98E', link: '/nano-credit', img: IMAGES.howStep3 },
  { icon: HandshakeIcon, color: '#1A3FA8', link: '/agents', img: IMAGES.impact2 },
  { icon: AiSparkIcon, color: '#7C3AED', link: '/agents', img: IMAGES.impact4 },
]

const STEPS_DATA = [
  { Icon: PhoneDownloadIcon, img: IMAGES.howStep1 },
  { Icon: IdIcon, img: IMAGES.howStep2 },
  { Icon: AiSparkIcon, img: IMAGES.howStep3 },
  { Icon: CreditIcon, img: IMAGES.howStep4 },
]

export default function Services() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroServices}
      />

      {/* SERVICES LISTE */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-24">
          {t.services.map((service, i) => {
            const data = SERVICES_DATA[i]
            const ServiceIcon = data.icon
            return (
              <motion.div
                key={i}
                className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:[&>:first-child]:order-2' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                {/* Texte */}
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${data.color}15`, color: data.color }}
                  >
                    <ServiceIcon size={28} />
                  </div>
                  <h2 className="font-display font-extrabold text-[2rem] text-navy mb-4">{service.title}</h2>
                  <p className="text-g600 text-[15px] leading-relaxed mb-7">{service.desc}</p>

                  <div className="flex flex-col gap-2.5 mb-8">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: `${data.color}15`, color: data.color }}
                        >
                          <CheckCircleIcon size={12} strokeWidth={2.5} />
                        </div>
                        <span className="text-g600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={data.link}>
                    <motion.span
                      className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3.5 rounded-xl cursor-pointer text-sm"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {t.learnMore}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </motion.span>
                  </Link>
                </div>

                {/* Image */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden h-[340px] group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={data.img}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent" />
                  <div
                    className="absolute top-5 right-5 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${data.color}E0`, color: 'white' }}
                  >
                    <ServiceIcon size={20} />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 px-[5%] bg-g50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(0,185,142,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-[1280px] mx-auto relative">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.howItWorks.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>{t.howItWorks.title}</motion.h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.howItWorks.steps.map((s, i) => {
              const data = STEPS_DATA[i]
              const StepIcon = data.Icon
              return (
                <motion.div
                  key={i}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-white rounded-3xl overflow-hidden border border-g100 shadow-sm h-full group-hover:shadow-xl group-hover:border-teal/20 transition-all duration-300">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={data.img}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 to-navy/20" />
                      <div className="absolute top-4 left-4 font-display font-extrabold text-5xl leading-none text-white/20">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="absolute top-4 right-4 w-9 h-9 bg-teal rounded-xl flex items-center justify-center text-white">
                        <StepIcon size={18} />
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-display font-bold text-navy text-lg mb-1.5">{s.title}</h4>
                      <p className="text-g600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <p className="text-g600 text-sm text-center max-w-xl mx-auto mt-10">
            {t.howItWorks.closing}
          </p>
        </div>
      </section>

      <FinalCta
        title={t.finalCta.title}
        desc={t.finalCta.desc}
        primary={{ label: t.finalCta.primary, to: '/nano-credit' }}
        secondary={{ label: t.finalCta.secondary, to: '/contact' }}
        bgImage={IMAGES.impact1}
      />
    </>
  )
}
