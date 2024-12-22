import { ReactNode } from "react";
import {tabsMenuListBaseCls} from "../../consts/className"

interface TabMenuListProps{
    children: ReactNode;
}

const TabMenuList = ({children}:TabMenuListProps) => {
    return (
        <div className={tabsMenuListBaseCls}>
            {children}
        </div>
    );
};

export default TabMenuList;