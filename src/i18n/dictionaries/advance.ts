import { APP_TERMS_URL, NBSP, PROPOSED_FEE_PERCENT } from '../../lib/site'

type RowCta = { label: string; to: string; external?: boolean }

export const fr = {
  meta: {
    title: 'Avance sur salaire : conditions, frais et remboursement',
    description: "Comment fonctionnera l'avance sur salaire au Bénin et au Togo : conditions, documents, parcours en 7 étapes, frais et remboursement. Service en préparation.",
  },
  hero: {
    breadcrumb: 'Accueil / Avance sur salaire',
    title: "L'avance sur salaire",
    desc: "Le fonctionnement prévu du service, étape par étape. Le service n'est pas encore ouvert.",
  },
  // Rangées texte + image, dans l'ordre d'affichage.
  services: [
    {
      title: 'Le principe',
      desc: "L'avance sur salaire est une somme que TOVPAY vous versera, et que vous rembourserez au plus tard à l'échéance indiquée dans votre contrat. Il n'y aura qu'une seule offre : une avance de courte durée, à frais forfaitaires.",
      features: [
        'Une seule offre, à frais forfaitaires',
        'Le montant, les frais et le total à rembourser affichés avant signature',
        'Le montant demandé versé en entier, sans retenue',
        "Un remboursement possible à tout moment avant l'échéance",
      ],
    },
    {
      title: "À qui s'adresse le service",
      desc: "Le service sera réservé aux agents publics en activité au Bénin ou au Togo. Les catégories d'agents éligibles seront précisées au lancement. TOVPAY n'est ni votre employeur ni votre administration.",
      features: [
        'Être majeur et capable de contracter',
        'Utiliser un numéro de téléphone à votre nom, dont vous êtes le seul utilisateur',
        "N'avoir qu'un seul compte TOVPAY",
        'Fournir des informations et des documents exacts, qui vous concernent',
      ],
      cta: { label: "Lire les conditions d'utilisation", to: APP_TERMS_URL, external: true } as RowCta,
    },
    {
      title: 'Les documents à prévoir',
      desc: "Vous les transmettrez uniquement dans l'application, jamais par e-mail, par WhatsApp ou à une personne. Un dossier vérifié par TOVPAY ne vaut pas attestation officielle de votre administration.",
      features: [
        "Une pièce d'identité valide",
        'Une fiche de paie récente',
        'Le nom de votre administration et votre matricule',
        'Un compte Mobile Money ou bancaire à votre nom',
      ],
      cta: { label: 'Questions fréquentes', to: '/faq' } as RowCta,
    },
  ],
  journey: {
    eyebrow: 'LE PARCOURS',
    title: "Sept étapes, de l'inscription au remboursement.",
    steps: [
      {
        title: 'Inscription',
        desc: "Vous créerez votre compte dans l'application. Votre numéro sera vérifié par un code reçu par SMS, et vous donnerez des consentements distincts : conditions d'utilisation, données personnelles, vérification auprès de votre employeur.",
      },
      {
        title: 'Dossier',
        desc: "Vous transmettrez votre pièce d'identité, une fiche de paie récente et les informations sur votre emploi : votre administration et votre matricule.",
      },
      {
        title: 'Vérification',
        desc: "L'équipe TOVPAY lira votre fiche de paie et contrôlera sa cohérence, puis un analyste examinera votre dossier. Avec votre accord, votre administration pourra le confirmer, lorsqu'un accord avec elle le prévoira. La décision vous sera notifiée avec son motif ; un dossier refusé ne pourra pas être présenté à nouveau.",
      },
      {
        title: 'Offre',
        desc: "Avant tout engagement, l'application affichera le montant, les frais en FCFA, le total à rembourser, la durée et l'échéance indicative. L'offre aura une date limite de validité, et vous pourrez l'annuler tant qu'elle n'est pas signée.",
      },
      {
        title: 'Signature',
        desc: "Vous lirez le contrat dans l'application et le signerez avec un code à usage unique reçu par SMS. Le contrat signé sera figé et téléchargeable. Si vous la choisissez, l'autorisation de retenue sur salaire est un document distinct, signé pour chaque avance.",
      },
      {
        title: 'Versement',
        desc: "L'avance sera versée sur le compte Mobile Money ou bancaire enregistré à votre nom, pour le montant intégral : aucun frais n'est retenu sur le versement.",
      },
      {
        title: 'Remboursement',
        desc: "Au plus tard à l'échéance : par retenue sur salaire, si vous l'avez autorisée et une fois sa base légale validée, ou depuis l'application, à tout moment, en une ou plusieurs fois. Un rappel vous sera envoyé la veille et le jour de l'échéance.",
      },
    ],
    closing: 'Toutes ces étapes se feront depuis votre téléphone.',
  },
  fees: {
    eyebrow: 'LES FRAIS',
    title: 'Ce que coûtera une avance.',
    sub: "L'inscription et l'application seront gratuites. Seule une avance accordée donnera lieu à des frais : des frais forfaitaires, calculés en pourcentage du montant avancé, annoncés en FCFA avant toute signature.",
    rateLabel: 'Frais proposés',
    rateValue: `${PROPOSED_FEE_PERCENT}${NBSP}%`,
    rateDesc: 'du montant avancé',
    rateNotice: "Conditions proposées, susceptibles d'évoluer avant le lancement.",
    pointsLabel: 'À savoir',
    points: [
      'Les frais sont les mêmes quel que soit le jour du remboursement : rembourser plus tôt ne les réduit pas.',
      "Aucune autre somme que celles prévues par votre contrat ne pourra vous être réclamée. Une avance signée n'est jamais modifiée.",
      "Le nombre d'avances en cours sera limité, et un plafond indique un maximum, pas un montant acquis.",
    ],
    result: {
      amountLabel: 'Montant versé',
      amountValue: 'Le montant demandé, en entier',
      rows: [
        { label: 'Frais', value: `Montant avancé × ${PROPOSED_FEE_PERCENT}${NBSP}%` },
        { label: 'Remboursement anticipé', value: 'Frais inchangés' },
        { label: 'Pénalité ou frais de retard', value: 'Aucun, dans les conditions actuelles' },
      ],
      totalLabel: 'Total à rembourser',
      totalValue: 'Montant avancé + frais',
      notes: [
        "Les conditions définitives, qui peuvent varier d'un pays à l'autre, seront affichées dans l'application avant toute demande : montant minimum et maximum, durée et pourcentage des frais.",
        'Les frais de votre opérateur de téléphonie ou de Mobile Money pour ses propres services restent régis par votre contrat avec lui.',
      ],
    },
    disclaimer: "Ceci n'est pas une offre : le service n'est pas encore ouvert.",
  },
  repayment: {
    eyebrow: 'LE REMBOURSEMENT',
    title: 'Comment vous rembourserez.',
    repayTitle: 'Deux façons de rembourser',
    repay: [
      "Par retenue sur salaire : uniquement si vous l'autorisez, avance par avance, et une fois sa base légale validée",
      "Par paiement depuis l'application : à tout moment, en une ou plusieurs fois",
      'Rembourser plus tôt est possible : les frais restent inchangés',
      'Si vous remboursez plus que le total dû, le trop-perçu vous est restitué',
    ],
    difficultyTitle: 'En cas de difficulté',
    difficulty: [
      "Si la retenue n'a pas lieu ou ne couvre pas tout le montant dû, le solde reste dû et vous le remboursez depuis l'application",
      "Tant qu'une retenue demandée à votre administration est en cours, votre avance n'est pas en retard",
      'En cas de retard, vous serez prévenu, puis relancé chaque jour, et TOVPAY pourra vous contacter pour trouver une solution',
      "Ni pénalité ni frais de retard dans les conditions actuelles. L'avance reste due et limite vos nouvelles demandes ; TOVPAY pourra exercer les recours prévus par la loi",
    ],
    closing: 'Une avance sur salaire est une somme à rembourser. Ne demandez que ce dont vous avez besoin.',
  },
  finalCta: {
    title: "Être prévenu de l'ouverture.",
    desc: "Le service ouvrira après la conclusion des accords en cours et les validations nécessaires. Laissez-nous votre e-mail : nous vous écrirons à l'ouverture.",
    cta: 'Questions fréquentes',
  },
}

