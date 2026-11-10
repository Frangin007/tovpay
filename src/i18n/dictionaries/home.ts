import { CONTACT_EMAIL, NBSP } from '../../lib/site'

export const fr = {
  meta: {
    title: 'Avance sur salaire des agents publics, Bénin et Togo',
    description: 'TOVPAY prépare une avance sur salaire pour les agents publics du Bénin et du Togo : frais annoncés en FCFA avant signature, remboursement anticipé possible.',
  },
  hero: {
    imgAlt: 'Enseignante accompagnant des élèves en classe',
    titleLine1: "L'avance sur salaire",
    titleLine2: 'des agents publics.',
    desc: "TOVPAY prépare une application qui permettra aux agents publics du Bénin et du Togo de demander une avance sur leur salaire, avec des frais connus avant toute signature. Le service n'est pas encore ouvert.",
    cta: 'Comment ça marchera',
    quickStats: [
      { n: 'Bénin · Togo', label: 'pays prévus' },
      { n: 'En FCFA', label: 'frais annoncés avant signature' },
      { n: 'Sans intermédiaire', label: "tout depuis l'application" },
    ],
  },
  // Valeurs chiffrées affichées devant chaque suffixe : voir STATS_BAR_VALUES dans Home.tsx.
  statsBar: [
    { suffix: `${NBSP}%`, label: 'du montant demandé, versé sur votre compte' },
    { suffix: `${NBSP}%`, label: 'de frais proposés*, annoncés en FCFA avant signature' },
    { suffix: `${NBSP}FCFA`, label: "à payer avant le versement d'une avance" },
    { suffix: '', label: 'pénalité ou frais de retard dans les conditions actuelles' },
  ],
  statsFootnote: "* Conditions proposées, susceptibles d'évoluer avant le lancement.",
  why: {
    eyebrow: 'POURQUOI TOVPAY',
    titleLine1: 'Une avance claire,',
    titleLine2: 'pensée pour les agents publics.',
    paragraph: "L'avance sur salaire vous permettra de faire face à une dépense avant votre jour de paie. Le montant, les frais, le total à rembourser et l'échéance seront affichés avant toute signature, et une avance signée ne sera jamais modifiée.",
    imgAlt: 'Médecin souriante, stéthoscope à la main',
    imgCaption: 'Pour les agents publics · Enseignement, santé, administration',
    points: [
      { title: 'Des frais annoncés avant de signer', desc: 'Les frais et le total à rembourser seront affichés en FCFA avant toute signature. Aucune autre somme ne pourra vous être réclamée.' },
      { title: 'Ni pénalité ni frais de retard', desc: "Les conditions actuelles n'en prévoient pas. Si une difficulté survient, TOVPAY cherchera une solution avec vous." },
      { title: 'Rembourser quand vous voulez', desc: "À tout moment avant l'échéance, en une ou plusieurs fois. Rembourser plus tôt ne change pas les frais." },
      { title: 'Des documents protégés, sans intermédiaire', desc: "Votre pièce d'identité et votre fiche de paie seront conservées chiffrées. Tout se fera dans l'application, sans agent ni démarcheur." },
    ],
  },
  howItWorks: {
    eyebrow: 'COMMENT ÇA MARCHERA',
    title: 'Quatre étapes, depuis votre téléphone.',
    sub: "Le fonctionnement prévu à l'ouverture du service.",
    steps: [
      { title: 'Inscription', desc: "Vous créerez votre compte dans l'application. Votre numéro sera vérifié par un code reçu par SMS." },
      { title: 'Dossier et vérification', desc: "Pièce d'identité, fiche de paie récente, administration et matricule. L'équipe TOVPAY examinera votre dossier et vous notifiera sa décision." },
      { title: 'Offre et signature', desc: "Le montant, les frais en FCFA, le total à rembourser et l'échéance s'afficheront avant tout engagement. Vous signerez avec un code reçu par SMS." },
      { title: 'Versement', desc: "L'avance sera versée sur votre compte Mobile Money ou bancaire, à votre nom, pour le montant intégral." },
    ],
    closing: "Et ensuite : vous rembourserez au plus tard à l'échéance, par retenue sur salaire si vous l'avez autorisée et une fois sa base légale validée, ou par paiement depuis l'application, à tout moment.",
  },
  solutions: {
    eyebrow: 'CE QUE TOVPAY PRÉPARE',
    title: 'Une offre, des réponses claires.',
    mainCard: {
      imgAlt: 'Enseignante devant sa classe',
      title: 'Avance sur salaire',
      desc: 'Une avance de courte durée, à frais forfaitaires annoncés en FCFA avant signature, pour les agents publics du Bénin et du Togo.',
      link: 'En savoir plus',
    },
    miniCards: [
      { title: 'Espace partenaires', desc: 'Administrations, établissements financiers, opérateurs de paiement : le dispositif et ses principes.' },
      { title: 'Questions fréquentes', desc: 'Conditions, frais, remboursement et sécurité : le fonctionnement prévu, question par question.' },
    ],
  },
  impact: {
    eyebrow: 'SÉCURITÉ',
    titleLine1: 'Protégez-vous',
    titleLine2: 'contre les arnaques.',
    paragraph: `Le service n'est pas encore ouvert : une personne qui vous propose aujourd'hui une avance TOVPAY n'agit pas pour TOVPAY. En cas de doute, écrivez à ${CONTACT_EMAIL}.`,
    cta: 'Questions fréquentes',
    items: [
      { title: 'Aucun code demandé', desc: 'TOVPAY ne vous demandera jamais votre mot de passe ni un code reçu par SMS, ni par téléphone, ni par message, ni en personne.' },
      { title: 'Aucun intermédiaire', desc: "Personne n'est mandaté pour collecter des documents ou de l'argent au nom de TOVPAY." },
      { title: 'Rien à payer avant', desc: "Aucune somme n'est à payer avant le versement d'une avance." },
      { title: "Uniquement dans l'application", desc: "Vos documents ne seront transmis que dans l'application, jamais par e-mail, par WhatsApp ou à une personne." },
    ],
  },
  partners: {
    eyebrow: "ACCORDS EN DISCUSSION · AUCUN N'EST CONCLU À CE JOUR",
    items: [
      { name: 'Administration', type: 'Partenaire recherché' },
      { name: 'Établissement financier', type: 'Partenaire recherché' },
      { name: 'Opérateurs Mobile Money', type: 'Partenaires recherchés' },
      { name: 'Agrégateur de paiement', type: 'Partenaire recherché' },
    ],
  },
  journal: {
    badge: "Point d'étape",
    title: `Où en est TOVPAY${NBSP}?`,
    steps: [
      { title: 'La plateforme', status: 'Développée', desc: '' },
      { title: 'Les accords partenaires', status: 'En discussion', desc: "Avec des partenaires institutionnels et financiers. Aucun n'est conclu à ce jour." },
      { title: "L'ouverture du service", status: 'À venir', desc: 'Après la conclusion des accords et les validations nécessaires.' },
    ],
  },
  finalCta: {
    imgAlt: "Équipe au travail autour d'une table",
    titleLine1: 'Vous êtes agent public ?',
    titleLine2: 'Restez informé.',
    paragraph: "Laissez-nous votre e-mail : nous vous écrirons à l'ouverture du service. Cette inscription n'est pas une demande d'avance et ne vous engage à rien. Vous représentez une institution ? Découvrez l'espace partenaires.",
    cta: 'Espace partenaires',
    footnote: 'Une avance sur salaire est une somme à rembourser. Ne demandez que ce dont vous avez besoin.',
  },
}

