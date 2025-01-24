import { FC, useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { CalendarBodyBaseCls } from "@consts/className";

interface CalendarBodyProps {
  className?: string;
}

const CalendarBody: FC<CalendarBodyProps> = (props) => {
  const { className } = props;
  const { currentDate, handleSelectDate } = useContext(CalendarContext);
  const year = currentDate.getFullYear(); // 현재 년도
  const month = currentDate.getMonth(); // 현재 월

  const calendarBodyCls = useMemo(() => {
    return className
      ? `${className} ${CalendarBodyBaseCls}`
      : CalendarBodyBaseCls;
  }, [className]);

  // 해당 월의 1일과 마지막 날 계산
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // 달력에 표시할 시작일
  const startDate = new Date(
    firstDayOfMonth.getFullYear(),
    firstDayOfMonth.getMonth(),
    firstDayOfMonth.getDate() - firstDayOfMonth.getDay()
  );

  // 마지막날
  const endDate = new Date(
    lastDayOfMonth.getFullYear(),
    lastDayOfMonth.getMonth(),
    lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()) //시작날짜와 반대
  );

  // startDate부터 endDate까지 날짜 배열
  const calendar = [];
  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    calendar.push(new Date(date)); // 새 날짜 객체를 배열에 추가
  }

  return (
    <div>
      {calendar.map((date, index) => {
        return (
          <button
            key={`date-cell-${index}`}
            onClick={() => handleSelectDate(date)}
            className={calendarBodyCls}
          >
            {date.getDate()}
          </button>
        );
      })}
    </div>
  );
};

export default CalendarBody;
