import { FC, useContext, useMemo } from "react";
import Popover from "@ui/Popover";
import { SelectContext } from ".";
import { SelectTriggerBaseCls } from "@consts/className";

interface SelectTriggerProps {
  className?: string;
}

const SelectTrigger: FC<SelectTriggerProps> = (props) => {
  const { className } = props;
  const { currentItem } = useContext(SelectContext);

  const selectTriggerCls = useMemo(() => {
    return className
      ? `${className} ${SelectTriggerBaseCls}`
      : SelectTriggerBaseCls;
  }, [className]);

  return (
    <Popover.Trigger className={selectTriggerCls}>
      {currentItem.label}
    </Popover.Trigger>
  );
};

export default SelectTrigger;
