import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  FC,
  PropsWithChildren,
  useMemo,
} from "react";
import CarouselItemList from "./CarouselItemList";
import CarouselItem from "./CarouselItem";
import CarouselNavigator from "./CarouselNavigator";
import CarouselIndicator from "./CarouselIndicator";
import { carouselBaseCls } from "../../consts/className";

interface CarouselContextProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>; //상태 업데이트 함수
  itemLength: number;
  handleNext: () => void;
  handlePrev: () => void;
}

interface CarouselProps {
  itemLength: number;
  className?: string;
}

interface CarouselCompoundProps {
  ItemList: typeof CarouselItemList;
  Item: typeof CarouselItem;
  Navigator: typeof CarouselNavigator;
  Indicator: typeof CarouselIndicator;
}

export const CarouselContext = createContext<CarouselContextProps>({
  //다른 컴포넌트들에게 전달하기 위함
  currentPage: 0,
  setCurrentPage: () => {},
  itemLength: 0,
  handleNext: () => {},
  handlePrev: () => {},
});

interface CarouselProps extends PropsWithChildren {}
const Carousel: FC<CarouselProps> & CarouselCompoundProps = (props) => {
  const { children, itemLength, className } = props;
  const [currentPage, setCurrentPage] = useState<number>(0); //현재 페이지 인덱스 = 0

  const carouselCls = useMemo(() => {
    return className ? `${className} ${carouselBaseCls}` : carouselBaseCls;
  }, [className]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % itemLength);
  }; //다음버튼 함수 , 마지막페이지에서 다음버튼을 누르면 첫번째 페이지로 넘어감

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + itemLength) % itemLength);
  }; //이전버튼 함수, 전페이지로 넘아감

  return (
    <CarouselContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        itemLength,
        handleNext,
        handlePrev,
      }} // 다른 컴포넌트에서 useContext()를 사용해 사용 할 수 있음
    >
      <div className={carouselCls}>{children}</div>
    </CarouselContext.Provider>
  );
};

Carousel.ItemList = CarouselItemList;
Carousel.Item = CarouselItem;
Carousel.Navigator = CarouselNavigator;
Carousel.Indicator = CarouselIndicator;

export default Carousel;
