import { Link } from 'react-router-dom'
import {
  CreditIcon, WalletIcon, AiSparkIcon, BuildingIcon,
  PhoneDownloadIcon, IdIcon, CheckCircleIcon,
} from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Services() {
  useScrollReveal()

  const services = [
    {
      icon: CreditIcon,
      color: '#00B98E',
      title: 'Nano-Crédit Mobile',
      desc: 'Accédez instantanément à 1 000 – 20 000 FCFA (équivalent Nigeria) sans paperasse complexe. Scoring basé sur IA, remboursement flexible.',
      features: ['Décaissement en 15 min', 'Sans garantie physique', 'Multi-opérateurs Mobile Money', 'Scoring IA intelligent'],
      link: '/nano-credit'
    },
    {
      icon: WalletIcon,
      color: '#1A3FA8',
      title: 'Wallet & Paiements',
      desc: 'Portefeuille numérique complet pour gérer vos fonds. Envoyez, recevez, payez chez les commerçants partenaires.',
      features: ['Multi-opérateurs', 'Paiement marchand', 'Transferts instantanés', 'Historique détaillé', 'Notification SMS'],
      link: '/services'
    },
    {
      icon: AiSparkIcon,
      color: '#7C3AED',
      title: 'Scoring Intelligent',
      desc: 'Moteur IA propriétaire qui évalue votre profil de crédit en temps réel sans historique bancaire complexe.',
      features: ['Score en temps réel', 'Sans historique bancaire', 'Amélioration continue', 'Transparence totale', 'Appel API disponible'],
      link: '/services'
    },
    {
      icon: BuildingIcon,
      color: '#F5A623',
      title: 'Solutions PME',
      desc: 'Services financiers digitaux pour petites entreprises : lignes renouvelables, gestion trésorerie, tableaux de bord.',
      features: ['Ligne de crédit renouvelable', 'Gestion trésorerie', 'Multi-utilisateurs', 'Tableau de bord analytique', 'Support dédié'],
      link: '/services'
    }
  ]

  const steps = [
    { Icon: PhoneDownloadIcon, title: "Téléchargez l'app", desc: 'Disponible sur App Store et Google Play. Gratuit et sécurisé.' },
    { Icon: IdIcon, title: 'Inscrivez-vous', desc: 'Vérification ID + numéro téléphone. Moins de 5 minutes.' },
    { Icon: AiSparkIcon, title: 'Scoring instantané', desc: 'IA analyse votre profil. Résultat immédiat.' },
    { Icon: CreditIcon, title: 'Crédit décaissé', desc: 'Fonds sur votre portefeuille en 15 minutes max.' },
  ]

  return (
    <>
      <PageHero
        breadcrumb="Accueil / Services"
        title="Nos services financiers"
        desc="Solutions complètes pour l'inclusion financière en Afrique de l'Ouest"
      />

      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp">
          {services.map((service, i) => (
            <div key={i}>
              <div className="grid lg:grid-cols-2 gap-12 items-start" data-reveal>
                <div>
                  <div
                    className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${service.color}18`, color: service.color }}
                  >
                    <service.icon size={26} />
                  </div>
                  <h2 className="section-title mt-0">{service.title}</h2>
                  <p className="text-g600 text-[15px] leading-relaxed mb-7">{service.desc}</p>
                  <Link to={service.link} className="btn-primary">En savoir plus →</Link>
                </div>
                <div className="bg-g50 rounded-2xl p-7">
                  <h4 className="font-display font-bold text-navy mb-[18px]">Caractéristiques</h4>
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 py-2.5 border-b border-g100 last:border-0">
                      <div
                        className="w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${service.color}18`, color: service.color }}
                      >
                        <CheckCircleIcon size={14} strokeWidth={2.2} />
                      </div>
                      <span className="text-g600 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              {i < services.length - 1 && <hr className="border-0 border-t border-g100 my-16" />}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-g50 py-24 px-[5%]">
        <div className="container-tp">
          <div className="text-center mb-11">
            <span className="section-tag">COMMENCER</span>
            <h2 className="section-title text-center">Comment ça marche ?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String(i)}
                className="bg-white rounded-2xl border border-g100 p-7 text-center relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="absolute top-4 right-4 font-display font-extrabold text-3xl text-g100">{i + 1}</div>
                <div className="text-teal flex justify-center mb-3 relative z-10">
                  <s.Icon size={26} />
                </div>
                <h4 className="font-display font-bold text-navy text-base mb-2">{s.title}</h4>
                <p className="text-g600 text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Une offre, une app, toute la zone UEMOA."
        desc="Nano-crédit, wallet et scoring intelligent réunis dans une seule application mobile."
        primary={{ label: 'Demander un crédit', to: '/nano-credit' }}
        secondary={{ label: 'Nous contacter →', to: '/contact' }}
      />
    </>
  )
}
