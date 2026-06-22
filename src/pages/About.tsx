import { CheckCircleIcon } from '../components/Icon'
import Avatar from '../components/Avatar'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import { useScrollReveal } from '../hooks/useScrollReveal'

const timeline = [
  { year: '2023', title: 'Fondation de TOVPAY', desc: "Lancement de la plateforme en Côte d'Ivoire avec 50 clients pionniers" },
  { year: '2024 Q1', title: 'Partenariat Orabank', desc: "Accord d'adossement bancaire avec Orabank, leader bancaire panafricain" },
  { year: '2024 Q3', title: 'Expansion régionale', desc: 'Lancement en Sénégal, Togo et Bénin — 330+ clients actifs' },
  { year: '2025', title: 'Consolidation UEMOA', desc: 'Présence dans 6 pays UEMOA, intégration scoring IA avancé' },
  { year: '2026', title: 'Ambition 2028', desc: 'Préparer expansion à 12 pays africains, série A en cours' },
]

const team = [
  { name: 'Youssouf Diallo', role: 'CEO & Co-Founder', bio: 'Ex-Orabank, 12 ans en fintech panafricaine. MBA ISM Dakar, spécialiste inclusion financière.' },
  { name: 'Ama Mensah', role: 'CTO', bio: 'Engineer IA/ML de Paytech Kenya. Spécialiste scoring intelligent et infrastructure blockchain.' },
  { name: 'Mamadou Sow', role: 'CFO', bio: 'Ex-Bpifrance, 8 ans en structuration fintech. Certifié CFA, expert conformité BCEAO.' },
  { name: 'Sarah Kofi', role: 'Chief Operations Officer', bio: 'Ex-MTN, 10 ans en digital payments. Responsable expansion UEMOA et partenariats.' },
]

const valeurs = [
  'Accessibilité : crédit pour tous',
  'Transparence : pas de frais cachés',
  "Innovation : l'IA au service de l'humain",
  'Intégrité : conformité BCEAO',
]

export default function About() {
  useScrollReveal()

  return (
    <>
      <PageHero
        breadcrumb="Accueil / À Propos"
        title="Notre histoire"
        desc="Découvrez comment TOVPAY transforme l'inclusion financière en Afrique"
      />

      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp">

          {/* MISSION */}
          <div className="mb-20">
            <span className="section-tag">MISSION</span>
            <h2 className="section-title">Démocratiser le crédit en Afrique</h2>
            <p className="section-sub max-w-[720px] mb-10">
              TOVPAY est fondée sur la conviction que le crédit est un droit, pas un privilège. Nous croyons que chaque entrepreneur africain, quel que soit son statut bancaire ou son histoire, mérite une chance d'accéder au financement.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-display font-bold text-2xl text-navy mb-5">Notre Vision</h3>
                <p className="text-g600 leading-relaxed text-[15px]">
                  Devenir le leader panafricain du micro-crédit digital, en offrant des solutions inclusives et accessibles qui transforment les économies locales.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-navy mb-5">Nos Valeurs</h3>
                <ul className="text-g600 text-[15px] flex flex-col gap-2.5 list-none">
                  {valeurs.map((v, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircleIcon size={18} className="text-teal shrink-0" /> {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* HISTOIRE */}
          <div className="mb-20">
            <span className="section-tag">HISTOIRE</span>
            <h2 className="section-title mb-10">Une trajectoire remarquable</h2>
            <div className="relative pl-8 border-l-2 border-g100 flex flex-col gap-10">
              {timeline.map((t, i) => (
                <div key={i} data-reveal data-reveal-delay={String(i)} className="relative">
                  <div className="absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-teal ring-4 ring-white" />
                  <div className="text-teal font-display font-bold text-sm mb-1">{t.year}</div>
                  <h4 className="font-display font-bold text-navy text-lg mb-1.5">{t.title}</h4>
                  <p className="text-g600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ÉQUIPE */}
          <div>
            <span className="section-tag">ÉQUIPE</span>
            <h2 className="section-title mb-10">Notre leadership</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((m, i) => (
                <div
                  key={i}
                  data-reveal
                  data-reveal-delay={String(i)}
                  className="bg-white rounded-[20px] border border-g100 shadow-[0_4px_22px_rgba(13,34,81,0.06)] p-7 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,185,142,0.12)]"
                >
                  <Avatar name={m.name} size={88} />
                  <h4 className="font-display font-bold text-navy text-base mt-4">{m.name}</h4>
                  <div className="text-teal text-xs font-semibold mb-3">{m.role}</div>
                  <p className="text-g600 text-[13px] leading-relaxed">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Construisons ensemble l'inclusion financière."
        desc="Que vous soyez client, partenaire ou investisseur, il y a une place pour vous chez TOVPAY."
        primary={{ label: 'Nous contacter', to: '/contact' }}
        secondary={{ label: 'Espace investisseurs →', to: '/investors' }}
      />
    </>
  )
}
