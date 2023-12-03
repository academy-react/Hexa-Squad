import React from "react";
import { Field } from "formik";

import DatePicker from "react-multi-date-picker";
// import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import MakeDatePickerDatePersian from "./MakeDatePickerDatePersian";

// import InputMask from "react-input-mask";

const PersianCalendarNew = ({datePickerDateTime,setDatePickerDateTime}) => {

  const handleDatePicker = (value) => {
    const date = value.toDate();

    const persianDate = MakeDatePickerDatePersian(date);

    setDatePickerDateTime(persianDate);
  };

  return(
    <div className="w-[370px] h-[78px] mx-auto my-[6px] relative z-[1px]">
      <div
        className={`border-[3px] border-solid border-bluePrimary w-full h-[45px]  grid grid-cols-9 rounded-full`}
      >
        <i
          className={`fi fi-rr-cake-birthday text-[25px] mt-[5px] bg-transparent text-center  text-bluePrimary  col-span-1 rounded-s-full`}
        ></i>

        <DatePicker
          mapDays={({ date }) => {
            let props = {};
            let isWeekend = date.weekDay.index === 6;

            if (isWeekend) props.className = "highlight highlight-red";

            return props;
          }}
          value={datePickerDateTime}
          onChange={(e) => handleDatePicker(e)}
          inputClass="custom-input"
          className="custom-calendar"
          // animations={[transition()]}
          calendar={persian}
          calendarPosition="bottom-center"
          locale={persian_fa}
        />
      </div>
    </div>
  )
}
export default PersianCalendarNew;