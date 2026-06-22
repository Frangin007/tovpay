// ── Système d'icônes vectorielles (style ligne, cohérent, currentColor) ──
// Remplace les emojis utilisés comme icônes ailleurs dans le site.

type IconProps = {
  size?: number
  strokeWidth?: number
  className?: string
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
})

export function CreditIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M6 14.5h4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function WalletIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5V8H5.5A2.5 2.5 0 0 1 3 5.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <rect x="3" y="8" width="18" height="11" rx="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="16" cy="13.5" r="1.4" fill="currentColor" />
    </svg>
  )
}

export function ScoringIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 19V5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M3 19h18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M6.5 16v-3.5M11 16V8.5M15.5 16v-6M20 16V5.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function BuildingIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="4" y="3.5" width="11" height="17" rx="1.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="15" y="9.5" width="5" height="11" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 7.5h1.4M10.6 7.5H12M7 11h1.4M10.6 11H12M7 14.5h1.4M10.6 14.5H12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function PhoneDownloadIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M11 17h2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function IdIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="8" cy="12" r="2.1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5.6 16.3c.5-1.3 1.4-2 2.4-2s1.9.7 2.4 2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M14.5 10h4M14.5 13.2h4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function AiSparkIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3.5 13.4 9 19 10.5l-5.6 1.5L12 17.5 10.6 12 5 10.5 10.6 9z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M19 16.5 19.6 18.6 21.7 19.2 19.6 19.8 19 21.9 18.4 19.8 16.3 19.2 18.4 18.6z" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinejoin="round" />
    </svg>
  )
}

export function CheckCircleIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 12.3 10.6 15 16 9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function GlobeIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 12h18M12 3c2.4 2.4 3.6 5.6 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.6-3.6-9S9.6 5.4 12 3Z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  )
}

export function HandshakeIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M2.5 11.5 7 8l3.2 2.5c.6.5.6 1.4 0 1.9l-.4.3c-.6.5-1.5.5-2 0L6 11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.5 11.5 17 8l-3.2 2.5c-.6.5-.6 1.4 0 1.9l3.4 3c.6.5 1.5.5 2 0l.3-.3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12.5l2.5 2.2c.6.5 1.5.5 2 0" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
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

export function BankIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M2.5 9.5 12 3.5l9.5 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 9.5h16v9.5H4z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M2.5 19h19M7 12.5v4M12 12.5v4M17 12.5v4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function WaveIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M2.5 12c1.8-3 3.6-3 5.4 0s3.6 3 5.4 0 3.6-3 5.4 0 3.6 3 5.4 0" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 17c1.8-3 3.6-3 5.4 0s3.6 3 5.4 0 3.6-3 5.4 0 3.6 3 5.4 0" stroke="currentColor" strokeWidth={strokeWidth * 0.7} strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
    </svg>
  )
}

export function SignalIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 18v-3M9 18v-6M14 18V9M19 18V5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function BroadcastIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.5 5.5a9.5 9.5 0 0 0 0 13M18.5 5.5a9.5 9.5 0 0 1 0 13" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function GavelIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3.5" width="18" height="4.5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 8v3M19 8v3M3.5 19.5h17M9 11l-2.5 8.5M15 11l2.5 8.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function TrendingUpIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h6v6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CoinsIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <ellipse cx="9" cy="7" rx="6" ry="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 7v5c0 1.66 2.69 3 6 3s6-1.34 6-3V7" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 12v5c0 1.66 2.69 3 6 3 2.4 0 4.5-.7 5.4-1.8" stroke="currentColor" strokeWidth={strokeWidth} />
      <ellipse cx="17" cy="14" rx="4.2" ry="2.1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12.8 14v3.6c0 1.16 1.88 2.1 4.2 2.1s4.2-.94 4.2-2.1V14" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  )
}

export function NetworkIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="6" cy="6" r="2.3" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18" cy="6" r="2.3" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="18" r="2.3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 7.2 10.2 16M16 7.2 13.8 16M8.3 6h7.4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
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

export function BriefcaseIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="7.5" width="19" height="12" rx="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M2.5 12.5h19" stroke="currentColor" strokeWidth={strokeWidth} />
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
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v8A2.5 2.5 0 0 1 18.5 16H9l-5 4.5V16h-.5A2.5 2.5 0 0 1 1 13.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  )
}

export function DocumentIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 2.5h8l4 4v14.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M14 2.5V7h4M8.5 12h7M8.5 15.5h7M8.5 19h4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function ArrowRightIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function AppleIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path fill="currentColor" d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.7 0-1.9-.9-3.1-.8-1.6 0-3 .9-3.9 2.3-1.6 2.9-.4 7.2 1.2 9.6.8 1.1 1.7 2.4 2.9 2.4 1.2 0 1.6-.8 3-.8s1.8.8 3.1.7c1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.6-.1 0-2.4-.9-2.4-3.8M14 4.7c.7-.8 1.1-1.9 1-3-.9.1-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1.1 0 2-.6 2.7-1.3"/>
    </svg>
  )
}

export function PlayStoreIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path fill="currentColor" d="M4.3 2.3c-.3.3-.4.7-.4 1.3v17c0 .5.2 1 .5 1.2l9.7-9.8zM16 12.9l2.5-2.5L6.3 3c-.4-.2-.8-.3-1.1-.2zM5.2 21.2c.3.1.7 0 1.1-.2l12-6.9-2.4-2.4z M19.5 11.1l-2.3 1.3 2.3 1.3c1-.5 1.6-1.1 1.6-1.4 0-.3-.6-.8-1.6-1.2"/>
    </svg>
  )
}

export function UserIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 20c.9-3.6 3.6-5.5 7-5.5s6.1 1.9 7 5.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function QrCodeIcon({ size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 14h3v3h-3zM20 14v3M14 20h3M19 20h2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
