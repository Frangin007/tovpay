import { BankIcon, WaveIcon, SignalIcon, BroadcastIcon, GavelIcon } from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import { useScrollReveal } from '../hooks/useScrollReveal'

const partners = [
  { Icon: BankIcon, type: 'Banque Adossement', name: 'Orabank', desc: 'Groupe bancaire panafricain privé, présent dans 12 pays' },
  { Icon: WaveIcon, type: 'Mobile Money', name: 'Wave', desc: "Transferts mobiles instantanés Côte d'Ivoire & Sénégal" },
  { Icon: SignalIcon, type: 'Mobile Money', name: 'Orange Money', desc: 'Zone UEMOA complète (9 pays)' },
  { Icon: BroadcastIcon, type: 'Mobile Money', name: 'MTN MoMo', desc: 'Bénin, Nigeria, Mali, Mauritanie' },
  { Icon: SignalIcon, type: 'Tech SMS', name: "Africa's Talking", desc: 'Infrastructure SMS panafricaine, 55 pays' },
  { Icon: GavelIcon, type: 'Régulateur', name: 'BCEAO', desc: 'Conformité réglementaire zone UEMOA' },
]

const countries = [
  { flag: '🇨🇮', name: "Côte d'Ivoire", status: 'Actif', active: true, desc: 'Siège principal — 140+ clients' },
  { flag: '🇸🇳', name: 'Sénégal', status: 'Actif', active: true, desc: '100+ clients — Dakar' },
  { flag: '🇧🇯', name: 'Bénin', status: 'Actif', active: true, desc: '50+ clients — Cotonou' },
  { flag: '🇹🇬', name: 'Togo', status: 'Actif', active: true, desc: '40+ clients — Lomé' },
  { flag: '🇲🇱', name: 'Mali', status: 'Octobre 2026', active: false, desc: 'Préparation Q4 2026' },
  { flag: '🇳🇪', name: 'Niger', status: 'Q1 2027', active: false, desc: 'Lancement prévu 2027' },
]

export default function Partners() {
  useScrollReveal()
  return (
    <>
      <PageHero
        breadcrumb="Accueil / Partenaires"
        title="Notre écosystème"
        desc="Les partenaires stratégiques qui font la force de TOVPAY"
      />

      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp">
          <h2 className="section-title text-center mb-12">Partenaires clés</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String(i)}
                className="bg-white rounded-2xl border border-g100 p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal/30"
              >
                <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mx-auto mb-3 bg-teal/10 text-teal">
                  <p.Icon size={26} />
                </div>
                <span className="block text-g400 text-[10px] uppercase tracking-wider font-semibold mb-1">{p.type}</span>
                <div className="font-display font-bold text-navy text-sm mb-1">{p.name}</div>
                <div className="text-g600 text-xs leading-snug">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-g50 py-24 px-[5%]">
        <div className="container-tp">
          <h2 className="section-title text-center mb-11">Notre présence</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((c, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String(i)}
                className="bg-white rounded-2xl border border-g100 p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="text-3xl mb-2">{c.flag}</div>
                <h4 className="font-display font-bold text-navy text-sm mb-1.5">{c.name}</h4>
                <span
                  className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 ${
                    c.active ? 'bg-teal/10 text-teal' : 'bg-gold/10 text-gold'
                  }`}
                >
                  {c.status}
                </span>
                <p className="text-g600 text-xs leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Devenez partenaire de TOVPAY."
        desc="Banques, opérateurs Mobile Money, fintechs : construisons ensemble l'inclusion financière en Afrique de l'Ouest."
        primary={{ label: 'Devenir partenaire', to: '/contact' }}
        secondary={{ label: 'En savoir plus sur nous →', to: '/about' }}
      />
    </>
  )
}
