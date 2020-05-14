import React from 'react'
import styles from './ProjectContainer.module.css'
// import PropTypes from 'prop-types'

const ProjectContainer = ({ project }) => {
  const {
    title,
    languages,
    description,
    liveLink,
    codeLink,
    blogLink,
    otherLink,
  } = project
  return (
    <div className={styles.container}>
      <div className={styles.rowTitle}>
        {title} {languages}
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.links}>
        {liveLink} {codeLink} {blogLink} {otherLink}
      </div>
    </div>
  )
}

export default ProjectContainer
