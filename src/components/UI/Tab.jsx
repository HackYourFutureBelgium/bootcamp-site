import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useTabs } from '../../hooks';
import { colors } from '../../styles/constants';

const StyledTab = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  height: 5.5rem;
  width: 20rem;
  border-radius: 3.6rem 3.6rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.purple};
  background-color: ${props => (props.isActive ? '#fff' : colors.offWhite)};
  font-weight: ${props => (props.isActive ? 'bolder' : 'normal')};
  margin-left: 2.5rem;
  box-shadow: 0 0 22px 2px rgba(81, 81, 81, 0.1);
`;

const Tab = ({ children, ...rest }) => {
  const { onClick, isActive } = useTabs();

  return (
    <StyledTab isActive={isActive} onClick={onClick} {...rest}>
      {children}
    </StyledTab>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired
};

export default Tab;
