import React from "react";
import CheckboxInput from "./checkboxInput";
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
      <input type={checkBoxType} name={name} className="m-1 accent-cyan-950" id={name + index} />
      <label
        htmlFor={name + index}
        className="pr-5"
        onClick={() => {
          customFunction(courseData, item.techName, setData, setCheckedData);
        }}
      >
        {item.techName}
      </label>
    </div>
  ));
  return (
    <div className="bg-[#EAE5FF] overflow-hidden text-[#2C007F] pr-4 rounded-xl mb-5 mt-3 dark:bg-newPurpleAlpha2 dark:text-[#fff]">
      <CheckboxInput name={name} className={"checkbox"} />
      <div className="relative">
        <label
          htmlFor={name}
          className=" border-b-2 block py-[18px] xl:px-20 px-24 w-full border-[#2C007F30] dark:border-[#fff5]"
        >
          فیلتر بر اساس موضوع
        </label>
        <i
          className={
            (checkedData == "" && "hidden") +
            " bi bi-x absolute top-[33%] left-5 text-xl text-red-500 cursor-pointer"
          }
          onClick={() => {
            customFunction(courseData, "", setData, setCheckedData);
          }}
        > <span className="text-lg"> حذف فیلتر</span></i>
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
