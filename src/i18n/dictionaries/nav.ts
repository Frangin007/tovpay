export const fr = {
  links: [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: "Chefs d'Agence", path: '/agents' },
    { name: 'À Propos', path: '/about' },
    { name: 'Écosystème', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ],
  cta: 'Demander un crédit',
  menuAriaLabel: 'Menu de navigation',
  langToggleAriaLabel: 'Changer de langue',
}

export const en: typeof fr = {
  links: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Agency Managers', path: '/agents' },
    { name: 'About', path: '/about' },
    { name: 'Ecosystem', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ],
  cta: 'Apply for credit',
  menuAriaLabel: 'Navigation menu',
  langToggleAriaLabel: 'Switch language',
}
