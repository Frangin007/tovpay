import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import NanoCredit from './pages/NanoCredit'
import Partners from './pages/Partners'
import Investors from './pages/Investors'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/nano-credit" element={<NanoCredit />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
