import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  CreditIcon, WalletIcon, ScoringIcon, BuildingIcon,
  GlobeIcon, HandshakeIcon, AiSparkIcon, ShieldIcon,
  BankIcon, WaveIcon, BroadcastIcon, SignalIcon, GavelIcon,
  UserIcon, CheckCircleIcon,
} from '../components/Icon'
import Avatar from '../components/Avatar'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ── Hero carousel slides ──────────────────────────────────────
const heroSlides = [
  {
    tag: 'Partenaire Orabank · Zone UEMOA',
    title: 'Du cash sur votre\ntéléphone,',
    accent: 'pas à la banque.',
    desc: 'Un crédit de 1 000 à 20 000 FCFA en moins de 15 minutes. Sans dossier, sans garantie. Juste votre téléphone.',
    cta: { label: 'Demander un crédit', path: '/nano-credit' },
    ghost: { label: 'Comment ça marche', path: '/services' },
    stat: { val: '15 min', label: 'pour recevoir votre argent' },
  },
  {
    tag: 'Wave · Orange Money · MTN MoMo',
    title: 'Votre wallet,\ntous vos',
    accent: 'opérateurs.',
    desc: 'Envoyez, recevez, payez — peu importe l\'opérateur de votre client ou fournisseur. Un seul compte pour toute la zone UEMOA.',
    cta: { label: 'Ouvrir un wallet', path: '/services' },
    ghost: { label: 'Voir les opérateurs', path: '/partners' },
    stat: { val: '6 pays', label: 'couverts aujourd\'hui' },
  },
  {
    tag: 'Score de crédit · Sans historique bancaire',
    title: 'Votre score\nconstruit par',
    accent: 'vos remboursements.',
    desc: 'Pas de relevé bancaire, pas de garant. Chaque remboursement améliore votre score et débloque des montants plus élevés.',
    cta: { label: 'Voir mon score', path: '/services' },
    ghost: { label: 'En savoir plus', path: '/about' },
    stat: { val: '80%+', label: 'taux de recouvrement' },
  },
]

