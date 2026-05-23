import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distPath = path.join(root, "dist");
const siteUrl = "https://renolix.github.io/gsv.github.io";
const routes = ["services", "about", "contact"];

async function ensureStaticRoute(routePath, html) {
  const outputDir = path.join(distPath, routePath);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, "index.html"), html, "utf8");
}

async function writeSitemap() {
  const pages = ["", ...routes];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((routePath) => {
      const normalizedPath = routePath ? `/${routePath}` : "/";
      return `  <url>\n    <loc>${siteUrl}${normalizedPath}</loc>\n  </url>`;
    })
    .join("\n")}\n</urlset>\n`;

  await fs.writeFile(path.join(distPath, "sitemap.xml"), xml, "utf8");
}

async function main() {
  const indexHtml = await fs.readFile(path.join(distPath, "index.html"), "utf8");
  await Promise.all(routes.map((routePath) => ensureStaticRoute(routePath, indexHtml)));
  await writeSitemap();
  console.log(`Generated ${routes.length} static SPA route entries.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
