import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  MapPinIcon, IdIcon, CreditIcon, TrendingUpIcon, HandshakeIcon,
  CheckCircleIcon, CoinsIcon, ShieldIcon,
} from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/LanguageContext'
import { fr, en } from '../i18n/dictionaries/agents'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
}

const ROLE_ICONS = [MapPinIcon, IdIcon, CreditIcon, TrendingUpIcon, HandshakeIcon]
const CAUTION_COLORS = ['#00B98E', '#1A3FA8', '#7C3AED']

export default function Agents() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroServices}
      />

      {/* RÔLE */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.role.eyebrow}</motion.span>
              <motion.h2 className="section-title mt-3 mb-6" variants={fadeUp} custom={1}>
                {t.role.titleLine1}
                <br /><span className="text-teal">{t.role.titleLine2}</span>
              </motion.h2>
              <motion.p className="text-g600 leading-relaxed text-[15px] mb-8" variants={fadeUp} custom={2}>
                {t.role.intro}
              </motion.p>
              <div className="flex flex-col gap-5">
                {t.role.roles.map((r, i) => {
                  const RoleIcon = ROLE_ICONS[i]
                  return (
                    <motion.div key={i} className="flex gap-4 items-start" variants={fadeUp} custom={i + 3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                        <RoleIcon size={19} />
                      </div>
                      <div>
                        <div className="font-display font-bold text-navy text-[15px] mb-0.5">{r.title}</div>
                        <div className="text-g600 text-sm leading-relaxed">{r.desc}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden h-[560px]"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <img src={IMAGES.howStep2} alt={t.role.imgAlt} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl shadow-xl px-5 py-4">
                <div className="text-navy font-display font-bold text-sm mb-1">{t.role.skillsTitle}</div>
                <div className="text-g600 text-sm">{t.role.skillsDesc}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CANDIDATURE */}
      <section className="py-20 px-[5%] bg-g50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(0,185,142,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-[1280px] mx-auto relative">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.candidature.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.candidature.title}
            </motion.h2>
            <motion.p className="section-sub max-w-xl mx-auto text-center" variants={fadeUp} custom={2}>
              {t.candidature.sub}
            </motion.p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.candidature.steps.map((c, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl border border-g100 p-6 relative hover:shadow-lg hover:border-teal/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                whileHover={{ y: -6 }}
              >
                <div className="font-display font-extrabold text-4xl text-g100 leading-none mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="font-display font-bold text-navy text-base mb-1.5">{c.title}</h4>
                <p className="text-g600 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUTION */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.caution.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.caution.title}
            </motion.h2>
            <motion.p className="section-sub max-w-xl mx-auto text-center" variants={fadeUp} custom={2}>
              {t.caution.sub}
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.caution.tiers.map((c, i) => (
              <motion.div
                key={i}
                className="bg-g50 rounded-3xl border border-g100 p-8 group hover:shadow-lg hover:border-teal/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${CAUTION_COLORS[i]}15`, color: CAUTION_COLORS[i] }}>
                  <ShieldIcon size={24} />
                </div>
                <h4 className="font-display font-bold text-navy text-xl mb-1">{c.level}</h4>
                <div className="font-display font-extrabold text-2xl mb-1" style={{ color: CAUTION_COLORS[i] }}>{c.caution}</div>
                <div className="text-g400 text-xs mb-5">{t.caution.plafondPrefix} {c.plafond} {t.caution.plafondSuffix}</div>
                <p className="text-g600 text-sm leading-relaxed">{c.maxClients} · {c.debloque}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION */}
      <section className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.commission.eyebrow}</motion.span>
              <motion.h2 className="section-title mt-3 mb-5" variants={fadeUp} custom={1}>
                {t.commission.titleLine1}
                <br /><span className="text-teal">{t.commission.titleLine2}</span>
              </motion.h2>
              <motion.p className="text-g600 leading-relaxed text-[15px]" variants={fadeUp} custom={2}>
                {t.commission.desc}
              </motion.p>
            </motion.div>
            <motion.div
              className="bg-white rounded-3xl border border-g100 overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              {t.commission.rows.map((c, i) => (
                <div key={i} className={`flex items-center justify-between gap-4 px-7 py-5 ${i % 2 === 0 ? 'bg-white' : 'bg-g50'}`}>
                  <div className="flex items-center gap-3">
                    <CoinsIcon size={18} className="text-teal shrink-0" />
                    <span className="text-navy font-semibold text-sm">{c.produit}</span>
                  </div>
                  <span className="text-teal font-display font-bold text-sm text-right shrink-0">{c.taux}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCORING AGENT */}
      <section className="py-20 px-[5%] bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.scoring.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              {t.scoring.title}
            </motion.h2>
            <motion.p className="section-sub max-w-xl mx-auto text-center" variants={fadeUp} custom={2}>
              {t.scoring.sub}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            <motion.div
              className="bg-g50 rounded-3xl border border-g100 p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h4 className="font-display font-bold text-navy text-lg mb-5">{t.scoring.eventsTitle}</h4>
              <div className="flex flex-col gap-3">
                {t.scoring.events.map((e, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-g600">{e.label}</span>
                    <span className={`font-display font-bold shrink-0 ${e.positive ? 'text-teal' : 'text-red-500'}`}>{e.pts}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-navy rounded-3xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h4 className="font-display font-bold text-white text-lg mb-5">{t.scoring.levelsTitle}</h4>
              <div className="flex flex-col gap-3.5">
                {t.scoring.levels.map((n, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircleIcon size={16} className={`mt-0.5 shrink-0 ${i < 2 ? 'text-teal' : i === 2 ? 'text-lime' : 'text-gold'}`} />
                    <div>
                      <div className="text-white/90 text-sm font-semibold">{n.name}</div>
                      <div className="text-white/55 text-xs leading-relaxed mt-0.5">{n.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/45 text-xs leading-relaxed mt-5 pt-5 border-t border-white/10">
                {t.scoring.footnote}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCta
        title={t.finalCta.title}
        desc={t.finalCta.desc}
        primary={{ label: t.finalCta.primary, to: '/contact' }}
        secondary={{ label: t.finalCta.secondary, to: 'mailto:dg@tovpay.africa', mailto: true }}
        bgImage={IMAGES.impact3}
      />
    </>
  )
}
