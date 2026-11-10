import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/common'

type SmartLinkProps = {
  href: string
  external?: boolean
  className?: string
  children: ReactNode
}

/**
 * Lien du site : route interne (href commençant par « / ») via React Router, lien externe
 * ouvert dans un nouvel onglet (signalé aux lecteurs d'écran), ou lien simple (mailto:...).
 */
export default function SmartLink({ href, external, className, children }: SmartLinkProps) {
  const t = useT(fr, en)
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <span className="sr-only"> {t.newTab}</span>
      </a>
    )
  }
  if (href.startsWith('/')) return <Link to={href} className={className}>{children}</Link>
  return <a href={href} className={className}>{children}</a>
}
