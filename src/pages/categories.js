import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './blog.module.css'

import Layout from '../layout'

const Categories = ({ data }) => {
  const { allMarkdownRemark } = data
  const { group } = allMarkdownRemark
  return (
    <Layout>
      <h1>Blogs by Category</h1>
      {group.map(cat => (
        <div key={cat.fieldValue}>
          <span>
            <h2 className={styles.categoryName}>{cat.fieldValue}</h2>
            {cat.edges.map(({ node: { frontmatter } }) => (
              <div key={frontmatter.path}>
                <Link to={frontmatter.path} className={styles.linkContainer}>
                  <div className={styles.blogContainer}>
                    <p className={styles.blogTitle}>{frontmatter.title}</p>{' '}
                    <p className={styles.blogDate}>{frontmatter.date}</p>
                  </div>
                </Link>
              </div>
            ))}
          </span>{' '}
        </div>
      ))}
    </Layout>
  )
}

Categories.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                title: PropTypes.string,
                path: PropTypes.string,
                date: PropTypes.string,
                category: PropTypes.string,
              }),
            }),
          })
        ),
      }),
    }),
  }),
}

export default Categories

export const query = graphql`
  query CategoriesQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      group(field: frontmatter___category) {
        fieldValue
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
              category
            }
          }
        }
      }
    }
  }
`
