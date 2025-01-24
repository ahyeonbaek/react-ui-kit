import { FC, useContext, useMemo } from "react";
import { PaginationContext } from "./index";
import { PaginationNavigatorBaseCls } from "@consts/className";

interface NavigatorProps {
  className?: string;
}

const PaginationNavigator: FC<NavigatorProps> = (props) => {
  const { className } = props;
  const { currentPage, handleNext, handlePrev, totalPages } =
    useContext(PaginationContext);

  const paginationNavigatorCls = useMemo(() => {
    return className
      ? `${className} ${PaginationNavigatorBaseCls}`
      : PaginationNavigatorBaseCls;
  }, [className]);

  return (
    <div>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={paginationNavigatorCls}
      >
        prev
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={paginationNavigatorCls}
      >
        next
      </button>
    </div>
  );
};

export default PaginationNavigator;
