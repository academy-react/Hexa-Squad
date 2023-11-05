import React, { useState } from "react";
import { CheckboxInput, DropDown } from "../common";
import filterData from "../../core/services/filterData/filterData";
import DropDownRange from "../common/DropDownRange";
import axios from "axios";
import { useEffect } from "react";

const FiltersOptions = ({ data, setData, filterDiv, setFilterDiv }) => {
  const [categoryData, setCategoryData] = useState([
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
  const getCategories = async ()=>{
    try {
      const result = await axios.get('https://api-academy.iran.liara.run/api/Home/GetTechnologies')
      try {
        setCategoryData(result.data)
        console.log(result.data)
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCategories()
  }, [])
  
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
        data={categoryData}
        checkBoxType={"checkbox"}
        height={"h-[300px]"}
        customFunction={filterData}
      />
      <DropDownRange data={data} setData={setData} />
    </div>
  );
};

export default FiltersOptions;
