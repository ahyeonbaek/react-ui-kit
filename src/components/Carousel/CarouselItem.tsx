import { useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselItemBaseCls } from "@consts/className";

interface CarouselItemProps {
  page: number;
  className?: string;
}

const CarouselItem = ({ page, className }: CarouselItemProps) => {
  const { currentPage } = useContext(CarouselContext); // useContext를 이용해 CarouselContext에서 받아옴

  const CarouselItemCls = useMemo(() => {
    return className
      ? `${className} ${carouselItemBaseCls}`
      : carouselItemBaseCls;
  }, [className]);

  return page === currentPage ? ( //page와 현재 페이지가 맞을 때 해당 페이지만 렌더링, 나머지는 보이지 않게함
    <div className={CarouselItemCls}>Page {currentPage + 1}</div>
  ) : null;
};

export default CarouselItem;
