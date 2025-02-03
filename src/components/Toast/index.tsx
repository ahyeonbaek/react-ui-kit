import { FC, useEffect, useMemo, useRef } from "react";
import { createRoot, Root } from "react-dom/client";
import { ToastBaseCls, ToasterBaseCls } from "@consts/className";
import ToastContent from "./ToastContent";
import ToastTitle from "./ToastTitle";
import ToastDescription from "./ToastDescription";
import ToastClose from "./ToastClose";

interface ToastProps {
  title?: string;
  description?: string;
  buttonCustom?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
}

interface ToasterProps {
  className?: string;
}

export const useToast = () => {
  const timeoutIdRef = useRef<NodeJS.Timeout>();
  const toastRootRef = useRef<Root>();

  const toast = ({
    title,
    description,
    buttonCustom,
    className,
    titleClassName,
    descriptionClassName,
    buttonClassName,
  }: ToastProps) => {
    const toastElement = document.getElementById("ui-toaster");

    if (!toastElement) return;

    // 기존 toast unmount
    if (toastRootRef.current) {
      toastRootRef.current.unmount();
    }

    //기존 setTimeout unmount
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    toastRootRef.current = createRoot(toastElement);

    const handleCloseToast = () => {
      if (toastRootRef.current) {
        toastRootRef.current.unmount();
        clearTimeout(timeoutIdRef.current);
      }
    };

    const toastCls = className ? `${className} ${ToastBaseCls}` : ToastBaseCls;

    toastRootRef.current.render(
      <ToastContent className={toastCls}>
        <ToastTitle title={title} titleClassName={titleClassName} />
        <ToastDescription
          description={description}
          descriptionClassName={descriptionClassName}
        />
        <ToastClose
          onClick={handleCloseToast}
          buttonCustom={buttonCustom}
          buttonClassName={buttonClassName}
        />
      </ToastContent>
    );

    timeoutIdRef.current = setTimeout(() => {
      if (toastRootRef.current) {
        toastRootRef.current.unmount();
        clearTimeout(timeoutIdRef.current);
      }
    }, 5000);
  };

  //컴포넌트가 언마운트될때
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      if (toastRootRef.current) {
        toastRootRef.current.unmount();
      }
    };
  }, []);
  return toast;
};

export const Toaster: FC<ToasterProps> = (props) => {
  const { className } = props;

  const ToasterCls = useMemo(() => {
    return className ? `${className} ${ToasterBaseCls}` : ToasterBaseCls;
  }, [className]);

  return <div id={"ui-toaster"} className={ToasterCls}></div>;
};
