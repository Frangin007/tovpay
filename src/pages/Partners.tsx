export default function Partners() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Accueil</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">Partenaires</span>
          </div>
          <h1>Notre écosystème</h1>
          <p>Les partenaires stratégiques qui font la force de TOVPAY</p>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Partenaires clés</h2>
          <div className="countries-grid">
            <div className="partner-card">
              <div className="partner-icon">🏦</div>
              <span className="partner-type">Banque Adossement</span>
              <div className="partner-name">Orabank</div>
              <div className="partner-desc">Groupe bancaire panafricain privé, présent dans 12 pays</div>
            </div>
            <div className="partner-card">
              <div className="partner-icon">🌊</div>
              <span className="partner-type">Mobile Money</span>
              <div className="partner-name">Wave</div>
              <div className="partner-desc">Transferts mobiles instantanés Côte d'Ivoire & Sénégal</div>
            </div>
            <div className="partner-card">
              <div className="partner-icon">🟠</div>
              <span className="partner-type">Mobile Money</span>
              <div className="partner-name">Orange Money</div>
              <div className="partner-desc">Zone UEMOA complète (9 pays)</div>
            </div>
            <div className="partner-card">
              <div className="partner-icon">📶</div>
              <span className="partner-type">Mobile Money</span>
              <div className="partner-name">MTN MoMo</div>
              <div className="partner-desc">Bénin, Nigeria, Mali, Mauritanie</div>
            </div>
            <div className="partner-card">
              <div className="partner-icon">📱</div>
              <span className="partner-type">Tech SMS</span>
              <div className="partner-name">Africa's Talking</div>
              <div className="partner-desc">Infrastructure SMS panafricaine, 55 pays</div>
            </div>
            <div className="partner-card">
              <div className="partner-icon">🏛️</div>
              <span className="partner-type">Régulateur</span>
              <div className="partner-name">BCEAO</div>
              <div className="partner-desc">Conformité réglementaire zone UEMOA</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--g50)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '44px' }}>Notre présence</h2>
          <div className="countries-grid">
            <div className="country-card">
              <div className="country-flag">🇨🇮</div>
              <h4 className="country-name">Côte d'Ivoire</h4>
              <span className="country-status status-active">Actif</span>
              <p className="country-desc">Siège principal — 140+ clients</p>
            </div>
            <div className="country-card">
              <div className="country-flag">🇸🇳</div>
              <h4 className="country-name">Sénégal</h4>
              <span className="country-status status-active">Actif</span>
              <p className="country-desc">100+ clients — Dakar</p>
            </div>
            <div className="country-card">
              <div className="country-flag">🇧🇯</div>
              <h4 className="country-name">Bénin</h4>
              <span className="country-status status-active">Actif</span>
              <p className="country-desc">50+ clients — Cotonou</p>
            </div>
            <div className="country-card">
              <div className="country-flag">🇹🇬</div>
              <h4 className="country-name">Togo</h4>
              <span className="country-status status-active">Actif</span>
              <p className="country-desc">40+ clients — Lomé</p>
            </div>
            <div className="country-card">
              <div className="country-flag">🇲🇱</div>
              <h4 className="country-name">Mali</h4>
              <span className="country-status status-coming">Octobre 2026</span>
              <p className="country-desc">Préparation Q4 2026</p>
            </div>
            <div className="country-card">
              <div className="country-flag">🇳🇪</div>
              <h4 className="country-name">Niger</h4>
              <span className="country-status status-coming">Q1 2027</span>
              <p className="country-desc">Lancement prévu 2027</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
