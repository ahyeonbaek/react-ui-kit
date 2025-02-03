import { FC } from "react";

interface titleProps {
  title?: string;
  titleClassName?: string;
}

const ToastTitle: FC<titleProps> = (prop) => {
  const { title, titleClassName } = prop;

  return <p className={titleClassName}>{title}</p>;
};

export default ToastTitle;
