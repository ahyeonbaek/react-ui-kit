import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";

const Accordion = () => {
    const onClickAccordionButton = (index) => {
        console.log(index);
        setActiveIndex(index);
    };
    return(
        <>
            <AccordionButton 
                title={"ACC-1"}
                index = {0}
                onClickAccordionButton = {onClickAccordionButton}
            />
            <AccordionContent isActive={activeIndex === 0}>
                <div>
                    <h3>AccordionContent-1</h3>
                </div>
            </AccordionContent>
            <AccordionButton 
                title={"ACC-2"}
                index = {1}
                onClickAccordionButton = {onClickAccordionButton}
            />
            <AccordionContent isActive={activeIndex === 1}>
                <div>
                    <h3>AccordionContent-2</h3>
                </div>
            </AccordionContent>
            <AccordionButton 
                title={"ACC-3"}
                index = {2}
                onClickAccordionButton = {onClickAccordionButton}
            />
            <AccordionContent isActive={activeIndex === 2}>
                <div>
                    <h3>AccordionContent-3</h3>
                </div>
            </AccordionContent>
        </>
    );
};

export default Accordion;