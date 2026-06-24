import { motion } from 'framer-motion'
import {
  ScoringIcon, AiSparkIcon, HandshakeIcon, BriefcaseIcon,
  SignalIcon, GlobeIcon,
} from '../components/Icon'
import PageHero from '../components/PageHero'
import IMAGES from '../lib/images'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const posts = [
  {
    Icon: ScoringIcon,
    tag: 'Inclusion Financière',
    title: 'Comment le nano-crédit transforme les économies informelles en Afrique',
    excerpt: 'Découvrez comment l\'accès au micro-crédit mobile change concrètement le quotidien des commerçants et artisans en zone UEMOA.',
    date: 'Mai 2026',
    reading: '5 min',
    img: IMAGES.whyImg1,
    color: '#00B98E',
  },
  {
    Icon: AiSparkIcon,
    tag: 'Innovation IA',
    title: 'Le scoring mobile : la révolution du crédit sans garantie',
    excerpt: 'Notre algorithme propriétaire analyse des centaines de signaux comportementaux pour évaluer la capacité de remboursement sans historique bancaire.',
    date: 'Avril 2026',
    reading: '4 min',
    img: IMAGES.impact4,
    color: '#7C3AED',
  },
  {
    Icon: HandshakeIcon,
    tag: 'Partenariat',
    title: 'TOVPAY & Orabank : un partenariat historique pour l\'UEMOA',
    excerpt: 'Retour sur la genèse d\'un accord qui permet à TOVPAY d\'offrir des crédits réglementés adossés au premier groupe bancaire panafricain privé.',
    date: 'Mars 2026',
    reading: '6 min',
    img: IMAGES.heroPartners,
    color: '#1A3FA8',
  },
  {
    Icon: BriefcaseIcon,
    tag: 'PME',
    title: 'Étude de cas : des commerçantes développent leur activité',
    excerpt: 'Portrait de trois entrepreneures qui ont utilisé le nano-crédit TovPay pour franchir un cap dans leur parcours professionnel.',
    date: 'Février 2026',
    reading: '7 min',
    img: IMAGES.impact1,
    color: '#F5A623',
  },
  {
    Icon: SignalIcon,
    tag: 'Technologie',
    title: 'Architecture fintech africaine : défis et solutions terrain',
    excerpt: 'Construire une API de paiement robuste sur des infrastructures hétérogènes en Afrique de l\'Ouest — retour d\'expérience technique.',
    date: 'Janvier 2026',
    reading: '8 min',
    img: IMAGES.howStep1,
    color: '#0891B2',
  },
  {
    Icon: GlobeIcon,
    tag: 'Expansion',
    title: 'La stratégie panafricaine de TOVPAY : 12 pays d\'ici 2028',
    excerpt: 'Nos ambitions d\'expansion, les marchés prioritaires et la stratégie d\'entrée pays par pays pour les années à venir.',
    date: 'Décembre 2025',
    reading: '5 min',
    img: IMAGES.impact3,
    color: '#059669',
  },
]

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <>
      <PageHero
        breadcrumb="Accueil / Blog"
        title="Blog & Actualités"
        desc="Insights, actualités et analyses sur la fintech et l'inclusion financière africaine."
        bgImage={IMAGES.heroBlog}
      />

      <section className="py-28 px-[5%] bg-white">
        <div className="max-w-[1280px] mx-auto">

          {/* Article à la une */}
          <motion.div
            className="grid lg:grid-cols-2 gap-10 mb-20 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="relative rounded-3xl overflow-hidden h-[380px] group">
              <img
                src={featured.img}
                alt={featured.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
              <div
                className="absolute top-5 left-5 text-[10px] font-semibold px-3 py-1 rounded-full"
                style={{ background: `${featured.color}30`, color: featured.color, border: `1px solid ${featured.color}50` }}
              >
                À LA UNE
              </div>
            </div>
            <div>
              <span className="section-tag">{featured.tag}</span>
              <h2 className="font-display font-extrabold text-[1.8rem] text-navy leading-tight my-4">{featured.title}</h2>
              <p className="text-g600 text-[15px] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="text-g400 text-sm">{featured.date}</span>
                <span className="text-g100">·</span>
                <span className="text-g400 text-sm">{featured.reading} de lecture</span>
              </div>
            </div>
          </motion.div>

          {/* Grille des autres articles */}
          <div>
            <motion.span
              className="section-tag block mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              TOUS LES ARTICLES
            </motion.span>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-3xl border border-g100 overflow-hidden group hover:shadow-xl hover:border-teal/20 transition-all duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                    <span
                      className="absolute top-4 left-4 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${post.color}30`, color: post.color, border: `1px solid ${post.color}50` }}
                    >
                      {post.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="font-display font-bold text-navy text-base leading-snug mb-3 flex-1">{post.title}</h4>
                    <p className="text-g600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-g400 text-xs pt-4 border-t border-g100">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.reading}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-[5%] bg-g50">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            className="bg-gradient-to-br from-navy to-blue rounded-3xl p-10 flex flex-wrap justify-between items-center gap-8 overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(159,232,112,0.12), transparent 70%)' }} />
            <div className="relative">
              <h3 className="text-white text-2xl font-display font-bold mb-2">Newsletter fintech</h3>
              <p className="text-white/65 text-sm">Les dernières actualités micro-finance africaine, toutes les 2 semaines.</p>
            </div>
            <div className="flex gap-3 flex-1 min-w-[280px] max-w-lg relative">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-xl border-0 text-sm outline-none text-navy"
              />
              <motion.button
                className="bg-teal text-white font-semibold text-sm px-6 py-3 rounded-xl whitespace-nowrap"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                S'abonner
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
