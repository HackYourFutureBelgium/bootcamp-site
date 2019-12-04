/*
  Add/update/remove types declared in the netlify cms in the below array
  The name of the resource === the name of the cms field
  See /static/admin/config.yml
*/
const dataFilesystemSources = ['person', 'project', 'partner'].map(resource => ({
  resolve: 'gatsby-source-filesystem',
  options: {
    name: resource,
    path: `${__dirname}/src/cms/${resource}`
  }
}));

module.exports = {
  siteMetadata: {
    title: `HackYourFuture Bootcamp`,
    description: `We get newly arrived talent acquainted with the skills, collaboration,
    processes and industry best practices expected in a Belgian software organisation by
    working on real-world, open source projects with social impact.`,
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
    'gatsby-transformer-json',
    ...dataFilesystemSources,
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
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Aleo` }, { family: `Karla` }]
      }
    },
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-brotli',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.jsx`
      }
    },
    'gatsby-plugin-webpack-bundle-analyser-v2'
  ]
};
