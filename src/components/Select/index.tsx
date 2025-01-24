import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import SelectContent from "./SelectContent";
import SelectItem from "./SelectItem";
import SelectTrigger from "./SelectTrigger";
import Popover from "../Popover";
import { SelectBaseCls } from "@consts/className";

interface SelectCompoundsProps {
  Content: typeof SelectContent;
  Item: typeof SelectItem;
  Trigger: typeof SelectTrigger;
}

interface SelectProps extends PropsWithChildren {
  onChange: (value: string) => void;
  value: string;
  className?: string;
}

interface SelectContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;

  handleSelectItem: (value: string, label: ReactNode) => void;
  currentItem: { value: string; label: ReactNode };
  setCurrentItem: Dispatch<SetStateAction<{ value: string; label: ReactNode }>>;
}

export const SelectContext = createContext<SelectContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  handleSelectItem: () => {},
  currentItem: { value: "", label: "" },
  setCurrentItem: () => {},
});

const Select: FC<SelectProps> & SelectCompoundsProps = (props) => {
  const { children, onChange, className } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<{
    value: string;
    label: ReactNode;
  }>({ value: "", label: "select Trigger" });

  const selectCls = useMemo(() => {
    return className ? `${className} ${SelectBaseCls}` : SelectBaseCls;
  }, [className]);

  const handleSelectItem = (value: string, label: ReactNode) => {
    setCurrentItem({ value, label });
    onChange(value);
  };

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleSelectItem,
        currentItem,
        setCurrentItem,
      }}
    >
      <Popover className={selectCls}>{children}</Popover>
    </SelectContext.Provider>
  );
};

Select.Content = SelectContent;
Select.Item = SelectItem;
Select.Trigger = SelectTrigger;

export default Select;
