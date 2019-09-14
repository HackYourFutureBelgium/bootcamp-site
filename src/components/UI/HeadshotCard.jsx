import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ExternalLink from './ExternalLink';
import { colors, fonts } from '../../styles/constants';

import linkedInIcon from '../../images/icons/linkedin.svg';
import twitterIcon from '../../images/icons/twitter.svg';
import emailIcon from '../../images/icons/email-white.svg';

const Card = styled.div`
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    color: ${colors.darkPurple};
    font-weight: 500;
    font-size: 1.7rem;
    font-family: ${fonts.copy};
    margin: 3rem 0 0;
  }
`;

const Headshot = styled(Img)`
  border-radius: 50%;
  width: 100%;
`;

const Socials = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SocialLink = styled(ExternalLink)`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background: ${colors.orange};
  margin-right: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const HeadshotCard = ({ image, name, title, twitter, linkedIn, email }) => (
  <Card>
    <Headshot fixed={image} alt={name} />
    <h4>
      <strong>{name}</strong>
    </h4>
    <p>{title}</p>
    <Socials>
      {linkedIn && (
        <SocialLink href={twitter}>
          <img src={linkedInIcon} alt={`LinkedIn of ${name}`} />
        </SocialLink>
      )}
      {twitter && (
        <SocialLink href={linkedIn}>
          <img src={twitterIcon} alt={`Twitter of ${name}`} />
        </SocialLink>
      )}
      {emailIcon && (
        <SocialLink href={`mailto:${email}`} openInNewTab={false}>
          <img src={emailIcon} alt={`Email of ${name}`} />
        </SocialLink>
      )}
    </Socials>
  </Card>
);

HeadshotCard.defaultProps = {
  twitter: null,
  linkedIn: null,
  email: null
};

HeadshotCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
  email: PropTypes.string
};

export default HeadshotCard;
