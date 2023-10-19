import React, { useState, useEffect } from "react";
import Select from "react-select";

import PaginationTable from "../common/PaginationTable";
import TitleSection from "./titleSection";
const PanelCourses = ({title,AllData}) => {
  const [options, setOptions] = useState([
    { value:3, label: 3 },
    { value: 5, label: 5},
    { value: 6, label: 6 },
    { value: 8, label: 8 },
    { value: 10, label: 10 },
  ]);
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState(allData);
  const [selectedOptions, setSelectedOption] = useState(null);
  const [countInPage, setCountInPage] = useState(6);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setCountInPage(selectedOption.value);
    console.log('set ' + countInPage)
  };
  const filterSearch = (value)=>{
    let filteredData = allData.filter((item) => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) != -1
    });
    setData(filteredData);
  }

  useEffect(() => {
    setData(AllData);
    setAllData(AllData);
  }, []);

  return (
    <>
      <TitleSection title={title} />
      <div className="flex md:flex-row flex-col-reverse gap-3 my-3 w-full items-center text-[#666]">
        <div className="md:w-3/12 w-full md:px-10" dir="rtl">

        <Select
          value={selectedOptions}
          placeholder={6}
          options={options}
          className="text-darkblue2  w-full"
          onChange={handleChange}
        />
        </div>
        <div className="relative bg md:w-11/12  w-full h-12 overflow-hidden border-[3px] border-[#3F40EA30] rounded-2xl">
          <i className="bi bi-search absolute right-4 top-3 "></i>
          <input
            type="search" 
            onKeyUp={(event)=>{filterSearch(event.target.value)}}
            placeholder="... جستجوی دوره"
            className="bg-transparentPurple text-right px-10 w-[105%] h-[107%] absolute top-[-2px] right-[-2px]"
          />
        </div>
      </div>
      <PaginationTable data={data} itemsPerPage={countInPage} />
    </>
  );
};

export default PanelCourses;
