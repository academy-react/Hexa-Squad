import React, { useState } from "react";
import { CheckboxInput } from "../common";
import Select from "react-select";
import filterData from "../../core/services/filterData/filterData";

const FiltersBTN = ({data,setData}) => {
  const [selectedOptions, setSelectedOption] = useState(null);
  const [filterDiv, setFilterDiv] = useState(null);
  const [options, setOptions] = useState([
    { value: "programming", label: "جدیدترین ها" },
    { value: "design", label: "پر بازدید ترین ها" },
    { value: "edit", label: "پرطرفدار ترین ها"},
  ]);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const showFilterDiv = () => {
    if (
      filterDiv.className ==
      "transition-all overflow-hidden w-full md:h-full md:w-0 opacity-0 h-0"
    ) {
      filterDiv.classList.remove("md:w-0", "opacity-0",'h-0');
      filterDiv.classList.add("md:w-4/12",'h-full');
    } else {
      filterDiv.classList.remove("md:w-4/12", 'h-full');
      filterDiv.classList.add("md:w-0", "opacity-0",'h-0');
    }
  };
  const filterSearch = (value)=>{
    let filteredData = data.filter((item) => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) != -1
    });
    setData(filteredData);
  }
  setTimeout(() => {
    setFilterDiv(document.getElementById("filterDiv"));
  }, 500);
  return (
    <div className="filter-btn-section">
      <div className="flex gap-5 lg:w-4/12 w-full justify-center">
        <CheckboxInput name={"openFilter"} />
        <label htmlFor="openFilter" onClick={showFilterDiv}>
          فیلتر
          <i className="bi bi-filter"></i>
        </label>
        <CheckboxInput name={"changeCardStyle"} />
        <label
          htmlFor="changeCardStyle"
          className=" w-[95px] overflow-hidden relative flex gap-2 justify-around items-center h-[50px] text-2xl bg-transparentPurple border-[3px] border-[#fff] py-1 px-2 cursor-pointer rounded-xl"
        >
          <span className="absolute w-1/2 h-full left-0 top-0 z-0 bg-[#fff] dark:bg-[#33335f] rounded transition-all"></span>
          <i className="bi bi-list-ul relative z-10"></i>
          <i className="bi bi-columns-gap relative z-10"></i>
        </label>
      </div>
      <div className="flex gap-5 w-full lg:pr-6">
        <div className="relative my-4 w-full h-12">
          <input
            placeholder={"جستوجو..."}
            type={"search"}
            name={"search"}
            id="search"
            onKeyUp={(event)=>{filterSearch(event.target.value)}}
            className="field-input outline-none text-darkblue2"
          />
          <i
            className={
              "bi bi-search absolute  top-3 text-xl left-4 text-[#12124266] dark:text-[#fff] "
            }
          ></i>
        </div>
      </div>
      <div className="flex gap-5 text-darkblue2 lg:w-6/12 w-full justify-center">
        <Select
          value={selectedOptions}
          placeholder={'بر اساس :'}
          options={options}
          className="text-darkblue2 lg:w-[220px] w-full"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default FiltersBTN;
