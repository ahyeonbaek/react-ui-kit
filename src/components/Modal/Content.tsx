import { FC, ReactNode, useContext, useMemo } from "react";
import { ModalContext } from ".";
import { createPortal } from "react-dom";
import { ModalContentBaseCls } from "@consts/className";

interface ContentProps {
  children: ReactNode;
  className?: string;
}

const Content: FC<ContentProps> = (props) => {
  const { children, className } = props;
  const { open } = useContext(ModalContext);

  const modalContentCls = useMemo(() => {
    return className
      ? `${className} ${ModalContentBaseCls}`
      : ModalContentBaseCls;
  }, [className]);

  return (
    <div>
      {open
        ? createPortal(
            <div
              className={modalContentCls}
              // style={{
              //   position: "fixed",
              //   zIndex: 101,
              //   width: "200px",
              //   height: "200px",
              //   backgroundColor: "rgb(255, 255, 255)",
              //   padding: "10px",
              //   borderRadius: "10px",
              // }}
            >
              {children}
            </div>,
            document.body
          )
        : null}
    </div>
  );
};

export default Content;
