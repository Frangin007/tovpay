import { useId, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MailIcon, ChatIcon, MapPinIcon, CheckCircleIcon, ShieldIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import RichText from '../components/RichText'
import SmartLink from '../components/SmartLink'
import IMAGES from '../lib/images'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useLanguage, useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/contact'
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../lib/site'
import { EASE_OUT as EASE, inView, makeFadeUp, reveal } from '../lib/motion'

const fadeUp = makeFadeUp({ delayStep: 0.1 })

// Sujet passé dans l'adresse (?sujet=partenariat...) : présélectionné s'il fait partie du menu « Sujet ».
const subjectFromParam = (param: string | null) =>
  fr.subjectOptions.find(o => o.value === param)?.value ?? ''

const inputCls = 'w-full px-4 py-3 rounded-lg border border-g200 bg-white text-sm text-navy outline-none transition-colors duration-200 focus:border-teal focus:ring-2 focus:ring-teal/20 placeholder:text-g400'
const labelCls = 'block text-navy text-sm font-medium mb-1.5'

function FieldLabel({ htmlFor, text, required, optionalText }: { htmlFor: string; text: string; required: boolean; optionalText: string }) {
  return (
    <label htmlFor={htmlFor} className={labelCls}>
      {text}{required ? ' *' : <span className="font-normal text-g500"> {optionalText}</span>}
    </label>
  )
}

function ContactForm({ initialSubject }: { initialSubject: string }) {
  const t = useT(fr, en)
  const { lang } = useLanguage()
  const id = useId()
  const emptyForm = { subject: initialSubject, name: '', email: '', phone: '', country: '', message: '', consent: false }
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  // Pour « Être informé du lancement », l'e-mail et le pays suffisent.
  const isLaunch = form.subject === 'lancement'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSending(true)
    // Champs internes envoyés à l'équipe TOVPAY par e-mail (Web3Forms) : toujours en
    // français, indépendamment de la langue d'affichage du site.
    const subjectLabel = fr.subjectOptions.find(o => o.value === form.subject)?.label ?? form.subject
    const countryLabel = fr.countryOptions.find(o => o.value === form.country)?.label ?? form.country
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `TOVPAY - ${subjectLabel}`,
          from_name: 'Site Web TOVPAY',
          replyto: form.email,
          Sujet: subjectLabel,
          'Nom complet': form.name || 'Non renseigné',
          'E-mail': form.email,
          'Téléphone': form.phone || 'Non renseigné',
          Pays: countryLabel,
          Message: form.message || 'Aucun message',
          'Langue du site': lang.toUpperCase(),
          // Texte exact accepté par le visiteur, dans la langue où il l'a lu.
          Consentement: `Oui, le ${new Date().toISOString()} : « ${t.form.consentText} »`,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || "Échec de l'envoi")
      setSubmitted(form.subject)
      setForm({ ...emptyForm, subject: form.subject })
    } catch {
      setError(t.form.errorGeneric)
    } finally {
      setSending(false)
    }
  }

  if (submitted !== null) {
    const launch = submitted === 'lancement'
    // Le message de confirmation apparaît en grandissant, puis la coche « rebondit ».
    return (
      <motion.div
        role="status"
        className="rounded-xl border border-g200 p-10 sm:p-16 text-center flex flex-col items-center justify-center h-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex text-teal mb-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircleIcon size={44} strokeWidth={1.5} />
        </motion.div>
        <h3 className="font-display font-bold text-navy text-2xl mb-3">{launch ? t.form.successLaunchTitle : t.form.successTitle}</h3>
        <p className="text-g600 mb-6">{launch ? t.form.successLaunchDesc : t.form.successDesc}</p>
        <button type="button" onClick={() => setSubmitted(null)} className="text-link text-sm">
          {t.form.sendAnother}
        </button>
      </motion.div>
    )
  }

  return (
    <form
      className="rounded-xl border border-g200 p-6 sm:p-8 flex flex-col gap-5"
      onSubmit={handleSubmit}
    >
      <div>
        <h3 className="font-display font-bold text-xl text-navy mb-1">{t.form.title}</h3>
        <p className="text-g500 text-xs">{t.form.requiredHint}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel htmlFor={`${id}-name`} text={t.form.nameLabel} required={!isLaunch} optionalText={t.form.optional} />
          <input id={`${id}-name`} className={inputCls} type="text" name="name" autoComplete="name" value={form.name} onChange={handleChange} placeholder={t.form.namePlaceholder} required={!isLaunch} />
        </div>
        <div>
          <FieldLabel htmlFor={`${id}-email`} text={t.form.emailLabel} required optionalText={t.form.optional} />
          <input id={`${id}-email`} className={inputCls} type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder={t.form.emailPlaceholder} required />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel htmlFor={`${id}-phone`} text={t.form.phoneLabel} required={false} optionalText={t.form.optional} />
          <input id={`${id}-phone`} className={inputCls} type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder={t.form.phonePlaceholder} />
        </div>
        <div>
          <FieldLabel htmlFor={`${id}-country`} text={t.form.countryLabel} required optionalText={t.form.optional} />
          <select id={`${id}-country`} className={inputCls} name="country" value={form.country} onChange={handleChange} required>
            <option value="" disabled>{t.form.countryPlaceholder}</option>
            {t.countryOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <FieldLabel htmlFor={`${id}-subject`} text={t.form.subjectLabel} required optionalText={t.form.optional} />
        <select id={`${id}-subject`} className={inputCls} name="subject" value={form.subject} onChange={handleChange} required>
          <option value="" disabled>{t.form.subjectPlaceholder}</option>
          {t.subjectOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {isLaunch && (
          <p className="bg-g50 border border-g200 text-g600 text-xs leading-relaxed rounded-lg px-4 py-3 mt-2.5">
            <RichText text={t.form.launchNote} />
          </p>
        )}
      </div>
      <div>
        <FieldLabel htmlFor={`${id}-message`} text={t.form.messageLabel} required={!isLaunch} optionalText={t.form.optional} />
        <textarea id={`${id}-message`} className={`${inputCls} resize-none`} name="message" rows={5} value={form.message} onChange={handleChange} placeholder={t.form.messagePlaceholder} required={!isLaunch} />
      </div>
      <div className="flex items-start gap-3">
        <input
          id={`${id}-consent`}
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
          required
          className="mt-0.5 w-4 h-4 shrink-0 accent-teal"
        />
        <label htmlFor={`${id}-consent`} className="text-g600 text-xs leading-relaxed">
          {t.form.consentText} *{' '}
          <Link to="/confidentialite" className="text-link">{t.form.consentLink}</Link>
        </label>
      </div>
      {error && (
        <div role="alert" className="bg-red-50 text-red-700 text-xs font-semibold rounded-lg px-4 py-3 -mb-1">
          <RichText text={error} linkClassName="underline" />
        </div>
      )}
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-teal text-white font-semibold py-3.5 rounded-lg text-[15px] transition-[background-color,translate,scale] duration-200 hover:bg-teal-dk enabled:hover:-translate-y-0.5 enabled:hover:scale-[1.02] enabled:active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-teal"
      >
        {sending ? t.form.sending : t.form.submit}
      </button>
      <p className="text-g500 text-xs text-center">{t.form.confidentialityNote}</p>
    </form>
  )
}

export default function Contact() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  const [searchParams] = useSearchParams()
  // Le sujet passé dans l'adresse est présélectionné ; la clé réinitialise le formulaire
  // si l'on change de sujet depuis la navigation sans quitter la page.
  const initialSubject = subjectFromParam(searchParams.get('sujet'))

  const coords = [
    { Icon: MailIcon, label: t.coords.emailLabel, val: CONTACT_EMAIL, href: CONTACT_EMAIL_HREF, external: false },
    { Icon: ChatIcon, label: t.coords.whatsappLabel, val: WHATSAPP_DISPLAY, href: WHATSAPP_URL, external: true },
  ]

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

            {/* Infos de contact : apparaissent l'une après l'autre */}
            <motion.div {...inView}>
              <motion.h2 className="font-display font-bold text-2xl text-navy mb-6" variants={fadeUp} custom={0}>
                {t.coords.title}
              </motion.h2>

              <div className="flex flex-col gap-1 mb-4">
                {coords.map((c, i) => (
                  <motion.div key={c.label} variants={fadeUp} custom={i + 1}>
                    <SmartLink
                      href={c.href}
                      external={c.external}
                      className="flex items-center gap-4 p-4 -mx-4 rounded-lg hover:bg-g50 transition-colors duration-200"
                    >
                      <c.Icon size={20} className="text-teal-ink shrink-0" />
                      <div>
                        <div className="text-g500 text-xs mb-0.5">{c.label}</div>
                        <div className="text-navy font-semibold text-sm">{c.val}</div>
                      </div>
                    </SmartLink>
                  </motion.div>
                ))}
                <motion.div className="flex items-center gap-4 p-4 -mx-4" variants={fadeUp} custom={3}>
                  <MapPinIcon size={20} className="text-teal-ink shrink-0" />
                  <div>
                    <div className="text-g500 text-xs mb-0.5">{t.coords.seatLabel}</div>
                    <div className="text-navy font-semibold text-sm">{t.coords.seatValue}</div>
                  </div>
                </motion.div>
              </div>
              <motion.p className="text-g600 text-sm mb-8" variants={fadeUp} custom={4}>{t.coords.responseNote}</motion.p>

              {/* Sécurité */}
              <motion.div className="rounded-xl border border-g200 bg-g50 p-6" variants={fadeUp} custom={5}>
                <div className="flex items-center gap-2.5 font-display font-bold text-navy text-base mb-2">
                  <ShieldIcon size={20} className="text-teal-ink shrink-0" />
                  {t.safety.title}
                </div>
                <p className="text-g600 text-sm leading-relaxed">{t.safety.text}</p>
              </motion.div>
            </motion.div>

            {/* Formulaire : arrive par la droite */}
            <motion.div {...reveal({ x: 40 }, { duration: 0.7, ease: EASE })}>
              <ContactForm key={initialSubject} initialSubject={initialSubject} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
