import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { GlobeIcon, ShieldIcon, HandshakeIcon, CoinsIcon, BuildingIcon, NetworkIcon, MailIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/LanguageContext'
import { fr, en } from '../i18n/dictionaries/investors'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
}

const POINT_ICONS = [GlobeIcon, ShieldIcon, HandshakeIcon]
const POINT_COLORS = ['#00B98E', '#9fe870', '#F5A623']
const PROFILE_ICONS = [CoinsIcon, BuildingIcon, NetworkIcon]

export default function Investors() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroInvestors}
      />

      {/* Points clés */}
      <section className="relative py-20 px-[5%] overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.impact3} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/95" />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.why.eyebrow}</motion.span>
            <motion.h2 className="font-display font-extrabold text-[2.4rem] text-white text-center mt-3" variants={fadeUp} custom={1}>
              {t.why.title}
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.why.points.map((p, i) => {
              const PointIcon = POINT_ICONS[i]
              return (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-7"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', y: -6 }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${POINT_COLORS[i]}20`, color: POINT_COLORS[i] }}>
                    <PointIcon size={24} />
                  </div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">{p.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Identité légale */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span className="section-tag" variants={fadeUp} custom={0}>{t.identity.eyebrow}</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>{t.identity.title}</motion.h2>
            <motion.p className="section-sub max-w-xl mx-auto text-center" variants={fadeUp} custom={2}>
              {t.identity.sub}
            </motion.p>
          </motion.div>
          <motion.div
            className="overflow-x-auto rounded-2xl border border-g100 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <table className="w-full border-collapse min-w-[480px]">
              <tbody>
                {t.identity.rows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-g50'}>
                    <td className="text-g400 text-xs font-semibold uppercase tracking-wide py-3.5 px-6 whitespace-nowrap align-top">{r.label}</td>
                    <td className="text-navy text-sm font-medium py-3.5 px-6">{r.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Statut réel */}
          <motion.div
            className="mt-12 bg-gradient-to-br from-navy to-blue rounded-3xl p-9 overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(159,232,112,0.15), transparent 70%)' }} />
            <h3 className="text-white text-2xl font-display font-bold mb-4">{t.identity.statusTitle}</h3>
            <p className="text-white/70 leading-relaxed mb-5 max-w-[600px]">
              {t.identity.statusParagraph}
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MailIcon size={16} className="text-teal" />
              {t.identity.contactLabel} <strong className="text-teal">dg@tovpay.africa</strong>
            </div>
          </motion.div>

          {/* Profils */}
          <div className="mt-20">
            <motion.h2 className="section-title text-center mb-11" initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {t.profiles.title}
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.profiles.items.map((p, i) => {
                const ProfileIcon = PROFILE_ICONS[i]
                return (
                  <motion.div
                    key={i}
                    className="bg-g50 rounded-3xl border border-g100 p-7 text-center group hover:shadow-lg hover:border-teal/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-teal/10 text-teal">
                      <ProfileIcon size={24} />
                    </div>
                    <h4 className="font-display font-bold text-navy text-xl mb-2">{p.title}</h4>
                    <p className="text-g600 text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title={t.finalCta.title}
        desc={t.finalCta.desc}
        primary={{ label: t.finalCta.primary, to: 'mailto:dg@tovpay.africa', mailto: true }}
        secondary={{ label: t.finalCta.secondary, to: '/about' }}
        bgImage={IMAGES.heroInvestors}
      />
    </>
  )
}
