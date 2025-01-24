import { useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselNavigatorBaseCls } from "@consts/className";

interface NavigatorProps {
  className?: string;
}

const CarouselNavigator = ({ className }: NavigatorProps) => {
  const { handleNext, handlePrev } = useContext(CarouselContext);

  const carouselNavigatorCls = useMemo(() => {
    return className
      ? `${className} ${carouselNavigatorBaseCls}`
      : carouselNavigatorBaseCls;
  }, [className]);

  return (
    <div>
      <button onClick={handlePrev} className={carouselNavigatorCls}>
        이전
      </button>
      <button onClick={handleNext} className={carouselNavigatorCls}>
        다음
      </button>
    </div>
  );
};

export default CarouselNavigator;
