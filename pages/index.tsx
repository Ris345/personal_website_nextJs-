import type { GetStaticProps } from "next"
import { GradientBackground } from "../components/GradientBackground"
import { CallToAction } from "../components/CallToAction"
import { RandomQuote } from "../components/RandomQuote"
import * as style from "../styles/home.css"
import * as blogStyle from "../styles/blog.css"
import { SectionTitle } from "../components/SectionTitle"
import Image from "next/image"
import Link from "next/link"
import profilePic from "../public/images/profile.jpg"
import talks from "../data/speaking"
import projects from "../data/projects"
import { certifications, badges } from "../data/credentials"
import * as card from "../styles/cards.css"
import { formatDate } from "../lib/formatDate"
import { getAllPostMeta, type PostMeta } from "../lib/posts"

/** How many of the latest posts the homepage teases. */
const HOME_POST_COUNT = 3

interface HomeProps {
  posts: PostMeta[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <section className={style.heroSection} aria-label="Hero">
        <div className={style.nameContainer}>
          <p className={style.preText}>Hello there! I'm</p>
          <h1 className={style.nameText}>Rishav Acharya</h1>
          <RandomQuote />
          <CallToAction
            text="Discover more"
            link="#about"
            type="primary_big"
            mode="link"
          />
        </div>
        <GradientBackground />
      </section>
      
      <section className={style.section} id="about" aria-label="About">
        <div className={style.aboutContainer}>
          <article>
            <SectionTitle number="00." title="About" align="left" />
  <p>
    My journey started in full-stack development, but I got hooked on <strong>infrastructure</strong> when I realized I cared more about keeping systems running than building new features. <strong>Chaos engineering</strong> principles pulled me in—I wanted to understand how to build resilient systems. That led me deep into <strong>observability</strong>: metrics, traces, APM, the whole stack.
  </p>
  <p>
    At Anote, I learned <strong>AWS</strong> best practices the hard way: keeping systems reliable while making sure the bills didn't skyrocket. I also learned how <strong>microservices</strong> kept costs down and made deployments easier.
  </p>
  <p>
    Today I'm a <strong>Software Engineer II</strong> at <strong>Tessitura Network</strong>. I'm driven to work in mission-driven spaces. But honestly, I just love what I do: managing infrastructure, helping developers ship code to production, solving the problems that keep systems alive.
  </p>
  <p>
    I'm looking to connect with founders building the <strong>infrastructure layer of AI</strong>.
  </p>
  <p>
    When I'm not debugging or closing tickets, you'll find me rock climbing, playing music, or tinkering with robotics.
  </p>
          </article>
          <div className={style.imageContainer["desktop"]}>
            <Image
              src={profilePic}
              alt="Rishav Acharya - Software Engineer specializing in infrastructure and observability"
              fill={true}
              // Without sizes, `fill` requests the widest srcset candidate (3840w)
              // for a box that is never wider than 300px.
              sizes="(max-width: 768px) 300px, 270px"
              className={style.profileImage}
              placeholder="blur"
              priority
            />
          </div>
        </div>
      </section>
      <section className={style.section} id="events" aria-label="Speaking Events">
        <article>
          <SectionTitle
            number="01."
            title="Talks 🎤"
            align="left"
            subtitle=""
          />
          <div>
            <p className={card.intro}>I share my expertise in AI and software development through speaking engagements and workshops.</p>
            <ul className={card.grid["pair"]}>
              {talks.map((talk) => (
                <li key={talk.title}>
                  <a
                    className={card.cardLink}
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={card.eyebrow}>{talk.host}</span>
                    <h3 className={card.title}>{talk.title}</h3>
                    <p className={card.body}>{talk.description}</p>
                    <span className={card.action}>{talk.action} ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className={style.section} id="projects" aria-label="Projects">
        <div className={style.sectionInner["leftAlign"]}>
          <SectionTitle
            number="02."
            title="Projects"
            align="left"
            subtitle=""
          />
          
          <ul className={card.grid["pair"]}>
            {projects.map((project) => (
              <li key={project.name}>
                <div className={card.card}>
                  <h3 className={card.title}>{project.name}</h3>
                  <p className={card.body}>{project.description}</p>
                  <ul className={card.tagRow}>
                    {project.tags.map((t) => (
                      <li className={card.tag} key={t}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={card.action}
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository ↗
                  </a>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </section>
      
      {/* <section className={style.section} id="music" aria-label="Music">
        <div className={style.sectionInner["leftAlign"]}>
          <SectionTitle
            number="03."
            title="Music"
            align="left"
            subtitle=""
          />
          <article>
            <p>As a musician, we constantly deal with abstractions, and similarly, software engineers solve problems related to abstraction. In many ways, music and software development are closely related, despite their differences.</p>
            <h3>My Musical Works:</h3>
            <ul>
              <li>
                <a href="https://elijahshiffer.bandcamp.com/album/star-jelly" target="_blank" rel="noopener noreferrer">
                  <strong>Works00</strong> - Star Jelly Album
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=ibXAAM9ROQ8&t=594s" target="_blank" rel="noopener noreferrer">
                  <strong>Works01</strong> - Live Performance
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=vFVneyG_S5o" target="_blank" rel="noopener noreferrer">
                  <strong>Works02</strong> - Studio Recording
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section> */}
      <section className={style.section} id="certifications" aria-label="Certifications and Badges">
  <div className={style.sectionInner["leftAlign"]}>
    <SectionTitle
      number="03."
      title="Certifications"
      align="left"
      subtitle=""
    />
    <div style={{ width: "100%" }}>
      <p className={card.groupLabel}>Certifications</p>
      <ul className={card.grid["pair"]}>
        {certifications.map((item) => (
          <li key={item.name}>
            <a
              className={card.cardLink}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={card.eyebrow}>{item.issuer}</span>
              <h3 className={card.title}>{item.name}</h3>
              <span className={card.action}>Verify ↗</span>
            </a>
          </li>
        ))}
      </ul>

      <p className={card.groupLabel}>Badges</p>
      <ul className={card.grid["pair"]}>
        {badges.map((item) => (
          <li key={item.name}>
            <a
              className={card.cardLink}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={card.eyebrow}>{item.issuer}</span>
              <h3 className={card.title}>{item.name}</h3>
              <span className={card.action}>Verify ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


      <section className={style.section} id="blog" aria-label="Blog">
        <div className={style.sectionInner["leftAlign"]}>
          <SectionTitle
            number="04."
            title="Blog"
            align="left"
            subtitle=""
          />
          <article style={{ width: "100%" }}>
            <p className={blogStyle.intro}>
              I write about infrastructure, AI, and the conferences that have
              left an impact on me.
            </p>
            {posts.length === 0 ? (
              <p className={blogStyle.empty}>Coming soon</p>
            ) : (
              <>
                <ul className={blogStyle.homeList}>
                  {posts.map((post) => (
                    <li className={blogStyle.homeListItem} key={post.slug}>
                      <span className={blogStyle.homeListDate}>
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        {" · "}
                        {post.readingTime} min read
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className={blogStyle.homeListTitle}
                      >
                        <strong>{post.title}</strong>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p>
                  <Link href="/blog" className={blogStyle.feedLink}>
                    Read all posts →
                  </Link>
                </p>
              </>
            )}
          </article>
        </div>
      </section>

      <section
        className={style.section}
        aria-label="Contact"
        style={{ paddingTop: 0 }}
      >
        <div className={style.sectionInner["centerAlign"]}>
          <SectionTitle
            number="05."
            title="Coffee Chat"
            align="center"
          />
          <div className={style.pillText}>
            We can chat virtually if that's more convenient.
          </div>
          <div className={style.pillText}>
            Or let's meet in person to brainstorm ideas together.
          </div>
          <div className={style.pillText}>
            Got a project in mind? I'd love to collaborate!
          </div>

          <div className={style.pillsContainer}>
            <CallToAction
              text="Contact"
              link="https://calendly.com/rishavacharya"
              type="blue_big"
              style={{ marginLeft: "1.5rem" }}
              mode="link"
              openInNewTab={true}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { posts: getAllPostMeta().slice(0, HOME_POST_COUNT) } }
}
