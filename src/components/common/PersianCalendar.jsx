import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Input from "react-input-mask";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validation } from "../../core/validations/validations";
// import InputMask from "react-input-mask";

const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
  fixNumbers = function (str) {
    if (typeof str === "string") {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };
export default function PersianCalendar({ date, setDate }) {
  console.log(date);
  // show Default Date
  // const defaultDate = birthDate.birthDate
  // const year = defaultDate.slice(0, 4)
  // const month = defaultDate.slice(5, 7)
  // const day = defaultDate.slice(8, 10)

  return (
    <div>
      <DatePicker
        // calendar={persian}
        // locale={persian_fa}
        value={date}
        // defaultValue={new Date(2020, 1, 1)}
        onChange={(date) => {
          setDate(date.year + "-" + date.month.number + "-" + date.day);
        }}
        render={
          date && (
            <InputMask
              year={date.slice(0, 4)}
              month={date.slice(5, 7)}
              day={date.slice(8, 10)}
            />
          )
        }
      />
    </div>
  );
}

function InputMask({
  year,
  month,
  day,
  value,
  handleValueChange,
  openCalendar,
}) {
  const valueFinal = value ? fixNumbers(value.toString()) : null;

  return (
    <Input
      dir="ltr"
      className="editProf-field-input w-[300px] pl-48"
      // locale={persian_fa}
      mask="9999/99/99"
      maskChar="-"
      onFocus={openCalendar}
      onChange={handleValueChange}
      value={valueFinal}
      defaultValue={`${year}${month}${day}`}
    />
  );
}
