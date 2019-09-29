import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PersonDetailGallery from '../components/PersonDetailGallery';
import { colors } from '../styles/constants';
import { ExternalLink, Button } from '../components/UI';
import { projectType } from '../types';

const PageContainer = styled(Layout)`
  width: 85%;
  margin: 0 auto;
  h2,
  h3 {
    font-size: 1.7rem;
  }
`;

const TopSection = styled.div`
  margin-top: 3rem;
  width: 100%;
  > a {
    color: ${colors.purple};
  }
`;

const ProjectSection = styled.section`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 2fr 5fr 3fr;
  grid-template-rows: 5fr 1fr;
  grid-template-areas:
    'crest description partners'
    '. cta .';
  > a {
    grid-area: cta;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 3fr 2fr;
    grid-template-areas:
      'crest description'
      'partners cta';
    > a {
      justify-self: flex-end;
      align-self: center;
      margin-top: 1rem;
    }
    @media (max-width: 620px) {
      grid-template-areas:
        'description description'
        'partners cta';
    }
    @media (max-width: 450px) {
      grid-template-rows: 3fr 1fr 1fr;
      grid-template-areas:
        'description description'
        'partners partners'
        'cta cta';
    }
    @media (max-width: 420px) {
      > a {
        justify-self: flex-start;
      }
    }
  }
`;

const Crest = styled.div`
  grid-area: crest;
  width: 70%;
  max-width: 26rem;
  padding-top: 1rem;
  @media (max-width: 880px) {
    padding-top: 2rem;
  }
  @media (max-width: 620px) {
    display: none;
  }
  img {
    max-width: 100%;
  }
`;

const ProjectDescription = styled.div`
  grid-area: description;
  margin-right: 4rem;
`;

const Partners = styled.div`
  grid-area: partners;
  h3 {
  }
  > div {
    display: flex;
    a {
      height: 5rem;
      margin: 0 1.5rem 1.5rem 0;
    }
    img {
      max-height: 100%;
    }
  }
`;

const TeamSection = styled.section`
  width: 100%;
  margin-top: 5rem;
`;

const ProjectDetail = ({ pageContext: project }) => {
  const $partners = project.partners.map(p => (
    <ExternalLink key={p.id} href={p.website}>
      <img src={p.logo} alt={`${p.name} logo`} />
    </ExternalLink>
  ));

  const team = project.team.sort((p1, p2) => {
    if (p1.role < p2.role) return 1;
    if (p1.role > p2.role) return -1;
    return 0;
  });

  return (
    <PageContainer>
      {/* <SEO title={`${project.name} project`} /> */}
      <TopSection>
        <Link to="/projects">&lt; Our projects</Link>
        <ProjectSection>
          <Crest>
            <img src={project.crest} alt={`${project.name} crest`} />
          </Crest>
          <ProjectDescription>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </ProjectDescription>
          <ExternalLink href="mailto:contact@hackyourfuture.be">
            <Button inverted>Hire our graduates!</Button>
          </ExternalLink>
          <Partners>
            <h3>Partners</h3>
            <div>{$partners}</div>
          </Partners>
        </ProjectSection>
      </TopSection>
      <TeamSection>
        <h2>
          Meet the <strong>team</strong>
        </h2>
        <PersonDetailGallery people={team} />
      </TeamSection>
    </PageContainer>
  );
};

ProjectDetail.propTypes = {
  pageContext: PropTypes.shape({ ...projectType }).isRequired
};

export default ProjectDetail;
