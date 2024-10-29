import { useState } from "react";
import TabMenu from "./TabMenu";
import TabContent from "./TabContent";

const _data = [
    {title: "TabMenu", content: ""},
    {title: "TabMenu", content: ""},
    {title: "TabMenu", content: ""},
    {title: "TabMenu", content: ""},
];

const Tab = (props) => {
    const {data } = props;
    const [activeIndex,setActiveIndex] = useState(0); //현재 활성화 된 TabMenu index;

    const onClickTabMenu = (tabIndex) => {
        setActiveIndex(tabIndex);
        console.log(tabIndex);
    }
    
    return (
        <div>
            {data?.map((value, index) => (
                <TabMenu
                key={`tab-menu-index-${index}`}
                title={value.title}
                index={index}
                onClickTabMenu={onClickTabMenu}
                />
            ))}
            {data?.map((value, index) => (
                <TabContent
                key={`tab-content-index-${index}`}
                isActive={index === activeIndex}
                >
                {value.content}
                </TabContent>
            ))}
            </div>
        );
};

export default Tab;