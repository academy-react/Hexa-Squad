import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Input from "react-input-mask";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validation } from "../../core/validations/validations";

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
    /۹/g
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
export default function PersianCalendar() {
  const [date, setDate] = useState({});

  return (
    <div >
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={date}
        onChange={(date) => {
          if (date) {
            setDate(date);
          }
        }}
        render={<InputMask />}
      />
    </div>
  );
}

function InputMask({ value, handleValueChange, openCalendar }) {
  const valueFinal = value ? fixNumbers(value.toString()) : null;
  return (
            <Field  dir="ltr"
                name="birthDate"
                className="editProf-field-input w-[300px] pl-48"
                locale={persian_fa}
                mask="9999/99/99"
                maskChar="-"
                onFocus={openCalendar}
                onChange={handleValueChange}
                value={valueFinal} 
            />
            
  );
}