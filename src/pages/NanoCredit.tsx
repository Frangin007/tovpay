import { useState } from 'react'

export default function NanoCredit() {
  const [simDur, setSimDur] = useState(1)
  const [simAmount, setSimAmount] = useState(10000)

  const rates = { 1: 0.1, 2: 0.15, 3: 0.2, 4: 0.25 }
  const interest = Math.round(simAmount * rates[simDur as keyof typeof rates])
  const total = simAmount + interest

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Accueil</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">Nano-Crédit</span>
          </div>
          <h1>Nano-Crédit Mobile</h1>
          <p>Crédit instantané sans garantie, remboursement flexible</p>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ marginBottom: '80px' }}>
            <h2 className="section-title">Simulation de crédit</h2>
            <div className="sim-card" style={{ background: 'var(--g50)' }}>
              <div className="sim-grid">
                <div>
                  <span className="sim-label">Montant souhaité</span>
                  <div className="sim-amount" style={{ color: 'var(--navy)' }}>
                    {simAmount.toLocaleString('fr-FR')} <span>FCFA</span>
                  </div>
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
                    <span className="sim-label" style={{ color: 'var(--navy)' }}>Durée de remboursement</span>
                    <div className="dur-grid">
                      {[1, 2, 3, 4].map(d => (
                        <button
                          key={d}
                          className={`dur-btn ${d === simDur ? 'active' : ''}`}
                          style={{ background: d === simDur ? 'var(--navy)' : 'var(--g100)', color: d === simDur ? '#fff' : 'var(--navy)' }}
                          onClick={() => setSimDur(d)}
                        >
                          {d === 1 ? '1 sem' : d === 2 ? '2 sem' : d === 3 ? '3 sem' : '1 mois'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ background: 'linear-gradient(135deg,var(--navy),#1a3a8f)', borderRadius: '16px', padding: '24px', color: '#fff' }}>
                  <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                    <div style={{ color: 'rgba(255,255,255,.65)', fontSize: '12px', marginBottom: '4px' }}>Montant emprunté</div>
                    <div style={{ fontSize: '24px', fontWeight: 700 }}>{simAmount.toLocaleString('fr-FR')} FCFA</div>
                  </div>
                  <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                    <div style={{ color: 'rgba(255,255,255,.65)', fontSize: '12px', marginBottom: '4px' }}>Taux d'intérêt</div>
                    <div style={{ fontSize: '20px', fontWeight: 700 }}>{(rates[simDur as keyof typeof rates] * 100).toFixed(0)}%</div>
                  </div>
                  <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                    <div style={{ color: 'rgba(255,255,255,.65)', fontSize: '12px', marginBottom: '4px' }}>Intérêts</div>
                    <div style={{ fontSize: '20px', fontWeight: 700 }}>{interest.toLocaleString('fr-FR')} FCFA</div>
                  </div>
                  <div style={{ background: 'rgba(0,185,142,.2)', padding: '16px', borderRadius: '12px' }}>
                    <div style={{ color: 'rgba(255,255,255,.65)', fontSize: '12px', marginBottom: '4px' }}>Total à rembourser</div>
                    <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--teal)' }}>{total.toLocaleString('fr-FR')} FCFA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '80px' }}>
            <h2 className="section-title">Conditions d'accès</h2>
            <div className="cond-grid">
              <div className="cond-card">
                <div className="cond-icon">📋</div>
                <h4 className="cond-title light">Critères obligatoires</h4>
                <ul className="cond-list light">
                  <li>✓ Âge minimum 18 ans</li>
                  <li>✓ Numéro de téléphone actif</li>
                  <li>✓ Compte Mobile Money</li>
                  <li>✓ Identité vérifiée</li>
                  <li>✓ Résidence UEMOA</li>
                </ul>
              </div>
              <div className="cond-card accent">
                <div className="cond-icon">⚡</div>
                <h4 className="cond-title dark">Avantages TOVPAY</h4>
                <ul className="cond-list dark">
                  <li>✓ Sans garantie physique</li>
                  <li>✓ Sans demande d'emploi</li>
                  <li>✓ Scoring instantané</li>
                  <li>✓ Décaissement 15 min</li>
                  <li>✓ Taux transparent</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="section-title">Processus d'obtention</h2>
            <div className="steps-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)', marginTop: '44px' }}>
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-icon">📱</div>
                <h4 className="step-title">Télécharger</h4>
                <p className="step-desc">App Store / Google Play</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-icon">🆔</div>
                <h4 className="step-title">Vérifier</h4>
                <p className="step-desc">ID + téléphone (5 min)</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-icon">🤖</div>
                <h4 className="step-title">Scorer</h4>
                <p className="step-desc">IA analyse (1 min)</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-icon">✅</div>
                <h4 className="step-title">Décaisser</h4>
                <p className="step-desc">Fonds reçus (15 min)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
