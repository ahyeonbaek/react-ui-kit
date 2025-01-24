import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { PopoverBaseCls } from "@consts/className";

interface PopoverComponents {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
}

interface PopoverContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleClickTrigger: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

export const PopoverContext = createContext<PopoverContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  handleClickTrigger: () => {},
  triggerRef: { current: null },
});

interface PopoverProps {
  className?: string;
}

interface PopoverProps extends PropsWithChildren {}
const Popover: FC<PopoverProps> & PopoverComponents = (props) => {
  const { children, className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const popoverCls = useMemo(() => {
    return className ? `${className} ${PopoverBaseCls}` : PopoverBaseCls;
  }, [className]);

  const handleClickTrigger = () => setIsOpen((prev) => !prev);

  const popoverRef = useRef<HTMLDivElement>(null);

  //컨첸츠가 열려있을 때
  useEffect(() => {
    // 컨텐츠 열려있을때 컨텐츠제외 나머지 영역 클릭했을때로 바꾸기
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        // 팝오버 내부 요소를 클릭하지 않은 경우
        setIsOpen(false);
      }
    };

    if (isOpen === true) {
      // 팝오버가 열렸을 때, 외부 클릭을 허용하도록 설정
      document.addEventListener("click", handleOutsideClick);
    } else {
      // 팝오버가 닫혔을 때, 외부 클릭 이벤트 리스너 제거
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, popoverRef]);

  return (
    <PopoverContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleClickTrigger,
        triggerRef,
      }}
    >
      <div className={popoverCls} ref={popoverRef}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
