import React from 'react'
import 'typeface-roboto'
// import ProjectContainer from '../components/ProjectContainer/'

import styles from './projects.module.css'
// import LinkButton from '../components/LinkButton'

import Layout from '../layout'

const Projects = () => (
  <Layout>
    <h1 className={styles.titleheadermargin}>Projects</h1>

    <section>
      <div className={styles.projectContainer}>
        <p className={styles.projectTitle}>Breadpun API</p>
        <div className={styles.projectTechContainer}>
          <p className={styles.projectTech}>Express</p>
          <p className={styles.projectTech}>Node.js</p>
        </div>
      </div>

      <div>A wholewheat API for all your bread bun kneads.</div>
      <div className={styles.projectLinkContainer}>
        <a
          className={styles.projectLink}
          href="https://github.com/sophi-li/breadpun-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        <a
          className={styles.projectLink}
          href="https://my-bao-client3.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
      </div>
    </section>

    <section>
      <div className={styles.projectContainer}>
        <p className={styles.projectTitle}>Sophia's Recipes</p>
        <div className={styles.projectTechContainer}>
          <p className={styles.projectTech}>Gatsby</p>
          <p className={styles.projectTech}>React</p>
        </div>
      </div>
      <div>Minimalistic recipe website of my tried and true recipes.</div>
      <div className={styles.projectLinkContainer}>
        <a
          className={styles.projectLink}
          href="https://github.com/sophi-li/recipes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        <a
          className={styles.projectLink}
          href="http://sophiasrecipes.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
      </div>
    </section>

    <section>
      <div className={styles.projectContainer}>
        <p className={styles.projectTitle}>Sourdough Starter Reminder</p>
        <div className={styles.projectTechContainer}>
          <p className={styles.projectTech}>Node.js</p>
          <p className={styles.projectTech}> Azure </p>
          <p className={styles.projectTech}>Twilio</p>
        </div>
      </div>
      <div>
        An app that sends automatic text message reminders with custom messages
        and cadence.
      </div>
      <div className={styles.projectLinkContainer}>
        <a
          className={styles.projectLink}
          href="https://github.com/sophi-li/sourdough-timer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        <a
          className={styles.projectLink}
          href="https://dev.to/sophia_wyl/so-you-forgot-to-feed-your-sourdough-starter-baby-1g8c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
    </section>

    <section>
      <div className={styles.projectContainer}>
        <p className={styles.projectTitle}>Chat With Earth</p>
        <div className={styles.projectTechContainer}>
          <p className={styles.projectTech}>Node.js</p>
          <p className={styles.projectTech}>Azure</p>
          <p className={styles.projectTech}>Twilio</p>
          <p className={styles.projectTech}>NASA API</p>
        </div>
      </div>
      <div>An app that let's you "chat" with Earth through text messages.</div>
      <div className={styles.projectLinkContainer}>
        <a
          className={styles.projectLink}
          href="https://github.com/sophi-li/earth-is-melting"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        <a
          className={styles.projectLink}
          href="https://dev.to/sophia_wyl/how-on-earth-do-you-use-nasa-apis-with-azure-functions-hmf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
    </section>

    <section>
      <div className={styles.projectContainer}>
        <p className={styles.projectTitle}>Eat Play Drink</p>
        <div className={styles.projectTechContainer}>
          <p className={styles.projectTech}>HTML</p>
          <p className={styles.projectTech}>CSS</p>
          <p className={styles.projectTech}>JavaScript</p>
          <p className={styles.projectTech}>Google Maps API</p>
        </div>
      </div>
      <div>
        An interactive map of the best places to eat, play, and drink in San
        Francisco.
      </div>
      <div className={styles.projectLinkContainer}>
        <a
          className={styles.projectLink}
          href="https://github.com/sophi-li/eat-play-drink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        <a
          className={styles.projectLink}
          href="https://sophi-li.github.io/eat-play-drink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
      </div>
    </section>

    <section>
      <div className={styles.projectContainer}>
        <p className={styles.projectTitle}>15Five Product Landing Page</p>
        <div className={styles.projectTechContainer}>
          <p className={styles.projectTech}>HTML</p>
          <p className={styles.projectTech}>CSS</p>
        </div>
      </div>
      <div>
        My re-creation of 15Five's product landing page, a continuous
        performance management suite.
      </div>
      <div className={styles.projectLinkContainer}>
        <a
          className={styles.projectLink}
          href="https://github.com/sophi-li/15five-clone-ish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        <a
          className={styles.projectLink}
          href="https://sophi-li.github.io/15five-clone-ish/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
        <a
          className={styles.projectLink}
          href="https://dev.to/sophia_wyl/best-practices-for-building-a-product-landing-page-491i"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
    </section>

    <section>
      <div className={styles.projectContainer}>
        <p className={styles.projectTitle}>MoTo</p>
        <div className={styles.projectTechContainer}>
          <p className={styles.projectTech}>HTML</p>
          <p className={styles.projectTech}>CSS</p>
          <p className={styles.projectTech}>JavaScript</p>
        </div>
      </div>
      <div>
        A Chrome Extension for productivity with pomodoro and task trackers.
      </div>
      <div className={styles.projectLinkContainer}>
        <a
          className={styles.projectLink}
          href="https://github.com/chingu-voyages/v13-toucans-team-03"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        <a
          className={styles.projectLink}
          href="https://moto-toucans03.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
        <a
          className={styles.projectLink}
          href="https://chrome.google.com/webstore/detail/moto/dphhdfamcpkbdkmjighbmocgpfpmnkbh?hl=en&gl=US"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrome Extension
        </a>
        <a
          className={styles.projectLink}
          href="https://dev.to/sophia_wyl/5-things-i-learned-from-coding-with-other-people-my-first-web-development-team-project-48fk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
    </section>
  </Layout>
)

export default Projects
