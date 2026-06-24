import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion, useScroll, useTransform, useInView,
} from 'framer-motion'
import type { Variants, Transition } from 'framer-motion'
import IMAGES from '../lib/images'
import {
  CreditIcon, WalletIcon, BuildingIcon,
  GlobeIcon, HandshakeIcon, AiSparkIcon, ShieldIcon,
  BankIcon, WaveIcon, BroadcastIcon, SignalIcon, GavelIcon,
  TrendingUpIcon,
} from '../components/Icon'

// ── Ease cubic bezier (tuple as const pour Framer Motion v12) ────
const EASE_OUT = [0.16, 1, 0.3, 1] as const

// ── Helper transition typée ──────────────────────────────────────
const tr = (duration: number, delay = 0): Transition => ({
  duration, delay, ease: [...EASE_OUT] as [number, number, number, number],
})

// ── Variants Framer Motion ────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: tr(0.7, i * 0.12),
  }),
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.1 },
  }),
}

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: tr(0.8) },
}

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: tr(0.8) },
}

// ── Hook animé ─────────────────────────────────────────────────
function useAnimatedCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return { count, ref }
}

// ── Composant Stat avec count-up ──────────────────────────────
function StatItem({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const { count, ref } = useAnimatedCounter(value)
  return (
    <div className="text-center">
      <div className="font-display font-extrabold text-[2.8rem] text-white leading-none">
        <span ref={ref as React.RefObject<HTMLElement>}>{count}</span>{suffix}
      </div>
      <div className="text-white/55 text-sm mt-1.5">{label}</div>
    </div>
  )
}

// ── Main Home ──────────────────────────────────────────────────
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          HERO — Immersif, plein écran, parallaxe
      ═══════════════════════════════════════════════════════ */}
      <div ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background image FIXE (reste figée pendant le scroll) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})`, backgroundAttachment: 'fixed' }}
          aria-label="Entrepreneur africain avec téléphone"
        />

        {/* Overlays multicouches */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />

        {/* Mesh gradient décoratif */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full z-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,185,142,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full z-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(159,232,112,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        {/* Contenu Hero */}
        <motion.div
          className="relative z-20 w-full max-w-[1280px] mx-auto px-[5%] pt-28 pb-20"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-[640px]">
            {/* Titre principal */}
            <motion.h1
              className="font-display font-extrabold text-[3rem] sm:text-[3.8rem] lg:text-[5rem] leading-[1.02] text-white tracking-tight mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Le crédit mobile{' '}
              <br />
              <span className="bg-gradient-to-r from-teal to-lime bg-clip-text text-transparent">
                qui change des vies
              </span>
              <br />
              en Afrique.
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-white/72 text-lg leading-relaxed mb-10 max-w-[480px]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Accédez à 1 000 – 20 000 FCFA en moins de 15 minutes.
              Sans garantie, sans compte bancaire. Juste votre téléphone.
            </motion.p>

            {/* Boutons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-14"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Link to="/nano-credit">
                <motion.span
                  className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-[15px] px-7 py-4 rounded-xl cursor-pointer"
                  animate={{ boxShadow: ['0 8px 30px rgba(0,185,142,0.4)', '0 10px 48px rgba(0,185,142,0.78)', '0 8px 30px rgba(0,185,142,0.4)'] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.04, y: -2, boxShadow: '0 16px 40px rgba(0,185,142,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Demander un crédit
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </Link>
              <Link to="/services">
                <motion.span
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 text-white font-semibold text-[15px] px-7 py-4 rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.04, y: -2, backgroundColor: 'rgba(255,255,255,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Comment ça marche
                </motion.span>
              </Link>
            </motion.div>

            {/* Stats rapides */}
            <motion.div
              className="flex flex-wrap gap-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              {[
                { n: '< 15', label: 'minutes pour recevoir' },
                { n: '6', label: 'pays UEMOA' },
                { n: '20K', label: 'FCFA maximum' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-0.5 h-8 bg-teal/50 rounded-full" />
                  <div>
                    <div className="font-display font-extrabold text-white text-xl">{s.n}</div>
                    <div className="text-white/45 text-xs">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image flottante droite (desktop) */}
          <motion.div
            className="hidden xl:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[380px]"
            initial={{ opacity: 0, x: 60, y: '-50%' }}
            animate={{ opacity: 1, x: 0, y: '-50%' }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-3xl bg-teal/10 blur-2xl" />
              <img
                src={IMAGES.impact2}
                alt="Paiement mobile TovPay"
                className="relative w-full rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.5)] object-cover aspect-[3/4]"
              />
              {/* Badge overlay sur l'image */}
              <motion.div
                className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-navy text-sm">Crédit accordé</div>
                  <div className="text-g600 text-xs">en 12 minutes</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Défiler</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          CHIFFRES CLÉS — Bande pleine largeur
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-navy py-16 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(0,185,142,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {[
              { value: 330, suffix: '+', label: 'Clients actifs en 2025' },
              { value: 15, suffix: ' min', label: 'Pour recevoir son argent' },
              { value: 6, suffix: ' pays', label: 'Présence en zone UEMOA' },
              { value: 80, suffix: '%+', label: 'Taux de recouvrement' },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="text-center lg:px-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <StatItem value={s.value} suffix={s.suffix} label={s.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          POURQUOI TOVPAY — Image + Points
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 px-[5%] bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images empilées */}
            <motion.div
              className="relative h-[520px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideLeft}
            >
              <div className="absolute top-0 left-0 right-8 h-[340px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.whyImg1}
                  alt="Commerçante africaine"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <div className="text-xs text-white/70 mb-1">Marché d'Abidjan</div>
                  <div className="font-display font-bold text-base">Commerce textile</div>
                </div>
              </div>
              <motion.div
                className="absolute bottom-0 right-0 left-12 h-[220px] rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <img
                  src={IMAGES.impact4}
                  alt="Jeune entrepreneur tech"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </motion.div>
              {/* Badge flottant */}
              <motion.div
                className="absolute top-48 right-0 bg-white rounded-2xl shadow-xl px-4 py-3 border border-g100"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                    <TrendingUpIcon size={16} />
                  </div>
                  <div>
                    <div className="text-navy font-bold text-xs">Remboursement</div>
                    <div className="text-teal text-xs font-semibold">+120% croissance 2024</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Texte */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideRight}
            >
              <motion.span className="section-tag" variants={fadeUp} custom={0}>POURQUOI TOVPAY</motion.span>
              <motion.h2 className="section-title mt-3 mb-6" variants={fadeUp} custom={1}>
                L'inclusion financière,
                <br />
                <span className="text-teal">enfin accessible.</span>
              </motion.h2>
              <motion.p className="text-g600 text-base leading-relaxed mb-8" variants={fadeUp} custom={2}>
                500 millions de personnes en Afrique n'ont pas accès aux services bancaires. TovPay change la donne
                en rendant le crédit aussi simple qu'un SMS — sans garantie, sans historique bancaire.
              </motion.p>

              <div className="space-y-5">
                {[
                  {
                    title: 'Décaissement en 15 minutes',
                    desc: 'Du dossier au virement Mobile Money — plus rapide que n\'importe quelle banque.',
                    color: '#00B98E',
                  },
                  {
                    title: 'Scoring IA sans historique bancaire',
                    desc: 'Notre algorithme évalue votre profil réel, pas votre relevé bancaire.',
                    color: '#1A3FA8',
                  },
                  {
                    title: 'Réseau d\'agents locaux',
                    desc: 'Des chefs d\'agence formés accompagnent chaque client dans leur quartier.',
                    color: '#F5A623',
                  },
                  {
                    title: 'Conforme BCEAO & Orabank',
                    desc: 'Adossés au premier groupe bancaire panafricain privé.',
                    color: '#7C3AED',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 items-start"
                    variants={fadeUp}
                    custom={i + 3}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}80` }}
                    />
                    <div>
                      <div className="font-display font-bold text-navy text-[15px] mb-0.5">{item.title}</div>
                      <div className="text-g600 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COMMENT ÇA MARCHE — Steps avec images
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 px-[5%] bg-g50 relative overflow-hidden">
        {/* Background décoratif */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(0,185,142,0.05) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-[1280px] mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.span className="section-tag" variants={fadeUp} custom={0}>PROCESSUS</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              4 étapes, 15 minutes.
            </motion.h2>
            <motion.p className="text-g600 mt-3 max-w-[500px] mx-auto text-center" variants={fadeUp} custom={2}>
              Le parcours le plus rapide vers un crédit mobile en Afrique.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: '01',
                title: 'Téléchargez',
                desc: 'App Store ou Google Play. Gratuit et sécurisé.',
                img: IMAGES.howStep1,
                color: '#00B98E',
              },
              {
                n: '02',
                title: 'Identifiez-vous',
                desc: 'Pièce d\'identité + numéro Mobile Money. 5 minutes.',
                img: IMAGES.howStep2,
                color: '#1A3FA8',
              },
              {
                n: '03',
                title: 'Scoring instantané',
                desc: 'Notre IA analyse votre profil. Résultat immédiat.',
                img: IMAGES.howStep3,
                color: '#7C3AED',
              },
              {
                n: '04',
                title: 'Recevez l\'argent',
                desc: 'Fonds sur votre Mobile Money en moins de 15 min.',
                img: IMAGES.howStep4,
                color: '#F5A623',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden border border-g100 shadow-sm h-full transition-shadow duration-300 group-hover:shadow-xl group-hover:border-teal/20">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.img}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 to-navy/30" />
                    <div
                      className="absolute top-4 left-4 font-display font-extrabold text-5xl leading-none"
                      style={{ color: `${step.color}60` }}
                    >
                      {step.n}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="w-1 h-6 rounded-full mb-4" style={{ backgroundColor: step.color }} />
                    <h4 className="font-display font-bold text-navy text-xl mb-2">{step.title}</h4>
                    <p className="text-g600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES — Grid premium
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.span className="section-tag" variants={fadeUp} custom={0}>NOS SOLUTIONS</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              Tout ce dont vous avez besoin.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Carte 1 — large */}
            <motion.div
              className="relative rounded-3xl overflow-hidden min-h-[380px] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={IMAGES.whyImg1}
                alt="Nano-crédit mobile"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center mb-4">
                  <CreditIcon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-2">Nano-Crédit Mobile</h3>
                <p className="text-white/70 text-sm mb-5 max-w-[320px]">
                  1 000 à 20 000 FCFA décaissés en 15 min via Wave, Orange Money ou MTN.
                </p>
                <Link to="/nano-credit" className="inline-flex items-center gap-2 text-teal text-sm font-semibold hover:gap-3 transition-all">
                  En savoir plus <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </Link>
              </div>
            </motion.div>

            {/* Colonne droite — 3 mini cartes */}
            <div className="flex flex-col gap-6">
              {[
                {
                  Icon: WalletIcon, title: 'Wallet & Paiements', color: '#1A3FA8',
                  desc: 'Envoyez, recevez, payez. Multi-opérateurs, zone UEMOA.',
                  bg: 'from-blue/5 to-blue/10'
                },
                {
                  Icon: AiSparkIcon, title: 'Scoring IA', color: '#7C3AED',
                  desc: 'Score de crédit en temps réel sans historique bancaire.',
                  bg: 'from-purple-50 to-purple-100/50'
                },
                {
                  Icon: BuildingIcon, title: 'Solutions PME', color: '#F5A623',
                  desc: 'Lignes de crédit renouvelables pour les petits commerces.',
                  bg: 'from-amber-50 to-amber-100/50'
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className={`bg-gradient-to-br ${s.bg} border border-g100 rounded-3xl p-6 flex items-center gap-5 group cursor-pointer transition-shadow duration-300 hover:shadow-lg`}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${s.color}15`, color: s.color }}>
                    <s.Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-navy text-base mb-1">{s.title}</h4>
                    <p className="text-g600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-auto shrink-0 text-g400 group-hover:text-teal transition-colors">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          IMPACT — Section avec grande image de fond
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-[5%] overflow-hidden">
        {/* Background image avec overlay */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.impact1}
            alt="Impact TovPay"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/97 via-navy-deep/90 to-navy-deep/75" />
        </div>
        {/* Décoratifs */}
        <div className="absolute right-0 top-0 w-[500px] h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at right, rgba(0,185,142,0.15), transparent 70%)' }} />

        <div className="max-w-[1280px] mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.span className="section-tag" variants={fadeUp} custom={0}>IMPACT RÉEL</motion.span>
              <motion.h2
                className="font-display font-extrabold text-[2rem] sm:text-[2.8rem] text-white leading-tight mt-3 mb-6"
                variants={fadeUp} custom={1}
              >
                Des vies transformées
                <br />
                <span className="text-teal">à travers l'Afrique.</span>
              </motion.h2>
              <motion.p className="text-white/65 text-base leading-relaxed mb-8" variants={fadeUp} custom={2}>
                Chaque crédit TovPay représente une famille qui peut approvisionner sa boutique,
                un artisan qui peut acheter ses matières premières, un rêve qui devient réalité.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <Link to="/about">
                  <motion.span
                    className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-6 py-3.5 rounded-xl cursor-pointer"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Notre mission
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { Icon: GlobeIcon, title: '6 pays actifs', desc: 'CI, SN, BJ, TG + Mali & Niger bientôt', color: '#00B98E' },
                { Icon: HandshakeIcon, title: 'Orabank Group', desc: 'Adossés au leader bancaire panafricain', color: '#9fe870' },
                { Icon: AiSparkIcon, title: 'IA propriétaire', desc: 'Scoring sans historique bancaire requis', color: '#7C3AED' },
                { Icon: ShieldIcon, title: 'Conforme BCEAO', desc: 'KYC/LCB-FT & OHADA respectés', color: '#F5A623' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5"
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${item.color}20`, color: item.color }}>
                    <item.Icon size={20} />
                  </div>
                  <div className="font-display font-bold text-white text-sm mb-1">{item.title}</div>
                  <div className="text-white/55 text-xs leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PARTENAIRES
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-[5%] bg-g50 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.p className="text-g400 text-sm mb-6" variants={fadeIn}>
              ÉCOSYSTÈME PARTENAIRE
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {[
              { Icon: BankIcon, name: 'Orabank', type: 'Banque adossement' },
              { Icon: WaveIcon, name: 'Wave', type: 'Mobile Money' },
              { Icon: SignalIcon, name: 'Orange Money', type: 'Mobile Money' },
              { Icon: BroadcastIcon, name: 'MTN MoMo', type: 'Mobile Money' },
              { Icon: SignalIcon, name: "Africa's Talking", type: 'SMS' },
              { Icon: GavelIcon, name: 'BCEAO', type: 'Régulateur' },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5 bg-white border border-g100 rounded-2xl px-5 py-3.5 text-navy font-semibold text-sm shadow-sm"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, scale: 1.03, boxShadow: '0 12px 30px rgba(13,34,81,0.12)' }}
              >
                <p.Icon size={18} className="text-teal" />
                <div>
                  <div className="font-bold text-navy text-sm leading-none">{p.name}</div>
                  <div className="text-g400 text-[10px] leading-none mt-0.5">{p.type}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TÉMOIGNAGES — Style premium
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 px-[5%] bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.span className="section-tag" variants={fadeUp} custom={0}>TÉMOIGNAGES</motion.span>
            <motion.h2 className="section-title mt-3 text-center" variants={fadeUp} custom={1}>
              Ils font confiance à TovPay.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "J'ai pu réapprovisionner mon stock en urgence. Le crédit était sur Wave en 10 minutes. Je n'avais jamais vu ça de ma vie.",
                name: 'Aminata Diallo',
                role: 'Commerçante tissu — Dakar',
                img: IMAGES.testi1,
                stars: 5,
              },
              {
                quote: "Grâce à TovPay, j'ai acheté du matériel pour mon atelier sans attendre un mois. Le taux est clair, pas de surprise.",
                name: 'Kwame Asante',
                role: 'Artisan menuisier — Abidjan',
                img: IMAGES.testi2,
                stars: 5,
              },
              {
                quote: "Simple, rapide, honnête. Mon score a augmenté après chaque remboursement et maintenant j'ai accès à 20 000 FCFA.",
                name: 'Fatoumata Koné',
                role: 'Micro-entrepreneuse — Lomé',
                img: IMAGES.testi3,
                stars: 5,
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="bg-white border border-g100 rounded-3xl p-7 shadow-sm relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0,185,142,0.12)' }}
              >
                {/* Accent top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-lime rounded-t-3xl" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-g600 text-[15px] leading-relaxed mb-6 italic">"{t.quote}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-teal/20"
                  />
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-g400 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA FINAL — Immersif avec image
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-32 px-[5%] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.impact3}
            alt="Impact TovPay"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/97 via-navy-deep/92 to-navy/80" />
        </div>

        {/* Décos */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(159,232,112,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,185,142,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-display font-extrabold text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] text-white leading-tight mb-6 tracking-tight"
              variants={fadeUp} custom={0}
            >
              Prêt à changer votre vie
              <br />
              <span className="bg-gradient-to-r from-teal to-lime bg-clip-text text-transparent">
                avec TovPay ?
              </span>
            </motion.h2>

            <motion.p
              className="text-white/65 text-lg leading-relaxed mb-10"
              variants={fadeUp} custom={1}
            >
              Rejoignez les milliers d'entrepreneurs africains qui font confiance à TovPay
              pour financer leurs activités et faire grandir leur commerce.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              variants={fadeUp} custom={2}
            >
              <Link to="/nano-credit">
                <motion.span
                  className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-[16px] px-8 py-[18px] rounded-xl shadow-[0_8px_40px_rgba(0,185,142,0.45)] cursor-pointer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Demander mon crédit maintenant
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </Link>
              <Link to="/contact">
                <motion.span
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 text-white font-semibold text-[16px] px-8 py-[18px] rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.05, y: -3, backgroundColor: 'rgba(255,255,255,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Parler à un conseiller
                </motion.span>
              </Link>
            </motion.div>

            <motion.p
              className="text-white/30 text-xs mt-8"
              variants={fadeIn} custom={3}
            >
              Conforme BCEAO · Partenaire Orabank · Données chiffrées
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
