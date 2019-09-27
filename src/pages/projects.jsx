import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import Container from '../components/Layout';
import SEO from '../components/SEO';
import { ExternalLink, Tab, Panel, Tabbable } from '../components/UI';
import { colors } from '../styles/constants';
import { flattenQueriedJson, getMonthNameFromDate } from '../util';
import Project from '../components/ProjectCard';

const Layout = styled(Container)`
  padding-bottom: 4rem;
`;

const IntroContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
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
  background-color: ${colors.offWhite};
`;

const ProjectsForYear = styled(Panel)`
  background-color: ${colors.offWhite};
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 3rem;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    grid-row-gap: 3rem;
  }
  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

const Projects = () => {
  const { introImage, projectData, partnerData } = useStaticQuery(graphql`
    query {
      introImage: file(relativePath: { eq: "ibrahim.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partnerData: allPartnerJson {
        edges {
          node {
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
          }
        }
      }
    }
  `);

  const partners = flattenQueriedJson(partnerData);
  const projects = flattenQueriedJson(projectData);

  /*
    - Extract momth and year
    - Structure object by year
    - Add month name as a project property
    - Populate partner id array with logo, website and name
  */
  const populatedProjectsByYear = projects.reduce((byYear, project) => {
    const date = new Date(project.date);
    const year = date.getFullYear();
    const monthNumber = `0${date.getMonth() + 1}`.slice(-2);

    const populatedPartners = project.partners.reduce((populated, partner) => {
      const partnerObj = partners.find(p => p.name === partner);
      populated.push(partnerObj);
      return populated;
    }, []);

    if (!byYear[year]) byYear[year] = [];
    byYear[year].push({
      ...project,
      month: getMonthNameFromDate(date),
      monthNumber,
      partners: populatedPartners
    });
    return byYear;
  }, {});

  const renderTabs = year => <Tab key={`tab-${year}`}>{year}</Tab>;

  const renderProjects = year => {
    const $projects = populatedProjectsByYear[year].map(project => (
      <Project key={project.id} year={year} {...project} />
    ));
    return <ProjectsForYear key={`projects-${year}`}>{$projects}</ProjectsForYear>;
  };

  const $tabs = Object.keys(populatedProjectsByYear)
    .reverse()
    .map(renderTabs);

  const $projects = Object.keys(populatedProjectsByYear).map(renderProjects);

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
