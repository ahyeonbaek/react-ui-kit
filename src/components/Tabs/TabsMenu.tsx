import { ReactNode, useContext, useMemo } from "react";
import { TabsContext } from ".";
import { tabsMenuBaseCls } from "@consts/className";

interface TabsMenuProps {
  index: number;
  children: ReactNode;
  className?: string;
}

const TabsMenu = ({ index, children, className }: TabsMenuProps) => {
  const { setSelectedTab } = useContext(TabsContext);

  const tabsMenuCls = useMemo(() => {
    return className ? `${className} ${tabsMenuBaseCls}` : tabsMenuBaseCls;
  }, [className]);

  return (
    <div onClick={() => setSelectedTab(index)} className={tabsMenuCls}>
      {children}
    </div>
  );
};

export default TabsMenu;
