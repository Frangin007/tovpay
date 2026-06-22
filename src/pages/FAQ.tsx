import { useState } from 'react'
import PageHero from '../components/PageHero'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24" fill="none"
      className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQ() {
  useScrollReveal()
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      q: 'Quel est le montant minimum et maximum d\'un crédit ?',
      a: 'Le montant minimum est 1 000 FCFA et le maximum 20 000 FCFA (équivalent au Nigéria). Le montant varie selon votre score de crédit et votre historique.'
    },
    {
      q: 'Combien de temps faut-il pour recevoir le crédit ?',
      a: 'Une fois approuvé, les fonds sont décaissés dans votre portefeuille en moins de 15 minutes. L\'approbation elle-même prend environ 5-10 minutes.'
    },
    {
      q: 'Quels sont les taux d\'intérêt ?',
      a: 'Les taux varient de 10% à 25% selon la durée : 10% pour 1 semaine, 15% pour 2 semaines, 20% pour 3 semaines, 25% pour 1 mois.'
    },
    {
      q: 'Puis-je rembourser avant la date limite ?',
      a: 'Oui, vous pouvez rembourser à tout moment sans pénalité. Les intérêts seront ajustés au prorata du temps réellement utilisé.'
    },
    {
      q: 'Qu\'est-ce que le scoring TOVPAY ?',
      a: 'C\'est un moteur d\'IA propriétaire qui analyse votre profil de remboursement sans historique bancaire. Il évalue votre comportement transactionnel, votre stabilité et votre capacité de remboursement.'
    },
    {
      q: 'Est-ce que mon score peut s\'améliorer ?',
      a: 'Oui, le score s\'améliore avec chaque remboursement réussi. Plus vous rembourserez à temps, plus votre score augmentera et plus vous accéderez à des montants élevés.'
    },
    {
      q: 'Quels documents dois-je fournir ?',
      a: 'Juste votre pièce d\'identité valide (CNI, passeport) et votre numéro de téléphone. Pas de bulletin de salaire ni de justificatif de domicile requis.'
    },
    {
      q: 'TOVPAY est-elle sûre et conforme ?',
      a: 'Oui, nous sommes conformes BCEAO, adossées à Orabank (groupe bancaire panafricain), et utilisons le chiffrement de données bancaires. Conformité KYC/LCB-FT garantie.'
    },
    {
      q: 'Est-ce disponible dans mon pays ?',
      a: 'TOVPAY est actuellement en Côte d\'Ivoire, Sénégal, Bénin et Togo. Mali arrive octobre 2026, Niger Q1 2027. Consultez notre page Partenaires pour les pays actifs.'
    },
    {
      q: 'Comment puis-je télécharger l\'application ?',
      a: 'Rendez-vous sur l\'App Store (iOS) ou Google Play (Android), recherchez TOVPAY, et installez. Vous pouvez aussi scanner le QR code sur notre site.'
    },
    {
      q: 'Que se passe-t-il si je ne rembourse pas à temps ?',
      a: 'Des intérêts de retard s\'ajoutent (5% par semaine). Après 4 semaines sans remboursement, votre compte est suspendu et signalé à nos partenaires de recouvrement.'
    },
    {
      q: 'Puis-je avoir plusieurs crédits à la fois ?',
      a: 'Non, vous ne pouvez avoir qu\'un seul crédit actif à la fois. Une fois remboursé, vous pouvez demander un nouveau crédit immédiatement.'
    }
  ]

  const toggleItem = (i: number) => {
    setOpenItems(openItems.includes(i) ? openItems.filter(x => x !== i) : [...openItems, i])
  }

  const renderFaq = (item: { q: string; a: string }, i: number) => {
    const isOpen = openItems.includes(i)
    return (
      <div key={i} className="border-b border-g100">
        <button
          className="w-full flex justify-between items-center gap-4 text-left py-5 font-display font-semibold text-navy text-[15px] hover:text-teal transition-colors duration-200"
          onClick={() => toggleItem(i)}
        >
          {item.q}
          <span className="text-teal"><ChevronIcon open={isOpen} /></span>
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <p className="text-g600 text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageHero
        breadcrumb="Accueil / FAQ"
        title="Questions fréquentes"
        desc="Trouvez les réponses à vos questions sur TOVPAY"
      />

      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp max-w-[760px]">
          <h2 className="section-title text-center mb-14">Crédit & Simulation</h2>
          {faqs.slice(0, 6).map((item, i) => renderFaq(item, i))}

          <h2 className="section-title text-center my-20">Sécurité & Conformité</h2>
          {faqs.slice(6).map((item, i) => renderFaq(item, i + 6))}
        </div>
      </section>
    </>
  )
}
