import { FC, ReactNode, useContext, useMemo } from "react";
import { AccordionContentBaseCls } from "@consts/className";
import { AccordionContext } from "./AccordionItem";

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent: FC<AccordionContentProps> = (props) => {
  const { children, className } = props;
  const { isOpen } = useContext(AccordionContext);

  const accordionContentCls = useMemo(() => {
    return className
      ? `${className} ${AccordionContentBaseCls}`
      : AccordionContentBaseCls;
  }, [className]);
  return isOpen ? <div className={accordionContentCls}>{children}</div> : null;
};

export default AccordionContent;
