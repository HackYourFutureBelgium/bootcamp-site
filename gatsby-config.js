module.exports = {
  siteMetadata: {
    title: `HackYourFuture Bootcamp`,
    description: `HackYourFuture's bootcamp boosts refugees' opportunities in the Belgian job market through the development of real-world, open source, positive impact projects.`,
    twitterHandle: `@HackYFutureBE`,
    twitter: `https://twitter.com/HackYFutureBE`,
    url: `https://bootcamp.hackyourfuture.be`,
    author: `HackYourFuture Belgium`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HackYourFuture Bootcamp`,
        short_name: `HYF Bootcamp`,
        start_url: `/`,
        background_color: '#5524CB',
        theme_color: `#5524CB`,
        display: `minimal-ui`
        // icon: `` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Aleo`
          },
          {
            family: `Karla`
          }
        ]
      }
    }
  ]
};
