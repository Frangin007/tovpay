// ── Avatar : placeholder initiales, prêt à recevoir une vraie photo ──
// Pour utiliser une vraie photo plus tard, passez la prop `src`
// (ex: src="/team/youssouf-diallo.jpg") : l'image remplacera automatiquement
// le monogramme généré.

type AvatarProps = {
  name: string
  src?: string
  size?: number
  variant?: 'navy' | 'teal' | 'blue' | 'gold'
}

const palettes = {
  navy: ['#0D2251', '#1A3FA8'],
  teal: ['#00B98E', '#009E79'],
  blue: ['#1A3FA8', '#0D2251'],
  gold: ['#F5A623', '#FF8C42'],
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}

// Choisit une variante de façon stable à partir du nom, pour varier
// les couleurs entre plusieurs avatars sans prop explicite.
function variantFromName(name: string): keyof typeof palettes {
  const keys = Object.keys(palettes) as (keyof typeof palettes)[]
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash + name.charCodeAt(i)) % keys.length
  return keys[hash]
}

export default function Avatar({ name, src, size = 64, variant }: AvatarProps) {
  const v = variant ?? variantFromName(name)
  const [c1, c2] = palettes[v]

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
    )
  }

  return (
    <div
      aria-label={name}
      role="img"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${c1}, ${c2})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: size * 0.34,
        letterSpacing: '0.5px',
        flexShrink: 0,
      }}
    >
      {initials(name)}
    </div>
  )
}
