import { Link } from 'react-router-dom'

type FinalCtaProps = {
  title: string
  desc: string
  primary: { label: string; to: string; mailto?: boolean }
  secondary: { label: string; to: string; mailto?: boolean }
}

export default function FinalCta({ title, desc, primary, secondary }: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden py-24 px-[5%] bg-[linear-gradient(150deg,#0B1F0A_0%,#112A0F_45%,#0D2251_100%)]">
      <div className="mesh-orb w-[520px] h-[520px] -top-[180px] left-[8%] bg-[radial-gradient(circle,rgba(159,232,112,0.3),transparent_70%)]" />
      <div className="mesh-orb w-[420px] h-[420px] -bottom-[160px] right-[10%] bg-[radial-gradient(circle,rgba(0,229,184,0.22),transparent_70%)] [animation-delay:-6s] [animation-duration:22s]" />
      <div className="container-tp relative">
        <div className="max-w-[640px] mx-auto text-center" data-reveal>
          <h2 className="font-display font-extrabold text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] text-white leading-tight mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-white/68 text-base leading-relaxed mb-9">{desc}</p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            {primary.mailto ? (
              <a href={primary.to} className="btn-primary">{primary.label}</a>
            ) : (
              <Link to={primary.to} className="btn-primary">{primary.label}</Link>
            )}
            {secondary.mailto ? (
              <a href={secondary.to} className="btn-ghost">{secondary.label}</a>
            ) : (
              <Link to={secondary.to} className="btn-ghost">{secondary.label}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
