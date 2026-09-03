import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { MailIcon, BriefcaseIcon, HandshakeIcon, BroadcastIcon, MapPinIcon, CheckCircleIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import IMAGES from '../lib/images'
import type { SimulationTransfer } from '../lib/simulator'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/LanguageContext'
import { fr, en } from '../i18n/dictionaries/contact'

const fmt = (n: number) => n.toLocaleString('fr-FR')

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-xl bg-g50 border border-g100 flex items-center justify-center text-g600 hover:bg-teal hover:border-teal hover:text-white transition-colors duration-200"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

const COORD_ICONS = [MailIcon, BriefcaseIcon, HandshakeIcon, BroadcastIcon, MapPinIcon]

// Champs internes envoyés à l'équipe TOVPAY par e-mail (web3forms) - toujours en
// français, indépendamment de la langue d'affichage du site (contenu métier interne).
const subjectLabels: Record<string, string> = {
  credit: 'Demande de crédit',
  agent: "Devenir Chef d'Agence",
  partnership: 'Partenariat',
  investor: 'Investisseur',
  other: 'Autre',
}

const inputCls = 'w-full px-4 py-3.5 rounded-xl border border-g100 bg-g50 text-sm text-navy outline-none transition-all duration-200 focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/10 placeholder:text-g400'

export default function Contact() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  const location = useLocation()
  const simulation = (location.state as { simulation?: SimulationTransfer } | null)?.simulation

  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState(() => ({
    name: '', email: '', phone: '',
    subject: 'credit',
    message: simulation
      ? t.form.simulationMessage(simulation.productName, fmt(simulation.amount), fmt(simulation.total), simulation.dueDateLabel)
      : '',
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSending(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `TOVPAY - ${subjectLabels[formData.subject] ?? formData.subject}`,
          from_name: 'Site Web TOVPAY',
          replyto: formData.email,
          'Nom complet': formData.name,
          Email: formData.email,
          'Téléphone / WhatsApp': formData.phone || 'Non renseigné',
          Sujet: subjectLabels[formData.subject] ?? formData.subject,
          Message: formData.message,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || "Échec de l'envoi")

      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      setFormData({ name: '', email: '', phone: '', subject: 'credit', message: '' })
    } catch {
      setError(t.form.errorGeneric)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <PageHero
        breadcrumb={t.hero.breadcrumb}
        title={t.hero.title}
        desc={t.hero.desc}
        bgImage={IMAGES.heroContact}
      />

      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14">

            {/* Infos de contact */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.h3 className="font-display font-bold text-2xl text-navy mb-8" variants={fadeUp} custom={0}>
                {t.coordsTitle}
              </motion.h3>

              <div className="flex flex-col gap-1 mb-10">
                {t.coords.map((c, i) => {
                  const CoordIcon = COORD_ICONS[i]
                  return (
                    <motion.a
                      key={i}
                      href={c.href}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-g50 transition-colors duration-200 group"
                      variants={fadeUp}
                      custom={i + 1}
                    >
                      <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors duration-200">
                        <CoordIcon size={20} />
                      </div>
                      <div>
                        <div className="text-g400 text-xs mb-0.5">{c.label}</div>
                        <div className="text-navy font-semibold text-sm">{c.val}</div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              <motion.div variants={fadeUp} custom={6}>
                <div className="text-g400 text-xs font-semibold uppercase tracking-wider mb-3">{t.socialTitle}</div>
                <div className="flex gap-2.5">
                  <SocialIcon href="#" label="Facebook">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.5 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="X">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16.7l-5.2-6.8L5.5 22H2.4l8.1-9.3L1.7 2h6.8l4.7 6.2Zm-1.2 18h1.7L7.4 4H5.6Z"/></svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="LinkedIn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3ZM9.5 9H13v1.7c.5-.9 1.8-1.9 3.7-1.9 4 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4Z"/></svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="Instagram">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor"/></svg>
                  </SocialIcon>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="mt-10 rounded-3xl overflow-hidden h-48 relative group"
                variants={fadeUp}
                custom={7}
              >
                <img
                  src={IMAGES.heroAbout}
                  alt={t.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs text-white/70">{t.imageCaption}</div>
                  <div className="font-display font-bold text-base">{t.imageTeam}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {submitted ? (
                <motion.div
                  className="bg-g50 rounded-3xl border border-g100 p-16 text-center flex flex-col items-center justify-center h-full"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="text-teal mb-5"
                  >
                    <CheckCircleIcon size={52} strokeWidth={1.5} />
                  </motion.div>
                  <h4 className="font-display font-bold text-navy text-2xl mb-3">{t.form.successTitle}</h4>
                  <p className="text-g600">{t.form.successDesc}</p>
                </motion.div>
              ) : (
                <form
                  className="bg-g50 rounded-3xl border border-g100 p-8 flex flex-col gap-5"
                  onSubmit={handleSubmit}
                >
                  {simulation && (
                    <div className="flex items-center gap-2 bg-teal/10 text-teal text-xs font-semibold rounded-xl px-4 py-3 -mt-1">
                      <CheckCircleIcon size={16} className="shrink-0" />
                      {t.form.simulationTransferred(simulation.productName, fmt(simulation.amount))}
                    </div>
                  )}
                  <h3 className="font-display font-bold text-xl text-navy mb-1">{t.form.formTitle}</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">{t.form.nameLabel}</label>
                      <input className={inputCls} type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.form.namePlaceholder} required />
                    </div>
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">{t.form.emailLabel}</label>
                      <input className={inputCls} type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.form.emailPlaceholder} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">{t.form.phoneLabel}</label>
                    <input className={inputCls} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t.form.phonePlaceholder} />
                  </div>
                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">{t.form.subjectLabel}</label>
                    <select className={inputCls} name="subject" value={formData.subject} onChange={handleChange}>
                      {t.subjectOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">{t.form.messageLabel}</label>
                    <textarea className={`${inputCls} resize-none`} name="message" rows={5} value={formData.message} onChange={handleChange} placeholder={t.form.messagePlaceholder} required />
                  </div>
                  {error && (
                    <div className="bg-red-50 text-red-600 text-xs font-semibold rounded-xl px-4 py-3 -mb-1">
                      {error}
                    </div>
                  )}
                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-teal text-white font-semibold py-4 rounded-xl shadow-[0_8px_32px_rgba(0,185,142,0.3)] text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={sending ? {} : { scale: 1.02, y: -2 }}
                    whileTap={sending ? {} : { scale: 0.98 }}
                  >
                    {sending ? t.form.sending : t.form.submit}
                  </motion.button>
                  <p className="text-g400 text-xs text-center">{t.form.confidentialityNote}</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
