/**
 * Writes public/rss.xml at build time so readers can follow the blog without
 * a platform in the middle. Content is the post excerpt only — the full text
 * stays on the site, where the canonical URL and analytics live.
 */
const fs = require("fs")
const path = require("path")
const { publishedPosts, escapeXml } = require("./posts")

const SITE_URL = "https://rishavacharya.dev"
const TITLE = "Rishav Acharya — Blog"
const DESCRIPTION =
  "Writing on infrastructure, observability, chaos engineering, and the AI infrastructure layer."

/** RFC 822, the date format RSS 2.0 requires. */
function rfc822(iso) {
  const [year, month, day] = iso.split("-").map(Number)
  return new Date(Date.UTC(year, (month || 1) - 1, day || 1)).toUTCString()
}

const posts = publishedPosts()
const buildDate = new Date().toUTCString()

const items = posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`
  )
  .join("\n")

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

const out = path.join(__dirname, "..", "public", "rss.xml")
fs.writeFileSync(out, xml)
console.log(`Wrote ${out} (${posts.length} items)`)
