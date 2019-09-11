import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles/constants';

const StyledButton = styled.button`
  background-color: ${colors.orange};
  color: #fff;
  border: none;
  padding: 1.9rem 2.5rem;
  border-radius: 3.2rem 0;
  :hover {
    cursor: pointer;
  }
`;

const Button = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

Button.defaultProps = {
  inverted: false
};

Button.propTypes = {
  inverted: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Button;
