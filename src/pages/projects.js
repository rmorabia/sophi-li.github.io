import React from 'react'
import projects from '../data/projects'

import styles from './projects.module.css'

import Project from '../components/Projects'
import Layout from '../layout'

const Projects = () => {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1>Projects</h1>
        {projects.map(element => (
          <Project key={element.title} project={element} />
        ))}
      </div>
    </Layout>
  )
}

export default Projects
