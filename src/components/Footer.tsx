import { Link } from 'react-router-dom'
import { AppleIcon, PlayStoreIcon, HandshakeIcon } from './Icon'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0F1A] px-[5%] pt-14 pb-7">
      {/* Lueur décorative en haut du footer */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(0,185,142,0.1),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-11 mb-11">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/brand/tovpay-logo-transparent.png" alt="TovPay" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-xs">
              L'inclusion financière pour tous. Nano-crédits mobiles, paiements digitaux et scoring intelligent en Afrique de l'Ouest.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <div className="inline-flex items-center gap-1.5 bg-white/[0.08] border border-white/10 rounded-lg px-3 py-1.5 text-white text-[11px] font-semibold">
                <AppleIcon size={15} /> App Store
              </div>
              <a
                href="https://expo.dev/accounts/frangins-team/projects/tovpay/builds/9c059a82-6967-4921-ad08-5b917537a379"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/[0.08] border border-white/10 rounded-lg px-3 py-1.5 text-white text-[11px] font-semibold hover:bg-white/[0.14] transition-colors duration-200"
              >
                <PlayStoreIcon size={15} /> Android (APK)
              </a>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Services</div>
            <div className="flex flex-col gap-2.5">
              <Link to="/nano-credit" className="footer-link">Nano-Crédit</Link>
              <Link to="/agents" className="footer-link">Chefs d'Agence</Link>
              <Link to="/services" className="footer-link">Scoring intelligent</Link>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Entreprise</div>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="footer-link">À Propos</Link>
              <Link to="/partners" className="footer-link">Partenaires</Link>
              <Link to="/investors" className="footer-link">Investisseurs</Link>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Support</div>
            <div className="flex flex-col gap-2.5">
              <Link to="/faq" className="footer-link">FAQ</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <a href="https://wa.me/2290191003991" className="footer-link">WhatsApp</a>
              <a href="#" className="footer-link">CGU</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-7 border-t border-white/10">
          <span className="text-white/35 text-xs">
            © 2026 TOVPAY, filiale de GROUPE TOV. Tous droits réservés. · Notifié BCEAO
          </span>

          <span className="inline-flex items-center gap-1.5 text-white/30 text-xs">
            <HandshakeIcon size={15} /> Partenariat bancaire en cours avec <span className="text-teal">Orabank Bénin</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
