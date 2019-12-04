import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledCard = styled.article`
  background: #fff;
  padding: 2rem 3rem;
`;

const BorderedCard = styled(StyledCard)`
  ${props =>
    props.accentPosition === 'left'
      ? `
        border-left: 5px solid ${colors.pink};
        box-shadow: 2px 2px 22px 1px rgba(0, 0, 0, 0.1);
        `
      : `
        border-right: 5px solid ${colors.pink};
        box-shadow: -2px 2px 22px 1px rgba(0, 0, 0, 0.1);
        `}
`;

const Card = ({ children, hasAccent, ...rest }) => {
  if (!hasAccent) return <StyledCard {...rest}>{children}</StyledCard>;
  return <BorderedCard {...rest}>{children}</BorderedCard>;
};

Card.defaultProps = {
  accentPosition: 'left',
  hasAccent: true
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hasAccent: PropTypes.bool,
  accentPosition: PropTypes.oneOf(['left', 'right'])
};

export default Card;
