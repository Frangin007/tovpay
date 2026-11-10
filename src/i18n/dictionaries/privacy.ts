import type { DocumentPageTexts } from '../../components/DocumentLayout'
import { APP_PRIVACY_URL, APP_TERMS_URL, CONTACT_EMAIL } from '../../lib/site'

type PrivacyDictionary = DocumentPageTexts & {
  intro: string
  updated: string
}

export const fr: PrivacyDictionary = {
  meta: {
    title: 'Confidentialité du site',
    description: 'Comment le site tovpay.website traite vos données : formulaire de contact, WhatsApp, cookie de langue, hébergement, ressources externes et vos droits.',
  },
  hero: {
    breadcrumb: 'Accueil / Confidentialité du site',
    title: 'Confidentialité du site',
    desc: 'Comment le site tovpay.website traite vos données personnelles.',
  },
  intro: "Cette page concerne uniquement le site tovpay.website. L'application TOVPAY a sa propre politique de confidentialité (voir la dernière section).",
  updated: 'Dernière mise à jour : 6 novembre 2026',
  sections: [
    {
      title: '1. Responsable du traitement',
      blocks: [
        { type: 'p', text: `TOVPAY AFRICA / GROUPE TOV, dont les coordonnées figurent dans les mentions légales. Contact : ${CONTACT_EMAIL}.` },
        { type: 'links', links: [{ label: 'Mentions légales', href: '/mentions-legales' }] },
      ],
    },
    {
      title: '2. Le formulaire de contact',
      blocks: [
        {
          type: 'list',
          items: [
            'Données collectées : le sujet, votre e-mail et votre pays ; selon le cas, votre nom, votre téléphone et votre message ; ainsi que votre consentement, avec sa date et son heure.',
            "Finalités : répondre à votre message ; si vous avez choisi « Être informé du lancement », vous écrire à l'ouverture du service.",
            'Base : votre consentement, que vous pouvez retirer à tout moment.',
            "Destinataires : l'équipe TOVPAY, et Web3Forms, le service qui nous transmet le formulaire par e-mail et agit pour notre compte. Ses serveurs peuvent être situés hors de votre pays.",
            "Durée de conservation : les messages sont conservés 12 mois après le dernier échange. La liste d'information sur le lancement est supprimée au plus tard 3 mois après l'annonce du lancement, et chaque e-mail d'information contient un lien de désinscription.",
          ],
        },
        { type: 'p', text: "N'envoyez aucune donnée sensible par le formulaire : pièce d'identité, fiche de paie, matricule, salaire, mot de passe ou code." },
      ],
    },
    {
      title: '3. WhatsApp',
      blocks: [
        { type: 'p', text: 'Si vous nous écrivez sur WhatsApp, vos échanges passent par ce service, qui les traite selon ses propres conditions, y compris hors de votre pays. Notre numéro WhatsApp est un numéro français (+33).' },
      ],
    },
    {
      title: '4. Cookie et stockage local',
      blocks: [
        {
          type: 'list',
          items: [
            "Cookie « tovpay-lang » : lors de votre première visite, notre hébergeur déduit votre pays de votre adresse IP pour choisir la langue d'affichage (français ou anglais). Le cookie ne contient que cette langue et dure 1 an.",
            'Stockage local du navigateur (« tovpay-lang ») : mémorise la langue que vous choisissez.',
            "Le site n'utilise aucun outil de mesure d'audience ni aucun traceur publicitaire.",
          ],
        },
      ],
    },
    {
      title: '5. Hébergement et ressources externes',
      blocks: [
        {
          type: 'list',
          items: [
            "Le site est hébergé par Vercel Inc. (États-Unis), qui traite des journaux techniques, dont l'adresse IP, nécessaires au fonctionnement et à la sécurité du site.",
            'Les polices de caractères sont chargées depuis Google Fonts : Google reçoit alors votre adresse IP.',
          ],
        },
      ],
    },
    {
      title: '6. Vos droits',
      blocks: [
        { type: 'p', text: `Vous pouvez accéder à vos données, les faire rectifier ou effacer, vous opposer à leur traitement et retirer votre consentement, en écrivant à ${CONTACT_EMAIL}. Nous vous répondrons dans les meilleurs délais.` },
        { type: 'p', text: "Vous pouvez aussi saisir l'autorité de protection des données de votre pays : l'APDP (Autorité de Protection des Données à caractère Personnel) au Bénin, l'IPDCP (Instance de Protection des Données à caractère Personnel) au Togo." },
      ],
    },
    {
      title: "7. Les documents de l'application",
      blocks: [
        { type: 'p', text: "L'application TOVPAY a ses propres conditions d'utilisation et sa propre politique de confidentialité." },
        {
          type: 'links',
          links: [
            { label: "Conditions d'utilisation de l'application", href: APP_TERMS_URL, external: true },
            { label: "Politique de confidentialité de l'application", href: APP_PRIVACY_URL, external: true },
          ],
        },
      ],
    },
  ],
}

