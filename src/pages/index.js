import React from 'react'
import { graphql, Link } from 'gatsby'
import styles from './index.module.css'
import PropTypes from 'prop-types'

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
            <h1 className={styles.title}>
              Hi, I'm Sophia. I'm a software engineer.
            </h1>
            <p>
              I build things on the web with HTML, CSS, JavaScript, React, and
              Node.js. I enjoy creating intuitive, accessible, and performant
              sites and apps.
            </p>

            <p>
              I value having a growth mindset, being feedback oriented, and
              leading with empathy.
            </p>

            <p>
              When I'm not coding, you'll find me rock climbing, playing air
              hockey, or baking sourdough bread.
            </p>

            <p>
              You can read my <Link to="/blog">blog</Link>, explore{' '}
              <Link to="/projects">projects</Link> I'm building, or check out
              how I set{' '}
              <a
                href="https://github.com/sophi-li/OKRs-self-learning"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                OKRs to learn how to code
              </a>
              .
            </p>
          </div>
          <div className={styles.headshotContainer}>
            <img
              src="sophia-headshot.JPG"
              className={styles.headshot}
              alt="Photo of Sophia"
              onMouseOver={e =>
                (e.currentTarget.src = 'sophia-painted-ladies.JPG')
              }
              onMouseOut={e => (e.currentTarget.src = 'sophia-headshot.JPG')}
            />
          </div>
        </div>
        <section>
          <h1 className={styles.sectionTitle}>Latest</h1>
          {edges.map(({ node: { frontmatter } }) => (
            <Posts frontmatter={frontmatter} key={frontmatter.path} />
          ))}
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
