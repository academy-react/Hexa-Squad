import React, { useState } from "react";
import { CheckboxInput, DropDown } from "../common";

const FiltersOptions = ({data ,setData}) => {
    const [categorydata, setCategorydata] = useState([
        'برنامه‌نویسی وب','design','React','edit','Ruby','TypeScript','Sass','TailwindCss','همه'
    ])
  return (
    <div
      className="transition-all px-10 overflow-hidden w-0 opacity-0"
      id="filterDiv"
    >
        <DropDown name={'category'} setData={setData} courseData={data} data={categorydata} checkBoxType={'radio'} height={'h-[370px]'}/>
        <DropDown name={'price'} setData={setData} courseData={data} data={['خریدنی' ,'رایگان','همه']} checkBoxType={'radio'} height={'h-[130px]'}/>
    </div>
  );
};

export default FiltersOptions;
