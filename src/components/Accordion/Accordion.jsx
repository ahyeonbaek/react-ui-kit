import { useState } from "react";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";

const Accordion = () => {
    const [activeIndexList, setActiveIndexList] = useState([]);

    const onClickAccordionButton = (index) => {
        //기존 배열에 index가 있는 경우
        if(activeIndexList.includes(index)){
            setActiveIndexList((prev) => 
                prev.filter((prevIndex) => prevIndex !== index));
        } else {
            setActiveIndexList((prev) => [...prev, index]);
        }
    };
    return(
        <>
            <AccordionButton 
                title={"ACC-1"}
                index = {0}
                onClickAccordionButton = {onClickAccordionButton}
            />
            <AccordionContent isActive={activeIndexList.includes(0)}>
                <div>
                    <h3>AccordionContent-1</h3>
                </div>
            </AccordionContent>
            <AccordionButton 
                title={"ACC-2"}
                index = {1}
                onClickAccordionButton = {onClickAccordionButton}
            />
            <AccordionContent isActive={activeIndexList.includes(1)}>
                <div>
                    <h3>AccordionContent-2</h3>
                </div>
            </AccordionContent>
            <AccordionButton 
                title={"ACC-3"}
                index = {2}
                onClickAccordionButton = {onClickAccordionButton}
            />
            <AccordionContent isActive={activeIndexList.includes(2)}>
                <div>
                    <h3>AccordionContent-3</h3>
                </div>
            </AccordionContent>
        </>
    );
};

export default Accordion;