import React, { useState } from "react";
import { CheckboxInput, SearchBox } from "../common";
import Select from "react-select";

const FiltersBTN = ({
  data,
  setData,
  setFilterDiv,
  filterDiv,
  showGridView,
}) => {
  const [selectedOptions, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: "newest", label: "جدیدترین ها" },
    { value: "mostView", label: "پر بازدید ترین ها" },
    { value: "popular", label: "پرطرفدار ترین ها" },
  ]);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const filterSearch = (value) => {
    let filteredData = data.filter((item) => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) != -1;
    });
    setData(filteredData);
  };
  return (
    <div className="filter-btn-section">
      <div className="flex gap-5 lg:w-4/12 w-full justify-center">
        <CheckboxInput name={"openFilter"} />
        <label 
        className="relative"
          htmlFor="openFilter"
          onClick={() => {
            setFilterDiv(!filterDiv);
          }}
        >
          فیلتر
          <i className="bi bi-filter"></i>
        </label>
        <CheckboxInput name={"changeCardStyle"} />
        <label
          htmlFor="changeCardStyle"
          onClick={showGridView}
          className=" w-[95px] overflow-hidden relative flex gap-2 justify-around items-center h-[50px] text-2xl bg-transparentPurple border-[3px] border-[#fff] py-1 px-2 cursor-pointer rounded-xl"
        >
          <span className="absolute w-1/2 h-full left-0 top-0 z-0 bg-[#fff] dark:bg-[#33335f] rounded transition-all"></span>
          <i className="bi bi-list-ul relative z-10"></i>
          <i className="bi bi-columns-gap relative z-10"></i>
        </label>
      </div>
      <div className="flex gap-5 w-full lg:pr-6">
        <SearchBox placeholder={"جستجو ..."} SearchFunction={filterSearch} addClass={"my-4"} inputClass={'focus:border-2 border-blue-800'} />
      </div>
      <div className="flex gap-5 text-darkblue2 lg:w-6/12 w-full justify-center">
        <Select
          value={selectedOptions}
          placeholder={"بر اساس :"}
          options={options}
          className="text-darkblue2 lg:w-[220px] w-full"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default FiltersBTN;
