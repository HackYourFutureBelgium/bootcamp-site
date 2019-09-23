import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import TabContext from '../../context/tab-state';
import TabbableContext from '../../context/tabbable';

// inspired by https://github.com/jeetiss/tabs

const Tabbable = ({ state: outerState, children }) => {
  const innerState = useState(0);
  const tabbable = useMemo(() => ({ tabs: 0, panels: 0 }));
  const state = outerState || innerState;

  return (
    <TabbableContext.Provider value={tabbable}>
      <TabContext.Provider value={state}>{children}</TabContext.Provider>
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
