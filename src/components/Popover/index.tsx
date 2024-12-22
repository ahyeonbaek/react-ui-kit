import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';
import { createContext,Dispatch, FC, MouseEventHandler, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from 'react';


interface PopoverComponents {
    Trigger : typeof PopoverTrigger
    Content : typeof PopoverContent;
}

interface PopoverContextProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    handleClickTrigger :React.MouseEventHandler<HTMLDivElement>;
    triggerPosition: DOMRect; //트리거 버튼의 위치
    setTriggerPosition: Dispatch<SetStateAction<DOMRect>>;
    contentPosition: DOMRect;
    setContentPosition: Dispatch<SetStateAction<DOMRect>>;
}

export const PopoverContext = createContext<PopoverContextProps>({
    isOpen: false,
    setIsOpen: () => {},
    handleClickTrigger: () => {},
    triggerPosition: null,
    setTriggerPosition: () => {},
    contentPosition: null,
    setContentPosition: () => {},
});

interface PopoverProps{
    className?:string;
}

interface PopoverProps extends PropsWithChildren{}
const Popover : FC<PopoverProps> & PopoverComponents = (props) => {
    const {children, className} = props;
    const [isOpen, setIsOpen] = useState(false);

    const[triggerPosition, setTriggerPosition] = useState<DOMRect>(null); //트리거버튼 위치
    const[contentPosition, setContentPosition] = useState<DOMRect>(null);

    const handleClickTrigger:MouseEventHandler<HTMLDivElement> = (e) => {
        (e.nativeEvent as MouseEvent).stopPropagation();
        setIsOpen((prev) => !prev);
    }

    useEffect(() => {
        console.log('isOpen 상태 변경됨:', isOpen); // 상태가 변경된 후 출력
    }, [isOpen]);

// 컨텐츠 열려있을때 컨텐츠제외 나머지 영역 클릭했을때로 바꾸기
    const handleOutSideClick = (e:MouseEvent) => {
        if (isOpen && contentPosition) {
            setIsOpen(false)
        }
    } 

    //컨첸츠가 열려있을 때
    useEffect(() => {
    if (isOpen === true) {
      // 팝오버가 열렸을 때, 외부 클릭을 허용하도록 설정
        document.addEventListener('click', handleOutSideClick);
    } else {
      // 팝오버가 닫혔을 때, 외부 클릭 이벤트 리스너 제거
        document.removeEventListener('click', handleOutSideClick);
    }

    return () => {
        document.removeEventListener('click', handleOutSideClick);
    };
    }, [isOpen,contentPosition]);

    


    return(
        <PopoverContext.Provider value={{
            isOpen,
            setIsOpen,
            handleClickTrigger,
            triggerPosition,
            setTriggerPosition,
            contentPosition,
            setContentPosition
        }}>
            <div className={className}>
                {children}
            </div>
        </PopoverContext.Provider>
    )
}

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
