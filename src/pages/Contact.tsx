import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'credit',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', subject: 'credit', message: '' })
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Accueil</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">Contact</span>
          </div>
          <h1>Nous contacter</h1>
          <p>Posez vos questions ou demandez un partenariat</p>
        </div>
      </section>

      <section style={{ background: 'var(--g50)' }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: 'var(--navy)', marginBottom: '20px' }}>
                Coordonnées
              </h4>
              <div className="contact-info-item">
                <div className="contact-info-icon">📧</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-val">contact@tovpay.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">💼</div>
                <div>
                  <div className="contact-info-label">Investisseurs</div>
                  <div className="contact-info-val">investors@tovpay.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">🤝</div>
                <div>
                  <div className="contact-info-label">Partenaires</div>
                  <div className="contact-info-val">partners@tovpay.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📱</div>
                <div>
                  <div className="contact-info-label">WhatsApp</div>
                  <div className="contact-info-val">+225 XX XX XX XX</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div>
                  <div className="contact-info-label">Siège</div>
                  <div className="contact-info-val">Abidjan, Côte d'Ivoire</div>
                </div>
              </div>
              <div style={{ marginTop: '24px' }}>
                <div style={{ color: 'var(--g400)', fontSize: '12px', fontFamily: "'DM Sans',sans-serif", marginBottom: '10px' }}>
                  Réseaux sociaux
                </div>
                <div className="social-row">
                  <a href="#" className="social-btn">📘</a>
                  <a href="#" className="social-btn">🐦</a>
                  <a href="#" className="social-btn">💼</a>
                  <a href="#" className="social-btn">📸</a>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="success-box">
                  <div className="success-icon">✅</div>
                  <h4 className="success-title">Message envoyé !</h4>
                  <p className="success-desc">Notre équipe vous répondra dans les 24 heures.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div>
                      <label className="form-label">Nom complet</label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@exemple.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Téléphone / WhatsApp</label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Sujet</label>
                    <select
                      className="form-select"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="credit">Demande de crédit (particulier)</option>
                      <option value="pme">Solution PME</option>
                      <option value="partnership">Partenariat</option>
                      <option value="investor">Investisseur</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-input"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit">Envoyer le message →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
