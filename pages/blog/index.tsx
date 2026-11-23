import type { GetStaticProps } from "next"
import Link from "next/link"
import { NextSeo } from "next-seo"

import { SectionTitle } from "../../components/SectionTitle"
import * as style from "../../styles/blog.css"
import { formatDate } from "../../lib/formatDate"
import { getAllPostMeta, type PostMeta } from "../../lib/posts"

const SITE_URL = "https://rishavacharya.dev"
const TITLE = "Blog | Rishav Acharya"
const DESCRIPTION =
  "Writing on infrastructure, observability, chaos engineering, and the AI infrastructure layer by Rishav Acharya."

interface BlogIndexProps {
  posts: PostMeta[]
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <>
      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        canonical={`${SITE_URL}/blog`}
        openGraph={{
          type: "website",
          url: `${SITE_URL}/blog`,
          title: TITLE,
          description: DESCRIPTION,
        }}
      />
      <div className={style.page}>
        <SectionTitle number="04." title="Blog" align="left" />
        <p className={style.intro}>
          Notes on infrastructure, observability, and the things that keep
          production alive — written here rather than on someone else&apos;s
          platform.
        </p>

        {posts.length === 0 ? (
          <p className={style.empty}>
            Nothing published yet. First post coming soon.
          </p>
        ) : (
          <ul className={style.postList}>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className={style.postCard}>
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
                  <h3 className={style.postTitle}>{post.title}</h3>
                  {post.excerpt && (
                    <p className={style.excerpt}>{post.excerpt}</p>
                  )}
                  {post.tags.length > 0 && (
                    <ul className={style.tagList}>
                      {post.tags.map((tag) => (
                        <li className={style.tag} key={tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <a className={style.feedLink} href="/rss.xml">
          Subscribe via RSS →
        </a>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  return { props: { posts: getAllPostMeta() } }
}
