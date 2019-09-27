module.exports = {
  siteMetadata: {
    title: `Rosa B&B: Accomodation in Oudtshoorn, South Africa `,
    description: `Rosa Bed & Breakfast, Oudtshoorn, South Africa`,
    author: `@simeydeklerk`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rosa B&B`,
        short_name: `rosabnb`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
