import { useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselNavigatorBaseCls } from "@consts/className";

interface NavigatorProps {
  className?: string;
  buttonName?: string;
}

const CarouselNextNavigator = ({
  className,
  buttonName = "다음",
}: NavigatorProps) => {
  const { handleNext } = useContext(CarouselContext);

  const carouselNavigatorCls = useMemo(() => {
    return className
      ? `${className} ${carouselNavigatorBaseCls}`
      : carouselNavigatorBaseCls;
  }, [className]);

  return (
    <div>
      <button onClick={handleNext} className={carouselNavigatorCls}>
        {buttonName}
      </button>
    </div>
  );
};

export default CarouselNextNavigator;