export const en: PrivacyDictionary = {
  meta: {
    title: 'Website privacy',
    description: 'How the tovpay.website website processes your data: contact form, WhatsApp, language cookie, hosting, external resources and your rights.',
  },
  hero: {
    breadcrumb: 'Home / Website privacy',
    title: 'Website privacy',
    desc: 'How the tovpay.website website processes your personal data.',
  },
  notice: 'This translation is provided for information. The French version prevails.',
  intro: 'This page only covers the tovpay.website website. The TOVPAY app has its own privacy policy (see the last section).',
  updated: 'Last updated: November 6, 2026',
  sections: [
    {
      title: '1. Data controller',
      blocks: [
        { type: 'p', text: `TOVPAY AFRICA / GROUPE TOV, whose details are given in the legal notice. Contact: ${CONTACT_EMAIL}.` },
        { type: 'links', links: [{ label: 'Legal notice', href: '/mentions-legales' }] },
      ],
    },
    {
      title: '2. The contact form',
      blocks: [
        {
          type: 'list',
          items: [
            'Data collected: the subject, your email and your country; depending on the case, your name, phone number and message; and your consent, with its date and time.',
            'Purposes: replying to your message; if you chose "Get notified at launch", writing to you when the service opens.',
            'Basis: your consent, which you can withdraw at any time.',
            'Recipients: the TOVPAY team, and Web3Forms, the service that forwards the form to us by email and acts on our behalf. Its servers may be located outside your country.',
            'Retention period: messages are kept for 12 months after the last exchange. The launch information list is deleted no later than 3 months after the launch is announced, and every information email contains an unsubscribe link.',
          ],
        },
        { type: 'p', text: 'Do not send any sensitive data through the form: ID document, payslip, staff number, salary, password or code.' },
      ],
    },
    {
      title: '3. WhatsApp',
      blocks: [
        { type: 'p', text: 'If you write to us on WhatsApp, your exchanges go through that service, which processes them under its own terms, including outside your country. Our WhatsApp number is a French number (+33).' },
      ],
    },
    {
      title: '4. Cookie and local storage',
      blocks: [
        {
          type: 'list',
          items: [
            '"tovpay-lang" cookie: on your first visit, our host infers your country from your IP address to choose the display language (French or English). The cookie only contains this language and lasts 1 year.',
            'Browser local storage ("tovpay-lang"): remembers the language you choose.',
            'The website uses no audience measurement tool and no advertising tracker.',
          ],
        },
      ],
    },
    {
      title: '5. Hosting and external resources',
      blocks: [
        {
          type: 'list',
          items: [
            'The website is hosted by Vercel Inc. (United States), which processes technical logs, including IP addresses, needed for the website to work and stay secure.',
            'Fonts are loaded from Google Fonts: Google then receives your IP address.',
          ],
        },
      ],
    },
    {
      title: '6. Your rights',
      blocks: [
        { type: 'p', text: `You can access your data, have it corrected or erased, object to its processing and withdraw your consent, by writing to ${CONTACT_EMAIL}. We will reply as soon as possible.` },
        { type: 'p', text: 'You can also lodge a complaint with the data protection authority of your country: the APDP (Autorité de Protection des Données à caractère Personnel) in Benin, the IPDCP (Instance de Protection des Données à caractère Personnel) in Togo.' },
      ],
    },
    {
      title: '7. App documents',
      blocks: [
        { type: 'p', text: 'The TOVPAY app has its own terms of use and its own privacy policy.' },
        {
          type: 'links',
          links: [
            { label: 'App terms of use', href: APP_TERMS_URL, external: true },
            { label: 'App privacy policy', href: APP_PRIVACY_URL, external: true },
          ],
        },
      ],
    },
  ],
}
