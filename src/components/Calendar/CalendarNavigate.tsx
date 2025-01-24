import { FC, useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { CalendarNavigatorBaseCls } from "@consts/className";

interface CalendarNavigateProps {
  className?: string;
}

const CalendarNavigate: FC<CalendarNavigateProps> = (props) => {
  const { className } = props;
  const { handleNext, handlePrev } = useContext(CalendarContext);

  const calendarNavigatorCls = useMemo(() => {
    return className
      ? `${className} ${CalendarNavigatorBaseCls}`
      : CalendarNavigatorBaseCls;
  }, [className]);

  return (
    <div>
      <button onClick={handlePrev} className={calendarNavigatorCls}>
        prev
      </button>
      <button onClick={handleNext} className={calendarNavigatorCls}>
        next
      </button>
    </div>
  );
};

export default CalendarNavigate;
