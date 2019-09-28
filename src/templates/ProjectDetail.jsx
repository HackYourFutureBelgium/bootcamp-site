import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { colors } from '../styles/constants';
import { projectType } from '../types';

const PageContainer = styled(Layout)`
  width: 85%;
  margin: 0 auto;
  h2 {
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
`;

const Team = styled.section`
  width: 100%;
`;

const ProjectDetail = ({ pageContext: project }) => {
  return (
    <PageContainer>
      {/* <SEO title={`${project.name} project`} /> */}
      <TopSection>
        <Link to="/projects">&lt; Our projects</Link>
        <ProjectSection>
          <h2>{project.name}</h2>
        </ProjectSection>
      </TopSection>
      <Team>
        <h2>
          Meet the <strong>team</strong>
        </h2>
      </Team>
    </PageContainer>
  );
};

ProjectDetail.propTypes = {
  pageContext: PropTypes.shape({ ...projectType }).isRequired
};

export default ProjectDetail;
