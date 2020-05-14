import React from 'react'
import 'typeface-roboto'
import ProjectContainer from '../components/ProjectContainer/'

import styles from './index.module.css'
import LinkButton from '../components/LinkButton'

import Layout from '../layout'

const Projects = () => (
  <Layout>
    <section>
      <h2 className={styles.titleheadermargin}>Projects</h2>
      <p>
        <strong>MoTo</strong> - A Chrome Extension for productivity with
        pomodoro and task trackers.
      </p>
      <em>
        <p className="project-description">HTML, CSS, JavaScript</p>
      </em>
      <div className={styles.projectLinksDiv}>
        <LinkButton
          href="https://github.com/chingu-voyages/v13-toucans-team-03"
          target="_blank"
        >
          Source Code
        </LinkButton>
        <LinkButton href="https://moto-toucans03.netlify.com/" target="_blank">
          Live Site
        </LinkButton>
        <LinkButton
          href="https://chrome.google.com/webstore/detail/moto/dphhdfamcpkbdkmjighbmocgpfpmnkbh?hl=en&gl=US"
          target="_blank"
        >
          Chrome Extension
        </LinkButton>
        <LinkButton
          href="https://dev.to/sophia_wyl/5-things-i-learned-from-coding-with-other-people-my-first-web-development-team-project-48fk"
          target="_blank"
        >
          Blog
        </LinkButton>
      </div>

      <p>
        <strong>Breadpun API</strong> - A wholewheat API for all your bread bun
        kneads.
      </p>

      <em>
        <p className="project-description">Node.js, Express</p>
      </em>
      <div className={styles.projectLinksDiv}>
        <LinkButton
          href="https://github.com/sophi-li/breadpun-api"
          target="_blank"
        >
          Source Code
        </LinkButton>
      </div>

      <p>
        <strong>Sourdough Starter Reminder</strong> - An app that sends
        automatic text message reminders with custom messages and cadence.
      </p>

      <em>
        <p className="project-description">
          Node.js, Microsoft Azure Functions, Twilio
        </p>
      </em>
      <div className={styles.projectLinksDiv}>
        <LinkButton
          href="https://github.com/sophi-li/sourdough-timer"
          target="_blank"
        >
          Source Code
        </LinkButton>
        <LinkButton
          href="https://dev.to/sophia_wyl/so-you-forgot-to-feed-your-sourdough-starter-baby-1g8c"
          target="_blank"
        >
          Blog
        </LinkButton>
      </div>

      <p>
        <strong>Chat With Earth</strong> - An app that let's you "chat" with
        Earth through text messages.
      </p>

      <em>
        <p className="project-description">
          Node.js, Microsoft Azure Functions, Twilio, NASA API
        </p>
      </em>
      <div className={styles.projectLinksDiv}>
        <LinkButton
          href="https://github.com/sophi-li/earth-is-melting"
          target="_blank"
        >
          Source Code
        </LinkButton>
        <LinkButton
          href="https://dev.to/sophia_wyl/how-on-earth-do-you-use-nasa-apis-with-azure-functions-hmf"
          target="_blank"
        >
          Blog
        </LinkButton>
      </div>

      <p>
        <strong>Eat Play Drink</strong> - An interactive map of my curated list
        of the best places to eat, play, and drink in San Francisco.
      </p>

      <em>
        <p className="project-description">
          JavaScript, HTML, CSS, Google Maps API
        </p>
      </em>
      <div className={styles.projectLinksDiv}>
        <LinkButton
          href="https://github.com/sophi-li/eat-play-drink"
          target="_blank"
        >
          Source Code
        </LinkButton>
        <LinkButton
          href="https://sophi-li.github.io/eat-play-drink/"
          target="_blank"
        >
          Live Site
        </LinkButton>
      </div>

      <p>
        <strong>15Five Product Landing Page</strong> - My re-creation of
        15Five's product landing page, a continuous performance management
        suite.
      </p>
      <em>
        <p className="project-description">HTML, CSS, JavaScript</p>
      </em>
      <div className={styles.projectLinksDiv}>
        <LinkButton
          href="https://github.com/sophi-li/15five-clone-ish"
          target="_blank"
        >
          Source Code
        </LinkButton>
        <LinkButton
          href="https://sophi-li.github.io/15five-clone-ish/"
          target="_blank"
        >
          Live Site
        </LinkButton>
        <LinkButton
          href="https://dev.to/sophia_wyl/best-practices-for-building-a-product-landing-page-491i"
          target="_blank"
        >
          Blog
        </LinkButton>
      </div>
    </section>
  </Layout>
)

export default Projects
