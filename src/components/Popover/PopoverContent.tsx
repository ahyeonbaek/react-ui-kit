import { ReactNode, useRef, useContext, useEffect, CSSProperties } from "react";
import { PopoverContext } from "./index";
import { createPortal } from "react-dom";

interface PopoverContentProps{
    children: ReactNode;
    className?: string;
    position ?: 'bottom-left' | 'bottom-right' | 'bottom-center';
}

const PopoverContent = (props : PopoverContentProps) => {
    const {children, className , position = 'bottom-left'} = props;
    const {isOpen, setContentPosition, contentPosition, triggerPosition, setTriggerPosition} = useContext(PopoverContext);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(isOpen === true) {
            calculateCurrent();
            console.log('isOpen상태', isOpen);
            console.log('contentPostion', contentPosition);
        }

    }, [isOpen]);
    
    const calculateCurrent = () => { //content위치
        if(contentRef.current) {
            setContentPosition(contentRef.current.getBoundingClientRect());
            console.log('contentPosition', contentPosition)
        }
    }
    

    useEffect(() => {
        console.log('Updated contentPosition:', contentPosition);
    }, [contentPosition]);

    const portalRoot = document.getElementById('popover-root'); // html에서 id가 popover-root인 요소 반환
    console.log("portalRoot:", portalRoot);
    if(!portalRoot) return;


    const calculateTriggerPosition = () => {
        const triggerElement = document.querySelector(".trigger"); //className이 trigger인 요소
        if (triggerElement) {
            setTriggerPosition(triggerElement.getBoundingClientRect());
        }
    }; 

    useEffect(() => {
        window.addEventListener("resize", calculateTriggerPosition); //브라우저 창의 크기가 변할때
        return () => {
            window.removeEventListener("resize", calculateTriggerPosition);
        } 
    }, []);


    const positionStyles = () : CSSProperties => {

        switch (position) {
            case "bottom-left" :
                return {
                    position: 'absolute',
                    top: `${triggerPosition.bottom + 20}px`,
                    left: 0,
                };
            case "bottom-center" :
                return {
                    position: 'absolute',
                    top: `${triggerPosition.bottom + 20}px`,
                    left: `${79 / 2}px` //버튼 크기의 절반
                };
            case "bottom-right" : 
                return {
                    position: 'absolute',
                    top: `${triggerPosition.bottom + 20}px`,
                    left: '79px',
                }
        }
    }


    return( 
        <div>
        {isOpen ? createPortal( //외부 dom
        <div ref={contentRef} className={className} style={positionStyles()}>
            {children}
        </div>,
        portalRoot
    ):null}
    </div>
)
}

export default PopoverContent;