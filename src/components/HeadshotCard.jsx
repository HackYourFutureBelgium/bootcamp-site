import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import unorm from 'unorm';
import HeadshotImg from './HeadshotImg';
import ExternalLink from './UI/ExternalLink';
import { colors, fonts } from '../styles/constants';

import linkedInIcon from '../images/icons/linkedin.svg';
import twitterIcon from '../images/icons/twitter.svg';
import emailIcon from '../images/icons/email-white.svg';

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

const Headshot = styled(HeadshotImg)`
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

const HeadshotCard = ({ firstName, lastName, role, twitter, linkedIn, email }) => {
  // remove all accents and diatrics from a string
  const normalize = str => {
    const combining = /[\u0300-\u036F]/g;
    return unorm.nfkd(str).replace(combining, '');
  };

  const fullName = `${firstName} ${lastName}`;
  return (
    <Card>
      <Headshot src={`${normalize(firstName)}-${normalize(lastName)}.jpg`} name={fullName} />
      <h4>
        <strong>{fullName}</strong>
      </h4>
      <p>{role}</p>
      <Socials>
        {linkedIn && (
          <SocialLink href={linkedIn}>
            <img src={linkedInIcon} alt={`LinkedIn of ${fullName}`} />
          </SocialLink>
        )}
        {twitter && (
          <SocialLink href={twitter}>
            <img src={twitterIcon} alt={`Twitter of ${fullName}`} />
          </SocialLink>
        )}
        {email && (
          <SocialLink href={`mailto:${email}`} openInNewTab={false}>
            <img src={emailIcon} alt={`Email of ${fullName}`} />
          </SocialLink>
        )}
      </Socials>
    </Card>
  );
};

HeadshotCard.defaultProps = {
  twitter: null,
  linkedIn: null,
  email: null
};

HeadshotCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
  email: PropTypes.string
};

export default HeadshotCard;
