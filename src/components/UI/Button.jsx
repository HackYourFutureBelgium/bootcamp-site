import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

const Button = styled.button`
  background-color: ${props => (props.inverted ? 'inherit ' : colors.orange)};
  color: ${props => (props.inverted ? colors.orange : '#fff')};
  border: ${props => (props.inverted ? `2px solid ${colors.orange}` : 'none')};
  border-radius: 3.2rem 0;
  font-size: ${props =>
    (props.big && '1.6rem') || (props.medium && '1.4rem') || (props.small && '1.2rem')};
  padding: ${props =>
    (props.big && '1.8rem 2.5rem') ||
    (props.medium && '1.6rem 2.2rem') ||
    (props.small && '1.2rem 1.8rem')};
  :hover {
    cursor: pointer;
  }
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
