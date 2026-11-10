import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion, type Variants } from 'framer-motion'
import { useEffect, lazy, Suspense } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import { EASE_OUT, EASE_IN } from './lib/motion'

const SalaryAdvance = lazy(() => import('./pages/SalaryAdvance'))
const Partners = lazy(() => import('./pages/Partners'))
const About = lazy(() => import('./pages/About'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const LegalNotice = lazy(() => import('./pages/LegalNotice'))
const SitePrivacy = lazy(() => import('./pages/SitePrivacy'))

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

// Transition entre les pages : la page quittée s'efface en remontant légèrement, la suivante apparaît en montant.
const pageVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: EASE_IN } },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      {/* overflow-x-clip : les blocs qui arrivent par le côté ne créent pas de défilement horizontal
          (contrairement à overflow-hidden, clip laisse fonctionner la colonne collante de la FAQ). */}
      <motion.div
        key={location.pathname}
        className="overflow-x-clip"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Suspense fallback={<div className="min-h-dvh" />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/avance-sur-salaire" element={<SalaryAdvance />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/confidentialite" element={<SitePrivacy />} />
            {/* Anciennes pages : redirections (doublées par des redirections 308 dans vercel.json) */}
            <Route path="/nano-credit" element={<Navigate to="/avance-sur-salaire" replace />} />
            <Route path="/services" element={<Navigate to="/avance-sur-salaire" replace />} />
            <Route path="/agents" element={<Navigate to="/faq" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        {/* Réglage « réduire les animations » du système respecté : pas de déplacement, fondus conservés. */}
        <MotionConfig reducedMotion="user">
          <ScrollToTop />
          <Nav />
          <AnimatedRoutes />
        </MotionConfig>
      </BrowserRouter>
    </LanguageProvider>
  )
}
