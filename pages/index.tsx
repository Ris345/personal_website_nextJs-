import { useState, useEffect } from "react"
import { GradientBackground } from "../components/GradientBackground"
import { CallToAction } from "../components/CallToAction"
import { RandomQuote } from "../components/RandomQuote"
import * as style from "../styles/home.css"
import { Talks } from "../components/Talks"
import { SectionTitle } from "../components/SectionTitle"
import Image from "next/image"
import { DigitalRain, DefaultDuration } from "../components/DigitalRain"
import profilePic from "../public/images/profile.jpg"



export default function Home() {
  const [matrixVisible, toggleMatrix] = useState(false)

  useEffect(() => {
    if (!matrixVisible) return
    const timer = setTimeout(() => {
      toggleMatrix(false)
    }, DefaultDuration)
    return () => clearTimeout(timer)
  }, [matrixVisible])

  return (
    <>
      <section className={style.heroSection}>
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
      <section className={style.section} id="about">
        <div className={style.aboutContainer}>
          <div>
            <SectionTitle number="00." title="About" align="left" />
            <p>
              
            </p>
            <p>
            <strong> Software Developer </strong> proficient in React, Next.js, Node.js, Express, and JavaScript, I bring a unique blend of technical expertise and creative problem-solving skills to the table. With a background in music and education, I offer innovative solutions to complex challenges.
            </p>
            <p>
            My <strong> communication skills, adaptability, and dedication </strong> are key assets that contribute to the success of businesses I work with. I am committed to going above and beyond to solve problems, leveraging my extensive network of developers for insights and best practices. Through networking and attending industry events such as the AWS Summit, React Summit US, video tech, AI meetup and browser tech events, I continually expand my knowledge and stay updated on the latest trends and technologies.
            </p>
            <p>
            I am dedicated to producing the most viable product for your business by investing extra time and effort. My out-of-the-box thinking and creative mindset set me apart from other developers, allowing me to approach problems from new perspectives and deliver <strong> innovative solutions </strong>.
            </p>
            <p>
             My goal is to design and build robust full stack applications with <strong> AI/ML </strong>. 
            </p>
          </div>
          <div className={style.imageContainer["desktop"]}>
            <Image
              src={profilePic}
              alt="Rishav Acharya"
              fill={true}
              className={style.profileImage}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <section className={style.section} id="events">
        <div className={style.sectionInner["centerAlign"]}>
          <SectionTitle
            number="01."
            title="Events"
            align="center"
            subtitle="I am the community manager of one of the most popular AI meetups in the world, called AI Camp."
          />
          <Talks />
          <CallToAction
            text="Got an idea | Get in touch!"
            link="mailto:rishav345@gmail.com"
            type="primary_small"
            mode="link"
          />
        </div>
      </section>
      <section className={style.section} id="projects">
        <div className={style.sectionInner["leftAlign"]}>
          <SectionTitle
            number="02."
            title="Projects"
            align="left"
            subtitle="Some projects to showcase I have built and contributed to so far!"
          />
          <div>8by8 Challenge</div>
          <p>The 8by8 Challenge is a web application intended to foster civic engagement by allowing users to perform various actions such as registering to vote or signing up for election reminders in exchange for badges. Users can also share their challenge with friends via social media. When an invited user registers to vote, or takes another similar action, the inviter also receives a badge. When a user receives 8 badges within 8 days, they have completed their challenge.</p>
        </div>
    <div>Flybird</div>
    <p>Twitter API has been depreciated but this project showcases a lot of learning from the bootcamp I attended. </p>
      </section>
      <section className={style.section} id="music">
        <div className={style.sectionInner["leftAlign"]}>
          <SectionTitle
            number="03."
            title="Music"
            align="left"
            subtitle=""
          />
          <ul>
            <p>As a musician, we constantly deal with abstractions, and similarly, software engineers solve problems related to abstraction. In many ways, music and software development are closely related, despite their differences.</p>
            <h2>My Musical works:</h2>
            <li><a href="https://elijahshiffer.bandcamp.com/album/star-jelly" target="_blank" rel="noreferrer"><strong> Works00 </strong> </a></li>
            <li><a href="https://www.youtube.com/watch?v=ibXAAM9ROQ8&t=594s" target="_blank" rel="noreferrer"><strong> Works01 </strong> </a></li>
            <li><a href="https://www.youtube.com/watch?v=vFVneyG_S5o" target="_blank" rel="noreferrer"><strong> Works02 </strong></a></li>
          </ul>
        </div>
      </section>
      <section className={style.section}>
        <div className={style.sectionInner["centerAlign"]}>
          <SectionTitle
            number="04."
            title="Coffee Chat"
            align="center"
          />
          <div className={style.pillText}>
  We can chat virtually if that’s more convenient.
</div>
<div className={style.pillText}>
  Or let’s meet in person to brainstorm ideas together.
</div>
<div className={style.pillText}>
  Got a project in mind? I’d love to collaborate!
</div>

          <div className={style.pillsContainer}>
           
            <CallToAction
              text="Contact"
              link="mailto:rishav345@gmail.com"
              type="blue_big"
              style={{ marginLeft: "1.5rem" }}
              mode="link"
            />
          </div>
        </div>
      </section>
    </>
  )
}
