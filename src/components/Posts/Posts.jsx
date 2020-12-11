import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './Posts.css'

const Posts = ({ frontmatter }) => {
  const dateArr = frontmatter.date.split(' ')
  dateArr[0] = dateArr[0].slice(0, 3)
  dateArr[1] = parseInt(dateArr[1], 10)
  const formattedDate = `${dateArr[0]} ${dateArr[1]}, ${dateArr[2]}`
  return (
    <div>
      <Link to={frontmatter.path} className="linkContainer">
        <div className="blogContainer">
          <div className="titleTagContainer">
            <p className="blogTitle">{frontmatter.title}</p>
          </div>
          <div className="dateContainer">
            <p className="blogDate">{formattedDate}</p>
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
    date: PropTypes.string,
  }),
}

export default Posts
