import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PartnerImg from './PartnerImg';
import ExternalLink from './UI/ExternalLink';

const PartnerLink = styled(ExternalLink)`
  width: 100%;
  text-align: center;
`;

const PartnerImage = styled(PartnerImg)`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  max-width: 100%;
  transition: filter 0.3s;
  :hover {
    filter: none;
  }
`;

const Partner = ({ name, img, website }) => (
  <PartnerLink href={website}>
    <PartnerImage src={img} name={`${name} logo`} />
  </PartnerLink>
);

Partner.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

export default Partner;
