import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TabContext from '../../context/tab-state';
import TabbableContext from '../../context/tabbable';

// inspired by https://github.com/jeetiss/tabs
const StyledTabbable = styled.div``;

const Tabbable = ({ state: outerState, children, ...rest }) => {
  const innerState = useState(0);
  const tabbable = useMemo(() => ({ tabs: 0, panels: 0 }));
  const state = outerState || innerState;

  return (
    <TabbableContext.Provider value={tabbable}>
      <TabContext.Provider value={state}>
        <StyledTabbable {...rest}>{children}</StyledTabbable>
      </TabContext.Provider>
    </TabbableContext.Provider>
  );
};

Tabbable.defaultProps = {
  state: null
};

Tabbable.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.number
};

export default Tabbable;
