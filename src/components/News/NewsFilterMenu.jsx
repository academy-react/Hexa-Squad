import React, { useState } from 'react';
import Select from "react-select";


const NewsFilterMenu = ({newsList,setNewsList}) => {
  const [selectedOptions, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: "", label: "همه" },
    { value: "mostPopular", label: "محبوب ترین ها" },
    { value: "mostVisited", label: "پربازدید ترین ها" },
    { value: "newsest", label: "جدید ترین ها" },
  ]);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const filterSearch = (value)=>{
    let filteredData = newsList.filter((item) => {
      return item.name.toLowerCase().indexOf(value.toLowerCase()) != -1
    });
    setNewsList(filteredData);
  }
  return (
        <div className="flex flex-row lg:mb-12 mb-8 relative">
          <ul className="news-menu">
            <li className="news-menu-box hover:rounded-r-lg">همه</li>
            <li className="news-menu-box">محبوب ترین ها</li>
            <li className="news-menu-box">پربازدید ترین ها</li>
            <li className="news-menu-box hover:rounded-l-lg">جدیدترین ها</li>
          </ul>
          <div className="flex flex-row gap-x-4 my-4 mx-auto">
            <div className="block md:hidden w-[190px] justify-center">
              <Select
                value={selectedOptions}
                placeholder={"دسته بندی ها"}
                options={options}
                className="text-darkblue2 w-full"
                onChange={handleChange}
              />
            </div>

            <div className="relative md:mr-8 w-[190px] lg:w-[333px] md:w-[280px] h-9.5 md:h-12">
              <input
                placeholder={"جستجو..."}
                type={"search"}
                name={"search"}
                id="search"
                onKeyUp={(event)=>{filterSearch(event.target.value)}}
                className="search-input text-sm md:text-base"
              />
              <i
                className={
                  "bi bi-search absolute top-2.5 md:top-3 text-base md:text-xl left-4 text-[#12124266] dark:text-[#fff]"
                }
              ></i>
            </div>
          </div>
        </div>
        
  )
}

export default NewsFilterMenu;