import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledButton = styled.button`
  background-color: ${colors.orange};
  color: #fff;
  border: none;
  border-radius: 3.2rem 0;
  font-size: 1.4rem;
  padding: 1.6rem 2.2rem;
  :hover {
    cursor: pointer;
  }
`;

const BigButton = styled(StyledButton)`
  font-size: 1.6rem;
  padding: 1.8rem 2.5rem;
`;

const SmallButton = styled(StyledButton)`
  font-size: 1.2rem;
  padding: 1.2rem 1.8rem;
`;

const Button = ({ big, medium, small, children, ...rest }) => {
  let ButtonComponent = StyledButton;
  if (big) ButtonComponent = BigButton;
  else if (small) ButtonComponent = SmallButton;

  return <ButtonComponent {...rest}>{children}</ButtonComponent>;
};

Button.defaultProps = {
  inverted: false,
  big: false,
  medium: true,
  small: false
};

Button.propTypes = {
  inverted: PropTypes.bool,
  children: PropTypes.node.isRequired,
  big: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool
};

export default Button;
