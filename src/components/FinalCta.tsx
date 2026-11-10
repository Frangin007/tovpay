import { Link } from 'react-router-dom'

type CtaAction = { label: string; to: string }

type FinalCtaProps = {
  title: string
  desc: string
  primary: CtaAction
  secondary?: CtaAction
  bgImage: string
}

export default function FinalCta({ title, desc, primary, secondary, bgImage }: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden py-20 px-[5%] bg-navy-deep">
      <img src={bgImage} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-deep/90" />

      <div className="relative max-w-[640px] mx-auto text-center">
        <h2 className="font-display font-bold text-[2rem] sm:text-[2.4rem] lg:text-[2.75rem] text-white leading-tight tracking-tight mb-5">
          {title}
        </h2>
        <p className="text-white/70 text-base leading-relaxed mb-9">
          {desc}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to={primary.to} className="btn-primary">{primary.label}</Link>
          {secondary && <Link to={secondary.to} className="btn-outline-light">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  )
}
