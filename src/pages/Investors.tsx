export default function Investors() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Accueil</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">Investisseurs</span>
          </div>
          <h1>Opportunité d'investissement</h1>
          <p>Participez à la révolution de l'inclusion financière africaine</p>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Modèle économique</h2>
          <table className="kpi-table">
            <thead>
              <tr>
                <th>Métrique</th>
                <th>2024</th>
                <th>2025E</th>
                <th>2026P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Clients actifs</td>
                <td>50</td>
                <td>330</td>
                <td>2 000</td>
              </tr>
              <tr>
                <td>Crédits accordés (M FCFA)</td>
                <td>25</td>
                <td>200</td>
                <td>1 200</td>
              </tr>
              <tr>
                <td>Taux recouvrement</td>
                <td>92%</td>
                <td>85%</td>
                <td>83%</td>
              </tr>
              <tr>
                <td>Pays opérationnels</td>
                <td>1</td>
                <td>4</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Revenue (M FCFA)</td>
                <td>2.5</td>
                <td>22</td>
                <td>140</td>
              </tr>
              <tr>
                <td>Marge opérationnelle</td>
                <td>-40%</td>
                <td>-15%</td>
                <td>18%</td>
              </tr>
            </tbody>
          </table>

          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '44px', marginTop: '80px' }}>Points clés d'investissement</h2>
          <div className="inv-cards">
            <div className="inv-card">
              <div className="inv-card-icon">🌍</div>
              <h4 className="inv-card-title">Marché géant</h4>
              <p className="inv-card-desc">500M+ personnes sans accès bancaire en Afrique. TAM: $50B+</p>
            </div>
            <div className="inv-card">
              <div className="inv-card-icon">📈</div>
              <h4 className="inv-card-title">Croissance 7x</h4>
              <p className="inv-card-desc">Revenue CAGR 120% 2024-2026. Chemin vers profitabilité clair.</p>
            </div>
            <div className="inv-card">
              <div className="inv-card-icon">🤝</div>
              <h4 className="inv-card-title">Orabank backing</h4>
              <p className="inv-card-desc">Adossement bancaire Orabank. Conformité BCEAO garantie.</p>
            </div>
          </div>

          <div className="highlight-box" style={{ marginTop: '80px' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '1.5rem', fontWeight: 700 }}>Levée de fonds Série A</h3>
            <p style={{ color: 'rgba(255,255,255,.75)', marginBottom: '20px', lineHeight: 1.8 }}>
              TOVPAY prépare une levée de 2M USD fin 2026 pour financer : expansion 6 pays supplémentaires, tech AI/ML avancée, équipes locales.
            </p>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '14px' }}>
              📧 Contactez: <strong style={{ color: 'var(--teal)' }}>investors@tovpay.com</strong>
            </p>
          </div>

          <div style={{ marginTop: '80px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '44px' }}>Profils d'investisseurs</h2>
            <div className="inv-profile-grid">
              <div className="inv-profile-card">
                <div className="inv-profile-icon">💰</div>
                <h4 className="inv-profile-title">Family Offices</h4>
                <p className="inv-profile-desc">Impact investing africain + rendements financiers solides</p>
              </div>
              <div className="inv-profile-card">
                <div className="inv-profile-icon">🏢</div>
                <h4 className="inv-profile-title">VC Panafricains</h4>
                <p className="inv-profile-desc">Spécialisés fintech, crypto, fintech inclusive</p>
              </div>
              <div className="inv-profile-card">
                <div className="inv-profile-icon">🌐</div>
                <h4 className="inv-profile-title">Impact Funds</h4>
                <p className="inv-profile-desc">SDG 1,5,8,10 — Inclusion financière mesurable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
