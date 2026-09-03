export const fr = {
  meta: {
    title: 'Questions fréquentes',
    description: 'Toutes les réponses sur le nano-crédit et le micro-crédit mobile TOVPAY : taux, délais, remboursement et conformité.',
  },
  hero: {
    breadcrumb: 'Accueil / FAQ',
    title: 'Questions fréquentes',
    desc: "Tout ce que vous devez savoir sur TOVPAY, le crédit mobile et l'inclusion financière.",
  },
  sidebar: {
    categoriesLabel: 'CATÉGORIES',
    otherQuestionTitle: 'Une autre question ?',
    otherQuestionDesc: 'Notre équipe répond en moins de 24h.',
    contactLink: 'Nous contacter',
  },
  faqs: [
    {
      cat: 'Crédit & Simulation',
      items: [
        { q: "Quel est le montant minimum et maximum d'un crédit ?", a: 'Le montant minimum est 1 000 FCFA et le maximum est 20 000 FCFA. Le montant accordé dépend de votre score de crédit et de votre historique de remboursement.' },
        { q: 'Combien de temps faut-il pour recevoir le crédit ?', a: "Une fois votre demande validée par le Chef d'Agence, les fonds sont versés en espèces ou sur Mobile Money en moins de 15 minutes." },
        { q: "Quels sont les taux d'intérêt appliqués ?", a: 'Cinq forfaits, chacun avec son propre taux : Express (8 % sur 1 jour), Hebdomadaire (10 % sur 7 jours), Duo Chauffeur (18 % sur 10 jours), Cycle Marchand (20 % sur 24 jours, remboursement quotidien) et Fonctionnaire (20 % sur 1 mois). Le taux et le total à rembourser sont toujours affichés avant validation, et une pénalité de retard de 2 %/jour s\'applique au-delà de l\'échéance.' },
        { q: 'Puis-je rembourser avant la date limite ?', a: 'Oui, le remboursement anticipé est possible à tout moment sans pénalité. Les intérêts seront recalculés au prorata du temps réellement utilisé.' },
        { q: 'Puis-je avoir plusieurs crédits simultanément ?', a: 'Non, un seul crédit actif à la fois. Une fois entièrement remboursé, vous pouvez en demander un nouveau immédiatement.' },
      ],
    },
    {
      cat: 'Scoring & Éligibilité',
      items: [
        { q: "Qu'est-ce que le scoring TOVPAY ?", a: "Notre moteur d'IA analyse votre comportement transactionnel, votre stabilité téléphonique et d'autres signaux pour évaluer votre capacité de remboursement - sans historique bancaire requis." },
        { q: 'Quels documents dois-je fournir ?', a: "Uniquement votre pièce d'identité valide (CNI, passeport) et votre numéro de téléphone Mobile Money. Aucun bulletin de salaire ni justificatif de domicile n'est exigé." },
        { q: 'Mon score peut-il s\'améliorer avec le temps ?', a: 'Oui, chaque remboursement réussi améliore votre score. Plus vous remboursez à temps, plus vous accédez à des montants élevés.' },
      ],
    },
    {
      cat: 'Sécurité & Conformité',
      items: [
        { q: 'TOVPAY est-elle une entreprise fiable et réglementée ?', a: "TOVPAY n'est ni une banque ni une institution de microfinance : c'est une plateforme technologique de distribution, qui connecte les emprunteurs à un établissement de crédit agréé partenaire (Orabank Bénin, partenariat en cours de finalisation). TOVPAY a adressé une notification volontaire de démarrage d'activité à la BCEAO avant tout déploiement, démarche confirmée par la Direction Nationale pour le Bénin." },
        { q: 'Mes données personnelles sont-elles protégées ?', a: "Oui. La vérification d'identité (KYC) est systématique avant toute validation de compte ou de crédit, et vos données ne sont jamais revendues à des tiers." },
        { q: 'Que se passe-t-il si je ne rembourse pas à temps ?', a: "Une pénalité de retard de 2 %/jour s'applique au-delà de l'échéance. Un retard de plus de 30 jours affecte fortement votre score, et toute fraude détectée entraîne le blocage immédiat du compte." },
      ],
    },
  ],
}

export const en: typeof fr = {
  meta: {
    title: 'Frequently asked questions',
    description: 'All the answers about TOVPAY mobile nano-credit and micro-credit: rates, timing, repayment, and compliance.',
  },
  hero: {
    breadcrumb: 'Home / FAQ',
    title: 'Frequently asked questions',
    desc: 'Everything you need to know about TOVPAY, mobile credit, and financial inclusion.',
  },
  sidebar: {
    categoriesLabel: 'CATEGORIES',
    otherQuestionTitle: 'Another question?',
    otherQuestionDesc: 'Our team responds within 24h.',
    contactLink: 'Contact us',
  },
  faqs: [
    {
      cat: 'Credit & Simulation',
      items: [
        { q: 'What is the minimum and maximum credit amount?', a: 'The minimum amount is 1,000 FCFA and the maximum is 20,000 FCFA. The amount granted depends on your credit score and repayment history.' },
        { q: 'How long does it take to receive the credit?', a: 'Once your request is validated by the Agency Manager, funds are paid out in cash or via Mobile Money in under 15 minutes.' },
        { q: 'What interest rates apply?', a: 'Five plans, each with its own rate: Express (8% over 1 day), Weekly (10% over 7 days), Driver Duo (18% over 10 days), Merchant Cycle (20% over 24 days, daily repayment), and Civil Servant (20% over 1 month). The rate and total repayment amount are always shown before validation, and a 2%/day late penalty applies past the due date.' },
        { q: 'Can I repay before the due date?', a: 'Yes, early repayment is possible at any time with no penalty. Interest will be recalculated pro rata for the time actually used.' },
        { q: 'Can I have multiple loans at the same time?', a: 'No, only one active loan at a time. Once fully repaid, you can request a new one immediately.' },
      ],
    },
    {
      cat: 'Scoring & Eligibility',
      items: [
        { q: 'What is TOVPAY scoring?', a: 'Our AI engine analyzes your transaction behavior, phone stability, and other signals to assess your repayment capacity - no bank history required.' },
        { q: 'What documents do I need to provide?', a: 'Only a valid ID document (national ID, passport) and your Mobile Money phone number. No payslip or proof of address is required.' },
        { q: 'Can my score improve over time?', a: 'Yes, every successful repayment improves your score. The more you repay on time, the higher the amounts you can access.' },
      ],
    },
    {
      cat: 'Security & Compliance',
      items: [
        { q: 'Is TOVPAY a trustworthy, regulated company?', a: 'TOVPAY is neither a bank nor a microfinance institution: it is a technology distribution platform that connects borrowers to a licensed partner credit institution (Orabank Bénin, partnership being finalized). TOVPAY sent a voluntary notification of activity to the BCEAO before any deployment, a step confirmed by the National Directorate for Benin.' },
        { q: 'Is my personal data protected?', a: 'Yes. Identity verification (KYC) is systematic before any account or credit validation, and your data is never sold to third parties.' },
        { q: "What happens if I don't repay on time?", a: 'A 2%/day late penalty applies past the due date. A delay of more than 30 days significantly affects your score, and any detected fraud results in immediate account suspension.' },
      ],
    },
  ],
}
