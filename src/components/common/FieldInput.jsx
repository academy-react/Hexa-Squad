import React, { Fragment } from "react";
import { ErrorMessage, Field } from "formik";
const FieldInput = ({ placeholder, name, icon, classIcon, type }) => {
  return (
    <div className="relative w-full pb-3">
      <div className="relative my-4 w-full h-12 ">
        <Field
          placeholder={placeholder}
          type={type}
          name={name}
          className="field-input3 ml-14 md:ml-0"
        />
        {/* <i
          className={"bi bi-" + icon + " absolute top-3 left-1 " + classIcon}
        ></i> */}
      </div>
      <ErrorMessage
        name={name}
        component={"span"}
        className="absolute bottom-0 md:right-0 text-[#A80065] pr-2 right-12 text-sm md:text-base whitespace-nowrap"
      />
    </div>
  );
};

export default FieldInput;
