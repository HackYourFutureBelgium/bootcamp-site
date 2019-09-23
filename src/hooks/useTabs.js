import { useContext, useMemo } from 'react';
import TabContext from '../context/tab-state';
import TabbableContext from '../context/tabbable';

const useTabs = () => {
  const [currentTabIndex, setActive] = useContext(TabContext);
  const elements = useContext(TabbableContext);

  const tabIndex = useMemo(() => {
    const currentIndex = elements.tabs;
    elements.tabs += 1;

    return currentIndex;
  });

  const onClick = useMemo(() => () => setActive(tabIndex));

  const state = useMemo(
    () => ({
      isActive: currentTabIndex === tabIndex,
      onClick
    }),
    [currentTabIndex, onClick, tabIndex]
  );

  return state;
};

export default useTabs;
