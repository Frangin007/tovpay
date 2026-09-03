import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

type FinalCtaProps = {
  title: string
  desc: string
  primary: { label: string; to: string; mailto?: boolean }
  secondary: { label: string; to: string; mailto?: boolean }
  bgImage?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
}

export default function FinalCta({ title, desc, primary, secondary, bgImage }: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden py-20 px-[5%]">
      {/* Background */}
      {bgImage ? (
        <>
          <div className="absolute inset-0">
            <img src={bgImage} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/97 via-navy-deep/92 to-navy/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(150deg,#071428_0%,#0D2251_50%,#0B4A3F_100%)]" />
      )}

      {/* Déco */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(159,232,112,0.14) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,185,142,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.div
          className="max-w-[640px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.h2
            className="font-display font-extrabold text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-white leading-tight mb-5 tracking-tight"
            variants={fadeUp}
            custom={0}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-white/65 text-base leading-relaxed mb-9"
            variants={fadeUp}
            custom={1}
          >
            {desc}
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            variants={fadeUp}
            custom={2}
          >
            {primary.mailto ? (
              <motion.a
                href={primary.to}
                className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-[15px] px-7 py-4 rounded-xl shadow-[0_8px_32px_rgba(0,185,142,0.4)]"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {primary.label}
              </motion.a>
            ) : (
              <Link to={primary.to}>
                <motion.span
                  className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-[15px] px-7 py-4 rounded-xl shadow-[0_8px_32px_rgba(0,185,142,0.4)] cursor-pointer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {primary.label}
                </motion.span>
              </Link>
            )}

            {secondary.mailto ? (
              <motion.a
                href={secondary.to}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 text-white font-semibold text-[15px] px-7 py-4 rounded-xl"
                whileHover={{ scale: 1.04, y: -2, backgroundColor: 'rgba(255,255,255,0.18)' }}
                whileTap={{ scale: 0.97 }}
              >
                {secondary.label}
              </motion.a>
            ) : (
              <Link to={secondary.to}>
                <motion.span
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 text-white font-semibold text-[15px] px-7 py-4 rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.04, y: -2, backgroundColor: 'rgba(255,255,255,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  {secondary.label}
                </motion.span>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
