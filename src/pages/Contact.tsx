import { useState } from 'react'
import { MailIcon, BriefcaseIcon, HandshakeIcon, BroadcastIcon, MapPinIcon, CheckCircleIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import { useScrollReveal } from '../hooks/useScrollReveal'

function FacebookIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.5 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>
}
function XIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16.7l-5.2-6.8L5.5 22H2.4l8.1-9.3L1.7 2h6.8l4.7 6.2Zm-1.2 18h1.7L7.4 4H5.6Z"/></svg>
}
function LinkedInIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3ZM9.5 9H13v1.7c.5-.9 1.8-1.9 3.7-1.9 4 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4Z"/></svg>
}
function InstagramIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor"/></svg>
}

const coords = [
  { Icon: MailIcon, label: 'Email', val: 'contact@tovpay.com' },
  { Icon: BriefcaseIcon, label: 'Investisseurs', val: 'investors@tovpay.com' },
  { Icon: HandshakeIcon, label: 'Partenaires', val: 'partners@tovpay.com' },
  { Icon: BroadcastIcon, label: 'WhatsApp', val: '+225 XX XX XX XX' },
  { Icon: MapPinIcon, label: 'Siège', val: "Abidjan, Côte d'Ivoire" },
]

const inputClass = 'w-full px-4 py-3 rounded-[10px] border border-g100 bg-white text-sm text-navy outline-none transition-colors duration-200 focus:border-teal placeholder:text-g400'
const labelClass = 'block text-navy text-xs font-semibold mb-1.5'

export default function Contact() {
  useScrollReveal()
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
      <PageHero
        breadcrumb="Accueil / Contact"
        title="Nous contacter"
        desc="Posez vos questions ou demandez un partenariat"
      />

      <section className="bg-g50 py-24 px-[5%]">
        <div className="container-tp">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <div data-reveal>
              <h4 className="font-display font-bold text-navy mb-5">Coordonnées</h4>
              <div className="flex flex-col gap-1">
                {coords.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 py-3">
                    <div className="w-[38px] h-[38px] rounded-[10px] bg-teal/10 text-teal flex items-center justify-center shrink-0">
                      <c.Icon size={20} />
                    </div>
                    <div>
                      <div className="text-g400 text-[11px]">{c.label}</div>
                      <div className="text-navy font-semibold text-sm">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="text-g400 text-xs mb-2.5">Réseaux sociaux</div>
                <div className="flex gap-2.5">
                  {[
                    { Icon: FacebookIcon, label: 'Facebook' },
                    { Icon: XIcon, label: 'X (Twitter)' },
                    { Icon: LinkedInIcon, label: 'LinkedIn' },
                    { Icon: InstagramIcon, label: 'Instagram' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label={s.label}
                      className="w-[38px] h-[38px] rounded-lg bg-navy text-white/80 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-teal hover:text-white"
                    >
                      <s.Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div data-reveal data-reveal-delay="1">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-g100 p-12 text-center flex flex-col items-center">
                  <div className="text-teal mb-3.5"><CheckCircleIcon size={40} strokeWidth={1.6} /></div>
                  <h4 className="font-display font-bold text-navy text-xl mb-2">Message envoyé !</h4>
                  <p className="text-g600 text-sm">Notre équipe vous répondra dans les 24 heures.</p>
                </div>
              ) : (
                <form className="bg-white rounded-2xl border border-g100 p-7 flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Nom complet</label>
                      <input
                        className={inputClass}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input
                        className={inputClass}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@exemple.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Téléphone / WhatsApp</label>
                    <input
                      className={inputClass}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Sujet</label>
                    <select
                      className={inputClass}
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
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea
                      className={`${inputClass} resize-none`}
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full text-center">Envoyer le message →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
