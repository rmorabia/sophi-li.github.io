import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import './blog.css'

import Layout from '../layout'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <h1>Blog</h1>
    {edges.map(({ node: { frontmatter } }) => (
      <div key={frontmatter.path}>
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
    ))}
  </Layout>
)

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              path: PropTypes.string,
              date: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
}

export default Blog

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
