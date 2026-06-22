type PageHeroProps = {
  breadcrumb: string
  title: string
  desc: string
}

export default function PageHero({ breadcrumb, title, desc }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-[70px] px-[5%] bg-[linear-gradient(160deg,#0B1F0A_0%,#112A0F_38%,#0D2251_100%)]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 80% at 30% 30%, #000 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 30% 30%, #000 40%, transparent 90%)',
        }}
      />
      <div className="mesh-orb w-[460px] h-[460px] -top-[180px] -right-[100px] bg-[radial-gradient(circle,rgba(159,232,112,0.22),transparent_70%)] opacity-100" />
      <div className="mesh-orb w-[360px] h-[360px] -bottom-[160px] -left-[100px] bg-[radial-gradient(circle,rgba(0,229,184,0.16),transparent_70%)] opacity-100 [animation-delay:-6s] [animation-duration:20s]" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-2 mb-5 text-sm">
          <span className="text-white/45">{breadcrumb.split(' / ')[0]}</span>
          <span className="text-white/25">/</span>
          <span className="text-teal font-medium">{breadcrumb.split(' / ')[1]}</span>
        </div>
        <h1 className="font-display font-extrabold text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] text-white leading-tight my-6 tracking-tight max-w-[720px]">
          {title}
        </h1>
        <p className="text-white/65 text-base leading-relaxed max-w-[560px]">{desc}</p>
      </div>
    </section>
  )
}
