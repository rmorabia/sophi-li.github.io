import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './Posts.css'

const Posts = ({ frontmatter }) => {
  return (
    <div>
      <Link to={frontmatter.path} className="linkContainer">
        <div className="blogContainer">
          <div className="titleTagContainer">
            <p className="blogTitle">{frontmatter.title}</p>{' '}
            <div className="blogTags">
              {frontmatter.tags.map(tag => (
                <p className={`tag tag-${tag}`} key={tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="dateContainer">
            <p className="blogDate">{frontmatter.date}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

Posts.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    tags: PropTypes.array,
    date: PropTypes.string,
  }),
}

export default Posts
