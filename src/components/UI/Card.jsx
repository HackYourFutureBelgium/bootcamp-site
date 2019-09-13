import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledCard = styled.div`
  width: 40rem;
  background: #fff;
  padding: 2rem 3rem;
  ${props =>
    props.accentPosition === 'left'
      ? `
        border-left: 5px solid ${colors.pink};
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
        `
      : `
        border-right: 5px solid ${colors.pink};
        box-shadow: -2px 2px 4px 0px rgba(0, 0, 0, 0.2);
        `}
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
