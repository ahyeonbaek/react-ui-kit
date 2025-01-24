import { FC, useContext, useMemo } from "react";
import { CalendarContext } from "./index";
import { CalendarCurrentBaseCls } from "@consts/className";

interface CalendarCurrentProps {
  className?: string;
}

const CalendarCurrent: FC<CalendarCurrentProps> = (props) => {
  const { className } = props;
  const { currentDate } = useContext(CalendarContext);

  const calendarCurrentCls = useMemo(() => {
    return className
      ? `${className} ${CalendarCurrentBaseCls}`
      : CalendarCurrentBaseCls;
  }, [className]);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const day = currentDate.getDate();

  return (
    <div>
      <p className={calendarCurrentCls}>
        {year} - {month + 1} - {day}
      </p>
    </div>
  );
};

export default CalendarCurrent;
