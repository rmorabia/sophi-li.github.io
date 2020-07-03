import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.css'

import Layout from '../layout'

const Home = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.title}>Hi, I'm Sophia</h1>
        <p className={styles.subtitle}>
          I'm a software engineer building things on the web with HTML, CSS,
          JavaScript, React, and Node.js.
        </p>

        <p>
          I enjoy creating intuitive, accessible, and performant sites and apps.
          I value having a growth mindset, being feedback oriented, and leading
          with empathy.
        </p>

        <p>
          When I'm not coding, you'll find me rock climbing, playing air hockey,
          or baking sourdough bread.
        </p>

        <p>
          You can read my <Link to="/blog">blog</Link>, explore{' '}
          <Link to="/projects">projects</Link> I'm building, or check out how I
          set{' '}
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
      </div>
      <div className={styles.headshotContainer}>
        <img
          src="sophia-headshot.JPG"
          className={styles.headshot}
          alt="Photo of Sophia"
          onMouseOver={e => (e.currentTarget.src = 'sophia-painted-ladies.JPG')}
          onMouseOut={e => (e.currentTarget.src = 'sophia-headshot.JPG')}
        />
      </div>
    </div>
  </Layout>
)

export default Home
