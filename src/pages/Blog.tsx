import {
  ScoringIcon, AiSparkIcon, HandshakeIcon, BriefcaseIcon,
  SignalIcon, GlobeIcon, DocumentIcon,
} from '../components/Icon'
import PageHero from '../components/PageHero'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Blog() {
  useScrollReveal()
  const posts = [
    {
      icon: ScoringIcon,
      tag: 'Inclusion Financière',
      title: 'Comment le nano-crédit transforme les économies informelles',
      date: 'Mai 2026',
      reading: '5 min',
      gradient: 'linear-gradient(135deg,#0D2251,#00B98E)'
    },
    {
      icon: AiSparkIcon,
      tag: 'Innovation IA',
      title: 'Le scoring mobile : la révolution du crédit sans garantie',
      date: 'Avril 2026',
      reading: '4 min',
      gradient: 'linear-gradient(135deg,#1A3FA8,#00B98E)'
    },
    {
      icon: HandshakeIcon,
      tag: 'Partenariat',
      title: 'TOVPAY & Orabank : un partenariat historique pour l\'UEMOA',
      date: 'Mars 2026',
      reading: '6 min',
      gradient: 'linear-gradient(135deg,#0B4A3F,#00B98E)'
    },
    {
      icon: BriefcaseIcon,
      tag: 'PME',
      title: 'Étude de cas : des commerçantes développent leur activité grâce au nano-crédit',
      date: 'Février 2026',
      reading: '7 min',
      gradient: 'linear-gradient(135deg,#F5A623,#FF8C42)'
    },
    {
      icon: SignalIcon,
      tag: 'Tech',
      title: 'Architecture fintech africaine : défis et solutions',
      date: 'Janvier 2026',
      reading: '8 min',
      gradient: 'linear-gradient(135deg,#7C3AED,#A855F7)'
    },
    {
      icon: GlobeIcon,
      tag: 'Expansion',
      title: 'La stratégie panafricaine de TOVPAY : 12 pays d\'ici 2028',
      date: 'Décembre 2025',
      reading: '5 min',
      gradient: 'linear-gradient(135deg,#0891B2,#06B6D4)'
    }
  ]

  return (
    <>
      <PageHero
        breadcrumb="Accueil / Blog"
        title="Blog & Actualités"
        desc="Dernières nouvelles sur l'inclusion financière et l'innovation en Afrique"
      />

      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String((i % 3) + 1)}
                className="bg-white rounded-2xl border border-g100 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal/30"
              >
                <div className="h-[160px] flex items-center justify-center relative overflow-hidden" style={{ background: post.gradient }}>
                  <post.icon size={30} className="text-white/90 relative z-10" />
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-teal text-[11px] font-semibold uppercase tracking-wide">{post.tag}</span>
                    <span className="text-g400 text-xs">{post.reading}</span>
                  </div>
                  <h4 className="font-display font-bold text-navy text-base leading-snug mb-3">{post.title}</h4>
                  <p className="text-g600 text-sm leading-relaxed mb-5">
                    Découvrez les dernières tendances et innovations en fintech, étude de cas et analyses de marché pour l'inclusion financière africaine.
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-3 border-t border-g100">
                    <div className="flex items-center gap-2">
                      <span className="w-[26px] h-[26px] rounded-full bg-teal/10 text-teal flex items-center justify-center">
                        <DocumentIcon size={16} />
                      </span>
                      <span className="font-semibold text-navy text-xs">TOVPAY Blog</span>
                    </div>
                    <span className="text-g400 text-xs">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-g50 pt-[60px] pb-24 px-[5%]">
        <div className="container-tp">
          <div className="bg-gradient-to-br from-teal to-[#00D4AA] rounded-3xl p-11 flex flex-wrap justify-between items-center gap-6">
            <div>
              <h3 className="text-white text-2xl font-display font-bold mb-2">S'abonner à la newsletter</h3>
              <p className="text-white/75 text-sm">Recevez les dernières actualités fintech africaines</p>
            </div>
            <div className="flex-1 min-w-[280px] flex gap-2.5">
              <input
                type="email"
                placeholder="email@exemple.com"
                className="flex-1 px-4 py-3 rounded-[10px] border-0 text-sm outline-none"
              />
              <button className="bg-navy text-white font-semibold text-sm px-6 py-3 rounded-[10px] whitespace-nowrap hover:bg-navy/90 transition-colors duration-200">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
