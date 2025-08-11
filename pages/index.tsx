import { GradientBackground } from "../components/GradientBackground"
import { CallToAction } from "../components/CallToAction"
import { RandomQuote } from "../components/RandomQuote"
import * as style from "../styles/home.css"
import { SectionTitle } from "../components/SectionTitle"
import Image from "next/image"
import profilePic from "../public/images/profile.jpg"
import by8 from "../public/images/8by8.gif";
import randompage from "../public/images/randompage.gif";
import SearchPage from "../public/images/SearchPage.gif"; 

export default function Home() {
  return (
    <main>
      <section className={style.heroSection} aria-label="Hero">
        <div className={style.nameContainer}>
          <h1 className={style.preText}>Hello there! I'm</h1>
          <h2 className={style.nameText}>Rishav A.</h2>
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
              alt="Rishav A. - Platform Engineer & DevOps Engineer specializing in AWS AI systems"
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
            <h3>8by8 Challenge</h3>
            <p>The 8by8 Challenge is a mobile application designed to promote civic engagement through social incentives. Users can take actions like registering to vote or signing up for election reminders to earn badges. They can also invite friends via social media—and when a referred user completes an action, the inviter earns a badge too. Completing 8 badges in 8 days marks the successful completion of the challenge.</p>
            <a href="https://challenge.8by8.us/" target="_blank" rel="noopener noreferrer">
              <strong>Visit 8by8 Challenge</strong>
            </a>
            <br />
            <br />
            <Image src={by8} alt="8by8 Challenge application demonstration" />
          </article>
          
          <br />
          <br />
          <br />
          
          <article>
            <h3>Flybird</h3>
            <p>Twitter API has been deprecated but this is a project of mine that I am proud to showcase. A comprehensive Twitter showcase application demonstrating advanced web development techniques.</p>  
            <a href="https://github.com/Ris345/Twitter-Showcase-App" target="_blank" rel="noopener noreferrer">
              <strong>View Repository</strong>
            </a>
            <br />
            <br />
            <Image src={SearchPage} alt="Flybird search page interface" width={500} />
            <br />
            <br />
            <Image src={randompage} alt="Flybird random page interface" width={500} />
          </article>
          
          <br />
          <br />
          <br />
          
          <article>
            <h3>MCP Excel Sheet Automator</h3>
            <p>A recent project demonstrating my technical implementation and development skills involved integrating an MCP workflow using Claude to automate data processing between Excel and Google Sheets.</p>
            <a href="https://github.com/Ris345/tinyMCP" target="_blank" rel="noopener noreferrer">
              <strong>View Repository</strong>
            </a>
            <br />
            <br />
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px', cursor: 'pointer' }}>
              <div 
                style={{
                  width: '100%',
                  height: '315px',
                  backgroundColor: '#000',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: 'url(https://img.youtube.com/vi/akop7MsIUa0/maxresdefault.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}
                onClick={() => window.open('https://www.youtube.com/watch?v=akop7MsIUa0&t=64s', '_blank')}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s ease'
                }}>
                  <div style={{
                    width: 0,
                    height: 0,
                    borderLeft: '20px solid #000',
                    borderTop: '12px solid transparent',
                    borderBottom: '12px solid transparent',
                    marginLeft: '4px'
                  }}></div>
                </div>
              </div>
            </div>
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
