import { ReactNode, useContext,useMemo } from "react";
import { TabsContext } from ".";
import { tabsPannelBaseCls } from "@consts/className";

interface TabsPannelProps {
  index: number;
  children: ReactNode;
  className?: string;
}

const TabsPannel = ({ children, index, className }: TabsPannelProps) => {
  const { selectedTab } = useContext(TabsContext);

  const tabsPannelCls = useMemo(() => {
    return className
    ? `${className} ${tabsPannelBaseCls}`
    : tabsPannelBaseCls;
  }, [className]);


  if (selectedTab !== index) return null;

  return <div className={tabsPannelCls}>{children}</div>;
};

export default TabsPannel;
