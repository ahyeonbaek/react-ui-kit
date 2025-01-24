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
import { ModalCloseBaseCls } from "@consts/className";

interface CloseProps extends PropsWithChildren {
  className?: string;
}

const Close: FC<CloseProps> = (props) => {
  const { children, className } = props;
  const { onCloseModal } = useContext(ModalContext);

  const modalCloseCls = useMemo(() => {
    return className ? `${className} ${ModalCloseBaseCls}` : ModalCloseBaseCls;
  }, [className]);

  if (!children) {
    return <button onClick={onCloseModal}>X</button>;
  }

  return React.Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, {
        onClick: () => {
          onCloseModal();
        },
        className: modalCloseCls,
      });
    }
    return child;
  });
};

export default Close;
