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
  padding-bottom: ${dimensions.footer.height};
  position: relative;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <PageContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </PageContainer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
