import { FC, ReactNode, useContext, useMemo } from "react";
import { AccordionTriggerBaseCls } from "@consts/className";
import { AccordionContext } from "./AccordionItem";

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

const AccordionTrigger: FC<AccordionTriggerProps> = (props) => {
  const { children, className } = props;
  const { handleOpenAccordion } = useContext(AccordionContext);

  const accordionTriggerCls = useMemo(() => {
    return className
      ? `${className} ${AccordionTriggerBaseCls}`
      : AccordionTriggerBaseCls;
  }, [className]);
  return (
    <div className={accordionTriggerCls} onClick={handleOpenAccordion}>
      {children}
    </div>
  );
};

export default AccordionTrigger;
