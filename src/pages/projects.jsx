import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { ExternalLink, Tab, Panel, Tabbable } from '../components/UI';
import { colors } from '../styles/constants';
import { flattenQueriedJson } from '../util';

const IntroContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    align-items: center;
  }
`;

const IntroContent = styled.div`
  padding: 4rem 10rem;
  width: 60%;
  @media (max-width: 800px) {
    padding: 4rem 6rem;
    width: 100%;
  }
  @media (max-width: 580px) {
    padding: 4rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  p {
    line-height: 2;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  max-width: 50rem;
  @media (max-width: 800px) {
    display: none;
  }
`;

const CTA = styled.p`
  color: ${colors.purple};
  a {
    text-decoration: underline;
  }
`;

const ProjectSection = styled(Tabbable)`
  width: 100%;
`;

const Tabs = styled.div`
  display: flex;
`;

const ProjectsForYear = styled(Panel)`
  background: #fff;
  padding: 4rem;
`;

const Projects = () => {
  const { introImage, projectJson } = useStaticQuery(graphql`
    query {
      introImage: file(relativePath: { eq: "ibrahim.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectJson: allPersonJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  const projects = flattenQueriedJson(projectJson);

  const renderTabs = () => {
    return <Tab>Tab</Tab>;
  };

  const renderProjects = () => {
    return <ProjectsForYear>Projects</ProjectsForYear>;
  };

  // TODO dynamically render projects
  const $tabs = [].map(renderTabs);
  const $projects = [].map(renderProjects);
  return (
    <Layout>
      {/* <SEO title="Our projects" /> */}
      <IntroContainer>
        <IntroContent>
          <h2>
            Our <strong>projects</strong>
          </h2>
          <p>
            Newly arrived refugees lack the local network, but do have the skills to{' '}
            <strong>start their career in Belgium</strong>. Our bootcamp allows them to show what
            they can do by working on <strong>local impactful project</strong> while being{' '}
            <strong>coached by domain experts</strong>.
          </p>
          <CTA>
            Interested in <strong>hiring our talents?</strong>{' '}
            <ExternalLink href="mailto:contact@hackyourfuture.be">
              contact@hackyourfuture.be
            </ExternalLink>
          </CTA>
        </IntroContent>
        <ImageContainer>
          <Img fluid={introImage.childImageSharp.fluid} />
        </ImageContainer>
      </IntroContainer>
      <ProjectSection>
        <Tabs>{$tabs}</Tabs>

        {$projects}
      </ProjectSection>
    </Layout>
  );
};

export default Projects;
