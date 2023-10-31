import React, { useState } from "react";
import { CheckboxInput, DropDown } from "../common";
import filterData from "../../core/services/filterData/filterData";
import DropDownRange from "../common/DropDownRange";

const FiltersOptions = ({ data, setData, filterDiv, setFilterDiv }) => {
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
      className={"filter-options " + (filterDiv ? "block" : "hidden")}
      id="filterDiv"
    >
      <i
        className="bi bi-x block lg:hidden text-gray text-5xl"
        title="بستن فیلتر ها"
        onClick={() => {
          setFilterDiv(!filterDiv);
        }}
      ></i>
      <DropDown
        name={"category"}
        setData={setData}
        courseData={data}
        data={categorydata}
        checkBoxType={"radio"}
        height={"h-[370px]"}
        customFunction={filterData}
      />
      <DropDownRange data={data} setData={setData} />
    </div>
  );
};

export default FiltersOptions;
