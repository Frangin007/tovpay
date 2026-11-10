import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

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

      {/* Fil d'Ariane, titre puis description apparaissent l'un après l'autre */}
      <motion.div className="relative w-full max-w-[1280px] mx-auto" initial="hidden" animate="visible">
        {/* Fil d'Ariane */}
        <motion.div className="flex items-center gap-2 mb-5 text-sm text-white/55" variants={fadeUp} custom={0}>
          {parts.map((part, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              <span className={i === parts.length - 1 ? 'text-white/85' : undefined}>{part}</span>
            </span>
          ))}
        </motion.div>

        <motion.h1
          className="font-display font-bold text-[2.2rem] sm:text-[2.8rem] lg:text-[3.25rem] text-white leading-tight tracking-tight max-w-[760px] mb-5"
          variants={fadeUp}
          custom={1}
        >
          {title}
        </motion.h1>

        <motion.p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-[560px]" variants={fadeUp} custom={2}>
          {desc}
        </motion.p>
      </motion.div>
    </section>
  )
}
