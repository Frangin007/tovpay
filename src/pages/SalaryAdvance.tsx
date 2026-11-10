import { motion } from 'framer-motion'
import { ArrowRightIcon, CheckCircleIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import SmartLink from '../components/SmartLink'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/advance'
import { EASE_OUT as EASE, fadeUp, inView, reveal } from '../lib/motion'

// Photos des rangées texte + image, dans l'ordre d'affichage
const ROW_IMAGES = [IMAGES.officeSmile, IMAGES.teacher, IMAGES.readingFile]

export default function SalaryAdvance() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroAdvance}
      />

      {/* PRINCIPE, BÉNÉFICIAIRES, DOCUMENTS */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20 lg:gap-24">
          {t.services.map((row, i) => {
            const { cta } = row
            return (
              <motion.div
                key={i}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${i % 2 === 1 ? 'lg:[&>:first-child]:order-2' : ''}`}
                {...reveal({ y: 40 }, { duration: 0.7, ease: EASE }, '-80px')}
              >
                {/* Texte */}
                <div>
                  <h2 className="font-display font-bold text-[1.75rem] sm:text-[2rem] text-navy leading-tight mb-4">{row.title}</h2>
                  <p className="text-g600 text-[15px] leading-relaxed mb-7">{row.desc}</p>

                  <ul className="flex flex-col gap-2.5">
                    {row.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-g600 text-sm leading-relaxed">
                        <CheckCircleIcon size={17} strokeWidth={2} className="text-teal shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {cta && (
                    <div className="mt-8">
                      <SmartLink href={cta.to} external={cta.external} className="btn-primary text-sm bg-navy hover:bg-navy-deep">
                        {cta.label}
                        <ArrowRightIcon />
                      </SmartLink>
                    </div>
                  )}
                </div>

                {/* Image : grossit légèrement au survol, la photo zoome à l'intérieur */}
                <div className="group overflow-hidden rounded-xl transition-[scale] duration-400 hover:scale-[1.02]">
                  <img
                    src={ROW_IMAGES[i]}
                    alt={row.title}
                    loading="lazy"
                    className="w-full h-[300px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* PARCOURS EN 7 ÉTAPES */}
      <section id="parcours" className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.journey.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.journey.title}
            </motion.h2>
          </motion.div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {t.journey.steps.map((s, i) => (
              <motion.li
                key={i}
                className="border-t border-g200 pt-5"
                {...reveal({ y: 30 }, { delay: (i % 4) * 0.1, duration: 0.5, ease: EASE })}
              >
                <div className="text-teal-ink text-sm font-semibold mb-2" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-display font-bold text-navy text-base mb-1.5">{s.title}</h3>
                <p className="text-g600 text-sm leading-relaxed">{s.desc}</p>
              </motion.li>
            ))}
          </ol>
          <p className="text-g600 text-sm text-center max-w-xl mx-auto mt-12">
            {t.journey.closing}
          </p>
        </div>
      </section>

      {/* FRAIS (sans calcul ni montant) */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.fees.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.fees.title}
            </motion.h2>
            <motion.p className="section-sub max-w-xl mx-auto" variants={fadeUp} custom={2}>
              {t.fees.sub}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Pourcentage proposé */}
            <motion.div
              className="bg-g50 rounded-xl p-8 border border-g200"
              {...reveal({ x: -40 }, { duration: 0.7, ease: EASE })}
            >
              <div className="text-navy text-xs font-semibold mb-3 uppercase tracking-wide">{t.fees.rateLabel}</div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <span className="font-display font-bold text-[3rem] text-navy leading-none">{t.fees.rateValue}</span>
                <span className="text-[1.1rem] text-g500 font-medium">{t.fees.rateDesc}</span>
              </div>
              <p className="text-teal-ink text-xs font-semibold mb-8">{t.fees.rateNotice}</p>

              <div className="text-navy text-xs font-semibold mb-3 uppercase tracking-wide">{t.fees.pointsLabel}</div>
              <ul className="flex flex-col gap-3">
                {t.fees.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-g600 text-sm leading-relaxed">
                    <CheckCircleIcon size={16} strokeWidth={2} className="text-teal shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Calcul, en mots */}
            <motion.div
              className="flex flex-col gap-4"
              {...reveal({ x: 40 }, { duration: 0.7, ease: EASE })}
            >
              <div className="bg-navy rounded-xl p-8 text-white">
                <div className="text-white/60 text-xs mb-1">{t.fees.result.amountLabel}</div>
                <div className="font-display font-bold text-2xl mb-5">{t.fees.result.amountValue}</div>

                {t.fees.result.rows.map(row => (
                  <div key={row.label} className="flex flex-wrap justify-between items-center gap-x-4 gap-y-1 py-3 border-b border-white/10">
                    <span className="text-white/60 text-sm">{row.label}</span>
                    <span className="font-semibold text-right">{row.value}</span>
                  </div>
                ))}

                <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-1 pt-5 mt-2">
                  <span className="text-white/75 font-semibold">{t.fees.result.totalLabel}</span>
                  <span className="font-display font-bold text-xl text-teal text-right">{t.fees.result.totalValue}</span>
                </div>

                {t.fees.result.notes.map((note, i) => (
                  <div key={i} className={`${i === 0 ? 'mt-5 pt-4 border-t border-white/10' : 'mt-2'} text-white/50 text-[11px] leading-relaxed`}>
                    {note}
                  </div>
                ))}
              </div>

              <p className="text-center text-g500 text-xs leading-relaxed">
                {t.fees.disclaimer}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REMBOURSEMENT */}
      <section className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.repayment.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.repayment.title}
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Deux façons de rembourser */}
            <motion.div
              className="bg-white rounded-xl border border-g200 p-7 sm:p-8"
              {...reveal({ x: -30 }, { duration: 0.6, ease: EASE })}
            >
              <h3 className="font-display font-bold text-navy text-xl mb-5">{t.repayment.repayTitle}</h3>
              <ul className="flex flex-col gap-3">
                {t.repayment.repay.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-g600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* En cas de difficulté */}
            <motion.div
              className="bg-navy rounded-xl p-7 sm:p-8"
              {...reveal({ x: 30 }, { duration: 0.6, ease: EASE })}
            >
              <h3 className="font-display font-bold text-white text-xl mb-5">{t.repayment.difficultyTitle}</h3>
              <ul className="flex flex-col gap-3">
                {t.repayment.difficulty.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" aria-hidden="true" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <p className="text-g600 text-sm text-center max-w-xl mx-auto mt-10">
            {t.repayment.closing}
          </p>
        </div>
      </section>

      <FinalCta
        title={t.finalCta.title}
        desc={t.finalCta.desc}
        primary={{ label: t.finalCta.cta, to: '/faq' }}
        bgImage={IMAGES.classroom}
      />
    </>
  )
}
