/* For use together with src/components/UI/Tab */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { usePanels } from '../../hooks';
// import { colors } from '../../styles/constants';

const StyledPanel = styled.article`
  position: relative;
  z-index: 2;
`;

const Panel = ({ children, ...rest }) => {
  const isActive = usePanels();

  return isActive ? <StyledPanel {...rest}>{children}</StyledPanel> : null;
};

Panel.propTypes = {
  children: PropTypes.node.isRequired
};

export default Panel;
