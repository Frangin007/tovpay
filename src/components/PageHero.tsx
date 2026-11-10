type PageHeroProps = {
  breadcrumb: string
  title: string
  desc: string
  bgImage?: string
}

export default function PageHero({ breadcrumb, title, desc, bgImage }: PageHeroProps) {
  const parts = breadcrumb.split(' / ')

  return (
    // Hauteur minimale de 440 px ; la section s'allonge si le texte est long sur
    // petit écran, au lieu de couper le titre ou la description.
    <section className="relative overflow-hidden min-h-[440px] py-24 flex items-center px-[5%] bg-navy-deep">
      {bgImage && (
        <>
          <img src={bgImage} alt="" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
          {/* Voile sombre : lisibilité du texte sur la photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/85 to-navy-deep/60" />
        </>
      )}

      <div className="relative w-full max-w-[1280px] mx-auto">
        {/* Fil d'Ariane */}
        <div className="flex items-center gap-2 mb-5 text-sm text-white/55">
          {parts.map((part, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              <span className={i === parts.length - 1 ? 'text-white/85' : undefined}>{part}</span>
            </span>
          ))}
        </div>

        <h1 className="font-display font-bold text-[2.2rem] sm:text-[2.8rem] lg:text-[3.25rem] text-white leading-tight tracking-tight max-w-[760px] mb-5">
          {title}
        </h1>

        <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-[560px]">
          {desc}
        </p>
      </div>
    </section>
  )
}
