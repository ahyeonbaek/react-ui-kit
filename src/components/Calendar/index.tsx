import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
  createContext,
  useEffect,
  useMemo,
} from "react";
import CalendarBody from "./CalendarBody";
import CalendarCurrent from "./CalendarCurrent";
import CalendarNavigate from "./CalendarNavigate";
import { CalendarBaseCls } from "@consts/className";

interface CalendarComponentProps {
  Body: typeof CalendarBody;
  Current: typeof CalendarCurrent;
  Navigator: typeof CalendarNavigate;
}

interface CalendarProps {
  onChange: (newDate: Date) => void;
  value: Date;
  className?: string;
}

interface CalendarContextProps {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  handleNext: () => void;
  handlePrev: () => void;
  handleSelectDate: (date: Date) => void;
}

export const CalendarContext = createContext<CalendarContextProps>({
  currentDate: new Date(), //현재 날짜
  setCurrentDate: () => {},
  handleNext: () => {},
  handlePrev: () => {},
  handleSelectDate: () => {},
});

interface CalendarProps extends PropsWithChildren {}
const Calendar: FC<CalendarProps> & CalendarComponentProps = (props) => {
  const { children, onChange, value, className } = props;
  const [currentDate, setCurrentDate] = useState<Date>(value); // 현재 날짜

  const calendarCls = useMemo(() => {
    return className ? `${className} ${CalendarBaseCls}` : CalendarBaseCls;
  }, [className]);

  const handleNext = () => {
    const newDate = new Date(currentDate); //현재 날짜의 객체를 만듦
    newDate.setMonth(newDate.getMonth() + 1); //다음 달로 설정
    setCurrentDate(newDate);
    onChange(newDate);
  };

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
    onChange(newDate);
  };

  const handleSelectDate = (date: Date) => {
    setCurrentDate(date);
    onChange(date);
  };

  useEffect(() => {
    console.log(currentDate);
  }, [currentDate]);

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        handleNext,
        handlePrev,
        handleSelectDate,
      }}
    >
      <div className={calendarCls}>{children}</div>
    </CalendarContext.Provider>
  );
};

Calendar.Body = CalendarBody;
Calendar.Navigator = CalendarNavigate;
Calendar.Current = CalendarCurrent;

export default Calendar;
