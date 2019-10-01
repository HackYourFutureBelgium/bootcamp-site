import React from 'react';
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
`;

const Partner = styled(PartnerLink)`
  margin-right: 1.6rem;
  margin-top: 2rem;
  width: 12rem;
`;

const PartnerCTA = styled(Link)`
  align-self: flex-end;
  @media (min-width: 400px) and (max-width: 1150px) {
    align-self: flex-start;
  }
`;

const FeaturedPartners = ({ ...styleProps }) => {
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
  const $partners = partners.map(p => <Partner key={p.id} {...p} />);
  return (
    <Partners {...styleProps}>
      <h2>
        <span className="stronger">Partners</span> we&apos;ve worked with
      </h2>
      <PartnerGrid>{$partners}</PartnerGrid>
      <PartnerCTA to="/partners">
        <Button inverted>Become a partner</Button>
      </PartnerCTA>
    </Partners>
  );
};

export default FeaturedPartners;
