import { DEFAULT_OG_IMAGE, SITE_NAME, absoluteUrl } from './siteConfig';
import type { PublicRoute } from './routes';

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  robots?: string;
  ogImage?: string;
}

const brand = SITE_NAME;

export const PAGE_SEO: Record<PublicRoute | '/404', PageSeo> = {
  '/': {
    path: '/',
    title: `Simulador Examen Teórico Conducir Córdoba 2026 | ${brand}`,
    description:
      'Practicá el examen teórico de conducir de Córdoba con simulacros de 60 preguntas en 20 minutos, guías de señales y feedback inmediato. Gratis y online.',
    ogType: 'website',
  },
  '/test': {
    path: '/test',
    title: `Test Online Examen Conducir Córdoba 2026 | ${brand}`,
    description:
      'Simulacro online del examen teórico de Córdoba: 60 preguntas, 20 minutos y 70% para aprobar. Empezá gratis y medí tu nivel antes del examen real.',
    ogType: 'website',
  },
  '/guia-del-buen-conductor-cordoba': {
    path: '/guia-del-buen-conductor-cordoba',
    title: `Guía del Buen Conductor de Córdoba | ${brand}`,
    description:
      'Consultá la guía del buen conductor de la Municipalidad de Córdoba: normas, consejos y buenas prácticas para circular con seguridad.',
    ogType: 'article',
  },
  '/terminos-y-condiciones': {
    path: '/terminos-y-condiciones',
    title: `Términos y Condiciones | ${brand}`,
    description: `Términos y condiciones de uso del sitio ${brand}, simulador del examen teórico de conducir en Córdoba.`,
  },
  '/politica-de-privacidad': {
    path: '/politica-de-privacidad',
    title: `Política de Privacidad | ${brand}`,
    description: `Política de privacidad de ${brand}: cómo tratamos datos personales y servicios de terceros en el sitio.`,
  },
  '/politica-de-cookies': {
    path: '/politica-de-cookies',
    title: `Política de Cookies | ${brand}`,
    description: `Información sobre el uso de cookies en ${brand}, incluyendo analítica y publicidad.`,
  },
  '/guias': {
    path: '/guias',
    title: `Guías de Tránsito y Conducción | ${brand}`,
    description:
      'Guías de señales de tránsito (preventivas, reglamentarias e informativas) y estacionamiento en Córdoba para estudiar el examen teórico.',
  },
  '/guias/senales-transito-informativas': {
    path: '/guias/senales-transito-informativas',
    title: `Señales de Tránsito Informativas en Argentina | ${brand}`,
    description:
      'Aprendé qué significan las señales informativas de tránsito en Argentina: servicios, turismo y orientación. Útil para el examen teórico.',
    ogType: 'article',
  },
  '/guias/senales-preventivas': {
    path: '/guias/senales-preventivas',
    title: `Señales de Tránsito Preventivas en Argentina | ${brand}`,
    description:
      'Guía de señales preventivas (amarillas): curvas, pendientes, cruces y peligros en la vía. Material clave para el examen teórico.',
    ogType: 'article',
  },
  '/guias/senales-reglamentarias': {
    path: '/guias/senales-reglamentarias',
    title: `Señales de Tránsito Reglamentarias en Argentina | ${brand}`,
    description:
      'Señales reglamentarias de prohibición, obligación y restricción en Argentina. Reconocelas para aprobar el examen teórico.',
    ogType: 'article',
  },
  '/guias/prohibido-estacionar-guia-por-colores-de-cordon': {
    path: '/guias/prohibido-estacionar-guia-por-colores-de-cordon',
    title: `Prohibido estacionar en Córdoba: guía de cordones | ${brand}`,
    description:
      'Conocé dónde está prohibido estacionar en Córdoba y qué significa cada color de cordón. Evitá multas y remociones con esta guía práctica.',
    ogType: 'article',
  },
  '/404': {
    path: '/404',
    title: `Página no encontrada | ${brand}`,
    description: 'La página que buscás no existe. Volvé al inicio o al simulador del examen teórico.',
    robots: 'noindex, follow',
  },
};

export const resolveCanonical = (path: string) => absoluteUrl(path);

export const defaultOgImage = DEFAULT_OG_IMAGE;
