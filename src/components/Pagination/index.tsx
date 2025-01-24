import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
  createContext,
  useMemo,
} from "react";
import PaginationNavigator from "./PaginationNavigator";
import PaginationPageButton from "./PaginationPageButton";
import { PaginationBaseCls } from "@consts/className";

interface PaginationComponentsProps {
  Navigator: typeof PaginationNavigator;
  PageButtons: typeof PaginationPageButton;
}

interface PaginationContextProps {
  currentPage: number; //초기 페이지
  setCurrentPage: Dispatch<SetStateAction<number>>;
  itemLength: number;
  handleNext: () => void;
  handlePrev: () => void;
  itemsPerPage: number;
  totalPages: number;
  startPage: number;
  endPage: number;
}

interface PaginationProps {
  itemLength: number; //전체 아이템 개수
  value: number; //선택한한 페이지
  onPageChange: (page: number) => void; //페이지 변경
  itemsPerPage: number; // 한 페이지당 보여지는 아이템 수
  className?: string;
}

export const PaginationContext = createContext<PaginationContextProps>({
  currentPage: 1,
  setCurrentPage: () => {},
  itemLength: 0,
  handleNext: () => {},
  handlePrev: () => {},
  itemsPerPage: 10,
  totalPages: 1,
  startPage: 1,
  endPage: 1,
});

interface PaginationProps extends PropsWithChildren {}
const Pagination: FC<PaginationProps> & PaginationComponentsProps = (props) => {
  const { children, itemLength, value, onPageChange, itemsPerPage, className } =
    props;
  const [currentPage, setCurrentPage] = useState<number>(value);

  const paginationCls = useMemo(() => {
    return className ? `${className} ${PaginationBaseCls}` : PaginationBaseCls;
  }, [className]);

  if (itemsPerPage === undefined) {
    console.log("itemsPerPage를 입력해주세요");
  }

  const totalPages = Math.ceil(itemLength / itemsPerPage);
  const buttonsPerPage = 10; // 한 번에 보여줄 버튼 수

  const startPage =
    Math.floor((currentPage - 1) / buttonsPerPage) * buttonsPerPage + 1; // 1 or 11
  const endPage = Math.min(startPage + buttonsPerPage - 1, totalPages); // 10 or 20

  const handleNext = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      onPageChange(nextPage);
    } else {
      console.log("마지막페이지 입니다.");
      return;
    }
  };

  const handlePrev = () => {
    if (currentPage === 1) return;
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    onPageChange(prevPage);
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        itemLength,
        handleNext,
        handlePrev,
        itemsPerPage,
        totalPages,
        startPage,
        endPage,
      }}
    >
      <span className={paginationCls}>Pagination</span>
      {children}
    </PaginationContext.Provider>
  );
};

Pagination.Navigator = PaginationNavigator;
Pagination.PageButtons = PaginationPageButton;
export default Pagination;
