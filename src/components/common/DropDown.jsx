import React from "react";
import CheckboxInput from "./CheckboxInput";
import { useState } from "react";

const DropDown = ({
  name,
  data,
  checkBoxType,
  height,
  courseData,
  setData,
  customFunction,
}) => {
  const [checkedData, setCheckedData] = useState("");
  const dataMepper = data.map((item, index) => (
    <div className="flex p-2" key={index}>
      <input type={checkBoxType} name={name} id={name + index} />
      <label
        htmlFor={name + index}
        className="pr-10"
        onClick={() => {
          customFunction(courseData, item.category, setData, setCheckedData);
        }}
      >
        {item.label}
      </label>
    </div>
  ));
  return (
    <div className="bg-[#EAE5FF] text-[#2C007F] px-7 rounded-xl mb-5 mt-3 dark:bg-newPurpleAlpha2 dark:text-[#fff]">
      <CheckboxInput name={name} className={"checkbox"} />
      <div className="relative">
        <label
          htmlFor={name}
          className=" border-b-2 block py-[18px] w-full px-3 border-[#2C007F30] dark:border-[#fff5]"
        >
          فیلتر بر اساس موضوع
        </label>
        <i
          className={
            (checkedData == "" && "hidden") +
            " bi bi-x absolute top-[33%] left-0 text-lg text-red-500 cursor-pointer"
          }
          onClick={() => {
            customFunction(courseData, "", setData, setCheckedData);
          }}
        >حذف فیلتر </i>
      </div>

      <div
        className={"content transition-all w-full overflow-hidden " + height}
      >
        {dataMepper}
      </div>
    </div>
  );
};

export default DropDown;
