import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './blog.module.css'

import Layout from '../layout'
import Posts from '../components/Posts'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const allPosts = edges
  const emptyQuery = ''

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    const posts = edges || []

    const filteredData = posts.filter(post => {
      const { title, tags } = post.node.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join('')
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })
    setState({ query, filteredData })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <div className={styles.blogPageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.pageDescription}>
            Mostly JavaScript, insights from coding projects, and other
            thoughts.
          </p>
          <form>
            <input
              className={styles.input}
              onChange={handleInputChange}
              placeholder="Type here to search the blog..."
            />
          </form>
        </header>

        {posts.map(({ node: { frontmatter } }) => (
          <Posts frontmatter={frontmatter} key={frontmatter.path} />
        ))}
      </div>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              path: PropTypes.string,
              tag: PropTypes.string,
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
