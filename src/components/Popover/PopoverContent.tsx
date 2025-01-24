import { ReactNode, useRef, useContext, CSSProperties, useMemo } from "react";
import { PopoverContext } from "./index";
import { createPortal } from "react-dom";
import { PopoverContentBaseCls } from "@consts/className";

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
  position?: "bottom-left" | "bottom-right" | "bottom-center";
}

const PopoverContent = (props: PopoverContentProps) => {
  const { children, className, position } = props;
  const { isOpen, triggerRef } = useContext(PopoverContext);

  const popoverContentCls = useMemo(() => {
    return className
      ? `${className} ${PopoverContentBaseCls}`
      : PopoverContentBaseCls;
  }, [className]);

  const contentRef = useRef<HTMLDivElement>(null);

  const positionStyles = (): CSSProperties => {
    if (!triggerRef.current) return {};
    const triggerRect = triggerRef.current.getBoundingClientRect();
    switch (position) {
      case "bottom-left":
        return {
          position: "absolute",
          top: `${triggerRect.bottom}px`,
          left: `${triggerRect.left}px`,
        };
      case "bottom-center":
        return {
          position: "absolute",
          top: `${triggerRect.bottom + 10}px`,
          left: `${triggerRect.left + 79 / 2}px`, //버튼 크기의 절반
        };
      case "bottom-right":
        return {
          position: "absolute",
          top: `${triggerRect.bottom}px`,
          left: "79px",
        };
      default:
        return {};
    }
  };

  return (
    <div>
      {isOpen
        ? createPortal(
            //외부 dom
            <div
              ref={contentRef}
              className={popoverContentCls}
              style={positionStyles()}
            >
              {children}
            </div>,
            document.body
          )
        : null}
    </div>
  );
};

export default PopoverContent;
