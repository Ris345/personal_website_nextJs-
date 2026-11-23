/**
 * Blog posts live as markdown files in `content/blog/<slug>.md`.
 *
 * Everything here runs at build time only (getStaticProps / the sitemap and
 * RSS scripts) — `fs` is not available in the browser bundle, so never import
 * this module from component code that renders on the client.
 */
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"

export const POSTS_DIR = path.join(process.cwd(), "content", "blog")

export interface PostMeta {
  slug: string
  title: string
  /** ISO date (YYYY-MM-DD) from frontmatter. */
  date: string
  excerpt: string
  tags: string[]
  readingTime: number
  /** Set in frontmatter to keep a post out of the site until it's ready. */
  draft: boolean
  /** Original Medium/dev.to URL, when the post was published elsewhere first. */
  canonicalUrl?: string
}

export interface Post extends PostMeta {
  /** Rendered HTML of the markdown body. */
  html: string
}

const WORDS_PER_MINUTE = 200

function readingTimeOf(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

function fileNames(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs.readdirSync(POSTS_DIR).filter((name) => /\.mdx?$/.test(name))
}

export function slugs(): string[] {
  return fileNames().map((name) => name.replace(/\.mdx?$/, ""))
}

function parse(slug: string) {
  const fileName = fileNames().find(
    (name) => name.replace(/\.mdx?$/, "") === slug
  )
  if (!fileName) throw new Error(`No blog post for slug "${slug}"`)

  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8")
  const { data, content } = matter(raw)

  if (!data.title) throw new Error(`${fileName} is missing a frontmatter title`)
  if (!data.date) throw new Error(`${fileName} is missing a frontmatter date`)

  // A Date instance here means the YAML value was unquoted; normalise both
  // spellings to YYYY-MM-DD so sorting and <time> output stay consistent.
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date)

  const meta: PostMeta = {
    slug,
    title: String(data.title),
    date,
    excerpt: String(data.excerpt ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: readingTimeOf(content),
    draft: Boolean(data.draft),
    ...(data.canonicalUrl ? { canonicalUrl: String(data.canonicalUrl) } : {}),
  }

  return { meta, content }
}

/** Published posts, newest first. Drafts are excluded outside of `next dev`. */
export function getAllPostMeta(): PostMeta[] {
  const includeDrafts = process.env.NODE_ENV === "development"

  return slugs()
    .map((slug) => parse(slug).meta)
    .filter((meta) => includeDrafts || !meta.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export async function getPost(slug: string): Promise<Post> {
  const { meta, content } = parse(slug)

  const html = String(
    await remark()
      .use(remarkGfm)
      // sanitize: false keeps raw HTML in the markdown (figures, iframes) —
      // safe because every post is authored in this repo, not user-submitted.
      .use(remarkHtml, { sanitize: false })
      .process(content)
  )

  return { ...meta, html }
}
