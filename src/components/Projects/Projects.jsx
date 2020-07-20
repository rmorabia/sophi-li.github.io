import React from 'react'
import PropTypes from 'prop-types'

import './Projects.css'

const Projects = ({ project }) => {
  const {
    title,
    description,
    image,
    alt,
    tags,
    code,
    live,
    npm,
    blog,
  } = project

  return (
    <div key={title}>
      <section className="containerProject">
        <div className="imageContainer">
          <img className="projectImage" src={image} alt={alt} />
        </div>
        <div className="projectContent">
          <div className="projectContainer">
            <p className="projectTitle">{title}</p>
            <div className="projectTechContainer">
              {tags.map(elem => (
                <p className={`projectTech ${elem.className}`} key={elem.id}>
                  {elem.language}
                </p>
              ))}
            </div>
          </div>

          <div className="projectDescription">{description}</div>
          <div className="projectLinkContainer">
            <a
              className="projectLink"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            {live ? (
              <a
                className="projectLink"
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            ) : null}
            {npm ? (
              <a
                className="projectLink"
                href={npm}
                target="_blank"
                rel="noopener noreferrer"
              >
                npm
              </a>
            ) : null}
            {blog ? (
              <a
                className="projectLink"
                href={blog}
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}

Projects.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    tags: PropTypes.array,
    code: PropTypes.string,
    live: PropTypes.string,
    npm: PropTypes.string,
    blog: PropTypes.string,
  }),
}

export default Projects
