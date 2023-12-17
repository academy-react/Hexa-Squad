import React, { useState } from "react";
import { CheckboxInput, SearchBox } from "../common";
import Select from "react-select";

const FiltersBTN = ({
  setSortType,
  setSortCal,
  setQuery,
  setFilterDiv,
  filterDiv,
  showGridView,
}) => {
  const [selectedOptionsSType, setSelectedOptionSType] = useState(null);
  const [selectedOptionsSCal, setSelectedOptionSCal] = useState(null);
  const [SortingTypeV, setSortingTypeV] = useState([
    { value: "Active", label: "دوره های فعال" },
    { value: "LastUpdate", label: "آخرین تغییرات" },
    { value: "Cost", label: "بر اساس قیمت" },
    { value: "CourseRate", label: "بر اساس محبوبیت " },
  ]);
  const [SortingCal, setSortingCal] = useState([
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ]);
  const STypeHandleChange = (selectedOption) => {
    setSelectedOptionSType(selectedOption);
    setSortType(selectedOption.value);
  };
  const SCalHandleChange = (selectedOption) => {
    setSelectedOptionSCal(selectedOption);
    setSortCal(selectedOption.value);
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
        <SearchBox
          placeholder={"جستجو ..."}
          SearchFunction={(e)=>{setQuery(e)}}
          addClass={"my-4"}
          inputClass={"focus:border-2 border-blue-800"}
        />
      </div>
      <div className="flex gap-5 text-darkblue2 lg:mr-6 lg:w-6/12 w-full justify-center">
        <Select
          value={selectedOptionsSType}
          placeholder={"دوره های فعال"}
          options={SortingTypeV}
          className="text-darkblue2 lg:w-2/3 w-full"
          onChange={STypeHandleChange}
        />
        <Select
          value={selectedOptionsSCal}
          placeholder={"نزولی"}
          options={SortingCal}
          className="text-darkblue2 lg:w-1/3 w-full"
          onChange={SCalHandleChange}
        />
      </div>
    </div>
  );
};
export default FiltersBTN;
