// ── Système d'icônes vectorielles (style ligne, cohérent, currentColor) ──
// Remplace les emojis utilisés comme icônes ailleurs dans le site.

type IconProps = {
  size?: number
  strokeWidth?: number
  className?: string
}

// Décoratives : elles accompagnent toujours un texte visible, d'où aria-hidden.
const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
  focusable: false,
})

export function CheckCircleIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 12.3 10.6 15 16 9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ShieldIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 2.7 19.5 5.5v6c0 5-3.4 8-7.5 9.8C8 19.5 4.5 16.5 4.5 11.5v-6Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M8.7 12.1l2.3 2.3 4.3-4.8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MailIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MapPinIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 21.5s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <circle cx="12" cy="9.4" r="2.4" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  )
}

export function ChatIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20.5 11.5a8.5 8 0 0 1-12.2 7.2L3.5 20l1.4-4.1A7.7 7.7 0 0 1 3.5 11.5a8.5 8 0 0 1 17 0Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRightIcon({ size = 16, strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function ExternalIcon({ size = 14, strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M14 4.5h5.5V10M19.5 4.5 11 13M17 14v4.5a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1H10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
