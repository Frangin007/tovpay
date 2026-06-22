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

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À Propos', path: '/about' },
    { name: 'Investisseurs', path: '/investors' },
    { name: 'Partenaires', path: '/partners' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const onDark = !scrolled

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] h-20 px-[5%] transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white border-g100 shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-full flex items-center gap-2">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 mr-5 no-underline" onClick={() => setMobileOpen(false)}>
          <img src="/brand/tovpay-icon.png" alt="TovPay" className="w-10 h-10 object-contain" />
          <span
            className={`font-display font-extrabold text-[21px] tracking-tight transition-colors duration-300 ${onDark ? 'text-white' : 'text-navy'}`}
          >
            Tov<span className="text-teal">Pay</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center flex-1 gap-0.5">
          {links.map(link => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`inline-flex items-center font-medium text-[15px] px-3.5 py-2 rounded-lg whitespace-nowrap no-underline transition-colors duration-200 ${
                  onDark
                    ? active ? 'bg-white/10 text-white font-semibold' : 'text-white/80 hover:bg-white/10 hover:text-white'
                    : active ? 'bg-g50 text-navy font-semibold' : 'text-g600 hover:bg-g50 hover:text-navy'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center ml-auto shrink-0">
          <Link to="/services" className="btn-cta">Demander un crédit</Link>
        </div>

        {/* MOBILE BURGER */}
        <button
          className="lg:hidden ml-auto flex flex-col justify-center gap-[5px] p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu de navigation"
        >
          <span className={`block w-[22px] h-0.5 rounded-full transition-all duration-200 ${onDark ? 'bg-white' : 'bg-lime-dk'} ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-0.5 rounded-full transition-opacity duration-200 ${onDark ? 'bg-white' : 'bg-lime-dk'} ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-0.5 rounded-full transition-all duration-200 ${onDark ? 'bg-white' : 'bg-lime-dk'} ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-white border-b border-g100 shadow-lg flex flex-col p-4 gap-1 transition-all duration-300 origin-top ${
          mobileOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-medium text-[15px] px-3.5 py-2.5 rounded-lg no-underline ${
              location.pathname === link.path ? 'bg-g50 text-navy font-semibold' : 'text-g600'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/services" className="btn-cta justify-center mt-2" onClick={() => setMobileOpen(false)}>
          Demander un crédit
        </Link>
      </div>
    </nav>
  )
}
