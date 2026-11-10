import { Link } from 'react-router-dom'
import SmartLink from './SmartLink'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/footer'
import { APP_PRIVACY_URL, APP_TERMS_URL, WHATSAPP_URL } from '../lib/site'
import { LOGO_NAV } from '../lib/images'

export default function Footer() {
  const t = useT(fr, en)
  // Liens externes (WhatsApp, textes de l'application) : nouvel onglet, signalé par SmartLink.
  const external = [
    { label: t.columns.support.whatsapp, href: WHATSAPP_URL },
    { label: t.columns.support.terms, href: APP_TERMS_URL },
    { label: t.columns.support.privacy, href: APP_PRIVACY_URL },
  ]
  return (
    <footer className="bg-navy-deep border-t border-white/10 px-[5%] pt-14 pb-7">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-11 mb-11">
          <div>
            <img src={LOGO_NAV.src} width={LOGO_NAV.width} height={LOGO_NAV.height} alt="TOVPAY" loading="lazy" className="h-12 w-auto object-contain brightness-0 invert mb-4" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t.tagline}
            </p>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">{t.columns.services.heading}</div>
            <div className="flex flex-col gap-2.5">
              {t.columns.services.links.map(link => (
                <Link key={link.to} to={link.to} className="footer-link">{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">{t.columns.company.heading}</div>
            <div className="flex flex-col gap-2.5">
              {t.columns.company.links.map(link => (
                <Link key={link.to} to={link.to} className="footer-link">{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">{t.columns.support.heading}</div>
            <div className="flex flex-col gap-2.5">
              {t.columns.support.links.map(link => (
                <Link key={link.to} to={link.to} className="footer-link">{link.label}</Link>
              ))}
              {external.map(link => (
                <SmartLink key={link.href} href={link.href} external className="footer-link">
                  {link.label}
                </SmartLink>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-7 border-t border-white/10 text-white/45 text-xs">
          <span>{t.copyright}</span>
          <span>{t.privateCompany}</span>
        </div>
      </div>
    </footer>
  )
}
