import AccordionItem from "./AccordionItem";
import AccordionContent from "./AccordionContent";
import AccordionTrigger from "./AccordionTrigger";
import { FC, ReactNode, useMemo } from "react";
import { AccordionBaseCls } from "@consts/className";

interface AccordionCompounds {
  Item: typeof AccordionItem;
  Content: typeof AccordionContent;
  Trigger: typeof AccordionTrigger;
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

const Accordion: FC<AccordionProps> & AccordionCompounds = (props) => {
  const { children, className } = props;

  const AccordionCls = useMemo(() => {
    return className ? `${className} ${AccordionBaseCls}` : AccordionBaseCls;
  }, [className]);

  return <div className={AccordionCls}>{children}</div>;
};

Accordion.Item = AccordionItem;
Accordion.Content = AccordionContent;
Accordion.Trigger = AccordionTrigger;

export default Accordion;
