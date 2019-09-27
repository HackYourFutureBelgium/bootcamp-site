const path = require('path');
const slugify = require('slugify');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allProjectJson {
        edges {
          node {
            crest
            name
            date
            description
            partners
            team
            github
          }
        }
      }
    }
  `);

  result.data.allProjectJson.edges.forEach(({ node }) => {
    const { name, date } = node;
    const slug = slugify(name, { replacement: '-', lower: true });

    const d = new Date(date);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);

    createPage({
      path: `/projects/${year}/${month}/${slug}`,
      matchPath: `/projects/${year}/${month}/${slug}`,
      component: path.resolve(`./src/templates/ProjectDetail.jsx`),
      context: {
        slug,
        ...node
      }
    });
  });
};
