import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

type PageHeroProps = {
  breadcrumb: string
  title: string
  desc: string
  bgImage?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  }),
}

export default function PageHero({ breadcrumb, title, desc, bgImage }: PageHeroProps) {
  const parts = breadcrumb.split(' / ')

  return (
    <section className="relative overflow-hidden pt-[130px] pb-[80px] px-[5%]">
      {/* Background */}
      {bgImage ? (
        <>
          <div className="absolute inset-0">
            <img src={bgImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/96 via-navy-deep/90 to-navy/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#071428_0%,#0D2251_60%,#0B4A3F_100%)]" />
      )}

      {/* Déco mesh */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,185,142,0.22) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(159,232,112,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb */}
          <motion.div className="flex items-center gap-2 mb-6 text-sm" variants={fadeUp} custom={0}>
            {parts.map((part, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/25">/</span>}
                <span className={i === parts.length - 1 ? 'text-teal font-medium' : 'text-white/45'}>
                  {part}
                </span>
              </span>
            ))}
          </motion.div>

          {/* Titre */}
          <motion.h1
            className="font-display font-extrabold text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] text-white leading-tight tracking-tight max-w-[760px] mb-5"
            variants={fadeUp}
            custom={1}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-white/65 text-base sm:text-lg leading-relaxed max-w-[560px]"
            variants={fadeUp}
            custom={2}
          >
            {desc}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
