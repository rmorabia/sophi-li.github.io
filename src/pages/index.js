import React from 'react'

import styles from './index.module.css'

import Layout from '../layout'

const Home = () => (
  <Layout>
    <section>
      <h2 className={styles.titleheader}>About me</h2>
      <p>
        I'm Sophia, a front-end software engineer, technical writer, and former
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
    </section>
  </Layout>
)

export default Home
