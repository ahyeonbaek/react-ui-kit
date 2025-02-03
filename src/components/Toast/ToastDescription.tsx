import { FC } from "react";

interface descriptionProps {
  descriptionClassName?: string;
  description?: string;
}

const ToastDescription: FC<descriptionProps> = (props) => {
  const { description, descriptionClassName } = props;
  return <p className={descriptionClassName}>{description}</p>;
};

export default ToastDescription;
