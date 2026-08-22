/**
 * Writes public/sitemap.xml at build time.
 *
 * A hand-edited lastmod drifts out of date, and Google stops trusting the
 * signal once it disagrees with what the crawler actually sees. Deriving it
 * from the last commit keeps it honest without anyone remembering to bump it.
 */
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const SITE_URL = "https://rishavacharya.dev"

const routes = [{ path: "/", changefreq: "weekly", priority: "1.0" }]

function lastModified() {
  try {
    const iso = execSync("git log -1 --format=%cI", { encoding: "utf8" }).trim()
    if (iso) return iso.slice(0, 10)
  } catch {
    // Not a git checkout (e.g. a source tarball build) — fall back to today.
  }
  return new Date().toISOString().slice(0, 10)
}

const lastmod = lastModified()

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`

const out = path.join(__dirname, "..", "public", "sitemap.xml")
fs.writeFileSync(out, xml)
console.log(`Wrote ${out} (lastmod ${lastmod})`)
