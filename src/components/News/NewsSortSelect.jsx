import React, { Fragment, useState } from 'react';
import Select from "react-select";

const NewsSortSelect = () => {
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
