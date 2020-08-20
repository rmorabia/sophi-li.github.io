import React from 'react'
import projects from '../data/projects'

import styles from './projects.module.css'

import Project from '../components/Projects'
import Layout from '../layout'

const Projects = () => {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1>Projects</h1>
          <p className={styles.pageDescription}>
            A few of my favorite projects.
          </p>
        </header>
        <div className={styles.projectsContainer}>
          {projects.map(element => (
            <Project key={element.title} project={element} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
