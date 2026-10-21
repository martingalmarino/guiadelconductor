import { SITE_NAME, SITE_URL, absoluteUrl, CONTACT_EMAIL } from './siteConfig';
import type { FaqItem } from './faqData';

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  logo: `${SITE_URL}/logo512.png`,
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Córdoba, Argentina',
  },
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'es-AR',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
});

export const webApplicationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: `${SITE_NAME} — Simulador examen teórico Córdoba`,
  url: absoluteUrl('/test'),
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'ARS',
  },
  description:
    'Simulador online del examen teórico de conducir para Córdoba, Argentina: 60 preguntas en 20 minutos con feedback inmediato.',
  inLanguage: 'es-AR',
});

export const faqPageSchema = (faqs: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const itemListSchema = (
  name: string,
  items: { name: string; path: string; description?: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.path),
    description: item.description,
  })),
});

export const articleSchema = (opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: opts.headline,
  description: opts.description,
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  datePublished: opts.datePublished,
  dateModified: opts.dateModified,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': absoluteUrl(opts.path),
  },
});

export const howToSchema = (opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: opts.name,
  description: opts.description,
  step: opts.steps.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
});
