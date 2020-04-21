module.exports = {
  siteMetadata: {
    title: 'Sophia Li',
    description: 'Software engineer',
    url: 'https://sophiali.dev',
  },
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
        ],
      },
    },
  ],
}
