import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledHighlight = styled.span`
  background-color: ${colors.yellow};
`;

const Button = ({ children, ...rest }) => {
  return <StyledHighlight {...rest}>{children}</StyledHighlight>;
};

Button.defaultProps = {
  bold: true
};

Button.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Button;
