import { useContext } from "react";
import { CarouselContext } from ".";
import { carouselIndicatorCls } from "../../consts/className";

const CarouselIndicator = () => {
    const { currentPage, itemLength } = useContext(CarouselContext);

    return (
        <div className={carouselIndicatorCls}>
            {Array.from({ length: itemLength }, (_, i) => (
                <span key={i}>
                    {i === currentPage ? "●" : "○"} 
                </span> // 현재페이지와 i가 같으면 ●, 같지않으면○
            ))}
        </div>
    );
};

export default CarouselIndicator;
