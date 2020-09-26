import React, { useState, useEffect } from 'react'
// import projects from '../data/projects'

import styles from './about.module.css'

// import Project from '../components/Projects'
import Layout from '../layout'

const Projects = () => {
  const [copyStatus, setCopyStatus] = useState('Copy')
  const email = 'sophiali.wy@gmail.com'

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopyStatus('Copy')
    }, 3000)
    return () => clearTimeout(timer)
  }, [copyStatus])

  function copyEmail() {
    navigator.clipboard.writeText(email)
    setCopyStatus('Copied!')
  }
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>About me</h1>
        </header>
        <section className={styles.projectsContainer}>
          <p>Hi, I’m Sophia! I’m currently a software engineer at FreeWill.</p>
          <p>
            I build things on the web with HTML, CSS, JavaScript, React, and
            Node.js. I enjoy creating intuitive, accessible, and performant
            sites and apps.
          </p>

          <p>
            I value having a growth mindset, being feedback oriented, and
            leading with empathy.
          </p>

          <p>
            When I'm not coding, you'll find me indoor rock climbing, practicing
            yoga, or baking sourdough bread.
          </p>
        </section>
        <section>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p>
            I enjoy getting emails from real people. If you have any feedback,
            thoughts, or questions you want to share with me, send me an email!
          </p>
          <div className={styles.emailContainer}>
            <div className={styles.emailText}>sophiali.wy@gmail.com</div>
            <div className={styles.emailCopyBtnContainer}>
              <button className={styles.emailCopyBtn} onClick={copyEmail}>
                {copyStatus}
              </button>
            </div>
            <div className={styles.emailOpenAppContainer}>
              <a
                href="mailto:sophiali.wy@gmail.com"
                className={styles.emailOpenApp}
              >
                Open email
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Projects
