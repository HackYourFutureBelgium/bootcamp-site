import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import slugify from 'slugify';
import { Link } from 'gatsby';

import { colors } from '../styles/constants';
import { Button, Card, ExternalLink, TextTruncate } from './UI';

const Project = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 3fr 2fr;
  max-width: 68rem;
  grid-template-areas:
    'crest content'
    'crest footer';
  column-gap: 3rem;
  padding: 2rem;
  @media (max-width: 680px), (min-width: 860px) and (max-width: 1200px) {
    grid-template-rows: 17rem 1fr;
    column-gap: 2rem;
    grid-template-areas:
      'crest content'
      'footer footer';
  }
  @media (max-width: 861px) {
    grid-template-columns: 2fr 5fr;
  }
  @media (max-width: 620px) {
    grid-template-rows: 16rem 1fr;
  }
  @media (max-width: 460px) {
    grid-template-areas:
      'content content'
      'footer footer';
  }
`;

const Crest = styled(Link)`
  grid-area: crest;
  align-self: center;
  max-width: 16rem;
  @media (min-width: 500px) and (max-width: 680px) {
    align-self: start;
  }
  @media (max-width: 460px) {
    display: none;
  }
  img {
    max-width: 100%;
  }
`;

const Content = styled.section`
  grid-area: content;
  h3 {
    margin-bottom: 1rem;
  }
  h4 {
    margin: 0 0 1rem;
  }
  p {
    width: 100%;
    height: 5rem;
  }
  > span {
    color: ${colors.purple};
  }
`;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  @media (max-width: 460px) {
    flex-direction: column;
  }
  h4 {
    margin: 0;
  }
  > a {
    align-self: flex-end;
    margin-bottom: 1rem;
    @media (max-width: 1200px) {
      margin-bottom: 0;
    }
    @media (max-width: 460px) {
      margin-top: 2rem;
    }
  }
`;

const Partners = styled.div``;

const PartnerLink = styled(ExternalLink)`
  margin-right: 1rem;
  margin-top: 1rem;
  height: 6rem;
  display: inline-block;
  img {
    max-width: 100%;
  }
`;

const ProjectCard = ({ id, year, crest, name, month, description, monthNumber, partners }) => {
  const $partners = partners.map(p => (
    <PartnerLink key={`${id}-${p.name}`} href={p.website}>
      <img src={p.logo} alt={`${p.name} logo`} />
    </PartnerLink>
  ));
  const slug = slugify(name, { replacement: '-', lower: true });
  const href = `/projects/${year}/${monthNumber}/${slug}`;

  return (
    <Project>
      <Crest to={href}>
        <img src={crest} alt={`${name} logo`} />
      </Crest>
      <Content>
        <h3>{name}</h3>
        <span>
          {month} {year}
        </span>
        <TextTruncate element="p" line={2} text={description} />
      </Content>
      <Footer>
        <div>
          <h4>Partners</h4>
          <Partners>{$partners}</Partners>
        </div>
        <Link to={href}>
          <Button inverted small>
            Read more &gt;
          </Button>
        </Link>
      </Footer>
    </Project>
  );
};

ProjectCard.defaultProps = {};

ProjectCard.propTypes = {
  year: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  crest: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  monthNumber: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  partners: PropTypes.object.isRequired
};

export default ProjectCard;
