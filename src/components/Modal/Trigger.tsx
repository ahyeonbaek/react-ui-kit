import React, {
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
} from "react";
import { ModalContext } from ".";
import { ModalTriggerBaseCls } from "@consts/className";

interface TriggerProps extends PropsWithChildren {
  className?: string;
}

const Trigger: FC<TriggerProps> = (props) => {
  const { children, className } = props;
  const { onOpenModal } = useContext(ModalContext);

  const modalTriggerCls = useMemo(() => {
    return className
      ? `${className} ${ModalTriggerBaseCls}`
      : ModalTriggerBaseCls;
  }, [className]);

  if (!children) {
    return <button onClick={onOpenModal}>open</button>;
  }

  return (
    <div>
      {React.Children.map(props.children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement, {
            onClick: () => {
              onOpenModal();
            },
            className: modalTriggerCls,
          });
        }
        return child;
      })}
    </div>
  );
};

export default Trigger;
