/** Rutas públicas indexables (fuente única para sitemap + prerender). */
export const PUBLIC_ROUTES = [
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
] as const;

export type PublicRoute = (typeof PUBLIC_ROUTES)[number];
