export const SITE_URL = 'https://www.guiadelconductor.ar';
export const SITE_NAME = 'Guía del Conductor';
export const SITE_LOCALE = 'es_AR';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const CONTACT_EMAIL = 'contacto@guiadelconductor.ar';
export const INFO_EMAIL = 'info@guiadelconductor.ar';

export const absoluteUrl = (path: string): string => {
  if (!path || path === '/') return `${SITE_URL}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
};
