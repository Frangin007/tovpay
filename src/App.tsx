import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'

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

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Suspense fallback={<div className="min-h-dvh" />}>
          <Routes>
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
      </BrowserRouter>
    </LanguageProvider>
  )
}
