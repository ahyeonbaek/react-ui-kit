import { FC } from "react";

interface closeProps {
  buttonCustom?: string;
  onClick?: () => void;
  buttonClassName?: string;
}

const ToastClose: FC<closeProps> = (props) => {
  const { buttonCustom, onClick, buttonClassName } = props;

  return (
    <div className={buttonClassName}>
      <button onClick={onClick}>{buttonCustom ? buttonCustom : "x"}</button>
    </div>
  );
};

export default ToastClose;
