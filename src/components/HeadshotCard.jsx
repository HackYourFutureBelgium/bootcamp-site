import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExternalLink from './UI/ExternalLink';
import { colors, fonts } from '../styles/constants';
import { linkedInIcon, twitterIconWhite, emailIconWhite } from '../images/icons';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22rem;
  h4 {
    color: ${colors.darkPurple};
    font-weight: 500;
    font-size: 1.7rem;
    font-family: ${fonts.copy};
    margin: 3rem 0 0;
  }
`;

const HeadshotContainer = styled.div`
  width: 100%;
  img {
    border-radius: 50%;
    max-width: 100%;
  }
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

const HeadshotCard = ({
  firstName,
  lastName,
  role,
  twitter,
  linkedIn,
  email,
  picture,
  ...rest
}) => {
  const fullName = `${firstName} ${lastName}`;
  return (
    <Card {...rest}>
      <HeadshotContainer>
        <img src={picture} alt={fullName} />
      </HeadshotContainer>
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
            <img src={twitterIconWhite} alt={`Twitter of ${fullName}`} />
          </SocialLink>
        )}
        {email && (
          <SocialLink href={`mailto:${email}`} openInNewTab={false}>
            <img src={emailIconWhite} alt={`Email of ${fullName}`} />
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
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.string.isRequired
};

export default HeadshotCard;
