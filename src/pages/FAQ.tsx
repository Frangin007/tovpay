import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/LanguageContext'
import { fr, en } from '../i18n/dictionaries/faq'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className={`border-b border-g100 last:border-0 ${open ? 'bg-g50 -mx-5 px-5 rounded-xl' : ''} transition-colors duration-200`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: EASE }}
    >
      <button
        className="w-full flex justify-between items-center text-left py-5 gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-display font-semibold text-[15px] transition-colors duration-200 ${open ? 'text-teal' : 'text-navy group-hover:text-teal'}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-200 ${open ? 'bg-teal border-teal text-white' : 'border-g100 text-g400'}`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-g600 text-[15px] leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
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
                <motion.span className="section-tag block mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  {t.sidebar.categoriesLabel}
                </motion.span>
                <div className="flex flex-col gap-2">
                  {t.faqs.map((cat, i) => (
                    <motion.a
                      key={i}
                      href={`#cat-${i}`}
                      className="text-g600 text-sm py-2 px-3 rounded-lg hover:bg-g50 hover:text-navy transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {cat.cat}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-10 bg-g50 rounded-2xl p-6 border border-g100">
                  <div className="font-display font-bold text-navy text-base mb-2">{t.sidebar.otherQuestionTitle}</div>
                  <p className="text-g600 text-sm leading-relaxed mb-4">{t.sidebar.otherQuestionDesc}</p>
                  <a href="/contact" className="inline-flex items-center gap-1.5 text-teal text-sm font-semibold hover:gap-3 transition-all">
                    {t.sidebar.contactLink}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-14">
              {t.faqs.map((cat, ci) => (
                <div key={ci} id={`cat-${ci}`}>
                  <motion.h2
                    className="font-display font-extrabold text-2xl text-navy mb-6 pb-4 border-b-2 border-teal/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    {cat.cat}
                  </motion.h2>
                  <div>
                    {cat.items.map((item, qi) => (
                      <FaqItem key={qi} q={item.q} a={item.a} index={qi} />
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
