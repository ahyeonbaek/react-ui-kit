import { ReactNode, useMemo } from "react";
import { carouselItemListBaseCls } from "../../consts/className";

interface CarouselItemListProps {
  children: ReactNode;
  className?: string;
}

const CarouselItemList = ({ children, className }: CarouselItemListProps) => {
  const carouselItemListCls = useMemo(() => {
    return className
      ? `${className} ${carouselItemListBaseCls}`
      : carouselItemListBaseCls;
  }, [className]);

  return <div className={carouselItemListCls}>{children}</div>;
};

export default CarouselItemList;
