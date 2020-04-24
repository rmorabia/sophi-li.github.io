import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import 'modern-normalize'

import './index.css'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Container from '../components/Container'

const RootLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query RootLayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <link rel="icon" type="image/png" href="/favicon.JPG" />
        </Helmet>
        <Header title={data.site.siteMetadata.title} />
        <Container>
          {children}
          <Footer />
        </Container>
      </>
    )}
  />
)

export default RootLayout
