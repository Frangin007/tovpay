import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'
import Photo from './Photo'

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
      {/* Sous un voile à 90 % : une variante deux fois moins large que l'écran suffit (sizes 50vw) */}
      <Photo src={bgImage} sizes="50vw" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-deep/90" />

      <motion.div
        className="relative max-w-[640px] mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.h2
          className="font-display font-bold text-[2rem] sm:text-[2.4rem] lg:text-[2.75rem] text-white leading-tight tracking-tight mb-5"
          variants={fadeUp}
          custom={0}
        >
          {title}
        </motion.h2>
        <motion.p className="text-white/70 text-base leading-relaxed mb-9" variants={fadeUp} custom={1}>
          {desc}
        </motion.p>
        <motion.div className="flex gap-4 justify-center flex-wrap" variants={fadeUp} custom={2}>
          <Link to={primary.to} className="btn-primary">{primary.label}</Link>
          {secondary && <Link to={secondary.to} className="btn-outline-light">{secondary.label}</Link>}
        </motion.div>
      </motion.div>
    </section>
  )
}
