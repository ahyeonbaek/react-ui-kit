import { ReactNode} from "react";
import { carouselItemListCls } from "../../consts/className";


interface CarouselItemListProps {
    children: ReactNode; 
}

const CarouselItemList = ({ children }: CarouselItemListProps) => {
    return (
        <div className={carouselItemListCls}>
            {children}  
        </div>
    );
};

export default CarouselItemList;
