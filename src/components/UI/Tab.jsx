import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useTabs } from '../../hooks';
// import { colors } from '../../styles/constants';

const StyledTab = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
`;

const Tab = ({ children, ...rest }) => {
  const { onClick } = useTabs();

  return (
    <StyledTab onClick={onClick} {...rest}>
      {children}
    </StyledTab>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired
};

export default Tab;
