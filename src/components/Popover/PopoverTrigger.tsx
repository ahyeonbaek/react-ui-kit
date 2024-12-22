import { forwardRef, ReactNode, useContext, useEffect, useRef } from "react";
import { PopoverContext } from "./index";

interface PopoverTriggerProps {
    children: ReactNode;
    className?: string;
}

const PopoverTrigger = (props: PopoverTriggerProps) => {
    const {children, className} = props;
    const {setTriggerPosition,triggerPosition, handleClickTrigger} = useContext(PopoverContext);
    const trrigerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
        calculateTrigger();
    },[])

    //트리거 위치 계산
    const calculateTrigger = () => {
        if(trrigerRef.current) {
            setTriggerPosition(trrigerRef.current.getBoundingClientRect());
        }
    }

    console.log('trrigerPosition',triggerPosition);

    return(
        <div className={`trigger ${className}`} ref={trrigerRef} onClick={handleClickTrigger} style={{width:'79px'}}>
            <button>
                {children}
            </button>
        </div>
    )
}

export default PopoverTrigger;
