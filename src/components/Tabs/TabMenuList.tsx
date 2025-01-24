import { ReactNode, useMemo } from "react";
import { tabsMenuListBaseCls } from "@consts/className";

interface TabMenuListProps {
  children: ReactNode;
  className?: string;
}

const TabMenuList = ({ children, className }: TabMenuListProps) => {
  const tabsMenuListCls = useMemo(() => {
    return className
      ? `${className} ${tabsMenuListBaseCls}`
      : tabsMenuListBaseCls;
  }, [className]);

  return <div className={tabsMenuListCls}>{children}</div>;
};

export default TabMenuList;
