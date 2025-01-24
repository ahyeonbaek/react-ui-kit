import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
  createContext,
} from "react";
import { AccordionItemBaseCls } from "@consts/className";

interface AccordionItemProps {
  children: ReactNode;
  className?: string;
}

interface AccordionContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenAccordion: () => void;
}

export const AccordionContext = createContext<AccordionContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  handleOpenAccordion: () => {},
});

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const { children, className } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const accordionItemCls = useMemo(() => {
    return className
      ? `${className} ${AccordionItemBaseCls}`
      : AccordionItemBaseCls;
  }, [className]);

  return (
    <AccordionContext.Provider
      value={{ isOpen, setIsOpen, handleOpenAccordion }}
    >
      <div className={accordionItemCls}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default AccordionItem;
