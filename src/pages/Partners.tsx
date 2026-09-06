import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { BankIcon, CreditIcon, SignalIcon, GavelIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/LanguageContext'
import { fr, en } from '../i18n/dictionaries/partners'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
}

// Icônes par catégorie : banque, puis mobile money / paiement pour la 2e catégorie
const CATEGORY_ICONS = [[BankIcon], [SignalIcon, SignalIcon, CreditIcon]]

export default function Partners() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroPartners}
      />

      {/* Écosystème et connexions envisagées */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.partnersSection.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.partnersSection.title}
            </motion.h2>
          </motion.div>

          {/* Catégories : bancaire recherché + canaux de paiement envisagés */}
          <div className="flex flex-col gap-10">
            {t.partnersSection.categories.map((cat, ci) => (
              <div key={ci}>
                <motion.span
                  className="block text-g400 text-xs font-semibold uppercase tracking-wider mb-4"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                >
                  {cat.label}
                </motion.span>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.items.map((p, i) => {
                    const CategoryIcon = CATEGORY_ICONS[ci][i]
                    return (
                      <motion.div
                        key={i}
                        className="bg-g50 rounded-3xl border border-g100 p-7 flex gap-5 items-start group hover:shadow-lg hover:border-teal/20 hover:bg-white transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-teal/10 text-teal shrink-0">
                          <CategoryIcon size={24} />
                        </div>
                        <div>
                          <div className="font-display font-bold text-navy text-lg">{p.name}</div>
                          <div className="text-g600 text-sm mt-1 leading-snug">{p.desc}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Cadre réglementaire - visuellement distinct, jamais présenté comme un partenaire */}
          <motion.div
            className="mt-10 rounded-3xl border border-g200 bg-g50/60 p-7 flex gap-5 items-start"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-g200/50 text-g600 shrink-0">
              <GavelIcon size={24} />
            </div>
            <div>
              <span className="inline-block text-g500 text-[10px] uppercase tracking-wider font-semibold bg-g100 rounded-full px-2.5 py-1 mb-1.5">
                {t.partnersSection.regulatory.badge}
              </span>
              <div className="text-g400 text-xs font-semibold uppercase tracking-wider">{t.partnersSection.regulatory.label}</div>
              <div className="font-display font-bold text-navy text-lg mt-0.5">{t.partnersSection.regulatory.name}</div>
              <div className="text-g600 text-sm mt-1 leading-snug max-w-2xl">{t.partnersSection.regulatory.desc}</div>
            </div>
          </motion.div>

          <motion.p
            className="text-g400 text-xs text-center mt-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {t.partnersSection.disclaimer}
          </motion.p>
        </div>
      </section>

      {/* Présence géographique - statut réel */}
      <section className="relative py-20 px-[5%] overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.bgCity} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/95" />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.presence.eyebrow}</motion.span>
            <motion.h2 className="font-display font-extrabold text-[2rem] sm:text-[2.8rem] text-white text-center mt-3" variants={fadeUp} custom={1}>
              {t.presence.title}
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <motion.div
              className="rounded-3xl border border-teal/30 bg-teal/10 p-8 text-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="text-4xl mb-3">🇧🇯</div>
              <h4 className="font-display font-bold text-white text-lg mb-1.5">{t.presence.benin.name}</h4>
              <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3 bg-teal/25 text-teal">
                {t.presence.benin.badge}
              </span>
              <p className="text-white/60 text-sm leading-relaxed">
                {t.presence.benin.desc}
              </p>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-display font-bold text-white text-lg mb-1.5">{t.presence.ambition.name}</h4>
              <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3 bg-gold/15 text-gold">
                {t.presence.ambition.badge}
              </span>
              <p className="text-white/60 text-sm leading-relaxed">
                {t.presence.ambition.desc}
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-white/40 text-xs text-center max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {t.presence.footnote}
          </motion.p>
        </div>
      </section>

      <FinalCta
        title={t.finalCta.title}
        desc={t.finalCta.desc}
        primary={{ label: t.finalCta.primary, to: '/contact' }}
        secondary={{ label: t.finalCta.secondary, to: '/about' }}
        bgImage={IMAGES.impact1}
      />
    </>
  )
}
