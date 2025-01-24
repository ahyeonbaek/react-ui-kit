import { FC, PropsWithChildren, createContext, useMemo } from "react";
import Backdrop from "./Backdrop";
import Content from "./Content";
import Trigger from "./Trigger";
import Close from "./Close";
import { ModalBaseCls } from "@consts/className";

interface ModalProps {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  className?: string;
}

interface ModalCompoundProps {
  Backdrop: typeof Backdrop;
  Trigger: typeof Trigger;
  Content: typeof Content;
  Close: typeof Close;
}

interface ModalContextProps {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
}

export const ModalContext = createContext<ModalContextProps>({
  onCloseModal: () => {},
  onOpenModal: () => {},
  open: false,
});

interface ModalProps extends PropsWithChildren {}
const Modal: FC<ModalProps> & ModalCompoundProps = (props) => {
  const { children, onCloseModal, onOpenModal, open, className } = props;

  const modalCls = useMemo(() => {
    return className ? `${className} ${ModalBaseCls}` : ModalBaseCls;
  }, [className]);

  return (
    <ModalContext.Provider value={{ onCloseModal, onOpenModal, open }}>
      <div className={modalCls}>{children}</div>
    </ModalContext.Provider>
  );
};
Modal.Backdrop = Backdrop;
Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Close = Close;
export default Modal;
