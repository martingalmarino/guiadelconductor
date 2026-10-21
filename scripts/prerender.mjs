/**
 * Post-build prerender: sirve `build/`, visita cada ruta pública y guarda HTML
 * con title/meta/JSON-LD ya hidratados (Helmet).
 * Mantener ROUTES en sync con src/seo/routes.ts
 */
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = 4173;

const ROUTES = [
  '/',
  '/test',
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

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const candidates = [
    path.join(BUILD_DIR, clean),
    path.join(BUILD_DIR, clean, 'index.html'),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  return path.join(BUILD_DIR, 'index.html');
}

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const filePath = resolveFile(req.url || '/');
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': contentType(filePath) });
        res.end(data);
      });
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

function outputPathForRoute(route) {
  if (route === '/') return path.join(BUILD_DIR, 'index.html');
  const dir = path.join(BUILD_DIR, route.replace(/^\//, ''));
  return path.join(dir, 'index.html');
}

async function prerender() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error('No existe build/. Ejecutá react-scripts build primero.');
    process.exit(1);
  }

  const server = await startServer();
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const url = `http://127.0.0.1:${PORT}${route}`;
      console.log(`Prerender: ${route}`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForSelector('#root', { timeout: 30000 });
      // Dar tiempo a Helmet / React
      await new Promise((r) => setTimeout(r, 500));
      const html = await page.content();
      const out = outputPathForRoute(route);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, html, 'utf8');
      await page.close();
    }
    console.log(`Prerender OK (${ROUTES.length} rutas)`);
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