export const en: typeof fr = {
  meta: {
    title: 'Salary advance: eligibility, fees and repayment',
    description: 'How the TOVPAY salary advance will work in Benin and Togo: eligibility, documents, the 7-step process, fees and repayment. Service in preparation.',
  },
  hero: {
    breadcrumb: 'Home / Salary advance',
    title: 'The salary advance',
    desc: 'How the service is expected to work, step by step. The service is not open yet.',
  },
  services: [
    {
      title: 'The principle',
      desc: 'The salary advance is an amount that TOVPAY will pay you, and that you will repay by the due date set out in your contract at the latest. There will be a single offer: a short-term advance with flat fees.',
      features: [
        'A single offer, with flat fees',
        'The amount, the fees and the total to repay shown before signing',
        'The amount requested paid in full, with nothing deducted',
        'Repayment possible at any time before the due date',
      ],
    },
    {
      title: 'Who the service is for',
      desc: 'The service will be reserved for public servants in active service in Benin or Togo. The categories of eligible public servants will be specified at launch. TOVPAY is neither your employer nor your administration.',
      features: [
        'Be of legal age and legally able to enter into a contract',
        'Use a phone number in your name, of which you are the only user',
        'Have only one TOVPAY account',
        'Provide accurate information and documents that concern you',
      ],
      cta: { label: 'Read the terms of use', to: APP_TERMS_URL, external: true },
    },
    {
      title: 'Documents to prepare',
      desc: 'You will submit them only in the app, never by email, by WhatsApp or to a person. A file verified by TOVPAY is not an official certificate from your administration.',
      features: [
        'A valid ID document',
        'A recent payslip',
        'The name of your administration and your staff number',
        'A Mobile Money or bank account in your name',
      ],
      cta: { label: 'Frequently asked questions', to: '/faq' },
    },
  ],
  journey: {
    eyebrow: 'THE PROCESS',
    title: 'Seven steps, from sign-up to repayment.',
    steps: [
      {
        title: 'Sign-up',
        desc: 'You will create your account in the app. Your number will be verified with a code sent by SMS, and you will give separate consents: terms of use, personal data, verification with your employer.',
      },
      {
        title: 'File',
        desc: 'You will submit your ID document, a recent payslip and information about your employment: your administration and your staff number.',
      },
      {
        title: 'Verification',
        desc: 'The TOVPAY team will read your payslip and check its consistency, then an analyst will review your file. With your consent, your administration may confirm it, once an agreement with it provides for this. You will be notified of the decision and its reason; a rejected file cannot be submitted again.',
      },
      {
        title: 'Offer',
        desc: 'Before any commitment, the app will show the amount, the fees in FCFA, the total to repay, the duration and the indicative due date. The offer will have an expiry date, and you will be able to cancel it as long as it is not signed.',
      },
      {
        title: 'Signature',
        desc: 'You will read the contract in the app and sign it with a one-time code sent by SMS. The signed contract will be locked and available for download. If you choose it, the payroll deduction authorization is a separate document, signed for each advance.',
      },
      {
        title: 'Payout',
        desc: 'The advance will be paid into the Mobile Money or bank account registered in your name, for the full amount: no fees are deducted from the payout.',
      },
      {
        title: 'Repayment',
        desc: 'By the due date at the latest: through payroll deduction, if you have authorized it and once its legal basis has been validated, or from the app, at any time, in one or several payments. A reminder will be sent the day before and on the due date.',
      },
    ],
    closing: 'All these steps will be done from your phone.',
  },
  fees: {
    eyebrow: 'FEES',
    title: 'What an advance will cost.',
    sub: 'Signing up and using the app will be free. Only an advance that is granted will incur fees: flat fees, calculated as a percentage of the amount advanced, shown in FCFA before anything is signed.',
    rateLabel: 'Proposed fees',
    rateValue: `${PROPOSED_FEE_PERCENT}%`,
    rateDesc: 'of the amount advanced',
    rateNotice: 'Proposed conditions, which may change before the launch.',
    pointsLabel: 'Good to know',
    points: [
      'The fees are the same whatever day you repay: repaying early does not reduce them.',
      'No amount other than those set out in your contract can be claimed from you. A signed advance is never modified.',
      'The number of advances in progress will be limited, and a ceiling indicates a maximum, not an amount you are entitled to.',
    ],
    result: {
      amountLabel: 'Amount paid out',
      amountValue: 'The amount requested, in full',
      rows: [
        { label: 'Fees', value: `Amount advanced × ${PROPOSED_FEE_PERCENT}%` },
        { label: 'Early repayment', value: 'Fees unchanged' },
        { label: 'Penalties or late fees', value: 'None, under the current terms' },
      ],
      totalLabel: 'Total to repay',
      totalValue: 'Amount advanced + fees',
      notes: [
        'The final conditions, which may vary from one country to another, will be shown in the app before any request: minimum and maximum amount, duration and fee percentage.',
        'Fees charged by your phone or Mobile Money operator for its own services remain governed by your contract with that operator.',
      ],
    },
    disclaimer: 'This is not an offer: the service is not open yet.',
  },
  repayment: {
    eyebrow: 'REPAYMENT',
    title: 'How you will repay.',
    repayTitle: 'Two ways to repay',
    repay: [
      'Through payroll deduction: only if you authorize it, advance by advance, and once its legal basis has been validated',
      'By payment from the app: at any time, in one or several payments',
      'Repaying early is possible: the fees stay the same',
      'If you repay more than the total due, the overpayment is refunded to you',
    ],
    difficultyTitle: 'If you run into difficulty',
    difficulty: [
      'If the deduction does not take place or does not cover the full amount due, the balance remains due and you repay it from the app',
      'While a deduction requested from your administration is in progress, your advance is not late',
      'If you are late, you will be informed, then reminded every day, and TOVPAY may contact you to find a solution',
      'No penalties or late fees under the current terms. The advance remains due and limits your new requests; TOVPAY may exercise the remedies provided by law',
    ],
    closing: 'A salary advance is money you have to repay. Only request what you need.',
  },
  finalCta: {
    title: 'Be told when it opens.',
    desc: 'The service will open once the agreements under discussion are concluded and the necessary validations obtained. Leave us your email: we will write to you when it opens.',
    cta: 'Frequently asked questions',
  },
}
