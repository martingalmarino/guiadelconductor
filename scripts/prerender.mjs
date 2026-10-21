/**
 * Prerender SEO-friendly HTML shells sin browser (compatible con Vercel).
 * Copia build/index.html por ruta e inyecta title, meta, canonical y JSON-LD.
 * AdSense / GA del HTML base se preservan intactos.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  OG_IMAGE,
  PAGES,
  ROUTES,
  SITE_URL,
  schemasFor,
} from './seo-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.join(__dirname, '..', 'build');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function absolute(route) {
  return route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
}

function outputPath(route) {
  if (route === '/') return path.join(BUILD_DIR, 'index.html');
  return path.join(BUILD_DIR, route.replace(/^\//, ''), 'index.html');
}

function injectHead(html, route) {
  const page = PAGES[route];
  if (!page) throw new Error(`Sin datos SEO para ${route}`);

  const canonical = absolute(route);
  const ogType = page.ogType || 'website';
  const robots = page.robots || 'index, follow';
  const schemas = schemasFor(route);

  let out = html;

  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);

  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(page.description)}" />`
  );

  // Remover metas dinámicas previas / duplicados de canonical/og/twitter/robots/jsonld inyectados
  out = out.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
  out = out.replace(/<meta\s+name="robots"[^>]*>/gi, '');
  out = out.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, '');
  out = out.replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, '');
  out = out.replace(
    /<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
    ''
  );

  const headTags = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="Guía del Conductor" />`,
    `<meta property="og:locale" content="es_AR" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:url" content="${canonical}" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    ...schemas.map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    ),
  ].join('\n    ');

  out = out.replace(/<\/head>/i, `    ${headTags}\n  </head>`);
  return out;
}

function main() {
  const templatePath = path.join(BUILD_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('No existe build/index.html. Ejecutá react-scripts build primero.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  // Verificar que AdSense sigue en el template
  if (!template.includes('ca-pub-6771833588582297')) {
    console.error('ERROR: el HTML de build no contiene el script de AdSense.');
    process.exit(1);
  }

  for (const route of ROUTES) {
    const html = injectHead(template, route);
    const out = outputPath(route);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html, 'utf8');
    console.log(`Prerender SEO: ${route}`);
  }

  console.log(`Prerender OK (${ROUTES.length} rutas, sin browser)`);
}

main();
