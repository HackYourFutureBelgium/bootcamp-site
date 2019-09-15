import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { colors } from '../styles/constants';
import { quotesIcon } from '../images/icons';

const Card = styled.article`
  box-shadow: 0 0 30px 9px rgba(81, 81, 81, 0.1);
  width: 50rem;
  padding: 3rem 3rem 3rem 5rem;
  position: relative;
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
`;

const Headshot = styled(Img)`
  margin-right: 2rem;
  border-radius: 50% 50% 0 50%;
`;

const Subject = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    color: ${colors.darkPurple};
    font-size: 1.6rem;
    margin: 1rem 0 0.6rem;
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
      <Headshot fixed={pic} alt={by} />
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
