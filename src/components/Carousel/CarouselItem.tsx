import {useContext} from "react";
import { CarouselContext } from ".";
import { carouselNavigatorCls } from "../../consts/className";

interface CarouselItemProps {
    page: number;
}

const CarouselItem = ({ page }: CarouselItemProps) => {
    const { currentPage } = useContext(CarouselContext); // useContext를 이용해 CarouselContext에서 받아옴

    return (page === currentPage) ? ( //page와 현재 페이지가 맞을 때 해당 페이지만 렌더링, 나머지는 보이지 않게함
        <div className={carouselNavigatorCls}>
            Page {currentPage + 1}
        </div>
    ) : null;
};

export default CarouselItem;