// ── Hero Carousel ─────────────────────────────────────────────
function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (idx: number) => {
    if (animating || idx === active) return
    setAnimating(true)
    transitionRef.current = setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 320)
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setAnimating(true)
      transitionRef.current = setTimeout(() => {
        setActive(a => (a + 1) % heroSlides.length)
        setAnimating(false)
      }, 320)
    }, 5500)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (transitionRef.current) clearTimeout(transitionRef.current)
    }
  }, [active])

  const slide = heroSlides[active]

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-[100px] px-[5%] bg-[linear-gradient(160deg,#0B1F0A_0%,#112A0F_38%,#0D2251_100%)]">
      {/* Grille de fond */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, #000 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, #000 40%, transparent 90%)',
        }}
      />
      {/* Mesh gradients animés */}
      <div className="mesh-orb w-[680px] h-[680px] -top-[220px] -right-[160px] bg-[radial-gradient(circle,rgba(159,232,112,0.55),transparent_70%)] opacity-75" />
      <div className="mesh-orb w-[560px] h-[560px] -bottom-[200px] -left-[140px] bg-[radial-gradient(circle,rgba(0,229,184,0.45),transparent_70%)] opacity-75 [animation-delay:-8s] [animation-duration:20s]" />
      <div className="mesh-orb w-[420px] h-[420px] top-[30%] left-[35%] bg-[radial-gradient(circle,rgba(26,63,168,0.5),transparent_72%)] opacity-60 [animation-delay:-4s] [animation-duration:22s]" />
      {/* Halo + fondu bas */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_80%_30%,rgba(159,232,112,0.16)_0%,transparent_65%)]" />
      <div className="absolute left-0 right-0 bottom-0 h-[140px] pointer-events-none bg-gradient-to-b from-transparent to-[#0B1F0A]/50" />

      <div
        className={`relative z-10 max-w-[1280px] mx-auto w-full flex gap-14 items-center flex-wrap pb-14 transition-all duration-300 ${
          animating ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="flex-1 min-w-[320px] basis-[480px]">

          <div className="inline-flex items-center gap-2 bg-lime/[0.14] border border-lime/35 rounded-full px-3.5 py-1.5 mb-7">
            <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
            <span className="text-lime text-xs font-semibold">{slide.tag}</span>
          </div>

          <h1 className="font-display font-extrabold text-[2.2rem] sm:text-[2.8rem] lg:text-[4rem] leading-[1.08] text-white mb-5 tracking-tight">
            {slide.title.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
            <span className="bg-gradient-to-br from-lime to-teal-light bg-clip-text text-transparent">{slide.accent}</span>
          </h1>

          <p className="text-white/68 text-[17px] leading-relaxed max-w-[460px] mb-8">{slide.desc}</p>

          <div className="flex gap-3 flex-wrap mb-8">
            <Link to={slide.cta.path} className="btn-primary">{slide.cta.label}</Link>
            <Link to={slide.ghost.path} className="btn-ghost">{slide.ghost.label} →</Link>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-display font-extrabold text-[22px] text-lime">{slide.stat.val}</span>
            <span className="text-white/50 text-[13px]">{slide.stat.label}</span>
          </div>
        </div>

        <div className="flex-1 basis-[260px] min-w-[260px] flex justify-center relative">
          <div className="floating-card top-[6%] -left-[2%] [animation-delay:-1s]">
            <div className="w-8 h-8 rounded-[10px] flex items-center justify-center bg-teal/12 text-teal shrink-0">
              <CheckCircleIcon size={16} />
            </div>
            <div>
              <div className="font-semibold text-[12.5px] text-navy whitespace-nowrap">Crédit approuvé</div>
              <div className="text-[11px] text-slate-500 whitespace-nowrap">10 000 FCFA</div>
            </div>
          </div>
          <div className="floating-card bottom-[12%] -right-[4%] [animation-delay:-3s]">
            <div className="w-8 h-8 rounded-[10px] flex items-center justify-center bg-lime/22 text-teal-dk shrink-0">
              <ScoringIcon size={16} />
            </div>
            <div>
              <div className="font-semibold text-[12.5px] text-navy whitespace-nowrap">Score à jour</div>
              <div className="text-[11px] text-slate-500 whitespace-nowrap">812 / 900</div>
            </div>
          </div>

          <div className="hidden lg:block w-[262px] h-[500px] rounded-[38px] p-[18px] relative animate-float bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl border border-white/14 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            <div className="w-[76px] h-[11px] bg-white/15 rounded-full mx-auto mb-4" />
            <div className="bg-navy-deep/40 rounded-3xl p-[18px] h-[calc(100%-34px)]">
              <div className="text-white/50 text-xs mb-1.5">Solde disponible</div>
              <div className="font-display font-extrabold text-[26px] text-white mb-4">25 000 <span className="text-base text-white/45 font-medium">FCFA</span></div>
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-3.5 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="text-white/45 text-[11px]">Crédit actif</div>
                    <div className="text-white font-semibold text-sm">10 000 FCFA</div>
                  </div>
                  <span className="text-lime text-[11px] font-semibold">2 sem.</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-teal-dk to-lime" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { Icon: CreditIcon, label: 'Crédit' },
                  { Icon: WalletIcon, label: 'Paiement' },
                  { Icon: ScoringIcon, label: 'Scoring' },
                  { Icon: UserIcon, label: 'Profil' },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className="text-teal flex justify-center"><Icon size={18} /></div>
                    <div className="text-white/55 text-[9px]">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 bg-lime/10 border border-lime/20 rounded-lg px-2.5 py-2">
                <BankIcon size={14} />
                <span className="text-lime text-[10px] leading-tight">Partenaire Orabank · Sécurisé BCEAO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="relative z-10 flex justify-center gap-2 pb-7">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-7 bg-lime' : 'w-2 bg-white/25 hover:bg-white/40'}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="relative z-10 container-tp w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] mt-2">
          {[
            { val: '15 min', label: 'Crédit accordé en' },
            { val: '6 pays', label: 'Présence UEMOA' },
            { val: '50K NGN', label: 'Crédit max Nigeria' },
            { val: '99%', label: 'Disponibilité' },
          ].map((s, i) => (
            <div key={i} className={`text-center py-5 px-4 ${i > 0 ? 'border-l border-white/[0.09]' : ''}`}>
              <div className="font-display font-extrabold text-2xl text-teal">{s.val}</div>
              <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Main Home ─────────────────────────────────────────────────
export default function Home() {
  const [simDur, setSimDur] = useState(1)
  const [simAmount, setSimAmount] = useState(10000)
  const [activeTab, setActiveTab] = useState(0)

  useScrollReveal()

  const rates = { 1: 0.1, 2: 0.15, 3: 0.2, 4: 0.25 }
  const interest = Math.round(simAmount * rates[simDur as keyof typeof rates])
  const total = simAmount + interest

  const services = [
    {
      icon: CreditIcon,
      color: '#00B98E',
      title: 'Nano-Crédit Mobile',
      desc: 'Accédez à 1 000 – 20 000 FCFA (50 000 NGN) en moins de 15 minutes via Mobile Money. Aucune garantie matérielle requise. Remboursement flexible sur 1 à 4 semaines.',
      features: ['Décaissement en 15 min', 'Sans garantie physique', 'Via Wave, Orange Money, MTN', 'Scoring IA intelligent']
    },
    {
      icon: WalletIcon,
      color: '#1A3FA8',
      title: 'Wallet & Paiements',
      desc: 'Un portefeuille numérique complet pour envoyer, recevoir et gérer vos fonds au quotidien. Compatible avec tous les opérateurs Mobile Money de la zone UEMOA.',
      features: ['Multi-opérateurs Mobile Money', 'Paiement marchand', 'Transferts instantanés', 'Historique détaillé']
    },
    {
      icon: AiSparkIcon,
      color: '#7C3AED',
      title: 'Scoring Intelligent',
      desc: "Notre moteur d'IA analyse votre profil de remboursement pour déterminer votre score de crédit en temps réel, sans document complexe ni historique bancaire.",
      features: ['Score en temps réel', 'Sans historique bancaire', 'Amélioration continue', 'Transparence totale']
    },
    {
      icon: BuildingIcon,
      color: '#F5A623',
      title: 'Solutions PME',
      desc: 'Des services financiers taillés pour les petites entreprises et commerçants : lignes de crédit renouvelables, gestion de trésorerie et suivi personnalisé.',
      features: ['Ligne de crédit PME', 'Gestion de trésorerie', 'Multi-utilisateurs', 'Tableau de bord dédié']
    }
  ]

  const service = services[activeTab]

  return (
    <>
      <HeroCarousel />

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-g50 py-24 px-[5%]">
        <div className="absolute -top-[10%] -right-[8%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,185,142,0.07),transparent_70%)] pointer-events-none" />
        <div className="container-tp relative">
          <div className="text-center mb-11">
            <span className="section-tag">NOS SOLUTIONS</span>
            <h2 className="section-title text-center">Des services financiers innovants</h2>
            <p className="section-sub mx-auto text-center">TOVPAY réunit tous les outils pour l'inclusion financière en Afrique</p>
          </div>
          <div className="flex gap-0 border-b-2 border-g100 mb-11 overflow-x-auto">
            {services.map((s, i) => {
              const Icon = s.icon
              const active = i === activeTab
              return (
                <button
                  key={i}
                  className={`flex items-center gap-2 whitespace-nowrap px-5 py-3.5 text-sm font-semibold border-b-[3px] transition-colors duration-200 ${
                    active ? 'border-teal text-navy' : 'border-transparent text-g600 hover:text-navy'
                  }`}
                  onClick={() => setActiveTab(i)}
                >
                  <Icon size={16} /> {s.title}
                </button>
              )
            })}
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start" data-reveal key={activeTab}>
            <div>
              <div
                className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${service.color}18`, color: service.color }}
              >
                <service.icon size={26} />
              </div>
              <h3 className="font-display font-bold text-[1.7rem] text-navy mb-3.5">{service.title}</h3>
              <p className="text-g600 text-[15px] leading-relaxed mb-6">{service.desc}</p>
              <Link to="/services" className="btn-primary">En savoir plus →</Link>
            </div>
            <div className="bg-white rounded-2xl border border-g100 p-7">
              <h4 className="font-display font-bold text-navy mb-4">Fonctionnalités clés</h4>
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b border-g100 last:border-0">
                  <div
                    className="w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${service.color}18`, color: service.color }}
                  >
                    <CheckCircleIcon size={14} strokeWidth={2.2} />
                  </div>
                  <span className="text-g600 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATOR */}
      <section className="relative overflow-hidden bg-navy py-24 px-[5%]">
        <div className="absolute -right-20 -top-20 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(159,232,112,0.16),transparent_70%)] blur-[20px] pointer-events-none" />
        <div className="absolute -left-[120px] -bottom-[120px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(0,229,184,0.12),transparent_70%)] blur-[20px] pointer-events-none" />
        <div className="container-tp relative">
          <div className="text-center mb-11">
            <span className="section-tag text-teal">SIMULATEUR</span>
            <h2 className="section-title text-white text-center">Calculez votre nano-crédit</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-9" data-reveal>
            <div className="grid md:grid-cols-2 gap-9">
              <div>
                <span className="block text-white/55 text-xs mb-2.5">Montant souhaité</span>
                <div className="font-display font-extrabold text-[34px] text-teal mb-2.5">
                  {simAmount.toLocaleString('fr-FR')} <span className="text-[15px] text-white/45">FCFA</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={simAmount}
                  onChange={(e) => setSimAmount(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer mb-1"
                />
                <div className="flex justify-between text-white/40 text-xs">
                  <span>1 000</span><span>20 000</span>
                </div>
                <div className="mt-6">
                  <span className="block text-white/55 text-xs mb-2.5">Durée de remboursement</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map(d => (
                      <button
                        key={d}
                        className={`text-xs font-semibold rounded-lg py-2.5 transition-colors duration-200 ${
                          d === simDur ? 'bg-teal text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'
                        }`}
                        onClick={() => setSimDur(d)}
                      >
                        {d === 1 ? '1 semaine' : d === 2 ? '2 semaines' : d === 3 ? '3 semaines' : '1 mois'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/55 text-sm">Montant emprunté</span>
                  <span className="text-white font-semibold text-sm">{simAmount.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/55 text-sm">Taux d'intérêt</span>
                  <span className="text-white font-semibold text-sm">{(rates[simDur as keyof typeof rates] * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/55 text-sm">Intérêts</span>
                  <span className="text-white font-semibold text-sm">{interest.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="flex justify-between items-center py-4 mb-5">
                  <span className="text-white/70 text-sm">Total à rembourser</span>
                  <span className="font-display font-extrabold text-xl text-teal">{total.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <Link to="/nano-credit" className="btn-primary w-full text-center block">Demander ce crédit →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-tag">À PROPOS</span>
              <h2 className="section-title">Nous rendons le crédit accessible à tous</h2>
              <p className="text-g600 text-[15px] leading-relaxed mb-4">
                TOVPAY est une fintech africaine fondée sur la conviction que chaque individu, indépendamment de son statut bancaire, mérite un accès équitable aux services financiers.
              </p>
              <p className="text-g600 text-[15px] leading-relaxed mb-7">
                Notre réseau de chefs d'agence locaux gère jusqu'à 100 clients chacun dans leur zone géographique, garantissant une proximité humaine irremplaçable.
              </p>
              <div className="flex gap-9">
                {[
                  { val: '330+', label: 'Clients 2026' },
                  { val: '6', label: 'Pays UEMOA' },
                  { val: '80%+', label: 'Taux recouvrement' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-display font-extrabold text-2xl text-navy">{s.val}</div>
                    <div className="text-g600 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: GlobeIcon, title: 'Impact Panafricain', desc: 'Présents dans 6 pays UEMOA avec expansion à 12 pays d\'ici 2028.', light: true },
                { Icon: HandshakeIcon, title: 'Partenariat Orabank', desc: 'Adossés au premier groupe bancaire panafricain privé, conformité BCEAO.', light: false },
                { Icon: AiSparkIcon, title: 'Innovation IA', desc: 'Scoring intelligent en temps réel pour démocratiser le crédit mobile.', light: false },
                { Icon: ShieldIcon, title: 'Sécurité & Conformité', desc: 'Données chiffrées, conformité KYC/LCB-FT et OHADA garanties.', light: true },
              ].map((c, i) => (
                <div
                  key={i}
                  data-reveal
                  data-reveal-delay={String(i)}
                  className={`rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 ${c.light ? 'bg-g50' : 'bg-navy'}`}
                >
                  <div className={`w-[42px] h-[42px] rounded-xl flex items-center justify-center mb-3 ${c.light ? 'bg-teal/10 text-teal' : 'bg-lime/12 text-lime'}`}>
                    <c.Icon size={22} />
                  </div>
                  <h4 className={`font-display font-bold text-base mb-1.5 ${c.light ? 'text-navy' : 'text-white'}`}>{c.title}</h4>
                  <p className={`text-[13px] leading-relaxed ${c.light ? 'text-g600' : 'text-white/60'}`}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS PREVIEW */}
      <section className="bg-g50 py-24 px-[5%]">
        <div className="container-tp">
          <div className="text-center mb-11">
            <span className="section-tag">PARTENAIRES</span>
            <h2 className="section-title text-center">Un écosystème de confiance</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { Icon: BankIcon, type: 'Banque Partenaire', name: 'Orabank', desc: 'Groupe bancaire panafricain — 12 pays' },
              { Icon: WaveIcon, type: 'Mobile Money', name: 'Wave', desc: 'Transferts mobiles CI & SN' },
              { Icon: SignalIcon, type: 'Mobile Money', name: 'Orange Money', desc: 'Zone UEMOA complète' },
              { Icon: BroadcastIcon, type: 'Mobile Money', name: 'MTN MoMo', desc: 'Bénin & Nigeria' },
              { Icon: SignalIcon, type: 'SMS Tech', name: "Africa's Talking", desc: 'Infrastructure SMS panafricaine' },
              { Icon: GavelIcon, type: 'Régulateur', name: 'BCEAO', desc: 'Conformité réglementaire UEMOA' },
            ].map((p, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String(i)}
                className="bg-white rounded-2xl border border-g100 p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal/30"
              >
                <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mx-auto mb-3 bg-teal/10 text-teal">
                  <p.Icon size={26} />
                </div>
                <span className="block text-g400 text-[10px] uppercase tracking-wider font-semibold mb-1">{p.type}</span>
                <div className="font-display font-bold text-navy text-sm mb-1">{p.name}</div>
                <div className="text-g600 text-xs leading-snug">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp">
          <div className="text-center mb-11">
            <span className="section-tag">TÉMOIGNAGES</span>
            <h2 className="section-title text-center">Ils font confiance à TOVPAY</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Grâce à TOVPAY j'ai pu réapprovisionner mon stock en urgence. Le crédit était sur mon compte Wave en 10 minutes. Incroyable !", name: 'Aminata Diallo', role: 'Commerçante — Dakar, Sénégal' },
              { quote: 'Le processus est simple, rapide et transparent. Je recommande à tous les petits commerçants qui ont besoin de trésorerie.', name: 'Kwame Asante', role: "Artisan — Abidjan, Côte d'Ivoire" },
              { quote: 'TOVPAY a vraiment changé ma façon de gérer mes finances. Le scoring est juste et les taux sont clairs dès le départ.', name: 'Fatoumata Koné', role: 'Micro-entrepreneuse — Lomé, Togo' },
            ].map((t, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String(i)}
                className="bg-white rounded-[20px] border border-g100 shadow-[0_4px_22px_rgba(13,34,81,0.06)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,185,142,0.12)]"
              >
                <div className="font-display text-teal text-4xl leading-none mb-2.5">❝</div>
                <p className="text-g600 text-[15px] leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <Avatar name={t.name} size={44} />
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-g600 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-11">
            <div>
              <span className="section-tag">BLOG</span>
              <h2 className="section-title mb-0">Dernières publications</h2>
            </div>
            <Link to="/blog" className="btn-outline">Voir tous les articles →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: ScoringIcon, tag: 'Inclusion Financière', reading: '5 min', title: 'Comment le nano-crédit transforme les économies informelles en Afrique', date: 'Mai 2026', gradient: 'linear-gradient(135deg,#0D2251,#00B98E)' },
              { Icon: AiSparkIcon, tag: 'Innovation IA', reading: '4 min', title: 'Le scoring mobile : la révolution du crédit sans garantie', date: 'Avril 2026', gradient: 'linear-gradient(135deg,#1A3FA8,#00B98E)' },
              { Icon: HandshakeIcon, tag: 'Partenariat', reading: '6 min', title: "TOVPAY & Orabank : un partenariat historique pour l'UEMOA", date: 'Mars 2026', gradient: 'linear-gradient(135deg,#0B4A3F,#00B98E)' },
            ].map((b, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String(i)}
                className="bg-white rounded-2xl border border-g100 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal/30"
              >
                <div className="h-[150px] flex items-center justify-center relative overflow-hidden" style={{ background: b.gradient }}>
                  <b.Icon size={30} className="text-white/90 relative z-10" />
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-teal text-[11px] font-semibold uppercase tracking-wide">{b.tag}</span>
                    <span className="text-g400 text-xs">{b.reading}</span>
                  </div>
                  <h4 className="font-display font-bold text-navy text-base leading-snug mb-3">{b.title}</h4>
                  <div className="text-g400 text-xs">{b.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-24 px-[5%] bg-[linear-gradient(150deg,#0B1F0A_0%,#112A0F_45%,#0D2251_100%)]">
        <div className="mesh-orb w-[520px] h-[520px] -top-[180px] left-[8%] bg-[radial-gradient(circle,rgba(159,232,112,0.3),transparent_70%)]" />
        <div className="mesh-orb w-[420px] h-[420px] -bottom-[160px] right-[10%] bg-[radial-gradient(circle,rgba(0,229,184,0.22),transparent_70%)] [animation-delay:-6s] [animation-duration:22s]" />
        <div className="container-tp relative">
          <div className="max-w-[640px] mx-auto text-center" data-reveal>
            <h2 className="font-display font-extrabold text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] text-white leading-tight mb-4 tracking-tight">
              Prêt à accéder à votre premier crédit ?
            </h2>
            <p className="text-white/68 text-base leading-relaxed mb-9">
              Téléchargez l'application, vérifiez votre identité, et recevez vos fonds en moins de 15 minutes.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link to="/nano-credit" className="btn-primary">Demander un crédit</Link>
              <Link to="/contact" className="btn-ghost">Parler à un conseiller →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
