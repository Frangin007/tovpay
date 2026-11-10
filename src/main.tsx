import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// L'ancien simulateur de crédit gardait un historique dans le navigateur des visiteurs :
// on l'efface lors de leur prochaine visite (sans effet si la clé n'existe pas).
try {
  localStorage.removeItem('tovpay_simulation_history')
} catch {
  // stockage indisponible (navigation privée...) : rien à effacer
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
