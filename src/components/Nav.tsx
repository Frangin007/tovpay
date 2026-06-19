import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À Propos', path: '/about' },
    { name: 'Investisseurs', path: '/investors' },
    { name: 'Partenaires', path: '/partners' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-is-open' : ''}`}>
      <div className="nav-inner">
        
        {/* LOGO */}
        <Link to="/" className="logo">
          <div className="logo-box">T</div>
          <span className="logo-text">Tov<span>Pay</span></span>
        </Link>
        
        {/* DESKTOP LINKS */}
        <div className="nav-links">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* CTA BUTTON */}
        <div className="nav-actions">
          <Link to="/download" className="btn-cta">Télécharger l'App</Link>
        </div>

        {/* MOBILE BURGER */}
        <button
          className={`nav-mobile-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu de navigation"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/download" className="btn-cta mobile-cta">Télécharger l'App</Link>
      </div>
    </nav>
  )
}