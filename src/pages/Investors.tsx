import { GlobeIcon, TrendingUpIcon, HandshakeIcon, CoinsIcon, BuildingIcon, NetworkIcon, MailIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import { useScrollReveal } from '../hooks/useScrollReveal'

const kpiRows = [
  { label: 'Clients actifs', y24: '50', y25: '330', y26: '2 000' },
  { label: 'Crédits accordés (M FCFA)', y24: '25', y25: '200', y26: '1 200' },
  { label: 'Taux recouvrement', y24: '92%', y25: '85%', y26: '83%' },
  { label: 'Pays opérationnels', y24: '1', y25: '4', y26: '6' },
  { label: 'Revenue (M FCFA)', y24: '2.5', y25: '22', y26: '140' },
  { label: 'Marge opérationnelle', y24: '-40%', y25: '-15%', y26: '18%' },
]

const investCards = [
  { Icon: GlobeIcon, title: 'Marché géant', desc: '500M+ personnes sans accès bancaire en Afrique. TAM: $50B+' },
  { Icon: TrendingUpIcon, title: 'Croissance 7x', desc: 'Revenue CAGR 120% 2024-2026. Chemin vers profitabilité clair.' },
  { Icon: HandshakeIcon, title: 'Orabank backing', desc: 'Adossement bancaire Orabank. Conformité BCEAO garantie.' },
]

const profiles = [
  { Icon: CoinsIcon, title: 'Family Offices', desc: 'Impact investing africain + rendements financiers solides' },
  { Icon: BuildingIcon, title: 'VC Panafricains', desc: 'Spécialisés fintech, crypto, fintech inclusive' },
  { Icon: NetworkIcon, title: 'Impact Funds', desc: 'SDG 1,5,8,10 — Inclusion financière mesurable' },
]

export default function Investors() {
  useScrollReveal()
  return (
    <>
      <PageHero
        breadcrumb="Accueil / Investisseurs"
        title="Opportunité d'investissement"
        desc="Participez à la révolution de l'inclusion financière africaine"
      />

      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp">
          <h2 className="section-title text-center mb-12">Modèle économique</h2>
          <div className="overflow-x-auto rounded-2xl border border-g100">
            <table className="w-full border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left text-white/90 text-xs font-semibold uppercase tracking-wide py-4 px-5">Métrique</th>
                  <th className="text-right text-white/90 text-xs font-semibold uppercase tracking-wide py-4 px-5">2024</th>
                  <th className="text-right text-white/90 text-xs font-semibold uppercase tracking-wide py-4 px-5">2025E</th>
                  <th className="text-right text-teal text-xs font-semibold uppercase tracking-wide py-4 px-5">2026P</th>
                </tr>
              </thead>
              <tbody>
                {kpiRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-g50'}>
                    <td className="text-g600 text-sm py-3.5 px-5">{r.label}</td>
                    <td className="text-right text-navy text-sm font-medium py-3.5 px-5">{r.y24}</td>
                    <td className="text-right text-navy text-sm font-medium py-3.5 px-5">{r.y25}</td>
                    <td className="text-right text-navy text-sm font-bold py-3.5 px-5">{r.y26}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title text-center mb-11 mt-20">Points clés d'investissement</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {investCards.map((c, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String(i)}
                className="bg-g50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-4 bg-teal/12 text-teal">
                  <c.Icon size={26} />
                </div>
                <h4 className="font-display font-bold text-navy text-lg mb-2">{c.title}</h4>
                <p className="text-g600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-navy to-blue rounded-3xl p-9 mt-20" data-reveal>
            <h3 className="text-white text-2xl font-display font-bold mb-5">Levée de fonds Série A</h3>
            <p className="text-white/75 leading-relaxed mb-5">
              TOVPAY prépare une levée de 2M USD fin 2026 pour financer : expansion 6 pays supplémentaires, tech AI/ML avancée, équipes locales.
            </p>
            <p className="text-white/75 text-sm flex items-center gap-2">
              <MailIcon size={15} /> Contactez: <strong className="text-teal">investors@tovpay.com</strong>
            </p>
          </div>

          <div className="mt-20">
            <h2 className="section-title text-center mb-11">Profils d'investisseurs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {profiles.map((p, i) => (
                <div
                  key={i}
                  data-reveal
                  data-reveal-delay={String(i)}
                  className="bg-white rounded-2xl border border-g100 p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center mx-auto mb-3.5 bg-teal/10 text-teal">
                    <p.Icon size={26} />
                  </div>
                  <h4 className="font-display font-bold text-navy text-base mb-2">{p.title}</h4>
                  <p className="text-g600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Investissez dans l'inclusion financière africaine."
        desc="Discutons de notre Série A et de notre feuille de route panafricaine."
        primary={{ label: "Contacter l'équipe", to: 'mailto:investors@tovpay.com', mailto: true }}
        secondary={{ label: 'Découvrir TOVPAY →', to: '/about' }}
      />
    </>
  )
}
