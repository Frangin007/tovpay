import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { CheckCircleIcon } from '../components/Icon'
import Avatar from '../components/Avatar'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/LanguageContext'
import { fr, en } from '../i18n/dictionaries/about'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
}

export default function About() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroAbout}
      />

      {/* MISSION */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.mission.eyebrow}</motion.span>
              <motion.h2 className="section-title mt-3 mb-5" variants={fadeUp} custom={1}>
                {t.mission.titleLine1}
                <br /><span className="text-teal">{t.mission.titleLine2}</span>
              </motion.h2>
              <motion.p className="text-g600 leading-relaxed text-[15px] mb-5" variants={fadeUp} custom={2}>
                {t.mission.p1}
              </motion.p>
              <motion.p className="text-g600 leading-relaxed text-[15px] mb-5" variants={fadeUp} custom={3}>
                {t.mission.p2}
              </motion.p>
              <motion.p className="text-g600 leading-relaxed text-[15px]" variants={fadeUp} custom={4}>
                {t.mission.p3}
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
                  alt={t.mission.imgAlt}
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
                  {t.mission.valeursTitle}
                </motion.h3>
                <ul className="flex flex-col gap-2.5">
                  {t.mission.valeurs.map((v, i) => (
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
      <section className="pt-20 pb-14 px-[5%] bg-g50 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: 'radial-gradient(rgba(0,185,142,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-[1280px] mx-auto relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.history.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 mb-10" variants={fadeUp} custom={1}>
              {t.history.title}
            </motion.h2>
          </motion.div>
          <div className="relative pl-8 border-l-2 border-g100 flex flex-col gap-10">
            {t.history.timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <div className="absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-teal ring-4 ring-white" />
                <div className="text-teal font-display font-bold text-sm mb-1">{item.year}</div>
                <h4 className="font-display font-bold text-navy text-xl mb-1.5">{item.title}</h4>
                <p className="text-g600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="pt-14 pb-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.team.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>{t.team.title}</motion.h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {t.team.members.map((m, i) => (
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
                <div className="text-teal text-xs font-semibold">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title={t.finalCta.title}
        desc={t.finalCta.desc}
        primary={{ label: t.finalCta.primary, to: '/contact' }}
        secondary={{ label: t.finalCta.secondary, to: '/investors' }}
        bgImage={IMAGES.impact3}
      />
    </>
  )
}
