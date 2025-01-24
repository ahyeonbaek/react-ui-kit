import { useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselIndicatorBaseCls } from "@consts/className";

interface IndicatorProps {
  className?: string;
}

const CarouselIndicator = ({ className }: IndicatorProps) => {
  const { currentPage, itemLength } = useContext(CarouselContext);

  const CarouselIndicatorCls = useMemo(() => {
    return className
      ? `${className} ${carouselIndicatorBaseCls}`
      : carouselIndicatorBaseCls;
  }, [className]);

  return (
    <div>
      {Array.from({ length: itemLength }, (_, i) => (
        <span key={i} className={CarouselIndicatorCls}>
          {i === currentPage ? "●" : "○"}
        </span> // 현재페이지와 i가 같으면 ●, 같지않으면○
      ))}
    </div>
  );
};

export default CarouselIndicator;
