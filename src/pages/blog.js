import React from 'react'
import { graphql, Link } from 'gatsby'

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
            <p className={styles.blogDate}>{frontmatter.date}</p>
          </div>
        </Link>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default Blog
