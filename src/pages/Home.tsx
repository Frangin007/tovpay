import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import IMAGES from '../lib/images'
import { ArrowRightIcon } from '../components/Icon'
import RichText from '../components/RichText'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/home'
import { PROPOSED_FEE_PERCENT } from '../lib/site'
import { EASE_OUT, fadeIn, inView, makeFadeUp, makeSlide, reveal } from '../lib/motion'

// ── Animations (l'accueil a des décalages plus prononcés que les autres pages) ──
const fadeUp = makeFadeUp({ y: 40 })
const slideLeft = makeSlide('left')
const slideRight = makeSlide('right')

// ── Données indépendantes de la langue (valeurs chiffrées, images, liens) ──
// Uniquement des valeurs tirées des conditions d'utilisation (aucun chiffre d'activité) :
// montant versé en entier, frais proposés, rien à payer avant le versement, aucune pénalité.
const STATS_BAR_VALUES = [100, PROPOSED_FEE_PERCENT, 0, 0]

const HOW_STEPS_IMAGES = [IMAGES.smartphone, IMAGES.officeLaptop, IMAGES.officeWoman, IMAGES.phoneAgent]

const SOLUTIONS_MINI_LINKS = ['/partners', '/faq']

// ── Point d'étape : avancement du lancement ───────────────────
// Index de l'étape en cours dans t.journal.steps (0 plateforme, 1 accords, 2 ouverture).
// Passer à 2 une fois les accords conclus.
const LAUNCH_CURRENT_STEP = 1

type StepState = 'done' | 'current' | 'upcoming'

const STEP_CHIP_CLASS: Record<StepState, string> = {
  done: 'bg-teal/10 text-teal-ink',
  current: 'bg-gold/15 text-gold-ink',
  upcoming: 'bg-g100 text-g600',
}

function StepMarker({ state, index }: { state: StepState, index: number }) {
  const reduceMotion = useReducedMotion()
  if (state === 'done') {
    return (
      <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center shrink-0" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }
  if (state === 'current') {
    return (
      <div className="relative w-8 h-8 shrink-0 flex items-center justify-center" aria-hidden="true">
        {/* Halo qui pulse autour de l'étape en cours */}
        {!reduceMotion && (
          <motion.span
            className="absolute inset-0 rounded-full bg-gold/35"
            animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' }}
          />
        )}
        <span className="relative w-8 h-8 rounded-full bg-white border-2 border-gold flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-gold" />
        </span>
      </div>
    )
  }
  return (
    <div className="w-8 h-8 rounded-full border-2 border-dashed border-g400/60 text-g500 text-xs font-semibold flex items-center justify-center shrink-0" aria-hidden="true">
      {index + 1}
    </div>
  )
}

// ── Compteur : de 0 à la valeur, quand le chiffre entre dans l'écran ──
function useAnimatedCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const visible = useInView(ref, { once: true, margin: '-50px' })
  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [visible, target, duration])
  return { count, ref }
}

