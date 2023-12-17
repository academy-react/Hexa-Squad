import React, { useState } from "react";
import { CheckboxInput, DropDown } from "../common";
import filterData from "../../core/services/filterData/filterData";
import DropDownRange from "../common/DropDownRange";
import axios from "axios";
import { useEffect } from "react";
import http from "../../core/services/interceptor";
import DropDownItem from "../common/DropDownItem";

const FiltersOptions = ({
  data,
  setData,
  filterList,
  pushList,
  filterDiv,
  setListTechV,
  setList,
  setTechCount,
  setFilterDiv,
  setCostDown,
  setCostUp,
  setCourseLevelId,
  setCourseTypeId,
}) => {
  const [categoryData, setCategoryData] = useState([]);
  const [courseTypes, setCourseTypes] = useState([]);
  const [courseLevel, setCourseLevel] = useState([]);
  const getCategories = async (api, setState) => {
    try {
      const result = await http.get(api);
      try {
        setState(result);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories("/Home/GetTechnologies", setCategoryData);
    getCategories("/CourseType/GetCourseTypes", setCourseTypes);
    getCategories("/CourseLevel/GetAllCourseLevel", setCourseLevel);
  }, []);
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
        setList={setList}
        courseData={data}
        filterList={filterList}
        pushList={pushList}
        data={categoryData}
        setListV={setListTechV}
        setCount={setTechCount}
        checkBoxType={"checkbox"}
        height={"h-[320px]"}
      />
      <DropDownItem
        name={"courseTypes"}
        label={"فیلتر بر اساس نحوه برگذاری  "}
        setData={setData}
        courseData={data}
        data={courseTypes}
        setCourseID={setCourseTypeId}
        checkBoxType={"radio"}
        height={"h-[90px]"}
      />
      <DropDownItem
        name={"courseLevel"}
        label={"فیلتر بر اساس سطح دوره "}
        setData={setData}
        courseData={data}
        setCourseID={setCourseLevelId}
        data={courseLevel}
        checkBoxType={"radio"}
        height={"h-[130px]"}
      />
      <DropDownRange
        data={data}
        setData={setData}
        setCostDown={setCostDown}
        setCostUp={setCostUp}
      />
    </div>
  );
};

export default FiltersOptions;
