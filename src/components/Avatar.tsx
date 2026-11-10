// ── Avatar : placeholder initiales, prêt à recevoir une vraie photo ──
// Pour utiliser une vraie photo plus tard, passez la prop `src`
// (ex: src="/team/youssouf-diallo.jpg") : l'image remplacera automatiquement
// le monogramme généré.

type AvatarProps = {
  name: string
  src?: string
  size?: number
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

export default function Avatar({ name, src, size = 64 }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        className="rounded-full object-cover shrink-0"
        style={{ width: size, height: size }}
      />
    )
  }

  return (
    <div
      aria-label={name}
      role="img"
      className="rounded-full bg-navy text-white font-semibold flex items-center justify-center shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.32 }}
    >
      {initials(name)}
    </div>
  )
}
