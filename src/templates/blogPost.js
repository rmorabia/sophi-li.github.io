import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import blogPostStyle from './blogPost.module.css'

const BlogTemplate = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const date = markdownRemark.frontmatter.date
  const html = markdownRemark.html
  // console.log(markdownRemark.frontmatter)
  return (
    <Layout>
      <h1>{title}</h1>
      <p>
        <i>{date}</i>
      </p>
      <div
        className={blogPostStyle.blogpost}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <p>
        {prev && (
          <Link to={prev.frontmatter.path}>
            <span role="img" aria-label="left arrow">
              ⬅️{' '}
            </span>
            {prev.frontmatter.title}
            {/* Previous */}
          </Link>
        )}
      </p>
      <p>
        {next && (
          <Link to={next.frontmatter.path}>
            {next.frontmatter.title}
            {/* Next */}
            <span role="img" aria-label="right arrow">
              {' '}
              ➡️
            </span>
          </Link>
        )}
      </p>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
export default BlogTemplate
