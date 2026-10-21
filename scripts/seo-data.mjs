/** Datos SEO para prerender sin browser. Mantener alineado con src/seo/* */
export const SITE_URL = 'https://www.guiadelconductor.ar';
export const SITE_NAME = 'Guía del Conductor';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const ROUTES = [
  '/',
  '/test',
  '/examenes',
  '/guia-del-buen-conductor-cordoba',
  '/terminos-y-condiciones',
  '/politica-de-privacidad',
  '/politica-de-cookies',
  '/guias',
  '/guias/senales-transito-informativas',
  '/guias/senales-preventivas',
  '/guias/senales-reglamentarias',
  '/guias/prohibido-estacionar-guia-por-colores-de-cordon',
];

const brand = SITE_NAME;

export const PAGES = {
  '/': {
    title: `Simulador Examen Teórico Conducir Córdoba 2026 | ${brand}`,
    description:
      'Practicá el examen teórico de conducir de Córdoba con simulacros de 60 preguntas en 20 minutos, guías de señales y feedback inmediato. Gratis y online.',
    ogType: 'website',
  },
  '/test': {
    title: `Test Online Examen Conducir Córdoba 2026 | ${brand}`,
    description:
      'Simulacro online del examen teórico de Córdoba: 60 preguntas, 20 minutos y 70% para aprobar. Empezá gratis y medí tu nivel antes del examen real.',
    ogType: 'website',
  },
  '/examenes': {
    title: `Exámenes teóricos por categoría | ${brand}`,
    description:
      'Exámenes teóricos por categoría de licencia (A, B, D y E). Próximamente disponibles. Mientras tanto, practicá con el simulador general de Córdoba.',
    ogType: 'website',
  },
  '/guia-del-buen-conductor-cordoba': {
    title: `Guía del Buen Conductor de Córdoba | ${brand}`,
    description:
      'Consultá la guía del buen conductor de la Municipalidad de Córdoba: normas, consejos y buenas prácticas para circular con seguridad.',
    ogType: 'article',
  },
  '/terminos-y-condiciones': {
    title: `Términos y Condiciones | ${brand}`,
    description: `Términos y condiciones de uso del sitio ${brand}, simulador del examen teórico de conducir en Córdoba.`,
    ogType: 'website',
  },
  '/politica-de-privacidad': {
    title: `Política de Privacidad | ${brand}`,
    description: `Política de privacidad de ${brand}: cómo tratamos datos personales y servicios de terceros en el sitio.`,
    ogType: 'website',
  },
  '/politica-de-cookies': {
    title: `Política de Cookies | ${brand}`,
    description: `Información sobre el uso de cookies en ${brand}, incluyendo analítica y publicidad.`,
    ogType: 'website',
  },
  '/guias': {
    title: `Guías de Tránsito y Conducción | ${brand}`,
    description:
      'Guías de señales de tránsito (preventivas, reglamentarias e informativas) y estacionamiento en Córdoba para estudiar el examen teórico.',
    ogType: 'website',
  },
  '/guias/senales-transito-informativas': {
    title: `Señales de Tránsito Informativas en Argentina | ${brand}`,
    description:
      'Aprendé qué significan las señales informativas de tránsito en Argentina: servicios, turismo y orientación. Útil para el examen teórico.',
    ogType: 'article',
  },
  '/guias/senales-preventivas': {
    title: `Señales de Tránsito Preventivas en Argentina | ${brand}`,
    description:
      'Guía de señales preventivas (amarillas): curvas, pendientes, cruces y peligros en la vía. Material clave para el examen teórico.',
    ogType: 'article',
  },
  '/guias/senales-reglamentarias': {
    title: `Señales de Tránsito Reglamentarias en Argentina | ${brand}`,
    description:
      'Señales reglamentarias de prohibición, obligación y restricción en Argentina. Reconocelas para aprobar el examen teórico.',
    ogType: 'article',
  },
  '/guias/prohibido-estacionar-guia-por-colores-de-cordon': {
    title: `Prohibido estacionar en Córdoba: guía de cordones | ${brand}`,
    description:
      'Conocé dónde está prohibido estacionar en Córdoba y qué significa cada color de cordón. Evitá multas y remociones con esta guía práctica.',
    ogType: 'article',
  },
};

const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

const absolute = (path) =>
  path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

export function schemasFor(route) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    email: 'contacto@guiadelconductor.ar',
    logo: `${SITE_URL}/logo512.png`,
  };

  if (route === '/') {
    return [
      org,
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: 'es-AR',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: `${SITE_NAME} — Simulador examen teórico Córdoba`,
        url: absolute('/test'),
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'ARS' },
      },
      faqSchema([
        {
          q: '¿Cuántas preguntas tiene el examen teórico de conducir en Córdoba?',
          a: 'En nuestro simulador respondés 60 preguntas en 20 minutos, con un 70% de aciertos para aprobar el simulacro.',
        },
        {
          q: '¿El simulador es completamente gratis?',
          a: 'Sí. El simulador es gratuito e incluye acceso a las preguntas del temario, simulacros ilimitados y feedback inmediato.',
        },
        {
          q: '¿Para quién es Guía del Conductor?',
          a: 'Para quienes van a rendir el examen teórico de la licencia en Córdoba y quieren practicar con simulacros y guías de señales.',
        },
      ]),
    ];
  }

  if (route === '/test') {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: `${SITE_NAME} — Simulador examen teórico Córdoba`,
        url: absolute('/test'),
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'ARS' },
      },
    ];
  }

  if (route.startsWith('/guias')) {
    const crumbs = [
      { name: 'Inicio', path: '/' },
      { name: 'Guías', path: '/guias' },
    ];
    if (route !== '/guias') {
      crumbs.push({ name: PAGES[route].title.split(' | ')[0], path: route });
    }
    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: absolute(c.path),
      })),
    };

    if (route === '/guias/prohibido-estacionar-guia-por-colores-de-cordon') {
      return [
        breadcrumb,
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline:
            'Dónde está prohibido estacionar en Córdoba: guía por colores de cordón',
          description: PAGES[route].description,
          datePublished: '2026-01-15',
          dateModified: '2026-10-20',
          author: { '@type': 'Organization', name: SITE_NAME },
          publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
          mainEntityOfPage: { '@type': 'WebPage', '@id': absolute(route) },
        },
        faqSchema([
          {
            q: '¿Qué significa el cordón amarillo en Córdoba?',
            a: 'Prohíbe estacionar, pero permite detenciones breves para ascenso y descenso.',
          },
          {
            q: '¿Qué pasa si estaciono en un cordón rojo?',
            a: 'Es una infracción grave y el vehículo puede ser removido.',
          },
        ]),
      ];
    }

    return [breadcrumb];
  }

  return [org];
}
