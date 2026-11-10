import { APP_PRIVACY_URL, CONTACT_EMAIL, NBSP, PROPOSED_FEE_PERCENT } from '../../lib/site'

// Les réponses peuvent contenir plusieurs paragraphes, séparés par une ligne vide (\n\n).
type FaqLink = { label: string; to: string; external?: boolean }
export type FaqEntry = { q: string; a: string; link?: FaqLink }
type FaqCategory = { cat: string; items: FaqEntry[] }

type FaqDictionary = {
  meta: { title: string; description: string }
  hero: { breadcrumb: string; title: string; desc: string }
  sidebar: { categoriesLabel: string; otherQuestionTitle: string; otherQuestionDesc: string; contactLink: string }
  faqs: FaqCategory[]
}

export const fr: FaqDictionary = {
  meta: {
    title: "Questions fréquentes sur l'avance sur salaire",
    description: "Réponses sur l'avance sur salaire TOVPAY : disponibilité, conditions, documents, frais, remboursement, sécurité des données et ancien service.",
  },
  hero: {
    breadcrumb: 'Accueil / FAQ',
    title: 'Questions fréquentes',
    desc: "Le fonctionnement prévu de l'avance sur salaire TOVPAY. Le service n'est pas encore ouvert.",
  },
  sidebar: {
    categoriesLabel: 'CATÉGORIES',
    otherQuestionTitle: 'Une autre question ?',
    otherQuestionDesc: 'Écrivez-nous : nous vous répondrons dans les meilleurs délais.',
    contactLink: 'Nous contacter',
  },
  faqs: [
    {
      cat: "L'avance sur salaire",
      items: [
        {
          q: "Qu'est-ce que l'avance sur salaire TOVPAY ?",
          a: "C'est un service en préparation. Il permettra aux agents publics du Bénin et du Togo de recevoir une avance sur leur salaire depuis une application mobile, puis de la rembourser au plus tard à l'échéance. Il n'y aura qu'une seule offre : une avance de courte durée, à frais forfaitaires, annoncés en FCFA avant toute signature.",
        },
        {
          q: 'Le service est-il déjà disponible ?',
          a: "Non. La plateforme est développée, mais le service n'est pas encore ouvert. Il ouvrira après la conclusion des accords en cours avec des partenaires institutionnels et financiers, et après les validations nécessaires. Aucune date n'est fixée. D'ici là, personne ne peut vous proposer une avance TOVPAY.",
        },
        {
          q: 'Qui pourra en bénéficier ?',
          a: "Les agents publics en activité au Bénin ou au Togo, majeurs, qui utilisent un numéro de téléphone à leur nom et n'ont qu'un seul compte TOVPAY. Les catégories d'agents éligibles seront précisées au lancement.",
        },
        {
          q: 'Combien pourrai-je demander, et pour combien de temps ?',
          a: "Le montant minimum et maximum et la durée de l'avance seront affichés dans l'application avant toute demande. Ils pourront varier d'un pays à l'autre. Le nombre d'avances en cours sera limité, et un plafond indique un maximum, pas un montant acquis.",
        },
        {
          q: 'Combien coûtera une avance ?',
          a: `L'inscription et l'application seront gratuites. Une avance accordée donnera lieu à des frais forfaitaires, calculés en pourcentage du montant avancé. Les frais proposés sont de ${PROPOSED_FEE_PERCENT}${NBSP}% du montant avancé : ce sont des conditions proposées, susceptibles d'évoluer avant le lancement.\n\nAvant de signer, vous verrez le montant que vous recevrez, les frais en FCFA, le total à rembourser et la date d'échéance indicative. Les frais seront les mêmes quel que soit le jour du remboursement. Aucune autre somme ne pourra vous être réclamée.`,
        },
      ],
    },
    {
      cat: 'Dossier et vérification',
      items: [
        {
          q: 'Quels documents faudra-t-il fournir ?',
          a: "Une pièce d'identité valide, une fiche de paie récente et les informations sur votre emploi : votre administration et votre matricule. Il vous faudra aussi un compte Mobile Money ou bancaire à votre nom pour recevoir l'avance. Ces documents seront transmis uniquement dans l'application.",
        },
        {
          q: "Comment ma qualité d'agent public sera-t-elle vérifiée ?",
          a: "L'équipe TOVPAY lira votre fiche de paie et vérifiera sa cohérence avec vos informations, puis un analyste examinera votre dossier. Si vous l'acceptez à l'inscription, votre qualité d'agent public pourra aussi être confirmée auprès de votre administration, lorsqu'un accord avec elle le prévoira. Un dossier vérifié par TOVPAY ne vaut pas attestation officielle de votre administration.",
        },
        {
          q: 'Que se passera-t-il si mon dossier est refusé ?',
          a: `La décision vous sera notifiée avec son motif. Un dossier refusé ne pourra pas être présenté à nouveau. Si vous pensez qu'il s'agit d'une erreur, vous pourrez écrire à ${CONTACT_EMAIL}.`,
        },
      ],
    },
    {
      cat: 'Remboursement',
      items: [
        {
          q: 'Comment rembourser ?',
          a: "Au plus tard à l'échéance, de deux façons : par retenue sur salaire, si vous l'avez autorisée pour cette avance et une fois sa base légale validée ; ou par paiement depuis l'application, à tout moment, en une ou plusieurs fois. Vous recevrez un rappel la veille et le jour de l'échéance.",
        },
        {
          q: 'Puis-je rembourser plus tôt ?',
          a: "Oui, à tout moment avant l'échéance. Les frais sont forfaitaires : rembourser plus tôt ne les réduit pas. Si vous remboursez plus que le total dû, le trop-perçu vous sera restitué.",
        },
        {
          q: "Que se passe-t-il si la retenue sur salaire n'a pas lieu ?",
          a: "Si la retenue n'a pas lieu ou ne couvre pas tout le montant dû, par exemple en cas de suspension de votre salaire, le solde restera dû et vous le rembourserez vous-même depuis l'application. Tant qu'une retenue demandée à votre administration est en cours, votre avance n'est pas considérée en retard.",
        },
        {
          q: 'Que se passe-t-il en cas de retard ?',
          a: "Si le total n'est pas remboursé à l'échéance, l'avance passera en retard. Vous en serez informé, puis vous recevrez un rappel chaque jour jusqu'au remboursement complet. TOVPAY pourra aussi vous contacter pour trouver une solution avec vous. Les conditions actuelles ne prévoient ni pénalité ni frais de retard. Une avance en retard reste due et limite vos nouvelles demandes ; TOVPAY pourra exercer les recours prévus par la loi.",
        },
      ],
    },
    {
      cat: 'Sécurité et confiance',
      items: [
        {
          q: 'Mes données seront-elles protégées ?',
          a: `Vos documents (pièce d'identité, fiche de paie) seront conservés chiffrés. Vos données ne seront ni vendues ni louées. Elles ne seront communiquées qu'aux destinataires prévus par la politique de confidentialité, et seulement dans la mesure nécessaire : notamment votre administration (vérification et, si vous l'avez autorisée, retenue), les prestataires de paiement et techniques, et les autorités quand la loi l'impose.\n\nVous pourrez exercer vos droits en écrivant à ${CONTACT_EMAIL}, et saisir l'autorité de protection des données de votre pays : l'APDP au Bénin, l'IPDCP au Togo.`,
          link: { label: "Politique de confidentialité de l'application", to: APP_PRIVACY_URL, external: true },
        },
        {
          q: 'TOVPAY peut-il me demander un code ou de l\'argent ?',
          a: `Non. TOVPAY ne vous demandera jamais votre mot de passe ni un code reçu par SMS, ni par téléphone, ni par message, ni en personne. Le code reçu pour signer un contrat vaut signature : le communiquer, c'est permettre à quelqu'un de signer à votre place.\n\nPour l'avance sur salaire, aucun intermédiaire n'intervient : personne n'est mandaté pour collecter des documents ou de l'argent au nom de TOVPAY, et aucune somme n'est à payer avant le versement d'une avance. En cas de doute, écrivez à ${CONTACT_EMAIL}.`,
        },
        {
          q: "TOVPAY est-il un service de l'État ?",
          a: "Non. TOVPAY est une entreprise privée, filiale de GROUPE TOV. Ce n'est ni votre employeur ni votre administration, et ce site n'est pas un site officiel.",
        },
        {
          q: 'TOVPAY est-il réglementé ?',
          a: "TOVPAY construit son activité dans le respect du cadre réglementaire applicable. Le service d'avance sur salaire n'ouvrira qu'après les validations nécessaires. TOVPAY n'est pas une banque.",
        },
      ],
    },
    {
      cat: 'Ancien service',
      items: [
        {
          q: "J'utilisais l'ancien service TOVPAY, comme client ou comme Chef d'Agence : que devient mon compte ?",
          a: `Si vous étiez client : votre compte reste ouvert. Vous pouvez vous connecter à l'application pour consulter vos crédits et votre historique, mais vous ne pouvez plus faire de nouvelle demande. Les crédits déjà accordés restent régis par les documents signés lors de leur octroi, jusqu'à leur remboursement complet.\n\nPlus aucun chef d'agence ne collecte de remboursement. Pour rembourser un crédit en cours, ou si vous n'avez plus accès à l'application, écrivez à ${CONTACT_EMAIL}.\n\nSi vous étiez Chef d'Agence : votre compte est fermé et vous n'avez plus accès à l'application. Vos données sont conservées. Pour toute question sur votre situation, écrivez à ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
}

export const en: FaqDictionary = {
  meta: {
    title: 'Frequently asked questions about the salary advance',
    description: 'Answers about the TOVPAY salary advance: availability, eligibility, documents, fees, repayment, data security and the former service.',
  },
  hero: {
    breadcrumb: 'Home / FAQ',
    title: 'Frequently asked questions',
    desc: 'How the TOVPAY salary advance is expected to work. The service is not open yet.',
  },
  sidebar: {
    categoriesLabel: 'CATEGORIES',
    otherQuestionTitle: 'Another question?',
    otherQuestionDesc: 'Write to us: we will reply as soon as possible.',
    contactLink: 'Contact us',
  },
  faqs: [
    {
      cat: 'The salary advance',
      items: [
        {
          q: 'What is the TOVPAY salary advance?',
          a: 'It is a service in preparation. It will allow public servants in Benin and Togo to receive an advance on their salary from a mobile app, then repay it by the due date at the latest. There will be a single offer: a short-term advance with flat fees, shown in FCFA before anything is signed.',
        },
        {
          q: 'Is the service already available?',
          a: 'No. The platform has been developed, but the service is not open yet. It will open once the agreements under discussion with institutional and financial partners are concluded, and after the necessary validations. No date has been set. Until then, no one can offer you a TOVPAY advance.',
        },
        {
          q: 'Who will be eligible?',
          a: 'Public servants in active service in Benin or Togo, of legal age, who use a phone number in their own name and have only one TOVPAY account. The categories of eligible public servants will be specified at launch.',
        },
        {
          q: 'How much will I be able to request, and for how long?',
          a: 'The minimum and maximum amount and the duration of the advance will be shown in the app before any request. They may vary from one country to another. The number of advances in progress will be limited, and a ceiling indicates a maximum, not an amount you are entitled to.',
        },
        {
          q: 'How much will an advance cost?',
          a: `Signing up and using the app will be free. An advance that is granted will incur flat fees, calculated as a percentage of the amount advanced. The proposed fees are ${PROPOSED_FEE_PERCENT}% of the amount advanced: these are proposed conditions, which may change before the launch.\n\nBefore you sign, you will see the amount you will receive, the fees in FCFA, the total to repay and the indicative due date. The fees will be the same whatever day you repay. No other amount can be claimed from you.`,
        },
      ],
    },
    {
      cat: 'File and verification',
      items: [
        {
          q: 'What documents will I need to provide?',
          a: 'A valid ID document, a recent payslip and information about your employment: your administration and your staff number. You will also need a Mobile Money or bank account in your name to receive the advance. These documents will be submitted only in the app.',
        },
        {
          q: 'How will my public servant status be verified?',
          a: 'The TOVPAY team will read your payslip and check that it is consistent with your information, then an analyst will review your file. If you agree to it when signing up, your public servant status may also be confirmed with your administration, once an agreement with it provides for this. A file verified by TOVPAY is not an official certificate from your administration.',
        },
        {
          q: 'What will happen if my file is rejected?',
          a: `You will be notified of the decision and its reason. A rejected file cannot be submitted again. If you think there has been a mistake, you will be able to write to ${CONTACT_EMAIL}.`,
        },
      ],
    },
    {
      cat: 'Repayment',
      items: [
        {
          q: 'How do I repay?',
          a: 'By the due date at the latest, in two ways: through payroll deduction, if you have authorized it for this advance and once its legal basis has been validated; or by payment from the app, at any time, in one or several payments. You will receive a reminder the day before and on the due date.',
        },
        {
          q: 'Can I repay early?',
          a: 'Yes, at any time before the due date. The fees are flat: repaying early does not reduce them. If you repay more than the total due, the overpayment will be refunded to you.',
        },
        {
          q: 'What happens if the payroll deduction does not take place?',
          a: 'If the deduction does not take place or does not cover the full amount due, for example if your salary is suspended, the balance will remain due and you will repay it yourself from the app. While a deduction requested from your administration is in progress, your advance is not considered late.',
        },
        {
          q: 'What happens if I am late?',
          a: 'If the total is not repaid by the due date, the advance will become late. You will be informed, then receive a reminder every day until it is fully repaid. TOVPAY may also contact you to find a solution with you. The current terms provide for no penalties and no late fees. A late advance remains due and limits your new requests; TOVPAY may exercise the remedies provided by law.',
        },
      ],
    },
    {
      cat: 'Security and trust',
      items: [
        {
          q: 'Will my data be protected?',
          a: `Your documents (ID document, payslip) will be stored encrypted. Your data will be neither sold nor rented. It will only be shared with the recipients set out in the privacy policy, and only to the extent necessary: in particular your administration (verification and, if you have authorized it, deduction), payment and technical providers, and the authorities when the law requires it.\n\nYou will be able to exercise your rights by writing to ${CONTACT_EMAIL}, and to lodge a complaint with the data protection authority of your country: the APDP in Benin, the IPDCP in Togo.`,
          link: { label: 'App privacy policy', to: APP_PRIVACY_URL, external: true },
        },
        {
          q: 'Can TOVPAY ask me for a code or for money?',
          a: `No. TOVPAY will never ask for your password or a code received by SMS, whether by phone, by message or in person. The code you receive to sign a contract is your signature: sharing it allows someone to sign in your place.\n\nFor the salary advance, no intermediary is involved: no one is authorized to collect documents or money on behalf of TOVPAY, and nothing is to be paid before an advance is paid out. If in doubt, write to ${CONTACT_EMAIL}.`,
        },
        {
          q: 'Is TOVPAY a government service?',
          a: 'No. TOVPAY is a private company, a subsidiary of GROUPE TOV. It is neither your employer nor your administration, and this website is not an official website.',
        },
        {
          q: 'Is TOVPAY regulated?',
          a: 'TOVPAY is building its activity in compliance with the applicable regulatory framework. The salary advance service will only open after the necessary validations. TOVPAY is not a bank.',
        },
      ],
    },
    {
      cat: 'Former service',
      items: [
        {
          q: 'I used the former TOVPAY service, as a client or as an Agency Manager: what happens to my account?',
          a: `If you were a client: your account remains open. You can log in to the app to view your loans and your history, but you can no longer make a new request. Loans already granted remain governed by the documents signed when they were granted, until they are fully repaid.\n\nAgency managers no longer collect any repayments. To repay an outstanding loan, or if you no longer have access to the app, write to ${CONTACT_EMAIL}.\n\nIf you were an Agency Manager: your account is closed and you no longer have access to the app. Your data is retained. For any question about your situation, write to ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
}
