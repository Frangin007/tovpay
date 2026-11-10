import { CheckCircleIcon } from '../components/Icon'
import Avatar from '../components/Avatar'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/about'

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
          <div>
            <span className="section-tag">{t.mission.eyebrow}</span>
            <h2 className="section-title mt-3 mb-5">
              {t.mission.titleLine1}
              <br />{t.mission.titleLine2}
            </h2>
            <p className="text-g600 leading-relaxed text-[15px] mb-5">
              {t.mission.p1}
            </p>
            <p className="text-g600 leading-relaxed text-[15px] mb-5">
              {t.mission.p2}
            </p>
            <p className="text-g600 leading-relaxed text-[15px]">
              {t.mission.p3}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <img
              src={IMAGES.officeWoman}
              alt={t.mission.imgAlt}
              loading="lazy"
              className="w-full h-56 object-cover rounded-xl"
            />

            {/* Valeurs */}
            <div>
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {t.mission.valeursTitle}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {t.mission.valeurs.map((v, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon size={17} strokeWidth={2} className="text-teal shrink-0 mt-0.5" />
                    <span className="text-g600 text-sm">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <span className="section-tag">{t.history.eyebrow}</span>
          <h2 className="section-title mt-3 mb-10">
            {t.history.title}
          </h2>
          <ol className="relative pl-8 border-l-2 border-g200 flex flex-col gap-10">
            {t.history.timeline.map((item, i) => (
              <li key={i} className="relative">
                <div className="absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-teal ring-4 ring-g50" aria-hidden="true" />
                <div className="text-teal-ink font-display font-semibold text-sm mb-1">{item.year}</div>
                <h3 className="font-display font-bold text-navy text-xl mb-1.5">{item.title}</h3>
                <p className="text-g600 text-sm leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">{t.team.eyebrow}</span>
            <h2 className="section-title mt-3 text-center">{t.team.title}</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {t.team.members.map((m, i) => (
              <li key={i} className="rounded-xl border border-g200 p-7 text-center flex flex-col items-center">
                <Avatar name={m.name} size={80} />
                <h3 className="font-display font-bold text-navy text-base mt-4">{m.name}</h3>
                <div className="text-g600 text-sm mt-0.5">{m.role}</div>
              </li>
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
