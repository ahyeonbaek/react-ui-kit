import { useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselNavigatorBaseCls } from "@consts/className";

interface NavigatorProps {
  className?: string;
  buttonName?: string;
}

const CarouselPrevNavigator = ({
  className,
  buttonName = "이전",
}: NavigatorProps) => {
  const { handlePrev } = useContext(CarouselContext);

  const carouselNavigatorCls = useMemo(() => {
    return className
      ? `${className} ${carouselNavigatorBaseCls}`
      : carouselNavigatorBaseCls;
  }, [className]);

  return (
    <div>
      <button onClick={handlePrev} className={carouselNavigatorCls}>
        {buttonName}
      </button>
    </div>
  );
};

export default CarouselPrevNavigator;
