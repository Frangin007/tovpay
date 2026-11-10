import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import RichText from '../components/RichText'
import SmartLink from '../components/SmartLink'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/faq'
import type { FaqEntry } from '../i18n/dictionaries/faq'
import { EASE_OUT as EASE, reveal } from '../lib/motion'

// Lien avec flèche : la flèche s'écarte du texte au survol
const LINK_CLS = 'inline-flex items-center gap-1.5 w-fit text-teal-ink text-sm font-semibold underline-offset-4 transition-[gap] duration-200 hover:gap-3 hover:underline'

function FaqItem({ item, index }: { item: FaqEntry; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  // Une réponse peut compter plusieurs paragraphes, séparés par une ligne vide.
  const paragraphs = item.a.split('\n\n')
  return (
    <motion.div
      className="border-b border-g200 last:border-0"
      {...reveal({ y: 20 }, { delay: index * 0.06, duration: 0.5, ease: EASE })}
    >
      <h3>
        <button
          className="w-full flex justify-between items-center text-left py-5 gap-4 group"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className={`font-display font-semibold text-[15px] transition-colors duration-200 ${open ? 'text-teal-ink' : 'text-navy group-hover:text-teal-ink'}`}>
            {item.q}
          </span>
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            className={`shrink-0 text-g500 transition-transform duration-250 ${open ? 'rotate-45' : ''}`}
          >
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </h3>
      {/* Panneau : sa hauteur passe de 0 à celle du contenu (grid-template-rows 0fr -> 1fr). */}
      <div
        id={panelId}
        role="region"
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 flex flex-col gap-3">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-g600 text-[15px] leading-relaxed"><RichText text={p} /></p>
            ))}
            {item.link && (
              <SmartLink href={item.link.to} external={item.link.external} className={LINK_CLS}>
                {item.link.label}
                <ArrowRightIcon size={14} />
              </SmartLink>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FAQ() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroFaq}
      />

      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">

            {/* Sidebar catégories */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <motion.span className="section-tag block mb-4" {...reveal({})}>
                  {t.sidebar.categoriesLabel}
                </motion.span>
                <div className="flex flex-col gap-1 -mx-3">
                  {t.faqs.map((cat, i) => (
                    <motion.a
                      key={i}
                      href={`#cat-${i}`}
                      className="text-g600 text-sm py-2 px-3 rounded-md hover:bg-g100 hover:text-navy transition-colors duration-200"
                      {...reveal({ x: -20 }, { delay: i * 0.1 })}
                    >
                      {cat.cat}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-10 rounded-xl border border-g200 bg-g50 p-6">
                  <div className="font-display font-bold text-navy text-base mb-2">{t.sidebar.otherQuestionTitle}</div>
                  <p className="text-g600 text-sm leading-relaxed mb-4">{t.sidebar.otherQuestionDesc}</p>
                  <Link to="/contact" className={LINK_CLS}>
                    {t.sidebar.contactLink}
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-14">
              {t.faqs.map((cat, ci) => (
                <div key={ci} id={`cat-${ci}`} className="scroll-mt-28">
                  <motion.h2
                    className="font-display font-bold text-2xl text-navy mb-1 pb-4 border-b border-g200"
                    {...reveal({ y: 20 }, { duration: 0.5, ease: EASE })}
                  >
                    {cat.cat}
                  </motion.h2>
                  <div>
                    {cat.items.map((item, qi) => (
                      <FaqItem key={qi} item={item} index={qi} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
