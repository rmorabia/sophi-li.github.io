import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.css'

import Layout from '../layout'

const Home = () => (
  <Layout>
    <h1 className={styles.titleheader}>About me</h1>
    <p>I'm Sophia, a software engineer, technical writer, and former baker.</p>
    <p>
      I set{' '}
      <a
        href="https://github.com/sophi-li/OKRs-self-learning"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        OKRs to learn how to code
      </a>
      .
    </p>

    <p>
      I occasionally <Link to="/blog">blog</Link> about things I learn and{' '}
      <Link to="/projects">projects</Link> I've built.
    </p>

    <p>
      I’m currently seeking a full-time software engineering role at an impact
      driven organization with a strong culture of learning and mentorship.
    </p>

    <p>
      I'm one of the best <i>junior</i> software engineers you'll find. Why?
    </p>
    <ul>
      <li>
        {' '}
        🧠 I have a growth mindset: Anything can be learned if you put your mind
        to it and follow through.
      </li>
      <li>
        {' '}
        👍 I'm feedback oriented: I can not only give specific, kind, and
        actionable feedback, I continuously ask the right questions to seek
        feedback on ways to learn and improve.
      </li>
      <li>
        {' '}
        👩‍💻 I'm excited to learn: I love solving interesting problems and always
        find the right tools to solve them. Learning new things, whether a tool
        or a way of thought, is the best part about problem solving.
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
      I'll bring fresh eyes, potential, and fun to the next organization I join.
    </p>

    <p>
      I build software with HTML, CSS, JavaScript, React, Node.js, GraphQL,
      Python, Express, Microsoft Azure. I'm excited to learn any new tool or
      technology to solve the right problems.
    </p>

    <p>
      When I'm not coding, you'll find me rock climbing, playing air hockey, or
      baking sourdough bread. n I& #x27;m not coding, you& #x27;ll
    </p>
  </Layout>
)

export default Home
