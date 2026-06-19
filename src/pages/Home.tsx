import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

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

  const goTo = (idx: number) => {
    if (animating || idx === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 320)
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % heroSlides.length)
    }, 5500)
    return () => {
  if (timerRef.current) {
    clearTimeout(timerRef.current)
  }
}
  }, [active])

  const slide = heroSlides[active]

  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className={`hero-inner${animating ? ' hero-inner--out' : ' hero-inner--in'}`}>
        <div className="hero-left">

          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span className="hero-badge-text">{slide.tag}</span>
          </div>

          <h1 className="hero-title">
            {slide.title.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
            <span className="grad">{slide.accent}</span>
          </h1>

          <p className="hero-desc">{slide.desc}</p>

          <div className="hero-btns">
            <Link to={slide.cta.path} className="btn-primary">{slide.cta.label}</Link>
            <Link to={slide.ghost.path} className="btn-ghost">{slide.ghost.label} →</Link>
          </div>

          <div className="hero-slide-stat">
            <span className="hero-slide-stat-val">{slide.stat.val}</span>
            <span className="hero-slide-stat-label">{slide.stat.label}</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-body">
              <div className="phone-label">Solde disponible</div>
              <div className="phone-amount">25 000 <span>FCFA</span></div>
              <div className="phone-card">
                <div className="phone-card-row">
                  <div>
                    <div className="phone-card-label">Crédit actif</div>
                    <div className="phone-card-val">10 000 FCFA</div>
                  </div>
                  <span className="phone-card-tag">2 sem.</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" /></div>
              </div>
              <div className="phone-grid">
                <div className="phone-action"><div className="phone-action-icon">💸</div><div className="phone-action-label">Crédit</div></div>
                <div className="phone-action"><div className="phone-action-icon">📲</div><div className="phone-action-label">Paiement</div></div>
                <div className="phone-action"><div className="phone-action-icon">📊</div><div className="phone-action-label">Scoring</div></div>
                <div className="phone-action"><div className="phone-action-icon">👤</div><div className="phone-action-label">Profil</div></div>
              </div>
              <div className="phone-orabank">
                <span style={{ fontSize: '14px' }}>🏦</span>
                <span className="phone-orabank-text">Partenaire Orabank · Sécurisé BCEAO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="hero-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === active ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="container">
        <div className="stats-bar">
          <div className="stat-item"><div className="stat-val">15 min</div><div className="stat-label">Crédit accordé en</div></div>
          <div className="stat-item"><div className="stat-val">12 pays</div><div className="stat-label">Présence Afrique</div></div>
          <div className="stat-item"><div className="stat-val">50K NGN</div><div className="stat-label">Crédit max Nigeria</div></div>
          <div className="stat-item"><div className="stat-val">99%</div><div className="stat-label">Disponibilité</div></div>
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
  const [formSubmitted, setFormSubmitted] = useState(false)

  const rates = { 1: 0.1, 2: 0.15, 3: 0.2, 4: 0.25 }
  const interest = Math.round(simAmount * rates[simDur as keyof typeof rates])
  const total = simAmount + interest

  const services = [
    {
      icon: '💳',
      color: '#00B98E',
      title: 'Nano-Crédit Mobile',
      desc: 'Accédez à 1 000 – 20 000 FCFA (50 000 NGN) en moins de 15 minutes via Mobile Money. Aucune garantie matérielle requise. Remboursement flexible sur 1 à 4 semaines.',
      features: ['Décaissement en 15 min', 'Sans garantie physique', 'Via Wave, Orange Money, MTN', 'Scoring IA intelligent']
    },
    {
      icon: '📱',
      color: '#1A3FA8',
      title: 'Wallet & Paiements',
      desc: 'Un portefeuille numérique complet pour envoyer, recevoir et gérer vos fonds au quotidien. Compatible avec tous les opérateurs Mobile Money de la zone UEMOA.',
      features: ['Multi-opérateurs Mobile Money', 'Paiement marchand', 'Transferts instantanés', 'Historique détaillé']
    },
    {
      icon: '🤖',
      color: '#7C3AED',
      title: 'Scoring Intelligent',
      desc: "Notre moteur d'IA analyse votre profil de remboursement pour déterminer votre score de crédit en temps réel, sans document complexe ni historique bancaire.",
      features: ['Score en temps réel', 'Sans historique bancaire', 'Amélioration continue', 'Transparence totale']
    },
    {
      icon: '🏢',
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
      <section className="services-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="section-tag">NOS SOLUTIONS</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Des services financiers innovants</h2>
            <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>TOVPAY réunit tous les outils pour l'inclusion financière en Afrique</p>
          </div>
          <div className="tabs">
            {services.map((s, i) => (
              <button key={i} className={`tab ${i === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                {s.icon} {s.title}
              </button>
            ))}
          </div>
          <div className="service-detail">
            <div>
              <div className="service-icon-wrap" style={{ background: `${service.color}18` }}>{service.icon}</div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.7rem', color: 'var(--navy)', marginBottom: '14px' }}>
                {service.title}
              </h3>
              <p style={{ color: 'var(--g600)', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>{service.desc}</p>
              <Link to="/services" className="btn-primary">En savoir plus →</Link>
            </div>
            <div className="service-features">
              <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: 'var(--navy)', marginBottom: '18px' }}>Fonctionnalités clés</h4>
              {service.features.map((f, i) => (
                <div key={i} className="feature-row">
                  <div className="feature-check" style={{ background: `${service.color}18`, color: service.color }}>✓</div>
                  <span style={{ color: 'var(--g600)', fontSize: '14px', fontFamily: "'DM Sans',sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATOR */}
      <section className="simulator-section">
        <div className="sim-orb"></div>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="section-tag" style={{ color: 'var(--teal)' }}>SIMULATEUR</span>
            <h2 className="section-title" style={{ color: '#fff', textAlign: 'center' }}>Calculez votre nano-crédit</h2>
          </div>
          <div className="sim-card">
            <div className="sim-grid">
              <div>
                <span className="sim-label">Montant souhaité</span>
                <div className="sim-amount">{simAmount.toLocaleString('fr-FR')} <span>FCFA</span></div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={simAmount}
                  onChange={(e) => setSimAmount(Number(e.target.value))}
                />
                <div className="range-labels"><span>1 000</span><span>20 000</span></div>
                <div style={{ marginTop: '22px' }}>
                  <span className="sim-label">Durée de remboursement</span>
                  <div className="dur-grid">
                    {[1, 2, 3, 4].map(d => (
                      <button
                        key={d}
                        className={`dur-btn ${d === simDur ? 'active' : ''}`}
                        onClick={() => setSimDur(d)}
                      >
                        {d === 1 ? '1 semaine' : d === 2 ? '2 semaines' : d === 3 ? '3 semaines' : '1 mois'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="result-row">
                  <span className="result-label">Montant emprunté</span>
                  <span className="result-val">{simAmount.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Taux d'intérêt</span>
                  <span className="result-val">{(rates[simDur as keyof typeof rates] * 100).toFixed(0)}%</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Intérêts</span>
                  <span className="result-val">{interest.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="result-row highlight">
                  <span className="result-label" style={{ color: 'rgba(255,255,255,.7)' }}>Total à rembourser</span>
                  <span className="result-val">{total.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <Link to="/nano-credit" className="btn-sim">Demander ce crédit →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section style={{ background: '#fff' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-tag">À PROPOS</span>
              <h2 className="section-title">Nous rendons le crédit accessible à tous</h2>
              <p style={{ color: 'var(--g600)', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
                TOVPAY est une fintech africaine fondée sur la conviction que chaque individu, indépendamment de son statut bancaire, mérite un accès équitable aux services financiers.
              </p>
              <p style={{ color: 'var(--g600)', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
                Notre réseau de chefs d'agence locaux gère jusqu'à 100 clients chacun dans leur zone géographique, garantissant une proximité humaine irremplaçable.
              </p>
              <div className="about-stats">
                <div><div className="about-stat-val">330+</div><div className="about-stat-label">Clients 2026</div></div>
                <div><div className="about-stat-val">6</div><div className="about-stat-label">Pays UEMOA</div></div>
                <div><div className="about-stat-val">80%+</div><div className="about-stat-label">Taux recouvrement</div></div>
              </div>
            </div>
            <div className="about-cards">
              <div className="about-card light"><div className="about-card-icon">🌍</div><h4 className="about-card-title light">Impact Panafricain</h4><p className="about-card-desc light">Présents dans 6 pays UEMOA avec expansion à 12 pays d'ici 2028.</p></div>
              <div className="about-card dark"><div className="about-card-icon">🤝</div><h4 className="about-card-title dark">Partenariat Orabank</h4><p className="about-card-desc dark">Adossés au premier groupe bancaire panafricain privé, conformité BCEAO.</p></div>
              <div className="about-card dark"><div className="about-card-icon">⚡</div><h4 className="about-card-title dark">Innovation IA</h4><p className="about-card-desc dark">Scoring intelligent en temps réel pour démocratiser le crédit mobile.</p></div>
              <div className="about-card light"><div className="about-card-icon">🔒</div><h4 className="about-card-title light">Sécurité & Conformité</h4><p className="about-card-desc light">Données chiffrées, conformité KYC/LCB-FT et OHADA garanties.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS PREVIEW */}
      <section className="partners-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-tag">PARTENAIRES</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Un écosystème de confiance</h2>
          </div>
          <div className="partners-grid">
            <div className="partner-card"><div className="partner-icon">🏦</div><span className="partner-type">Banque Partenaire</span><div className="partner-name">Orabank</div><div className="partner-desc">Groupe bancaire panafricain — 12 pays</div></div>
            <div className="partner-card"><div className="partner-icon">🌊</div><span className="partner-type">Mobile Money</span><div className="partner-name">Wave</div><div className="partner-desc">Transferts mobiles CI & SN</div></div>
            <div className="partner-card"><div className="partner-icon">🟠</div><span className="partner-type">Mobile Money</span><div className="partner-name">Orange Money</div><div className="partner-desc">Zone UEMOA complète</div></div>
            <div className="partner-card"><div className="partner-icon">📶</div><span className="partner-type">Mobile Money</span><div className="partner-name">MTN MoMo</div><div className="partner-desc">Bénin & Nigeria</div></div>
            <div className="partner-card"><div className="partner-icon">📱</div><span className="partner-type">SMS Tech</span><div className="partner-name">Africa's Talking</div><div className="partner-desc">Infrastructure SMS panafricaine</div></div>
            <div className="partner-card"><div className="partner-icon">🏛️</div><span className="partner-type">Régulateur</span><div className="partner-name">BCEAO</div><div className="partner-desc">Conformité réglementaire UEMOA</div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--g50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 0 }}>
            <span className="section-tag">TÉMOIGNAGES</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Ils font confiance à TOVPAY</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-quote">❝</div>
              <p className="testi-text">Grâce à TOVPAY j'ai pu réapprovisionner mon stock en urgence. Le crédit était sur mon compte Wave en 10 minutes. Incroyable !</p>
              <div className="testi-author">
                <span className="testi-avatar">👩🏿</span>
                <div>
                  <div className="testi-name">Aminata Diallo</div>
                  <div className="testi-role">Commerçante — Dakar, Sénégal</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-quote">❝</div>
              <p className="testi-text">Le processus est simple, rapide et transparent. Je recommande à tous les petits commerçants qui ont besoin de trésorerie.</p>
              <div className="testi-author">
                <span className="testi-avatar">👨🏿</span>
                <div>
                  <div className="testi-name">Kwame Asante</div>
                  <div className="testi-role">Artisan — Abidjan, Côte d'Ivoire</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-quote">❝</div>
              <p className="testi-text">TOVPAY a vraiment changé ma façon de gérer mes finances. Le scoring est juste et les taux sont clairs dès le départ.</p>
              <div className="testi-author">
                <span className="testi-avatar">👩🏾</span>
                <div>
                  <div className="testi-name">Fatoumata Koné</div>
                  <div className="testi-role">Micro-entrepreneuse — Lomé, Togo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ background: '#fff' }}>
        <div className="container">
          <div className="blog-header">
            <div>
              <span className="section-tag">BLOG</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Dernières publications</h2>
            </div>
            <Link to="/blog" className="btn-outline">Voir tous les articles →</Link>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-img" style={{ background: 'linear-gradient(135deg,#0D2251,#00B98E)' }}>📊</div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-tag">Inclusion Financière</span>
                  <span className="blog-reading">5 min</span>
                </div>
                <h4 className="blog-title">Comment le nano-crédit transforme les économies informelles en Afrique</h4>
                <div className="blog-date">Mai 2026</div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img" style={{ background: 'linear-gradient(135deg,#1A3FA8,#00B98E)' }}>🤖</div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-tag">Innovation IA</span>
                  <span className="blog-reading">4 min</span>
                </div>
                <h4 className="blog-title">Le scoring mobile : la révolution du crédit sans garantie</h4>
                <div className="blog-date">Avril 2026</div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img" style={{ background: 'linear-gradient(135deg,#0B4A3F,#00B98E)' }}>🤝</div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-tag">Partenariat</span>
                  <span className="blog-reading">6 min</span>
                </div>
                <h4 className="blog-title">TOVPAY & Orabank : un partenariat historique pour l'UEMOA</h4>
                <div className="blog-date">Mars 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}