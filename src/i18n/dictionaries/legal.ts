import type { DocumentPageTexts } from '../../components/DocumentLayout'
import { APP_PRIVACY_URL, APP_TERMS_URL, CONTACT_EMAIL, CONTACT_EMAIL_HREF, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../../lib/site'

export const fr: DocumentPageTexts = {
  meta: {
    title: 'Mentions légales',
    description: "Mentions légales du site tovpay.website : éditeur, immatriculation, contact, hébergeur et propriété intellectuelle.",
  },
  hero: {
    breadcrumb: 'Accueil / Mentions légales',
    title: 'Mentions légales',
    desc: "Les informations sur l'éditeur et l'hébergeur du site tovpay.website.",
  },
  sections: [
    {
      title: 'Éditeur du site',
      blocks: [
        { type: 'p', text: 'Le site tovpay.website est édité par TOVPAY AFRICA / GROUPE TOV.' },
        {
          type: 'rows',
          rows: [
            { label: 'Dénomination', value: 'TOVPAY AFRICA / GROUPE TOV' },
            { label: 'RCCM (Bénin)', value: 'RB/COT/25 B 41575 (Cotonou)' },
            { label: 'IFU (Bénin)', value: '3202549038668' },
          ],
        },
        {
          type: 'p',
          text: 'GROUPE TOV, porteur, propriétaire et exploitant de la plateforme TOVPAY, est une société de droit togolais immatriculée sous le numéro TG-LFW-01-2026-B-13-00733, dont le siège est situé à Lomé, quartier Adidogomé-Lapampa (Togo). Elle est représentée par son gérant, M. Arnaud G. Toviakou.',
        },
      ],
    },
    {
      title: 'Contact',
      blocks: [
        {
          type: 'rows',
          rows: [
            { label: 'E-mail', value: CONTACT_EMAIL, href: CONTACT_EMAIL_HREF },
            { label: 'WhatsApp', value: WHATSAPP_DISPLAY, href: WHATSAPP_URL, external: true },
          ],
        },
      ],
    },
    {
      title: 'Hébergeur',
      blocks: [
        { type: 'p', text: 'Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.' },
        { type: 'links', links: [{ label: 'vercel.com', href: 'https://vercel.com', external: true }] },
      ],
    },
    {
      title: 'Nature du site',
      blocks: [
        { type: 'p', text: "Ce site présente un service d'avance sur salaire en préparation. Il ne constitue pas une offre d'avance. TOVPAY est une entreprise privée : ce site n'est pas un site de l'administration." },
      ],
    },
    {
      title: 'Propriété intellectuelle',
      blocks: [
        { type: 'p', text: 'Les textes, la marque et le logo TOVPAY appartiennent à TOVPAY. Toute reproduction sans accord écrit est interdite.' },
        { type: 'p', text: "Les photographies illustrent le service. Elles proviennent de la banque d'images Unsplash, sous licence Unsplash, et ne représentent ni des clients ni l'équipe de TOVPAY." },
      ],
    },
    {
      title: 'Données personnelles',
      blocks: [
        { type: 'p', text: "Le traitement des données collectées par ce site est décrit sur la page Confidentialité du site. L'application TOVPAY a ses propres documents." },
        {
          type: 'links',
          links: [
            { label: 'Confidentialité du site', href: '/confidentialite' },
            { label: "Conditions d'utilisation de l'application", href: APP_TERMS_URL, external: true },
            { label: "Politique de confidentialité de l'application", href: APP_PRIVACY_URL, external: true },
          ],
        },
      ],
    },
  ],
}

export const en: DocumentPageTexts = {
  meta: {
    title: 'Legal notice',
    description: 'Legal notice of the tovpay.website website: publisher, registration, contact, host and intellectual property.',
  },
  hero: {
    breadcrumb: 'Home / Legal notice',
    title: 'Legal notice',
    desc: 'Information about the publisher and the host of the tovpay.website website.',
  },
  notice: 'This translation is provided for information. The French version prevails.',
  sections: [
    {
      title: 'Website publisher',
      blocks: [
        { type: 'p', text: 'The tovpay.website website is published by TOVPAY AFRICA / GROUPE TOV.' },
        {
          type: 'rows',
          rows: [
            { label: 'Name', value: 'TOVPAY AFRICA / GROUPE TOV' },
            { label: 'RCCM (Benin)', value: 'RB/COT/25 B 41575 (Cotonou)' },
            { label: 'IFU (Benin)', value: '3202549038668' },
          ],
        },
        {
          type: 'p',
          text: 'GROUPE TOV, which carries, owns and operates the TOVPAY platform, is a company incorporated under Togolese law, registered under number TG-LFW-01-2026-B-13-00733, with its registered office in Lomé, Adidogomé-Lapampa district (Togo). It is represented by its manager, Mr Arnaud G. Toviakou.',
        },
      ],
    },
    {
      title: 'Contact',
      blocks: [
        {
          type: 'rows',
          rows: [
            { label: 'Email', value: CONTACT_EMAIL, href: CONTACT_EMAIL_HREF },
            { label: 'WhatsApp', value: WHATSAPP_DISPLAY, href: WHATSAPP_URL, external: true },
          ],
        },
      ],
    },
    {
      title: 'Host',
      blocks: [
        { type: 'p', text: 'The website is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States.' },
        { type: 'links', links: [{ label: 'vercel.com', href: 'https://vercel.com', external: true }] },
      ],
    },
    {
      title: 'Nature of the website',
      blocks: [
        { type: 'p', text: 'This website presents a salary advance service in preparation. It does not constitute an offer of an advance. TOVPAY is a private company: this website is not a government website.' },
      ],
    },
    {
      title: 'Intellectual property',
      blocks: [
        { type: 'p', text: 'The texts, the TOVPAY brand and logo belong to TOVPAY. Any reproduction without written consent is prohibited.' },
        { type: 'p', text: 'The photographs illustrate the service. They come from the Unsplash image library, under the Unsplash License, and depict neither clients nor the TOVPAY team.' },
      ],
    },
    {
      title: 'Personal data',
      blocks: [
        { type: 'p', text: 'The processing of data collected by this website is described on the Website privacy page. The TOVPAY app has its own documents.' },
        {
          type: 'links',
          links: [
            { label: 'Website privacy', href: '/confidentialite' },
            { label: 'App terms of use', href: APP_TERMS_URL, external: true },
            { label: 'App privacy policy', href: APP_PRIVACY_URL, external: true },
          ],
        },
      ],
    },
  ],
}
