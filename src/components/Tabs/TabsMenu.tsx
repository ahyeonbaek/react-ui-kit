import { ReactNode , useContext} from "react";
import { TabsContext } from ".";

interface TabsMenuProps{
    index: number;
    children: ReactNode;
}

const TabsMenu = ({ index , children}:TabsMenuProps) =>{
    const { setSelectedTab} = useContext(TabsContext);

    return(
        <div onClick={() => setSelectedTab(index)}>
            {children}
        </div>
    );

};

export default TabsMenu;