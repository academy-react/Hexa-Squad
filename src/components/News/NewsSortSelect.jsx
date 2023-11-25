import React, { Fragment, useState } from 'react';
import Select from "react-select";
import NewsestNews from '../../core/services/api/GetData/getNewsData/NewestNews';
import MostVisitedNews from '../../core/services/api/GetData/getNewsData/MostVisitedNews';
import fetchNewsApi from '../../core/services/api/GetData/getNewsData/allNewsApi';
import FavoritesNews from '../../core/services/api/GetData/getNewsData/FavoritesNews';

const NewsSortSelect = ({setNewsData, setNewsAllData, pageCount, countInPage, setIsLoading}) => {
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

  return (
        <Fragment>
            <Select
                value={selectedOptions}
                placeholder={"دسته بندی ها"}
                options={options}
                className="text-darkblue2 w-full text-sm"
                onChange={handleChange}
            />
        </Fragment>
    )
}
export default NewsSortSelect;
