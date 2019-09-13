import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledCard = styled.div`
  width: 40rem;
  background: #fff;
  padding: 2rem 3rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  ${props =>
    props.accentPosition === 'left'
      ? `border-left: 4px solid ${colors.pink};`
      : `border-right: 4px solid ${colors.pink};`}
`;

const Card = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

Card.defaultProps = {
  accentPosition: 'left'
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  accentPosition: PropTypes.oneOf(['left', 'right'])
};

export default Card;
