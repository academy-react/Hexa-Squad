import React, { useState } from "react";
import { CheckboxInput, DropDown } from "../common";
import filterData from "../../core/services/filterData/filterData";

const FiltersOptions = ({ data, setData }) => {
  const [categorydata, setCategorydata] = useState([
    { label: "برنامه نویسی وب", category: "programming" },
    { label: "دیزاین", category: "design" },
    { label: "React", category: "react" },
    { label: "ادیت ویدیو", category: "edit" },
    { label: "Ruby", category: "Ruby" },
    { label: "TypeScript", category: "TypeScript" },
    { label: "Sass", category: "Sass" },
    { label: "TailwindCss", category: "TailwindCss" },
    { label: "همه", category: "" },
  ]);
  return (
    <div
      className="transition-all overflow-hidden w-full md:h-full md:w-0 opacity-0 h-0"
      id="filterDiv"
    >
      <DropDown
        name={"category"}
        setData={setData}
        courseData={data}
        data={categorydata}
        checkBoxType={"radio"}
        height={"h-[370px]"}
        customFunction={filterData}
      />
      <DropDown
        name={"price"}
        setData={setData}
        courseData={data}
        data={[{label:"خریدنی"},{label: "رایگان"}, {label:"همه"}]}
        checkBoxType={"radio"}
        height={"h-[130px]"}
      />
    </div>
  );
};

export default FiltersOptions;
