export default function Services() {
  const services = [
    {
      icon: '💳',
      color: '#00B98E',
      title: 'Nano-Crédit Mobile',
      desc: 'Accédez instantanément à 1 000 – 20 000 FCFA (équivalent Nigeria) sans paperasse complexe. Scoring basé sur IA, remboursement flexible.',
      features: ['Décaissement en 15 min', 'Sans garantie physique', 'Multi-opérateurs Mobile Money', 'Scoring IA intelligent'],
      link: '/nano-credit'
    },
    {
      icon: '📱',
      color: '#1A3FA8',
      title: 'Wallet & Paiements',
      desc: 'Portefeuille numérique complet pour gérer vos fonds. Envoyez, recevez, payez chez les commerçants partenaires.',
      features: ['Multi-opérateurs', 'Paiement marchand', 'Transferts instantanés', 'Historique détaillé', 'Notification SMS'],
      link: '/services'
    },
    {
      icon: '🤖',
      color: '#7C3AED',
      title: 'Scoring Intelligent',
      desc: 'Moteur IA propriétaire qui évalue votre profil de crédit en temps réel sans historique bancaire complexe.',
      features: ['Score en temps réel', 'Sans historique bancaire', 'Amélioration continue', 'Transparence totale', 'Appel API disponible'],
      link: '/services'
    },
    {
      icon: '🏢',
      color: '#F5A623',
      title: 'Solutions PME',
      desc: 'Services financiers digitaux pour petites entreprises : lignes renouvelables, gestion trésorerie, tableaux de bord.',
      features: ['Ligne de crédit renouvelable', 'Gestion trésorerie', 'Multi-utilisateurs', 'Tableau de bord analytique', 'Support dédié'],
      link: '/services'
    }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Accueil</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">Services</span>
          </div>
          <h1>Nos services financiers</h1>
          <p>Solutions complètes pour l'inclusion financière en Afrique de l'Ouest</p>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          {services.map((service, i) => (
            <div key={i} style={{ marginBottom: i < services.length - 1 ? '80px' : '0' }}>
              <div className="about-grid">
                <div>
                  <div className="service-icon-wrap" style={{ background: `${service.color}18` }}>
                    {service.icon}
                  </div>
                  <h2 className="section-title" style={{ marginTop: '0' }}>{service.title}</h2>
                  <p style={{ color: 'var(--g600)', fontSize: '15px', lineHeight: '1.8', marginBottom: '28px' }}>
                    {service.desc}
                  </p>
                  <a href={service.link} className="btn-primary">En savoir plus →</a>
                </div>
                <div className="service-features">
                  <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: 'var(--navy)', marginBottom: '18px' }}>
                    Caractéristiques
                  </h4>
                  {service.features.map((f, j) => (
                    <div key={j} className="feature-row">
                      <div className="feature-check" style={{ background: `${service.color}18`, color: service.color }}>✓</div>
                      <span style={{ color: 'var(--g600)', fontSize: '14px' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              {i < services.length - 1 && <hr style={{ border: 'none', borderTop: '1px solid var(--g100)', margin: '60px 0' }} />}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--g50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="section-tag">COMMENCER</span>
            <h2 className="section-title">Comment ça marche ?</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">📱</div>
              <h4 className="step-title">Téléchargez l'app</h4>
              <p className="step-desc">Disponible sur App Store et Google Play. Gratuit et sécurisé.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">🆔</div>
              <h4 className="step-title">Inscrivez-vous</h4>
              <p className="step-desc">Vérification ID + numéro téléphone. Moins de 5 minutes.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">🤖</div>
              <h4 className="step-title">Scoring instantané</h4>
              <p className="step-desc">IA analyse votre profil. Résultat immédiat.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon">💰</div>
              <h4 className="step-title">Crédit décaissé</h4>
              <p className="step-desc">Fonds sur votre portefeuille en 15 minutes max.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
