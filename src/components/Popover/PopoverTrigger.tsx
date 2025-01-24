import { ReactNode, useContext, useMemo } from "react";
import { PopoverContext } from "./index";
import { popoverTriggerBaseCls } from "@consts/className";

interface PopoverTriggerProps {
  children: ReactNode;
  className?: string;
}

const PopoverTrigger = (props: PopoverTriggerProps) => {
  const { children, className } = props;
  const { handleClickTrigger, triggerRef } = useContext(PopoverContext);

  const popoverTriggerCls = useMemo(() => {
    return className
      ? `${className} ${popoverTriggerBaseCls}`
      : popoverTriggerBaseCls;
  }, [className]);

  return (
    <button
      className={popoverTriggerCls}
      ref={triggerRef}
      onClick={handleClickTrigger}
    >
      {children}
    </button>
  );
};

export default PopoverTrigger;
