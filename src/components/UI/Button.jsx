import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

// "medium" is default prop so must come last in conditionals
const Button = styled.button`
  background-color: ${props => (props.inverted ? 'inherit ' : colors.orange)};
  color: ${props => (props.inverted ? colors.orange : '#fff')};
  border: ${props => (props.inverted ? `2px solid ${colors.orange}` : 'none')};
  border-radius: 3.2rem 0;
  font-size: ${props =>
    (props.big && '1.6rem') || (props.small && '1.3rem') || (props.medium && '1.4rem')};
  padding: ${props =>
    (props.big && '1.8rem 2.5rem') ||
    (props.small && '1.2rem 1.8rem') ||
    (props.medium && '1.6rem 2.2rem')};
  :hover {
    cursor: pointer;
  }
  transition: all 300ms;
`;

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
