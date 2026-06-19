import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-box">T</div>
              <span className="footer-logo-text">Tov<span>Pay</span></span>
            </div>
            <p className="footer-desc">
              L'inclusion financière pour tous. Nano-crédits mobiles, paiements digitaux et scoring intelligent en Afrique de l'Ouest.
            </p>
            <div className="footer-apps">
              <div className="footer-app-badge">🍎 App Store</div>
              <div className="footer-app-badge">▶️ Google Play</div>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <Link to="/services" className="footer-link">Nano-Crédit</Link>
            <Link to="/services" className="footer-link">Wallet & Paiement</Link>
            <Link to="/services" className="footer-link">Scoring IA</Link>
            <Link to="/services" className="footer-link">Solutions PME</Link>
          </div>

          <div>
            <div className="footer-col-title">Entreprise</div>
            <Link to="/about" className="footer-link">À Propos</Link>
            <Link to="/partners" className="footer-link">Partenaires</Link>
            <Link to="/investors" className="footer-link">Investisseurs</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
          </div>

          <div>
            <div className="footer-col-title">Support</div>
            <Link to="/faq" className="footer-link">FAQ</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <a href="https://wa.me/22500000000" className="footer-link">WhatsApp</a>
            <a href="#" className="footer-link">CGU</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 TOVPAY. Tous droits réservés. · Conforme BCEAO & OHADA
          </span>

          <span className="footer-partner">
            🤝 En partenariat avec <span>Orabank</span>
          </span>
        </div>
      </div>
    </footer>
  )
}