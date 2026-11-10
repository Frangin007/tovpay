import { Link } from 'react-router-dom'
import IMAGES from '../lib/images'
import { ArrowRightIcon } from '../components/Icon'
import RichText from '../components/RichText'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/home'
import { PROPOSED_FEE_PERCENT } from '../lib/site'

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
      <div className="w-8 h-8 rounded-full bg-white border-2 border-gold flex items-center justify-center shrink-0" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-gold" />
      </div>
    )
  }
  return (
    <div className="w-8 h-8 rounded-full border-2 border-dashed border-g400/60 text-g500 text-xs font-semibold flex items-center justify-center shrink-0" aria-hidden="true">
      {index + 1}
    </div>
  )
}

// ── Main Home ──────────────────────────────────────────────────
export default function Home() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)

  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          HERO - Plein écran sur photo
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-dvh flex items-center overflow-hidden px-[5%] bg-navy-deep">
        <img src={IMAGES.hero} alt={t.hero.imgAlt} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
        {/* Voile sombre : lisibilité du texte sur la photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/30" />

        <div className="relative w-full max-w-[1280px] mx-auto pt-28 pb-20">
          <div className="max-w-[640px]">
            <h1 className="font-display font-bold text-[2.5rem] sm:text-[3.5rem] lg:text-[4.25rem] leading-[1.05] text-white tracking-tight mb-6">
              {t.hero.titleLine1}{' '}
              <br />
              <span className="text-teal">{t.hero.titleLine2}</span>
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-[480px]">
              {t.hero.desc}
            </p>

            <Link to="/avance-sur-salaire" className="btn-primary">
              {t.hero.cta}
              <ArrowRightIcon />
            </Link>

            {/* Repères rapides */}
            <div className="flex flex-wrap gap-x-10 gap-y-5 mt-14">
              {t.hero.quickStats.map((s, i) => (
                <div key={i} className="border-l border-white/25 pl-4">
                  <div className="font-display font-semibold text-white text-lg">{s.n}</div>
                  <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CHIFFRES CLÉS - Bande pleine largeur
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy py-14 px-[5%]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {t.statsBar.map((s, i) => (
              <div key={i} className="text-center lg:px-8">
                <div className="font-display font-bold text-[2rem] sm:text-[2.5rem] text-white leading-none">
                  {STATS_BAR_VALUES[i]}{s.suffix}
                </div>
                <div className="text-white/60 text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-xs text-center mt-10">{t.statsFootnote}</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          POINT D'ÉTAPE - Avancement du lancement en frise 3 étapes
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-g50 py-8 px-[5%]">
        <div className="max-w-[1280px] mx-auto bg-white rounded-xl border border-g200 p-6 sm:p-8 grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-10 lg:items-center">
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
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          POURQUOI TOVPAY - Image + points
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <figure>
            <img
              src={IMAGES.doctor}
              alt={t.why.imgAlt}
              loading="lazy"
              className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-g500">
              {t.why.imgCaption}
            </figcaption>
          </figure>

          <div>
            <span className="section-tag">{t.why.eyebrow}</span>
            <h2 className="section-title mt-3 mb-6">
              {t.why.titleLine1}
              <br />
              {t.why.titleLine2}
            </h2>
            <p className="text-g600 text-base leading-relaxed mb-8">
              {t.why.paragraph}
            </p>

            <ul className="space-y-5">
              {t.why.points.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-display font-semibold text-navy text-[15px] mb-0.5">{item.title}</div>
                    <div className="text-g600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COMMENT ÇA MARCHE - 4 étapes
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">{t.howItWorks.eyebrow}</span>
            <h2 className="section-title mt-3 text-center">
              {t.howItWorks.title}
            </h2>
            <p className="text-g600 mt-3 max-w-[500px] mx-auto text-center">
              {t.howItWorks.sub}
            </p>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {t.howItWorks.steps.map((step, i) => (
              <li key={i}>
                <img
                  src={HOW_STEPS_IMAGES[i]}
                  alt={step.title}
                  loading="lazy"
                  className="w-full h-44 object-cover rounded-lg mb-5"
                />
                <div className="text-teal-ink text-sm font-semibold mb-1.5">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{step.title}</h3>
                <p className="text-g600 text-sm leading-relaxed">{step.desc}</p>
              </li>
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
          <div className="text-center mb-14">
            <span className="section-tag">{t.solutions.eyebrow}</span>
            <h2 className="section-title mt-3 text-center">
              {t.solutions.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Offre principale */}
            <div className="relative rounded-xl overflow-hidden min-h-[380px]">
              <img
                src={IMAGES.classroom}
                alt={t.solutions.mainCard.imgAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/60 to-navy-deep/10" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-display font-bold text-white text-2xl mb-2">{t.solutions.mainCard.title}</h3>
                <p className="text-white/75 text-sm mb-5 max-w-[340px]">
                  {t.solutions.mainCard.desc}
                </p>
                <Link to="/avance-sur-salaire" className="inline-flex items-center gap-2 w-fit text-teal text-sm font-semibold underline-offset-4 hover:underline">
                  {t.solutions.mainCard.link}
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>

            {/* Pages utiles */}
            <div className="flex flex-col gap-6">
              {t.solutions.miniCards.map((s, i) => (
                <Link
                  key={i}
                  to={SOLUTIONS_MINI_LINKS[i]}
                  className="group md:flex-1 flex items-center gap-5 rounded-xl border border-g200 bg-white p-6 no-underline transition-colors duration-200 hover:border-teal hover:bg-g50"
                >
                  <div>
                    <h3 className="font-display font-bold text-navy text-base mb-1">{s.title}</h3>
                    <p className="text-g600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="ml-auto shrink-0 text-g400 transition-colors group-hover:text-teal-ink">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Link>
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
          <div>
            <span className="section-tag text-teal">{t.impact.eyebrow}</span>
            <h2 className="section-title text-white mt-3 mb-6">
              {t.impact.titleLine1}
              <br />
              {t.impact.titleLine2}
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              <RichText text={t.impact.paragraph} linkClassName="font-semibold text-white underline underline-offset-2" />
            </p>
            <Link to="/faq" className="btn-primary">
              {t.impact.cta}
              <ArrowRightIcon />
            </Link>
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {t.impact.items.map((item, i) => (
              <li key={i} className="border-t border-white/15 pt-5">
                <div className="font-display font-semibold text-white text-base mb-1.5">{item.title}</div>
                <div className="text-white/65 text-sm leading-relaxed">{item.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PARTENAIRES RECHERCHÉS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-g500 text-xs font-semibold tracking-[0.08em] text-center mb-8">
            {t.partners.eyebrow}
          </p>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {t.partners.items.map((p, i) => (
              <li key={i} className="rounded-lg border border-g200 bg-white px-5 py-4 text-center">
                <div className="font-semibold text-navy text-sm">{p.name}</div>
                <div className="text-g500 text-xs mt-1">{p.type}</div>
              </li>
            ))}
          </ul>
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

        <div className="relative max-w-[800px] mx-auto text-center">
          <h2 className="font-display font-bold text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] text-white leading-tight tracking-tight mb-6">
            {t.finalCta.titleLine1}
            <br />
            {t.finalCta.titleLine2}
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-10">
            {t.finalCta.paragraph}
          </p>

          <Link to="/partners" className="btn-primary">
            {t.finalCta.cta}
          </Link>

          <p className="text-white/45 text-xs mt-8">
            {t.finalCta.footnote}
          </p>
        </div>
      </section>

    </div>
  )
}
