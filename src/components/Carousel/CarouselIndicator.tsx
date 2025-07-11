import { useContext, useMemo, useState } from "react";
import { CarouselContext } from ".";
import { carouselIndicatorBaseCls } from "@consts/className";

interface IndicatorProps {
  className?: string;
  currentSymbol?: any;
  otherSymbol?: any;
}

const CarouselIndicator = ({
  className,
  currentSymbol = "●",
  otherSymbol = "○",
}: IndicatorProps) => {
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
          {i === currentPage ? currentSymbol : otherSymbol}
        </span>
      ))}
    </div>
  );
};

export default CarouselIndicator;
