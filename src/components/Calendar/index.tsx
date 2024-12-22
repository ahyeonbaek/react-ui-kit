// import { Dispatch, FC, PropsWithChildren, SetStateAction, useState, createContext } from "react";
// import CalendarBody from "./CalendarBody";
// import CalendarCurrent from "./CalendarCurrent";
// import CalendarNavigate from "./CalendarNavigate";

// interface CalendarComponentProps {
//     Body: typeof CalendarBody;
//     Current: typeof CalendarCurrent;
//     Navigator: typeof CalendarNavigate;
// }

// interface CalendarProps {
//     onChange: (newDate: Date) => void;
//     value: Date;
// }

// interface CalendarContextProps {
//     currentDate : Date;
//     setCurrentDate : Dispatch<SetStateAction<Date>>;
//     handleNext: () => void;
//     handlePrev : () =>  void;
// }

// export const CalendarContext = createContext<CalendarContextProps>({
//     currentDate: new Date(), //현재 날짜
//     setCurrentDate: () => {},
//     handleNext: () => {},
//     handlePrev: () => {},
// });

// interface CalendarProps extends PropsWithChildren {} 
// const Calendar : FC<CalendarProps> & CalendarComponentProps = (props) => {
//     const {children, onChange, value} = props;
//     const [currentDate, setCurrentDate] = useState<Date>(new Date());  // 현재 날짜짜

//     const handleNext = () => {
//         const newDate = new Date(currentDate); //현재 날짜의 객체를 만듦
//         newDate.setMonth(newDate.getMonth() + 1 ); //다음 달로 설정
//         setCurrentDate(newDate);
//     }

//     const handlePrev = () => {
//         const newDate = new Date(currentDate);
//         newDate.setMonth(newDate.getMonth() - 1);
//         setCurrentDate(newDate);
//     }

//     return(
//         <CalendarContext.Provider value={{currentDate, setCurrentDate, handleNext, handlePrev}}>
//             <div>
//                 {children}
//             </div>
//         </CalendarContext.Provider>
//     )
// }

// Calendar.Body = CalendarBody;
// Calendar.Navigator = CalendarNavigate;
// Calendar.Current = CalendarCurrent;

// export default Calendar;
