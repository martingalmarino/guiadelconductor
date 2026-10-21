import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_LOCALE, SITE_NAME, SITE_URL } from './siteConfig';
import { PAGE_SEO, defaultOgImage, resolveCanonical } from './pages';
import type { PageSeo } from './pages';

interface SeoProps {
  path: keyof typeof PAGE_SEO | string;
  title?: string;
  description?: string;
  ogType?: 'website' | 'article';
  robots?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

const Seo: React.FC<SeoProps> = ({
  path,
  title,
  description,
  ogType,
  robots,
  ogImage,
  jsonLd,
}) => {
  const defaults: PageSeo | undefined = PAGE_SEO[path as keyof typeof PAGE_SEO];
  const finalTitle = title ?? defaults?.title ?? SITE_NAME;
  const finalDescription =
    description ??
    defaults?.description ??
    'Simulador del examen teórico de conducir para Córdoba, Argentina.';
  const finalPath = defaults?.path ?? path;
  const canonical = resolveCanonical(finalPath === '/404' ? '/' : finalPath);
  const type = ogType ?? defaults?.ogType ?? 'website';
  const image = ogImage ?? defaults?.ogImage ?? defaultOgImage;
  const robotsContent = robots ?? defaults?.robots ?? 'index, follow';
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang="es" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={finalPath === '/404' ? `${SITE_URL}/` : canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:url" content={finalPath === '/404' ? `${SITE_URL}/` : canonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalPath === '/404' ? `${SITE_URL}/` : canonical} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
