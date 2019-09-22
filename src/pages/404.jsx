import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { colors } from '../styles/constants';

const Container = styled(Layout)`
  padding-left: 3rem;
  h1 {
    margin-top: 3rem;
  }
  a,
  a:visited {
    color: ${colors.orange};
  }
`;

const NotFoundPage = () => (
  <Container>
    {/* <SEO title="Not Found" /> */}
    <h1>Page does not exist</h1>
    <p>
      You&apos;ve stumbled on a page that doesn&apos;t exist. <br />
      If you believe a page should be here, please contact us at contact@hackyourfuture.be.
    </p>
    <Link to="/">Back to main page</Link>
  </Container>
);

export default NotFoundPage;
