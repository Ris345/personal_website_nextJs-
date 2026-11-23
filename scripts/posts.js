/**
 * Build-script view of the blog posts.
 *
 * The app reads posts through `lib/posts.ts`, but the sitemap and RSS scripts
 * run as plain Node before the TypeScript build exists, so they parse the
 * frontmatter themselves. Keep the frontmatter field names here in sync with
 * `PostMeta` in lib/posts.ts.
 */
const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")

const POSTS_DIR = path.join(__dirname, "..", "content", "blog")

/** Published posts, newest first. Drafts are always excluded. */
function publishedPosts() {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => /\.mdx?$/.test(name))
    .map((name) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, name), "utf8")
      const { data, content } = matter(raw)
      const date =
        data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : String(data.date || "")

      return {
        slug: name.replace(/\.mdx?$/, ""),
        title: String(data.title || ""),
        date,
        excerpt: String(data.excerpt || ""),
        draft: Boolean(data.draft),
        canonicalUrl: data.canonicalUrl ? String(data.canonicalUrl) : null,
        body: content,
      }
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

/** Minimal XML text escaping for values interpolated into feeds/sitemaps. */
function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

module.exports = { publishedPosts, escapeXml }
