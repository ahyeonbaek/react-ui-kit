import { FC, ReactNode, useMemo } from "react";
import Popover from "@ui/Popover";
import { SelectContentBaseCls } from "@consts/className";

interface SelectContentProps {
  children: ReactNode;
  className?: string;
}
const SelectContent: FC<SelectContentProps> = (props) => {
  const { children, className } = props;

  const selectContentCls = useMemo(() => {
    return className
      ? `${className} ${SelectContentBaseCls}`
      : SelectContentBaseCls;
  }, [className]);

  return (
    <Popover.Content className={selectContentCls} position="bottom-left">
      {children}
    </Popover.Content>
  );
};

export default SelectContent;
