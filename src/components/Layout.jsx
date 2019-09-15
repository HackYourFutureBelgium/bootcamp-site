import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from '../styles';
import { colors, dimensions } from '../styles/constants';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${colors.offWhite};
  padding-bottom: calc(2rem + ${dimensions.footer.height}rem);
  position: relative;
`;

const Main = styled.main`
  display: block;
  width: 100%;
`;

const FlexedMain = styled(Main)`
  display: flex;
  flex-grow: 1;
  flex-flow: column;
`;

const Layout = ({ flex, children }) => {
  const ContentWrapper = flex ? FlexedMain : Main;
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Header />
        <ContentWrapper flex={flex}>{children}</ContentWrapper>
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
