import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  FC,
  useMemo,
} from "react";
import TabMenuList from "./TabMenuList";
import TabsMenu from "./TabsMenu";
import TabsPannel from "./TabsPannel";
import { tabsBaseCls } from "@consts/className";

interface TabsProps {
  children: ReactNode;
  className?: string;
}

interface TabsContextProps {
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
}

export const TabsContext = createContext<TabsContextProps>({
  selectedTab: 1,
  setSelectedTab: () => {},
});

interface TabsCompoundProps {
  MenuList: typeof TabMenuList;
  Menu: typeof TabsMenu;
  Pannel: typeof TabsPannel;
}

const Tabs: FC<TabsProps> & TabsCompoundProps = (props) => {
  const { children, className } = props;
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleChangeTabIndex: Dispatch<SetStateAction<number>> = (index) => {
    //console.log(index);
    if (selectedTab === index) return;
    setSelectedTab(index);
  };

  const contextValue: TabsContextProps = {
    selectedTab,
    setSelectedTab: handleChangeTabIndex,
  };

  const tabsCls = useMemo(() => {
    return className ? `${className} ${tabsBaseCls}` : tabsBaseCls;
  }, [className]);

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={tabsCls}>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.MenuList = TabMenuList;
Tabs.Menu = TabsMenu;
Tabs.Pannel = TabsPannel;

export default Tabs;
