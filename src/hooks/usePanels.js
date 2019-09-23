import { useContext, useMemo } from 'react';
import TabContext from '../context/tab-state';
import TabbableContext from '../context/tabbable';

const usePanels = () => {
  const [currentTabIndex] = useContext(TabContext);
  const tabbable = useContext(TabbableContext);

  const panelIndex = useMemo(() => {
    const currentIndex = tabbable.panels;
    tabbable.panels += 1;

    return currentIndex;
  });

  return panelIndex === currentTabIndex;
};

export default usePanels;
