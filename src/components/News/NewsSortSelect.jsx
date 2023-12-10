import React, { Fragment, useState } from 'react';
import Select from "react-select";


const NewsSortSelect = () => {
  const [selectedOptions, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: "InsertDate", label: "همه" },
    { value: "CurrentRate", label: "محبوب ترین ها" },
    { value: "CurrentView", label: "پربازدید ترین ها" },
    { value: "UpdateDate", label: "جدید ترین ها" },
  ]);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // () => setSortCal(options.value)
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
