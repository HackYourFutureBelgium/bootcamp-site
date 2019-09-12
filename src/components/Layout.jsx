import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import GlobalStyle from '../styles';
import { colors } from '../styles/constants';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${colors.offWhite};
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <PageContainer>
      <Header />
      <main>{children}</main>
    </PageContainer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
