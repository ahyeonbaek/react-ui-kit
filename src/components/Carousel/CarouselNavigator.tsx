import  { useContext } from "react";
import { CarouselContext } from ".";
import { carouselNavigatorCls } from "../../consts/className";

const CarouselNavigator = () => {
    const { handleNext, handlePrev } = useContext(CarouselContext);

    return (
        <div className={carouselNavigatorCls}>
            <button onClick={handlePrev}>이전</button>
            <button onClick={handleNext}>다음</button>
        </div>
    );
};

export default CarouselNavigator;
