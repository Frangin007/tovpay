export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Accueil</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">À Propos</span>
          </div>
          <h1>Notre histoire</h1>
          <p>Découvrez comment TOVPAY transforme l'inclusion financière en Afrique</p>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ marginBottom: '80px' }}>
            <span className="section-tag">MISSION</span>
            <h2 className="section-title">Démocratiser le crédit en Afrique</h2>
            <p className="section-sub" style={{ maxWidth: '720px', marginBottom: '40px' }}>
              TOVPAY est fondée sur la conviction que le crédit est un droit, pas un privilège. Nous croyons que chaque entrepreneur africain, quel que soit son statut bancaire ou son histoire, mérite une chance d'accéder au financement.
            </p>
            <div className="about-grid">
              <div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '20px' }}>Notre Vision</h3>
                <p style={{ color: 'var(--g600)', lineHeight: '1.8', fontSize: '15px' }}>
                  Devenir le leader panafricain du micro-crédit digital, en offrant des solutions inclusives et accessibles qui transforment les économies locales.
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '20px' }}>Nos Valeurs</h3>
                <ul style={{ color: 'var(--g600)', lineHeight: '1.8', fontSize: '15px', paddingLeft: '20px' }}>
                  <li>Accessibilité : Crédit pour tous</li>
                  <li>Transparence : Pas de frais cachés</li>
                  <li>Innovation : IA au service de l'humain</li>
                  <li>Intégrité : Conforme BCEAO</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '80px' }}>
            <span className="section-tag">HISTOIRE</span>
            <h2 className="section-title">Une trajectoire remarquable</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2023</div>
                <h4 className="timeline-title">Fondation de TOVPAY</h4>
                <p className="timeline-desc">Lancement de la plateforme en Côte d'Ivoire avec 50 clients pionniers</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2024 Q1</div>
                <h4 className="timeline-title">Partenariat Orabank</h4>
                <p className="timeline-desc">Accord d'adossement bancaire avec Orabank, leader bancaire panafricain</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2024 Q3</div>
                <h4 className="timeline-title">Expansion régionale</h4>
                <p className="timeline-desc">Lancement en Sénégal, Togo et Bénin — 330+ clients actifs</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2025</div>
                <h4 className="timeline-title">Consolidation UEMOA</h4>
                <p className="timeline-desc">Présence dans 6 pays UEMOA, intégration scoring IA avancé</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2026</div>
                <h4 className="timeline-title">Ambition 2028</h4>
                <p className="timeline-desc">Préparer expansion à 12 pays africains, série A en cours</p>
              </div>
            </div>
          </div>

          <div>
            <span className="section-tag">ÉQUIPE</span>
            <h2 className="section-title">Notre leadership</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-avatar">👨🏾💼</div>
                <h4 className="team-name">Youssouf Diallo</h4>
                <div className="team-role">CEO & Co-Founder</div>
                <p className="team-bio">Ex-Orabank, 12 ans en fintech panafricaine. MBA ISM Dakar, spécialiste inclusion financière.</p>
              </div>
              <div className="team-card">
                <div className="team-avatar">👩🏾💻</div>
                <h4 className="team-name">Ama Mensah</h4>
                <div className="team-role">CTO</div>
                <p className="team-bio">Engineer IA/ML de Paytech Kenya. Spécialiste scoring intelligent et infrastructure blockchain.</p>
              </div>
              <div className="team-card">
                <div className="team-avatar">👨🏿📊</div>
                <h4 className="team-name">Mamadou Sow</h4>
                <div className="team-role">CFO</div>
                <p className="team-bio">Ex-Bpifrance, 8 ans en structuration fintech. Certifié CFA, expert conformité BCEAO.</p>
              </div>
              <div className="team-card">
                <div className="team-avatar">👩🏻🤝</div>
                <h4 className="team-name">Sarah Kofi</h4>
                <div className="team-role">Chief Operations Officer</div>
                <p className="team-bio">Ex-MTN, 10 ans en digital payments. Responsable expansion UEMOA et partenariats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
