import React from 'react'
import 'typeface-roboto'

import indexStyles from './index.module.css'

import Layout from '../layout'
import LinkButton from '../components/LinkButton/LinkButton'
import SEO from '../components/SEO/SEO'

export default () => (
  <Layout>
    <SEO />
    <section>
      <h2 className={indexStyles.titleheader}>About me</h2>
      <p>
        I’m Sophia, a front-end software engineer, technical writer, and former
        baker.
      </p>
      <p>
        I{' '}
        <a
          href="https://dev.to/sophia_wyl"
          target="_blank"
          rel="noopener noreferrer"
        >
          blog{' '}
        </a>
        about life as a programmer and my{' '}
        <a
          href="https://github.com/sophi-li/OKRs-self-learning"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          self-taught journey
        </a>
        . My blog posts have over 40k views and have been featured on DEV's top
        7 and{' '}
        <a
          href="https://dev.to/azure/how-on-earth-do-i-use-the-nasa-api-1548"
          target="_blank"
          rel="noopener noreferrer"
        >
          Microsoft publications
        </a>
        .
      </p>
      <p>
        I also co-organize Write/Speak/Code's{' '}
        <a
          href="https://www.meetup.com/WriteSpeakCode-SFBay/"
          target="_blank"
          rel="noopener noreferrer"
        >
          San Francisco chapter
        </a>{' '}
        to help increase the visibility and leadership of technologists from
        underrepresented genders through peer-led development.
      </p>
      <p>
        When I'm not coding, you'll find me rock climbing, playing air hockey,
        or baking sourdough bread.
      </p>
      <p>
        I’m currently seeking a full-time front-end role at an impact driven
        organization with a strong culture of learning and mentorship.
      </p>

      <p>
        I'm one of the best <i>junior</i> software engineers you'll find. Why?
      </p>
      <ul>
        <li>
          {' '}
          🧠 I have a growth mindset: Anything can be learned if you put your
          mind to it and follow through.
        </li>
        <li>
          {' '}
          👍 I'm feedback oriented: I can not only give specific, kind, and
          actionable feedback, I continuously ask the right questions to seek
          feedback on ways to learn and improve.
        </li>
        <li>
          {' '}
          👩‍💻 I'm excited to learn: I love solving interesting problems and
          always find the right tools to solve them. Learning new things,
          whether a tool or a way of thought, is the best part about problem
          solving.
        </li>
      </ul>
      <p>
        Let me show you these{' '}
        <a
          href="https://github.com/sophi-li/OKRs-self-learning"
          target="_blank"
          rel="noopener noreferrer"
        >
          qualities in action here
        </a>{' '}
        instead of just telling you!
      </p>

      <p>
        I'll bring fresh eyes, potential, and fun to the next organization I
        join.
      </p>

      <p>
        I build software with HTML, CSS, JavaScript, React, Node, GraphQL,
        Python, Microsoft Azure. I'm excited to learn any new tool or technology
        to solve the right problems.
      </p>
      <div className={indexStyles.resumeButton}>
        <LinkButton
          href="/Sophia Li Resume.pdf"
          target="_blank"
          center={true}
          size="large"
        >
          Download Resume
        </LinkButton>
      </div>
    </section>

    <section>
      <h2 className={indexStyles.titleheadermargin}>Projects</h2>
      <p>
        <strong>MoTo</strong> - Chrome Extension for productivity with pomodoro
        and task trackers
      </p>
      <em>
        <p className="project-description">HTML, CSS, Javascript</p>
      </em>
      <div className={indexStyles.projectLinksDiv}>
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
        <strong>Sourdough Starter Reminder</strong> - Automatic text message
        reminder with custom message and timing
      </p>

      <em>
        <p className="project-description">
          Node.js, Microsoft Azure Functions, Twilio
        </p>
      </em>
      <div className={indexStyles.projectLinksDiv}>
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
    </section>
  </Layout>
)
