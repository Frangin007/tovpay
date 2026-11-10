import { motion } from 'framer-motion'
import { CheckCircleIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/partners'
import { PARTNERSHIP_CONTACT_PATH } from '../lib/site'
import { EASE_OUT as EASE, inView, makeFadeUp, reveal } from '../lib/motion'

const fadeUp = makeFadeUp({ delayStep: 0.1 })

export default function Partners() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  const s = t.partnersSection
  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroPartners}
      />

      {/* Le projet et les partenaires recherchés */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{s.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {s.title}
            </motion.h2>
          </motion.div>

          {/* Le projet */}
          <motion.div
            className="grid lg:grid-cols-2 rounded-xl overflow-hidden border border-g200"
            {...reveal({ y: 30 }, { duration: 0.7, ease: EASE })}
          >
            <img src={IMAGES.heroAdvance} alt={s.feature.imgAlt} loading="lazy" className="w-full h-56 lg:h-full object-cover" />
            <div className="p-8 lg:p-10 flex flex-col justify-center bg-g50">
              <p className="text-g600 text-sm mb-1.5">{s.feature.tagline}</p>
              <h3 className="font-display font-bold text-navy text-2xl">{s.feature.name}</h3>
              <p className="text-g600 text-sm mt-2 leading-relaxed">{s.feature.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {s.feature.qualities.map((q, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-navy text-sm leading-snug">
                    <CheckCircleIcon size={17} strokeWidth={2} className="text-teal shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Ce que nous recherchons */}
          <div className="mt-16">
            <motion.h3
              className="font-display font-bold text-navy text-xl mb-6"
              {...reveal({ y: 20 }, { duration: 0.6, ease: EASE })}
            >
              {s.needs.label}
            </motion.h3>
            <ul className="grid sm:grid-cols-3 gap-x-8 gap-y-8">
              {s.needs.items.map((p, i) => (
                <motion.li
                  key={i}
                  className="border-t border-g200 pt-5"
                  {...reveal({ y: 30 }, { delay: i * 0.08, duration: 0.6, ease: EASE })}
                >
                  <div className="font-display font-semibold text-navy text-[15px] mb-1.5">{p.name}</div>
                  <p className="text-g600 text-sm leading-relaxed">{p.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Cadre réglementaire */}
          <motion.div
            className="mt-16 rounded-xl border border-g200 bg-g50 p-7"
            {...reveal({ y: 20 }, { duration: 0.6, ease: EASE })}
          >
            <div className="text-g600 text-xs font-semibold uppercase tracking-wide">{s.regulatory.label}</div>
            <h3 className="font-display font-bold text-navy text-lg mt-1.5">{s.regulatory.name}</h3>
            <p className="text-g600 text-sm mt-1.5 leading-relaxed max-w-2xl">{s.regulatory.desc}</p>
          </motion.div>

          <motion.p className="text-g500 text-xs text-center mt-8 max-w-2xl mx-auto leading-relaxed" {...reveal({})}>
            {s.disclaimer}
          </motion.p>
        </div>
      </section>

      {/* Ce que la plateforme apporte */}
      <section className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.platform.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 mb-6" variants={fadeUp} custom={1}>
              {t.platform.titleLine1}
              <br />
              {t.platform.titleLine2}
            </motion.h2>
            <motion.p className="text-g600 leading-relaxed text-[15px] mb-8" variants={fadeUp} custom={2}>
              {t.platform.intro}
            </motion.p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {t.platform.items.map((r, i) => (
                <motion.li key={i} className="border-t border-g200 pt-4" variants={fadeUp} custom={i + 3} {...inView}>
                  <h3 className="font-display font-semibold text-navy text-[15px] mb-1">{r.title}</h3>
                  <p className="text-g600 text-sm leading-relaxed">{r.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...reveal({ scale: 0.96 }, { duration: 0.8, ease: EASE })}>
            <img src={IMAGES.officeLaptop} alt={t.platform.imgAlt} loading="lazy" className="w-full h-[360px] lg:h-[460px] object-cover rounded-xl" />
            <div className="mt-4 rounded-lg border border-g200 bg-white px-5 py-4">
              <div className="font-display font-semibold text-navy text-sm mb-1">{t.platform.cardTitle}</div>
              <div className="text-g600 text-sm">{t.platform.cardDesc}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos principes */}
      <section className="py-20 px-[5%] bg-navy-deep">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" {...inView}>
            <motion.span className="section-tag text-teal" variants={fadeUp} custom={0}>{t.principles.eyebrow}</motion.span>
            <motion.h2 className="section-title text-white text-center mt-3" variants={fadeUp} custom={1}>
              {t.principles.title}
            </motion.h2>
          </motion.div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mb-12">
            {t.principles.items.map((p, i) => (
              <motion.li
                key={i}
                className="border-t border-white/15 pt-5"
                {...reveal({ y: 20 }, { duration: 0.6, delay: (i % 3) * 0.1, ease: EASE })}
              >
                <div className="text-teal text-sm font-semibold mb-2" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <p className="text-white/80 text-sm leading-relaxed">{p}</p>
              </motion.li>
            ))}
          </ol>

          <motion.p className="text-white/50 text-xs text-center max-w-2xl mx-auto leading-relaxed" {...reveal({})}>
            {t.principles.footnote}
          </motion.p>
        </div>
      </section>

      <FinalCta
        title={t.finalCta.title}
        desc={t.finalCta.desc}
        primary={{ label: t.finalCta.primary, to: PARTNERSHIP_CONTACT_PATH }}
        secondary={{ label: t.finalCta.secondary, to: '/avance-sur-salaire' }}
        bgImage={IMAGES.meeting}
      />
    </>
  )
}
