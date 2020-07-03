import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './blog.module.css'

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
        <Link to={frontmatter.path} className={styles.linkContainer}>
          <div className={styles.blogContainer}>
            <p className={styles.blogTitle}>{frontmatter.title}</p>{' '}
            <div className={styles.blogTags}>
              {frontmatter.tags.map(tag => (
                <p className={styles.tag} key={tag}>
                  {' '}
                  {tag}{' '}
                </p>
              ))}
            </div>
            <p className={styles.blogDate}>{frontmatter.date}</p>
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