function StatItem({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const { count, ref } = useAnimatedCounter(value)
  return (
    <>
      <div className="font-display font-bold text-[2rem] sm:text-[2.5rem] text-white leading-none">
        <span ref={ref}>{count}</span>{suffix}
      </div>
      <div className="text-white/60 text-sm mt-2">{label}</div>
    </>
  )
}

// ── Main Home ──────────────────────────────────────────────────
export default function Home() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  // Parallaxe : le texte du hero s'efface à mesure que l'on fait défiler la page.
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  // Point final explicite (1 -> 0) : sans lui, l'animation native du navigateur fait réapparaître
  // le texte entre 70 % et 100 % du défilement du hero.
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0, 0])

  return (
    // overflow-x-clip et non overflow-x-hidden : hidden ferait de ce bloc un conteneur de
    // défilement, et l'effacement du hero (suivi du défilement de la page) ne bougerait plus.
    <div className="overflow-x-clip">

      {/* ═══════════════════════════════════════════════════════
          HERO - Plein écran sur photo, parallaxe
      ═══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-dvh flex items-center overflow-hidden px-[5%] bg-navy-deep">
        {/* Photo en image de fond : fixe sur grand écran (elle reste en place pendant que la page
            défile), normale sur mobile où le fond fixe fonctionne mal. Préchargée par index.html. */}
        <div
          role="img"
          aria-label={t.hero.imgAlt}
          className="absolute inset-0 bg-cover bg-center bg-scroll lg:bg-fixed"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        {/* Voile sombre : lisibilité du texte sur la photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/30" />

        <motion.div className="relative w-full max-w-[1280px] mx-auto pt-28 pb-20" style={{ opacity: heroOpacity }}>
          <div className="max-w-[640px]">
            <motion.h1
              className="font-display font-bold text-[2.5rem] sm:text-[3.5rem] lg:text-[4.25rem] leading-[1.05] text-white tracking-tight mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {t.hero.titleLine1}{' '}
              <br />
              <span className="text-teal">{t.hero.titleLine2}</span>
            </motion.h1>

            <motion.p
              className="text-white/75 text-lg leading-relaxed mb-10 max-w-[480px]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {t.hero.desc}
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Link to="/avance-sur-salaire" className="btn-primary">
                {t.hero.cta}
                <ArrowRightIcon />
              </Link>
            </motion.div>

            {/* Repères rapides */}
            <motion.div
              className="flex flex-wrap gap-x-10 gap-y-5 mt-14"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              {t.hero.quickStats.map((s, i) => (
                <div key={i} className="border-l border-white/25 pl-4">
                  <div className="font-display font-semibold text-white text-lg">{s.n}</div>
                  <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CHIFFRES CLÉS - Bande pleine largeur, chiffres qui défilent
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy py-14 px-[5%]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {t.statsBar.map((s, i) => (
              <motion.div key={i} className="text-center lg:px-8" variants={fadeUp} custom={i} {...inView}>
                <StatItem value={STATS_BAR_VALUES[i]} suffix={s.suffix} label={s.label} />
              </motion.div>
            ))}
          </div>
          <p className="text-white/50 text-xs text-center mt-10">{t.statsFootnote}</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          POINT D'ÉTAPE - Avancement du lancement en frise 3 étapes
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-g50 py-8 px-[5%]">
        <motion.div
          className="max-w-[1280px] mx-auto bg-white rounded-xl border border-g200 p-6 sm:p-8 grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-10 lg:items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <span className="section-tag">{t.journal.badge}</span>
            <h2 className="font-display font-bold text-navy text-xl sm:text-2xl leading-tight mt-2">{t.journal.title}</h2>
          </div>

          <ol className="grid sm:grid-cols-3">
            {t.journal.steps.map((step, i) => {
              const state: StepState = i < LAUNCH_CURRENT_STEP ? 'done' : i === LAUNCH_CURRENT_STEP ? 'current' : 'upcoming'
              const isLast = i === t.journal.steps.length - 1
              return (
                <li key={i} className="flex gap-4 sm:flex-col" aria-current={state === 'current' ? 'step' : undefined}>
                  {/* Repère + trait vers l'étape suivante (vertical sur mobile, horizontal au-delà) */}
                  <div className="flex flex-col sm:flex-row items-center">
                    <StepMarker state={state} index={i} />
                    {!isLast && (
                      state === 'done'
                        ? <div className="flex-1 w-0.5 sm:w-auto sm:h-0.5 my-1.5 sm:my-0 sm:mx-3 bg-teal" />
                        : <div className="flex-1 my-1.5 sm:my-0 sm:mx-3 border-l-2 sm:border-l-0 sm:border-t-2 border-dashed border-g200" />
                    )}
                  </div>
                  <div className={`pt-1 sm:pt-0 sm:pr-6 ${isLast ? '' : 'pb-6 sm:pb-0'}`}>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="font-display font-semibold text-navy text-[15px] leading-snug">{step.title}</span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${STEP_CHIP_CLASS[state]}`}>
                        {step.status}
                      </span>
                    </div>
                    {step.desc && <p className="text-g600 text-[13px] leading-relaxed mt-1.5">{step.desc}</p>}
                  </div>
                </li>
              )
            })}
          </ol>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          POURQUOI TOVPAY - Image + points
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.figure
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <img
              src={IMAGES.doctor}
              alt={t.why.imgAlt}
              loading="lazy"
              className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-g500">
              {t.why.imgCaption}
            </figcaption>
          </motion.figure>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.why.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 mb-6" variants={fadeUp} custom={1}>
              {t.why.titleLine1}
              <br />
              {t.why.titleLine2}
            </motion.h2>
            <motion.p className="text-g600 text-base leading-relaxed mb-8" variants={fadeUp} custom={2}>
              {t.why.paragraph}
            </motion.p>

            <ul className="space-y-5">
              {t.why.points.map((item, i) => (
                <motion.li key={i} className="flex gap-4 items-start" variants={fadeUp} custom={i + 3}>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-display font-semibold text-navy text-[15px] mb-0.5">{item.title}</div>
                    <div className="text-g600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COMMENT ÇA MARCHE - 4 étapes
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.howItWorks.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.howItWorks.title}
            </motion.h2>
            <motion.p className="text-g600 mt-3 max-w-[500px] mx-auto text-center" variants={fadeUp} custom={2}>
              {t.howItWorks.sub}
            </motion.p>
          </motion.div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {t.howItWorks.steps.map((step, i) => (
              <motion.li
                key={i}
                className="group transition-[translate] duration-300 hover:-translate-y-2"
                {...reveal({ y: 40 }, { duration: 0.6, delay: i * 0.15, ease: EASE_OUT })}
              >
                <div className="overflow-hidden rounded-lg mb-5">
                  <img
                    src={HOW_STEPS_IMAGES[i]}
                    alt={step.title}
                    loading="lazy"
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="text-teal-ink text-sm font-semibold mb-1.5">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{step.title}</h3>
                <p className="text-g600 text-sm leading-relaxed">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
          <p className="text-g600 text-sm text-center max-w-xl mx-auto mt-12">
            {t.howItWorks.closing}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          L'OFFRE ET LES PAGES UTILES
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" {...inView}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.solutions.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.solutions.title}
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Offre principale */}
            <motion.div
              className="group relative rounded-xl overflow-hidden min-h-[380px] transition-[scale] duration-300 hover:scale-[1.01]"
              {...reveal({ scale: 0.95 }, { duration: 0.6 })}
            >
              <img
                src={IMAGES.classroom}
                alt={t.solutions.mainCard.imgAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/60 to-navy-deep/10" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-display font-bold text-white text-2xl mb-2">{t.solutions.mainCard.title}</h3>
                <p className="text-white/75 text-sm mb-5 max-w-[340px]">
                  {t.solutions.mainCard.desc}
                </p>
                <Link to="/avance-sur-salaire" className="inline-flex items-center gap-2 w-fit text-teal text-sm font-semibold underline-offset-4 transition-[gap] duration-200 hover:gap-3 hover:underline">
                  {t.solutions.mainCard.link}
                  <ArrowRightIcon />
                </Link>
              </div>
            </motion.div>

            {/* Pages utiles */}
            <div className="flex flex-col gap-6">
              {t.solutions.miniCards.map((s, i) => (
                <motion.div
                  key={i}
                  className="md:flex-1 flex"
                  {...reveal({ x: 40 }, { delay: i * 0.1, duration: 0.5 })}
                >
                  <Link
                    to={SOLUTIONS_MINI_LINKS[i]}
                    className="group flex-1 flex items-center gap-5 rounded-xl border border-g200 bg-white p-6 no-underline transition-[color,background-color,border-color,scale] duration-200 hover:border-teal hover:bg-g50 hover:scale-[1.02]"
                  >
                    <div>
                      <h3 className="font-display font-bold text-navy text-base mb-1">{s.title}</h3>
                      <p className="text-g600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="ml-auto shrink-0 text-g400 transition-colors group-hover:text-teal-ink">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SÉCURITÉ - Se protéger des arnaques
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-[5%] bg-navy-deep">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 lg:items-center">
          <motion.div {...inView}>
            <motion.span className="section-tag text-teal" variants={fadeUp} custom={0}>{t.impact.eyebrow}</motion.span>
            <motion.h2 className="section-title text-white mt-3 mb-6" variants={fadeUp} custom={1}>
              {t.impact.titleLine1}
              <br />
              {t.impact.titleLine2}
            </motion.h2>
            <motion.p className="text-white/70 text-base leading-relaxed mb-8" variants={fadeUp} custom={2}>
              <RichText text={t.impact.paragraph} linkClassName="font-semibold text-white underline underline-offset-2" />
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link to="/faq" className="btn-primary">
                {t.impact.cta}
                <ArrowRightIcon />
              </Link>
            </motion.div>
          </motion.div>

          <motion.ul className="grid sm:grid-cols-2 gap-x-8 gap-y-8" {...inView}>
            {t.impact.items.map((item, i) => (
              <motion.li key={i} className="border-t border-white/15 pt-5" variants={fadeUp} custom={i}>
                <div className="font-display font-semibold text-white text-base mb-1.5">{item.title}</div>
                <div className="text-white/65 text-sm leading-relaxed">{item.desc}</div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PARTENAIRES RECHERCHÉS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <motion.p className="text-g500 text-xs font-semibold tracking-[0.08em] text-center mb-8" variants={fadeIn} {...inView}>
            {t.partners.eyebrow}
          </motion.p>
          <motion.ul className="grid grid-cols-2 lg:grid-cols-4 gap-4" {...inView}>
            {t.partners.items.map((p, i) => (
              <motion.li
                key={i}
                className="rounded-lg border border-g200 bg-white px-5 py-4 text-center transition-[translate,scale,box-shadow] duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(13,34,81,0.12)]"
                variants={fadeUp}
                custom={i}
              >
                <div className="font-semibold text-navy text-sm">{p.name}</div>
                <div className="text-g500 text-xs mt-1">{p.type}</div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          APPEL FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-[5%] overflow-hidden bg-navy-deep">
        <img
          src={IMAGES.team}
          alt={t.finalCta.imgAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/90" />

        <motion.div className="relative max-w-[800px] mx-auto text-center" {...inView}>
          <motion.h2
            className="font-display font-bold text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] text-white leading-tight tracking-tight mb-6"
            variants={fadeUp}
            custom={0}
          >
            {t.finalCta.titleLine1}
            <br />
            {t.finalCta.titleLine2}
          </motion.h2>

          <motion.p className="text-white/70 text-lg leading-relaxed mb-10" variants={fadeUp} custom={1}>
            {t.finalCta.paragraph}
          </motion.p>

          <motion.div variants={fadeUp} custom={2}>
            <Link to="/partners" className="btn-primary">
              {t.finalCta.cta}
            </Link>
          </motion.div>

          <motion.p className="text-white/45 text-xs mt-8" variants={fadeIn} custom={3}>
            {t.finalCta.footnote}
          </motion.p>
        </motion.div>
      </section>

    </div>
  )
}
