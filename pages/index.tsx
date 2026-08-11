import { GradientBackground } from "../components/GradientBackground"
import { CallToAction } from "../components/CallToAction"
import { RandomQuote } from "../components/RandomQuote"
import * as style from "../styles/home.css"
import { SectionTitle } from "../components/SectionTitle"
import Image from "next/image"
import profilePic from "../public/images/profile.jpg"

export default function Home() {
  return (
    <main>
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
    I'm a <strong>Backend Engineer</strong> focused on <strong>infrastructure</strong> and <strong>AI workloads</strong>, working primarily with <strong>Python</strong>, <strong>Node.js</strong>, <strong>Docker</strong>, <strong>AWS</strong>, <strong>PostgreSQL</strong>, and <strong>Supabase</strong>. I enjoy operating at the intersection of development and production—building robust APIs while ensuring systems are <strong>observable</strong>, <strong>deployable</strong>, and <strong>resilient</strong> in real-world environments.
  </p>
  <p>
    I’m skilled in setting up <strong>CI/CD pipelines</strong>, containerizing apps, automating workflows, and managing cloud infrastructure to support fast, reliable deployments.
  </p>
  <p>
    I bring value to businesses by building backend systems that are not just functional but <strong>production-ready</strong>—reducing downtime, accelerating developer velocity, and ensuring infrastructure can scale with product needs. My focus on both code quality and system reliability allows teams to ship confidently and grow sustainably.
  </p>
          </article>
          <div className={style.imageContainer["desktop"]}>
            <Image
              src={profilePic}
              alt="Rishav Acharya - Platform Engineer & DevOps Engineer specializing in AWS AI systems"
              fill={true}
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

      
      <section className={style.section} aria-label="Contact">
        <div className={style.sectionInner["centerAlign"]}>
          <SectionTitle
            number="04."
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
    </main>
  )
}
