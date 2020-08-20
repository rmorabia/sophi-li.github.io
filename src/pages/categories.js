import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './categories.module.css'

import Layout from '../layout'
import Posts from '../components/Posts'

const Categories = ({ data }) => {
  const { allMarkdownRemark } = data
  const { group } = allMarkdownRemark
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Blogs by Category</h1>
        {group.map(cat => (
          <div key={cat.fieldValue}>
            <span>
              <h2 className={styles.categoryName}>{cat.fieldValue}</h2>
              {cat.edges.map(({ node: { frontmatter } }) => (
                <Posts frontmatter={frontmatter} key={frontmatter.path} />
              ))}
            </span>
          </div>
        ))}
      </div>
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
              tags
              date(formatString: "MMMM DD, YYYY")
              category
            }
          }
        }
      }
    }
  }
`
