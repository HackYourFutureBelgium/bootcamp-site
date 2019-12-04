import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from '../styles';
import { colors, dimensions } from '../styles/constants';

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: ${colors.offWhite};
  padding-bottom: calc(2rem + ${dimensions.footer.height.large}rem);
  @media (max-width: 600px) {
    padding-bottom: calc(2rem + ${dimensions.footer.height.small}rem);
  }
`;

const Main = styled.main`
  display: block;
  width: 100%;
  padding-top: ${dimensions.header.height.large}rem;
  max-width: 132rem;
  margin: 0 auto;
`;

const FlexedMain = styled(Main)`
  display: flex;
  flex-grow: 1;
  flex-flow: column;
`;

const NextBootcampIndicator = styled.aside`
  position: absolute;
  top: ${dimensions.header.height.large}rem;
  right: 0;
  padding: 1.5rem;
  font-size: 1.4rem;
  color: #fff;
  background: ${colors.purple};
  z-index: 5;
  @media (max-width: 500px) {
    width: 100%;
    position: relative;
  }
`;

const Layout = ({ flex, children, ...rest }) => {
  const ContentWrapper = flex ? FlexedMain : Main;
  const { allMetaData } = useStaticQuery(graphql`
    query {
      allMetaData: allMetadataJson {
        edges {
          node {
            nextBootcamp
          }
        }
      }
    }
  `);
  const { nextBootcamp } = allMetaData.edges[0].node;

  const formattedBootcampDate = new Date(nextBootcamp).toLocaleString('en-be', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Header />
        <NextBootcampIndicator>
          Next bootcamp starting on <strong>{formattedBootcampDate}</strong>
        </NextBootcampIndicator>
        <ContentWrapper {...rest} flex={flex}>
          {children}
        </ContentWrapper>
        <Footer />
      </PageContainer>
    </>
  );
};

Layout.defaultProps = {
  flex: false
};

Layout.propTypes = {
  flex: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Layout;
