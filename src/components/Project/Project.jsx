import React from 'react'
import PropTypes from 'prop-types'

import './Project.css'

const Project = ({ project }) => {
  const { title, description, code, live } = project

  return (
    <div key={title}>
      <section className="containerProject">
        <div className="titleDescriptionContainer">
          <a
            className="projectTitle"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
          <div className="projectDescription">{description}</div>
        </div>
        <div className="codeLinkContainer">
          <a
            className="codeLink"
            href={code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </section>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    code: PropTypes.string,
    live: PropTypes.string,
  }),
}

export default Project
