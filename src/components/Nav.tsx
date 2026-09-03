import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLanguage, useT } from '../i18n/LanguageContext'
import { fr, en } from '../i18n/dictionaries/nav'

function LangToggle({ onDark, className = '' }: { onDark: boolean; className?: string }) {
  const { lang, setLang } = useLanguage()
  const t = useT(fr, en)
  return (
    <div
      role="group"
      aria-label={t.langToggleAriaLabel}
      className={`inline-flex items-center gap-0.5 rounded-lg p-0.5 ${onDark ? 'bg-white/10' : 'bg-g50'} ${className}`}
    >
      {(['fr', 'en'] as const).map(l => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide transition-colors duration-200 ${
            lang === l
              ? 'bg-white text-navy shadow-sm'
              : onDark ? 'text-white/60 hover:text-white' : 'text-g400 hover:text-navy'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  const t = useT(fr, en)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = t.links

  const onDark = !scrolled

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-teal origin-left z-[200]"
        style={{ scaleX }}
      />

      <motion.nav
        className={`fixed top-0 inset-x-0 z-[100] h-20 px-[5%] border-b transition-colors duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg border-g100 shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
            : 'bg-transparent border-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center gap-2">

          {/* LOGO */}
          <Link to="/" className="flex items-center shrink-0 mr-5 no-underline" onClick={() => setMobileOpen(false)}>
            <img
              src="/brand/tovpay-logo-transparent.png"
              alt="TovPay"
              className={`h-11 w-auto object-contain transition-all duration-300 ${
                onDark ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center flex-1 gap-0.5">
            {links.map(link => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative inline-flex items-center font-medium text-[14px] px-3.5 py-2 rounded-lg whitespace-nowrap no-underline transition-colors duration-200 ${
                    onDark
                      ? active ? 'bg-white/12 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                      : active ? 'bg-g50 text-navy' : 'text-g600 hover:bg-g50 hover:text-navy'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${onDark ? 'bg-teal' : 'bg-teal'}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
            <LangToggle onDark={onDark} />
            <Link to="/nano-credit">
              <motion.span
                className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-[13px] px-5 py-2.5 rounded-xl shadow-[0_4px_20px_rgba(0,185,142,0.3)] cursor-pointer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                {t.cta}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.span>
            </Link>
          </div>

          {/* MOBILE: lang toggle + burger */}
          <div className="lg:hidden ml-auto flex items-center gap-2">
            <LangToggle onDark={onDark} />
            <button
              className="flex flex-col justify-center gap-[5px] p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t.menuAriaLabel}
            >
              <motion.span
                className={`block h-0.5 rounded-full transition-colors ${onDark ? 'bg-white' : 'bg-navy'}`}
                animate={{ width: mobileOpen ? 22 : 22, rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
              />
              <motion.span
                className={`block w-[22px] h-0.5 rounded-full transition-colors ${onDark ? 'bg-white' : 'bg-navy'}`}
                animate={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <motion.span
                className={`block h-0.5 rounded-full transition-colors ${onDark ? 'bg-white' : 'bg-navy'}`}
                animate={{ width: mobileOpen ? 22 : 22, rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <motion.div
          className="lg:hidden absolute inset-x-0 top-20 bg-white border-b border-g100 shadow-xl flex flex-col p-4 gap-1 overflow-hidden"
          initial={false}
          animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
          <Link
            to="/nano-credit"
            className="mt-2 bg-teal text-white font-semibold text-center py-3 rounded-xl no-underline"
            onClick={() => setMobileOpen(false)}
          >
            {t.cta}
          </Link>
        </motion.div>
      </motion.nav>
    </>
  )
}
