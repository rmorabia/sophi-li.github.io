import React from 'react'
import 'typeface-roboto'

import styles from './projects.module.css'

import Layout from '../layout'

const Projects = () => (
  <Layout>
    <h1 className={styles.titleheadermargin}>Projects</h1>

    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.projectImage}
          src="bread-puns-api.png"
          alt="screenshot of bread puns API project website"
        />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectContainer}>
          <p className={styles.projectTitle}>Bread Puns API</p>
          <div className={styles.projectTechContainer}>
            <p className={`${styles.projectTech} ${styles.express}`}>Express</p>
            <p className={`${styles.projectTech} ${styles.node}`}>Node.js</p>
          </div>
        </div>

        <div className={styles.projectDescription}>
          An API for all your bread pun kneads.
        </div>
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
      </div>
    </section>

    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.projectImage}
          src="recipe-scraper.png"
          alt="screenshot of recipe scraper project npm site"
        />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectContainer}>
          <p className={styles.projectTitle}>Recipe Web Scraper</p>
          <div className={styles.projectTechContainer}>
            <p className={`${styles.projectTech} ${styles.javascript}`}>
              JavaScript
            </p>
            <p className={`${styles.projectTech} ${styles.api}`}>Playwright</p>
          </div>
        </div>

        <div className={styles.projectDescription}>
          Node package for scraping websites with schema recipe data.
        </div>
        <div className={styles.projectLinkContainer}>
          <a
            className={styles.projectLink}
            href="https://github.com/sophi-li/scrape-recipe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <a
            className={styles.projectLink}
            href="https://www.npmjs.com/package/scrape-recipe"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
          </a>
        </div>
      </div>
    </section>

    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.projectImage}
          src="sophias-recipes.png"
          alt="screenshot of sophia's recipe website"
        />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectContainer}>
          <p className={styles.projectTitle}>Sophia's Recipes</p>
          <div className={styles.projectTechContainer}>
            <p className={`${styles.projectTech} ${styles.gatsby}`}>Gatsby</p>
            <p className={`${styles.projectTech} ${styles.react}`}>React</p>
          </div>
        </div>
        <div className={styles.projectDescription}>
          Minimalistic recipe website of my tried and true recipes.
        </div>
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
      </div>
    </section>

    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.projectImage}
          src="sourdough-reminder.png"
          alt="screenshot of blog from dev.to for the sourdough starter reminder project"
        />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectContainer}>
          <p className={styles.projectTitle}>Sourdough Starter Reminder</p>
          <div className={styles.projectTechContainer}>
            <p className={`${styles.projectTech} ${styles.node}`}>Node.js</p>
            <p className={`${styles.projectTech} ${styles.deployment}`}>
              {' '}
              Azure{' '}
            </p>
            <p className={`${styles.projectTech} ${styles.api}`}>Twilio</p>
          </div>
        </div>
        <div className={styles.projectDescription}>
          An app that sends automatic text message reminders with custom
          messages and cadence.
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
      </div>
    </section>

    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.projectImage}
          src="chat-with-earth.png"
          alt='screenshot of text message between earth ("hey- u up?") and astronaut ("on moon rn- sup?")'
        />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectContainer}>
          <p className={styles.projectTitle}>Chat With Earth</p>
          <div className={styles.projectTechContainer}>
            <p className={`${styles.projectTech} ${styles.node}`}>Node.js</p>
            <p className={`${styles.projectTech} ${styles.deployment}`}>
              Azure
            </p>
            <p className={`${styles.projectTech} ${styles.api}`}>Twilio</p>
            <p className={`${styles.projectTech} ${styles.api}`}>NASA API</p>
          </div>
        </div>
        <div className={styles.projectDescription}>
          An app that let's you "chat" with Earth through text messages.
        </div>
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
      </div>
    </section>

    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.projectImage}
          src="15five.png"
          alt="screenshot of 15Five Product Landing Page website"
        />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectContainer}>
          <p className={styles.projectTitle}>15Five Product Landing Page</p>
          <div className={styles.projectTechContainer}>
            <p className={`${styles.projectTech} ${styles.html}`}>HTML</p>
            <p className={`${styles.projectTech} ${styles.css}`}>CSS</p>
          </div>
        </div>
        <div className={styles.projectDescription}>
          A re-creation of 15Five's product landing page, a continuous
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
      </div>
    </section>

    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.projectImage}
          src="sophias-website.png"
          alt="screenshot of Sophia's website"
        />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectContainer}>
          <p className={styles.projectTitle}>sophiali.dev</p>
          <div className={styles.projectTechContainer}>
            <p className={`${styles.projectTech} ${styles.gatsby}`}>Gatsby</p>
            <p className={`${styles.projectTech} ${styles.react}`}>React</p>
            <p className={`${styles.projectTech} ${styles.node}`}>Node.js</p>
          </div>
        </div>

        <div className={styles.projectDescription}>
          Personal Gatsby theme (the source for this website).
        </div>
        <div className={styles.projectLinkContainer}>
          <a
            className={styles.projectLink}
            href="https://github.com/sophi-li/sophi-li.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <a
            className={styles.projectLink}
            href="https://sophiali.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default Projects
