import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { MailIcon, BriefcaseIcon, HandshakeIcon, BroadcastIcon, MapPinIcon, CheckCircleIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import IMAGES from '../lib/images'

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

const coords = [
  { Icon: MailIcon, label: 'Email général', val: 'contact@tovpay.com', href: 'mailto:contact@tovpay.com' },
  { Icon: BriefcaseIcon, label: 'Investisseurs', val: 'investors@tovpay.com', href: 'mailto:investors@tovpay.com' },
  { Icon: HandshakeIcon, label: 'Partenariats', val: 'partners@tovpay.com', href: 'mailto:partners@tovpay.com' },
  { Icon: BroadcastIcon, label: 'WhatsApp', val: '+225 XX XX XX XX', href: '#' },
  { Icon: MapPinIcon, label: 'Siège social', val: "Abidjan, Côte d'Ivoire", href: '#' },
]

const inputCls = 'w-full px-4 py-3.5 rounded-xl border border-g100 bg-g50 text-sm text-navy outline-none transition-all duration-200 focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/10 placeholder:text-g400'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'credit', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
        title="Parlons de votre projet"
        desc="Crédit, partenariat ou investissement — notre équipe vous répond en moins de 24h."
        bgImage={IMAGES.heroContact}
      />

      <section className="py-28 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14">

            {/* Infos de contact */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.h3 className="font-display font-bold text-2xl text-navy mb-8" variants={fadeUp} custom={0}>
                Nos coordonnées
              </motion.h3>

              <div className="flex flex-col gap-1 mb-10">
                {coords.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-g50 transition-colors duration-200 group"
                    variants={fadeUp}
                    custom={i + 1}
                  >
                    <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors duration-200">
                      <c.Icon size={20} />
                    </div>
                    <div>
                      <div className="text-g400 text-xs mb-0.5">{c.label}</div>
                      <div className="text-navy font-semibold text-sm">{c.val}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div variants={fadeUp} custom={6}>
                <div className="text-g400 text-xs font-semibold uppercase tracking-wider mb-3">Réseaux sociaux</div>
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
                  alt="Équipe TOVPAY"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs text-white/70">Réponse sous 24h</div>
                  <div className="font-display font-bold text-base">Équipe TOVPAY</div>
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
                  <h4 className="font-display font-bold text-navy text-2xl mb-3">Message envoyé !</h4>
                  <p className="text-g600">Notre équipe vous répondra dans les 24 heures.</p>
                </motion.div>
              ) : (
                <form
                  className="bg-g50 rounded-3xl border border-g100 p-8 flex flex-col gap-5"
                  onSubmit={handleSubmit}
                >
                  <h3 className="font-display font-bold text-xl text-navy mb-1">Envoyez-nous un message</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">Nom complet *</label>
                      <input className={inputCls} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required />
                    </div>
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">Email *</label>
                      <input className={inputCls} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@exemple.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">Téléphone / WhatsApp</label>
                    <input className={inputCls} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+225 XX XX XX XX" />
                  </div>
                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">Sujet *</label>
                    <select className={inputCls} name="subject" value={formData.subject} onChange={handleChange}>
                      <option value="credit">Demande de crédit</option>
                      <option value="pme">Solution PME</option>
                      <option value="partnership">Partenariat</option>
                      <option value="investor">Investisseur</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5 uppercase tracking-wide">Message *</label>
                    <textarea className={`${inputCls} resize-none`} name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Décrivez votre demande..." required />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-teal text-white font-semibold py-4 rounded-xl shadow-[0_8px_32px_rgba(0,185,142,0.3)] text-[15px]"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Envoyer le message →
                  </motion.button>
                  <p className="text-g400 text-xs text-center">Vos données sont traitées de manière confidentielle · BCEAO</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
