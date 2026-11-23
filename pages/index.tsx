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
            <p>I share my expertise in AI and software development through speaking engagements and workshops.</p>
            <ul>
              <li>
                <a href="https://youtu.be/m52p3ERt2Io?t=646" target="_blank" rel="noopener noreferrer">
                  <strong>AI Agent SDK Anote</strong> - Technical deep dive into AI agent development
                </a>
              </li>
              <li>
                <a href="https://www.aicamp.ai/event/eventdetails/W2025010100" target="_blank" rel="noopener noreferrer">
                  <strong>Agentic AI 5 day challenge</strong> - Hands-on workshop on building AI agents
                </a>
              </li>
                <li>
                <a href="https://www.youtube.com/watch?v=kb2X3jGHz3I" target="_blank" rel="noopener noreferrer">
                  <strong>Infrastructure, Intelligence, and Developer Velocity</strong> speeding up dev teams
                </a>
              </li>
                 <li>
                <a href="https://www.youtube.com/watch?v=7OB51V_PIIo&t=560s" target="_blank" rel="noopener noreferrer">
                  <strong>Pale Blue Dot Launch</strong> Autonomous Intelligence Product Release 
                </a>
              </li>
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
          
          <article>
            <h3>LifeOS — AI Productivity Agent</h3>
            <p>An intelligent desktop companion that helps you stay focused, break down goals, and maintain a healthy flow state. Features a Goal Strategy Engine that turns large goals into actionable weekly plans, an AI Morning Briefing that generates personalized daily plans, and a Flow State Guard that detects distractions and nudges you back to focus—backed by real-time usage analytics.</p>
            <p>Built with a Tauri (Rust) desktop shell, React/TypeScript/TailwindCSS frontend, and a Python FastAPI backend with OpenAI GPT-4o for the AI layer.</p>
            <a href="https://github.com/Ris345/LifeOS-Productivity-AI-Agent" target="_blank" rel="noopener noreferrer">
              <strong>View Repository</strong>
            </a>
          </article>

          <br />
          <br />
          <br />

          <article>
            <h3>Post Automator</h3>
            <p>A serverless automation that posts to LinkedIn every Sunday, generating the content with OpenAI's GPT-4o-mini and publishing it unattended on a schedule.</p>
            <p>Runs as a containerized Python 3.12 Lambda triggered by EventBridge Scheduler, built and pushed via ECR, with all infrastructure defined in Terraform.</p>
            <a href="https://github.com/Ris345/post-automator" target="_blank" rel="noopener noreferrer">
              <strong>View Repository</strong>
            </a>
          </article>

          <br />
          <br />
          <br />

          <article>
            <h3>Grandma's Pill Buddy</h3>
            <p>An AI voice agent that calls elderly patients daily to check medication adherence and wellbeing, built for the ABI Hackathon. Claude drives the conversation, ElevenLabs handles voice synthesis, and Twilio places the call and texts a caregiver if a dose was missed. A judge agent evaluates every call afterward and feeds the learnings into the next conversation's prompt, making the agent self-improving over time.</p>
            <p>Three FastAPI services (voice agent, backend, judge agent) running over Docker Compose, with Supabase for patient data and call logs.</p>
            <a href="https://github.com/Ris345/voice-hack" target="_blank" rel="noopener noreferrer">
              <strong>View Repository</strong>
            </a>
          </article>
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
    <article>
      <h3>Certifications</h3>
      <ul>
        <li>
          <a 
            href="https://www.credly.com/badges/36cf2c57-0ef3-4402-9911-3d2472023e20" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <strong>Datadog Certified: APM & Distributed Tracing Fundamentals</strong>
          </a>
        </li>
      </ul>
      <h3>Badges</h3>
      <ul>
        <li>
          <a 
            href="https://www.credly.com/badges/d90a1f72-47b1-4068-9103-772e2732bb37/public_url" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <strong>AWS Cloud Quest: Solutions Architect</strong>
          </a>
        </li>
          <li>
          <a 
            href="https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-cloud-practitioner" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <strong>AWS Cloud Quest: Cloud Practitioner</strong>
          </a>
        </li>
      </ul>
    </article>
  </div>
</section>


      <section
        className={style.section}
        id="blog"
        aria-label="Blog"
        style={{ paddingBottom: 0 }}
      >
        <div className={style.sectionInner["leftAlign"]}>
          <SectionTitle
            number="04."
            title="Blog"
            align="left"
            subtitle=""
          />
          <article style={{ width: "100%" }}>
            <p>
              I write about infrastructure, observability, and what it actually
              takes to keep systems running — published here, not on Medium.
            </p>
            {posts.length === 0 ? (
              <p className={blogStyle.empty}>Coming soon.</p>
            ) : (
              <ul className={blogStyle.homeList}>
                {posts.map((post) => (
                  <li className={blogStyle.homeListItem} key={post.slug}>
                    <span className={blogStyle.homeListDate}>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
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
            )}
            <p>
              <Link href="/blog" className={blogStyle.feedLink}>
                Read all posts →
              </Link>
            </p>
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
