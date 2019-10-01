import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';
import { colors } from '../styles/constants';
import { quotesIcon } from '../images/icons';

const Card = styled.article`
  box-shadow: 0 0 30px 9px rgba(81, 81, 81, 0.1);
  width: 50rem;
  padding: 3rem 3rem 3rem 5rem;
  position: relative;
  @media (max-width: 540px) {
    width: 90vw;
  }
  ::before,
  ::after {
    content: ' ';
    position: absolute;
    width: 10rem;
    height: 7rem;
    background-image: url(${quotesIcon});
    background-position: top left;
    background-repeat: no-repeat;
    opacity: 0.6;
  }
  ::before {
    top: -6rem;
    left: 2rem;
    transform: rotate(180deg);
  }
  ::after {
    bottom: -6rem;
    right: 2rem;
  }
  p {
    line-height: 2.2;
    font-style: italic;
    margin-bottom: 1rem;
  }
`;

const Quotee = styled.div`
  display: flex;
  @media (max-width: 400px) {
    margin-top: 2rem;
  }
`;

const HeadshotContainer = styled.div`
  margin-right: 2rem;
  width: 7rem;
  @media (max-width: 400px) {
    width: 5rem;
  }
`;

const Headshot = styled(Img)`
  max-width: 100%;
  border-radius: 50% 50% 0 50%;
`;

const Subject = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    color: ${colors.darkPurple};
    font-size: 1.6rem;
    margin: 1rem 0 0.6rem;
    @media (max-width: 400px) {
      margin: 0 0 0.6rem;
    }
  }
  span {
    font-style: italic;
    font-size: 1.4rem;
  }
`;

const QuoteCard = ({ by, from, pic, children, ...rest }) => (
  <Card {...rest}>
    <p>{children}</p>
    <Quotee>
      <HeadshotContainer>
        <Headshot fluid={pic} alt={by} />
      </HeadshotContainer>
      <Subject>
        <h5>{by}</h5>
        <span>{from}</span>
      </Subject>
    </Quotee>
  </Card>
);

QuoteCard.defaultProps = {};

QuoteCard.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pic: PropTypes.object.isRequired,
  by: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired
};

export default QuoteCard;
