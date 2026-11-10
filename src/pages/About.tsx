import { motion } from 'framer-motion'
import { CheckCircleIcon } from '../components/Icon'
import Avatar from '../components/Avatar'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import Photo from '../components/Photo'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/about'
import { EASE_OUT as EASE, fadeUp, inView, reveal } from '../lib/motion'

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
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.mission.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 mb-5" variants={fadeUp} custom={1}>
              {t.mission.titleLine1}
              <br />{t.mission.titleLine2}
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

          <div className="flex flex-col gap-8">
            {/* Photo : la photo zoome légèrement au survol */}
            <motion.div
              className="group overflow-hidden rounded-xl"
              {...reveal({ scale: 0.96 }, { duration: 0.8, ease: EASE })}
            >
              <Photo
                src={IMAGES.officeWoman}
                alt={t.mission.imgAlt}
                sizes="(min-width: 1024px) 610px, 90vw"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Valeurs */}
            <motion.div {...inView}>
              <motion.h3 className="font-display font-bold text-xl text-navy mb-4" variants={fadeUp} custom={0}>
                {t.mission.valeursTitle}
              </motion.h3>
              <ul className="flex flex-col gap-2.5">
                {t.mission.valeurs.map((v, i) => (
                  <motion.li key={i} className="flex items-start gap-3" variants={fadeUp} custom={i + 1}>
                    <CheckCircleIcon size={17} strokeWidth={2} className="text-teal shrink-0 mt-0.5" />
                    <span className="text-g600 text-sm">{v}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.history.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 mb-10" variants={fadeUp} custom={1}>
              {t.history.title}
            </motion.h2>
          </motion.div>
          <ol className="relative pl-8 border-l-2 border-g200 flex flex-col gap-10">
            {t.history.timeline.map((item, i) => (
              <motion.li
                key={i}
                className="relative"
                {...reveal({ x: -30 }, { duration: 0.6, delay: i * 0.1, ease: EASE })}
              >
                <div className="absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-teal ring-4 ring-g50" aria-hidden="true" />
                <div className="text-teal-ink font-display font-semibold text-sm mb-1">{item.year}</div>
                <h3 className="font-display font-bold text-navy text-xl mb-1.5">{item.title}</h3>
                <p className="text-g600 text-sm leading-relaxed">{item.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-12" {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.team.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>{t.team.title}</motion.h2>
          </motion.div>
          <ul className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {t.team.members.map((m, i) => (
              // Au survol, la carte monte et un anneau vert entoure le monogramme
              <motion.li
                key={i}
                className="group rounded-xl border border-g200 p-7 text-center flex flex-col items-center transition-[translate,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,185,142,0.12)]"
                {...reveal({ y: 30 }, { delay: i * 0.1, duration: 0.6, ease: EASE })}
              >
                <div className="relative">
                  <Avatar name={m.name} size={80} />
                  <div className="absolute inset-0 rounded-full ring-2 ring-teal/0 group-hover:ring-teal/30 transition-[box-shadow] duration-300" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-navy text-base mt-4">{m.name}</h3>
                <div className="text-g600 text-sm mt-0.5">{m.role}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        title={t.finalCta.title}
        desc={t.finalCta.desc}
        primary={{ label: t.finalCta.primary, to: '/contact' }}
        secondary={{ label: t.finalCta.secondary, to: '/partners' }}
        bgImage={IMAGES.team}
      />
    </>
  )
}
