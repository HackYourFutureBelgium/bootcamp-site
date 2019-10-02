import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  max-width: 120rem;
  margin: 0 auto;
`;

const FlexedMain = styled(Main)`
  display: flex;
  flex-grow: 1;
  flex-flow: column;
`;

const Layout = ({ flex, children, ...rest }) => {
  const ContentWrapper = flex ? FlexedMain : Main;

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Header />
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
