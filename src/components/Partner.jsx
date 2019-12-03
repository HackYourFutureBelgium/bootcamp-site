import React from 'react';
import styled from 'styled-components';
import ExternalLink from './UI/ExternalLink';

import { partnerType } from '../types';

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

const Partner = ({ name, logo, website, ...rest }) => {
  if (!name || !logo) return null;
  return (
    <PartnerLink href={website} {...rest}>
      <PartnerImage src={logo} alt={`${name} logo`} />
    </PartnerLink>
  );
};

Partner.propTypes = { ...partnerType };

export default Partner;
