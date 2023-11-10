import React, { useState } from 'react';
import Select from "react-select";
import { CheckboxInput, SearchBox } from '../common';
import NewsCategoriesFilter from './NewsCategoriesFilter';
import NewsSortFilter from './NewsSortFilter';


const NewsFilterMenu = ({newsData, newsAllData, filterDiv, setFilterDiv, setNewsData}) => {
  // const [selectedOptions, setSelectedOption] = useState(null);
  // const [options, setOptions] = useState([
  //   { value: "", label: "همه" },
  //   { value: "mostPopular", label: "محبوب ترین ها" },
  //   { value: "mostVisited", label: "پربازدید ترین ها" },
  //   { value: "newsest", label: "جدید ترین ها" },
  // ]);
  // const handleChange = (selectedOption) => {
  //   setSelectedOption(selectedOption);
  // };
  const filterSearch = (value)=>{
    let filteredData = newsData.filter((item) => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) != -1
    });
    setNewsData(filteredData);
  }
  return (
        <div className="flex flex-row gap-x-4 px-8 lg:mb-12 mb-8 relative">
          <div className="hidden lg:block">
          <CheckboxInput name={"openFilter"} />
          <label 
          className="relative my-4 "
            htmlFor="openFilter"
            onClick={() => {
              setFilterDiv(!filterDiv);
            }}
          >
            فیلتر
            <i className="bi bi-filter hidden md:block"></i>
          </label></div>
          <ul className="hidden lg:flex flex-row lg:w-[835px] w-[500px] h-12 rounded-[10px] my-auto text-xs lg:text-base text-center text-lightblue border-2 border-lightblue">
            <li className="news-menu-box hover:rounded-r-lg">همه</li>
            <li className="news-menu-box">محبوب ترین ها</li>
            <li className="news-menu-box">پربازدید ترین ها</li>
            <li className="news-menu-box hover:rounded-l-lg">جدیدترین ها</li>
          </ul>
          <div className="flex flex-row gap-x-4 md:gap-x-8 my-4 mx-auto">
            <div className="lg:hidden">
              <CheckboxInput name={"openFilter"} />
              <label 
              className="relative"
                htmlFor="openFilter"
                onClick={() => {
                  setFilterDiv(!filterDiv);
                }}
              >
                فیلتر
                <i className="bi bi-filter hidden md:block"></i>
              </label>
            </div>
            <div className="block lg:hidden w-36 md:w-[200px]">
              {/* <Select
                value={selectedOptions}
                placeholder={"دسته بندی ها"}
                options={options}
                className="text-darkblue2"
                onChange={handleChange}
              /> */}
              <NewsSortFilter/>
            </div>
            <SearchBox 
              placeholder={"جستجو..."} 
              SearchFunction={filterSearch}
              inputClass={"text-sm lg:text-base pr-4 lg:pr-7"}
              addClass={"relative w-36 md:w-[300px] lg:w-[333px] h-10 md:h-12"}
            />
          </div>
        </div>
        
  )
}

export default NewsFilterMenu;