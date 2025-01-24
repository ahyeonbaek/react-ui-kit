import { FC, useContext, useMemo } from "react";
import { PaginationContext } from "./index";
import { PaginationButtonBaseCls } from "@consts/className";

interface PageButtonProps {
  className?: string;
}

const PaginationPageButton: FC<PageButtonProps> = (props) => {
  const { className } = props;
  const { setCurrentPage, currentPage, startPage, endPage } =
    useContext(PaginationContext);
  const pageButtons = [];

  const paginationButtonCls = useMemo(() => {
    return className
      ? `${className} ${PaginationButtonBaseCls}`
      : PaginationButtonBaseCls;
  }, [className]);

  for (let button = startPage; button <= endPage; button++) {
    // 총 페이지 수 만큼 버튼생성성
    pageButtons.push(
      <button
        key={button}
        onClick={() => setCurrentPage(button)}
        disabled={currentPage === button}
        className={paginationButtonCls}
      >
        {button}
      </button>
    );
  }
  return <div>{pageButtons}</div>;
};

export default PaginationPageButton;
