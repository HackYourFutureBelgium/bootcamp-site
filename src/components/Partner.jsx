import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExternalLink from './UI/ExternalLink';

const PartnerLink = styled(ExternalLink)`
  text-align: center;
`;

const PartnerImage = styled.img`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  max-width: 100%;
  transition: filter 0.3s;
  :hover {
    filter: none;
  }
`;

const Partner = ({ name, logo, website, ...rest }) => (
  <PartnerLink href={website} {...rest}>
    <PartnerImage src={logo} alt={`${name} logo`} />
  </PartnerLink>
);

Partner.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

export default Partner;
