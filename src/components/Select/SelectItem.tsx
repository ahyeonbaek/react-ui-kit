import { FC, ReactNode, useContext, useMemo } from "react";
import { SelectContext } from ".";
import { SelectItemBaseCls } from "@consts/className";

interface SelectItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

const SelectItem: FC<SelectItemProps> = (props) => {
  const { value, children, className } = props;
  const { handleSelectItem } = useContext(SelectContext);

  const selectItemCls = useMemo(() => {
    return className ? `${className} ${SelectItemBaseCls}` : SelectItemBaseCls;
  }, [className]);

  return (
    <div
      onClick={() => handleSelectItem(value, children)}
      className={selectItemCls}
    >
      {children}
    </div>
  );
};

export default SelectItem;
