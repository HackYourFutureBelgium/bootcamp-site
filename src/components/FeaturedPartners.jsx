import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PartnerLink from './Partner';
import { Button } from './UI';
import { flattenQueriedJson } from '../util';

const Partners = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  h2 {
    margin-bottom: 3rem;
  }
  @media (max-width: 1150px) {
    width: 100%;
    align-self: flex-start;
    margin-bottom: 8rem;
  }
  @media (max-width: 880px) {
    margin-bottom: 14rem;
  }
`;

const PartnerGrid = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
`;

const Partner = styled(PartnerLink)`
  ${props => (props.right ? 'margin-left' : 'margin-right')}: 1.6rem;
  margin-top: 2rem;
  width: 12rem;
`;

const CTA = styled(Link)`
  align-self: flex-end;
  margin-top: 1.6rem;
  @media (min-width: 400px) and (max-width: 1150px) {
    align-self: ${props => (props.right ? 'flex-end' : 'flex-start')};
  }
`;

const FeaturedPartners = ({ right, ...styleProps }) => {
  const { partnerData } = useStaticQuery(graphql`
    query {
      partnerData: allPartnerJson(filter: { isFeatured: { eq: true } }) {
        edges {
          node {
            logo
            name
            website
            id
          }
        }
      }
    }
  `);

  const partners = flattenQueriedJson(partnerData);
  const $partners = partners.map(p => <Partner right={right} key={p.id} {...p} />);
  return (
    <Partners {...styleProps}>
      <h2>
        <span className="stronger">Partners</span> we&apos;ve worked with
      </h2>
      <PartnerGrid right={right}>{$partners}</PartnerGrid>
      <CTA right={right} to="/partners">
        <Button inverted>Become our partner</Button>
      </CTA>
    </Partners>
  );
};

FeaturedPartners.defaultProps = {
  right: false
};

FeaturedPartners.propTypes = {
  right: PropTypes.bool
};

export default FeaturedPartners;
