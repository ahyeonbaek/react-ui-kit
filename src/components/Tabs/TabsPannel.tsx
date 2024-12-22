import { ReactNode, useContext,} from "react";
import { TabsContext } from ".";
import { tabsPannelBaseCls } from "../../consts/className";

interface TabsPannelProps {
    index: number;
    children: ReactNode;
}

const TabsPannel = ({children, index} : TabsPannelProps) => {
    const {selectedTab} = useContext(TabsContext);

    if (selectedTab !== index) return null;

    return(
        <div className={tabsPannelBaseCls}>
            {children}
        </div>
    );
};

export default TabsPannel;
