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

const flatten = data =>
  data.edges.reduce((collection, { node }) => {
    collection.push(node);
    return collection;
  }, []);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      teamData: allPersonJson {
        edges {
          node {
            lastName
            firstName
            github
            twitter
            linkedIn
            role
            id
            picture
          }
        }
      }
      partnerData: allPartnerJson {
        edges {
          node {
            id
            logo
            name
            website
          }
        }
      }
      projectData: allProjectJson {
        edges {
          node {
            id
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

  const { projectData, teamData, partnerData } = result.data;

  const partners = flatten(partnerData);
  const team = flatten(teamData);
  const projects = flatten(projectData);

  projects.forEach(project => {
    const { name, date } = project;
    const slug = slugify(name, { replacement: '-', lower: true });

    const d = new Date(date);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);

    createPage({
      path: `/projects/${year}/${month}/${slug}`,
      matchPath: `/projects/${year}/${month}/${slug}`,
      component: path.resolve(`./src/templates/ProjectDetail.jsx`),
      context: {
        ...project,
        partners: partners.filter(p => project.partners.includes(p.name)),
        team: team.filter(person => project.team.includes(person.id))
      }
    });
  });
};
