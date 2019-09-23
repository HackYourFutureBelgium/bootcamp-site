import { createContext } from 'react';

const TabState = createContext({
  currentTabIndex: 0,
  setActiveTab: () => {}
});

export default TabState;
