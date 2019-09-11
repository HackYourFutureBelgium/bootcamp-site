import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import GlobalStyle from '../styles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
