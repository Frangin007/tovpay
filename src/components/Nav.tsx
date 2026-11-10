import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLanguage, useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/nav'
import { EASE_OUT } from '../lib/motion'

function LangToggle({ onDark }: { onDark: boolean }) {
  const { lang, setLang } = useLanguage()
  const t = useT(fr, en)
  return (
    <div
      role="group"
      aria-label={t.langToggleAriaLabel}
      className={`inline-flex items-center gap-0.5 rounded-md p-0.5 ${onDark ? 'bg-white/10' : 'bg-g100'}`}
    >
      {(['fr', 'en'] as const).map(l => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2 py-1 rounded text-[11px] font-semibold uppercase tracking-wide transition-colors duration-200 ${
            lang === l
              ? 'bg-white text-navy'
              : onDark ? 'text-white/70 hover:text-white' : 'text-g500 hover:text-navy'
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
  // Avancement de la lecture de la page (0 en haut, 1 en bas), lissé par un ressort
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
  // Traits du bouton du menu mobile : ils se croisent en « × » à l'ouverture.
  const bar = `block w-[22px] h-0.5 rounded-full transition-[background-color,translate,rotate,opacity] duration-300 ${onDark ? 'bg-white' : 'bg-navy'}`

  return (
    <>
      {/* Barre de progression de la lecture */}
      <motion.div
        className="fixed top-0 inset-x-0 h-[3px] bg-teal origin-left z-[200]"
        style={{ scaleX }}
      />

      {/* La barre de navigation descend à l'arrivée sur le site */}
      <motion.nav
        className={`fixed top-0 inset-x-0 z-[100] h-20 px-[5%] border-b transition-colors duration-300 ${
          scrolled ? 'bg-white border-g200' : 'bg-transparent border-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center gap-2">

          {/* LOGO */}
          <Link to="/" className="flex items-center shrink-0 mr-5 no-underline" onClick={() => setMobileOpen(false)}>
            <img
              src="/brand/tovpay-logo-transparent.png"
              alt="TOVPAY"
              className={`h-11 w-auto object-contain transition-[filter] duration-300 ${
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
                  aria-current={active ? 'page' : undefined}
                  className={`relative inline-flex items-center font-medium text-[14px] px-3.5 py-2 rounded-md whitespace-nowrap no-underline transition-colors duration-200 ${
                    onDark
                      ? active ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'
                      : active ? 'bg-g100 text-navy' : 'text-g600 hover:text-navy'
                  }`}
                >
                  {link.name}
                  {/* Point de la page active : il glisse d'un lien à l'autre quand on change de page */}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      aria-hidden="true"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Choix de la langue + bouton du menu (mobile) */}
          <div className="ml-auto flex items-center gap-2 shrink-0">
            <LangToggle onDark={onDark} />
            <button
              className="lg:hidden flex flex-col justify-center gap-[5px] p-2 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t.menuAriaLabel}
              aria-expanded={mobileOpen}
              aria-controls="menu-mobile"
            >
              <span className={`${bar} ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`${bar} ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`${bar} ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU : sa hauteur passe de 0 à celle du contenu (grid-template-rows 0fr -> 1fr). */}
        <div
          id="menu-mobile"
          inert={!mobileOpen}
          className={`lg:hidden absolute inset-x-0 top-20 grid bg-white border-b border-g200 transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col p-4 gap-1">
              {links.map(link => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={active ? 'page' : undefined}
                    className={`font-medium text-[15px] px-3.5 py-2.5 rounded-md no-underline ${
                      active ? 'bg-g100 text-navy font-semibold' : 'text-g600'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
