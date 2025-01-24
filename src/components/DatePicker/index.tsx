import Popover from "@ui/Popover";
import Calendar from "@ui/Calendar";
import { FC, useMemo, useState } from "react";
import { DatePickerBaseCls } from "@consts/className";

interface DatePicker {
  date?: Date | null; // 초기 날짜
  onChangeDate: (date: Date) => void;
  className?: string;
  popoverClassName?: string;
  popoverTriggerClassName?: string;
  popoverContentClassName?: string;
}

const DatePicker: FC<DatePicker> = (props) => {
  const { date, onChangeDate, className, popoverClassName } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>(date || null);

  const datePickerCls = useMemo(() => {
    return className ? `${className} ${DatePickerBaseCls}` : DatePickerBaseCls;
  }, [className]);

  const handleChangeDate = (date: Date) => {
    //캘린더에서 선택한 날짜
    setSelectedDate(date);
    onChangeDate(date);
  };

  return (
    <div className={datePickerCls}>
      <Popover className={popoverClassName}>
        <Popover.Trigger>
          {selectedDate ? (
            `${selectedDate.getFullYear()}-${
              selectedDate.getMonth() + 1
            }-${selectedDate.getDate()}`
          ) : (
            <p>pick a date</p>
          )}
        </Popover.Trigger>
        <Popover.Content position="bottom-left">
          <Calendar
            value={selectedDate || new Date()}
            onChange={handleChangeDate}
          >
            <Calendar.Current />
            <Calendar.Navigator />
            <Calendar.Body />
          </Calendar>
        </Popover.Content>
      </Popover>
    </div>
  );
};

export default DatePicker;
