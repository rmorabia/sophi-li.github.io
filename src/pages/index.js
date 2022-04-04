import React from 'react'
import { graphql, Link } from 'gatsby'
import styles from './index.module.css'
import projects from '../data/projects'
import PropTypes from 'prop-types'

import Project from '../components/Project'
import Layout from '../layout'
import Posts from '../components/Posts'

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.bioContainer}>
          <div className={styles.aboutContainer}>
            <h1 className={styles.title}>Hi, I’m Sophia!</h1>
            <p className={styles.bioDescription}>
              I’m currently a software engineer at{' '}
              <a
                href="https://www.atlassian.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atlassian
              </a>
              . Welcome to my corner of the web where I share things I learn.
              You can read my <Link to="/blog">blog</Link> or follow me on{' '}
              <a
                href="https://twitter.com/sophia_wyl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              .
            </p>
          </div>
          <div className={styles.headshotContainer}>
            <img
              src="sophia-headshot.JPG"
              className={styles.headshot}
              alt="Photo of Sophia"
            />
          </div>
        </div>
        <section>
          <h1 className={styles.sectionTitle}>Latest</h1>
          {edges.map(({ node: { frontmatter } }) => (
            <Posts frontmatter={frontmatter} key={frontmatter.path} />
          ))}
        </section>
        <section>
          <h1 className={styles.sectionTitle}>Projects</h1>
          <div className={styles.projectsContainer}>
            {projects.map(element => (
              <Project key={element.title} project={element} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

Home.propTypes = {
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

export default Home

export const Latestquery = graphql`
  query HomepageQueryAnd {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
