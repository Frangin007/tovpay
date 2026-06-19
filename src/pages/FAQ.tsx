import { useState } from 'react'

export default function FAQ() {
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

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Accueil</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">FAQ</span>
          </div>
          <h1>Questions fréquentes</h1>
          <p>Trouvez les réponses à vos questions sur TOVPAY</p>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Crédit & Simulation</h2>
          {faqs.slice(0, 6).map((item, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => toggleItem(i)}>
                {item.q}
                <span className={`faq-icon ${openItems.includes(i) ? 'open' : ''}`}>+</span>
              </button>
              {openItems.includes(i) && <div className="faq-answer open">{item.a}</div>}
            </div>
          ))}

          <h2 className="section-title" style={{ textAlign: 'center', margin: '80px 0 60px 0' }}>Sécurité & Conformité</h2>
          {faqs.slice(6).map((item, i) => (
            <div key={i + 6} className="faq-item">
              <button className="faq-question" onClick={() => toggleItem(i + 6)}>
                {item.q}
                <span className={`faq-icon ${openItems.includes(i + 6) ? 'open' : ''}`}>+</span>
              </button>
              {openItems.includes(i + 6) && <div className="faq-answer open">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}