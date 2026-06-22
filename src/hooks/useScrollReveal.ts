import { useEffect, useRef } from 'react'

/**
 * Ajoute la classe "in-view" aux éléments [data-reveal] dès qu'ils
 * entrent dans le viewport. Combiné aux règles CSS .reveal / .in-view
 * dans index.css, ça produit un fade+slide-up doux façon Stripe/Wise.
 * À appeler une fois par page (useEffect dans le composant de page).
 */
export function useScrollReveal(deps: React.DependencyList = []) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]:not(.in-view)')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(el => el.classList.add('in-view'))
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach(el => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
