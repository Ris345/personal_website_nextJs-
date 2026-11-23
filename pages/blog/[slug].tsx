import type { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { NextSeo } from "next-seo"

import * as style from "../../styles/blog.css"
import { formatDate } from "../../lib/formatDate"
import { getPost, slugs, type Post } from "../../lib/posts"

const SITE_URL = "https://rishavacharya.dev"
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  const url = `${SITE_URL}/blog/${post.slug}`
  const description =
    post.excerpt || `${post.title} — a post by Rishav Acharya.`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    datePublished: post.date,
    dateModified: post.date,
    // Points at the canonical copy when the post ran elsewhere first, so the
    // syndicated version doesn't compete with it in search.
    mainEntityOfPage: { "@type": "WebPage", "@id": post.canonicalUrl ?? url },
    url,
    image: OG_IMAGE,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      name: "Rishav Acharya",
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Person",
      name: "Rishav Acharya",
      url: `${SITE_URL}/`,
    },
  }

  return (
    <>
      <NextSeo
        title={`${post.title} | Rishav Acharya`}
        description={description}
        canonical={post.canonicalUrl ?? url}
        noindex={post.draft}
        nofollow={post.draft}
        openGraph={{
          type: "article",
          url,
          title: post.title,
          description,
          article: {
            publishedTime: post.date,
            modifiedTime: post.date,
            authors: [`${SITE_URL}/`],
            tags: post.tags,
          },
          images: [
            {
              url: OG_IMAGE,
              alt: post.title,
              width: 1200,
              height: 630,
              type: "image/jpeg",
            },
          ],
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className={style.page}>
        <Link href="/blog" className={style.backLink}>
          ← All posts
        </Link>

        <article>
          <div className={style.meta}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className={style.metaDot}>·</span>
            <span>{post.readingTime} min read</span>
            {post.draft && (
              <>
                <span className={style.metaDot}>·</span>
                <span>draft</span>
              </>
            )}
          </div>

          <h1 className={style.articleTitle}>{post.title}</h1>

          {post.tags.length > 0 && (
            <ul className={style.tagList}>
              {post.tags.map((tag) => (
                <li className={style.tag} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}

          {post.canonicalUrl && (
            <p className={style.canonicalNote}>
              Originally published at{" "}
              <a
                href={post.canonicalUrl}
                target="_blank"
                rel="noopener noreferrer canonical"
              >
                {new URL(post.canonicalUrl).hostname}
              </a>
              .
            </p>
          )}

          {/* Markdown is rendered to HTML at build time from files in this
              repo — there is no untrusted input in this string. */}
          <div
            className={style.postBody}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: slugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  BlogPostProps,
  { slug: string }
> = async ({ params }) => {
  if (!params?.slug) return { notFound: true }
  return { props: { post: await getPost(params.slug) } }
}