export const en: typeof fr = {
  meta: {
    title: 'Salary advances for public servants in Benin and Togo',
    description: 'TOVPAY is preparing a salary advance for public servants in Benin and Togo: fees shown in FCFA before you sign, early repayment possible.',
  },
  hero: {
    imgAlt: 'A teacher helping pupils in class',
    titleLine1: 'Salary advances',
    titleLine2: 'for public servants.',
    desc: 'TOVPAY is preparing an app that will allow public servants in Benin and Togo to request an advance on their salary, with fees known before anything is signed. The service is not open yet.',
    cta: 'How it will work',
    quickStats: [
      { n: 'Benin · Togo', label: 'planned countries' },
      { n: 'In FCFA', label: 'fees shown before signing' },
      { n: 'No intermediary', label: 'everything in the app' },
    ],
  },
  statsBar: [
    { suffix: '%', label: 'of the amount requested, paid into your account' },
    { suffix: '%', label: 'proposed fees*, shown in FCFA before signing' },
    { suffix: ' FCFA', label: 'to pay before an advance is paid out' },
    { suffix: '', label: 'penalties or late fees under the current terms' },
  ],
  statsFootnote: '* Proposed conditions, which may change before the launch.',
  why: {
    eyebrow: 'WHY TOVPAY',
    titleLine1: 'A clear advance,',
    titleLine2: 'designed for public servants.',
    paragraph: 'The salary advance will help you meet an expense before payday. The amount, the fees, the total to repay and the due date will be shown before anything is signed, and a signed advance will never be modified.',
    imgAlt: 'Smiling doctor holding a stethoscope',
    imgCaption: 'For public servants · Education, health, administration',
    points: [
      { title: 'Fees shown before you sign', desc: 'The fees and the total to repay will be shown in FCFA before anything is signed. No other amount can be claimed from you.' },
      { title: 'No penalties or late fees', desc: 'The current terms do not provide for any. If a difficulty arises, TOVPAY will look for a solution with you.' },
      { title: 'Repay whenever you want', desc: 'At any time before the due date, in one or several payments. Repaying early does not change the fees.' },
      { title: 'Protected documents, no intermediaries', desc: 'Your ID document and payslip will be stored encrypted. Everything will be done in the app, with no agents or canvassers.' },
    ],
  },
  howItWorks: {
    eyebrow: 'HOW IT WILL WORK',
    title: 'Four steps, from your phone.',
    sub: 'How the service is expected to work when it opens.',
    steps: [
      { title: 'Sign-up', desc: 'You will create your account in the app. Your number will be verified with a code sent by SMS.' },
      { title: 'File and verification', desc: 'ID document, recent payslip, employing administration and staff number. The TOVPAY team will review your file and notify you of its decision.' },
      { title: 'Offer and signature', desc: 'The amount, the fees in FCFA, the total to repay and the due date will be shown before any commitment. You will sign with a code sent by SMS.' },
      { title: 'Payout', desc: 'The advance will be paid into your Mobile Money or bank account, in your name, for the full amount.' },
    ],
    closing: 'And then: you will repay by the due date at the latest, through payroll deduction if you have authorized it and once its legal basis has been validated, or by payment from the app, at any time.',
  },
  solutions: {
    eyebrow: 'WHAT TOVPAY IS PREPARING',
    title: 'One offer, clear answers.',
    mainCard: {
      imgAlt: 'Teacher in front of her class',
      title: 'Salary advance',
      desc: 'A short-term advance with flat fees shown in FCFA before signing, for public servants in Benin and Togo.',
      link: 'Learn more',
    },
    miniCards: [
      { title: 'Partner area', desc: 'Administrations, financial institutions, payment operators: the scheme and its principles.' },
      { title: 'Frequently asked questions', desc: 'Conditions, fees, repayment and security: how the service is expected to work, question by question.' },
    ],
  },
  impact: {
    eyebrow: 'SECURITY',
    titleLine1: 'Protect yourself',
    titleLine2: 'from scams.',
    paragraph: `The service is not open yet: anyone offering you a TOVPAY advance today is not acting for TOVPAY. If in doubt, write to ${CONTACT_EMAIL}.`,
    cta: 'Frequently asked questions',
    items: [
      { title: 'No code requested', desc: 'TOVPAY will never ask for your password or a code received by SMS, whether by phone, by message or in person.' },
      { title: 'No intermediaries', desc: 'No one is authorized to collect documents or money on behalf of TOVPAY.' },
      { title: 'Nothing to pay upfront', desc: 'Nothing is to be paid before an advance is paid out.' },
      { title: 'Only in the app', desc: 'Your documents will only be submitted in the app, never by email, by WhatsApp or to a person.' },
    ],
  },
  partners: {
    eyebrow: 'AGREEMENTS UNDER DISCUSSION · NONE CONCLUDED TO DATE',
    items: [
      { name: 'Administration', type: 'Partner sought' },
      { name: 'Financial institution', type: 'Partner sought' },
      { name: 'Mobile Money operators', type: 'Partners sought' },
      { name: 'Payment aggregator', type: 'Partner sought' },
    ],
  },
  journal: {
    badge: 'Status update',
    title: 'Where TOVPAY stands',
    steps: [
      { title: 'The platform', status: 'Developed', desc: '' },
      { title: 'Partner agreements', status: 'In talks', desc: 'With institutional and financial partners. None has been concluded to date.' },
      { title: 'Service opening', status: 'Upcoming', desc: 'Once the agreements are concluded and the necessary validations obtained.' },
    ],
  },
  finalCta: {
    imgAlt: 'Team working around a table',
    titleLine1: 'Are you a public servant?',
    titleLine2: 'Stay informed.',
    paragraph: 'Leave us your email: we will write to you when the service opens. Signing up is not an advance request and does not commit you to anything. You represent an institution? Visit the partner area.',
    cta: 'Partner area',
    footnote: 'A salary advance is money you have to repay. Only request what you need.',
  },
}
