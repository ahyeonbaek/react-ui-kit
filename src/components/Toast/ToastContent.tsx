import { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
  className?: string;
}

const ToastContent = ({ children, className }: ContentProps) => {
  return <div className={className}>{children}</div>;
};

export default ToastContent;
