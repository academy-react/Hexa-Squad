import React from "react";
import CheckboxInput from "./checkboxInput";
import { useState } from "react";

const DropDownRange = ({ data, setData, setCostDown, setCostUp }) => {
  const [defaultValue, setDefaultValue] = useState(true);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1000000);
  const filterData = () => {
    setCostDown(fromPrice);
    setCostUp(toPrice);
    setDefaultValue(false);
  };
  return (
    <div className="bg-[#EAE5FF] overflow-hidden text-[#2C007F] px-7 rounded-xl mb-5 mt-3 dark:bg-newPurpleAlpha2 dark:text-[#fff]">
      <CheckboxInput name={"price"} className={"checkbox"} />
      <div className="relative">
        <label
          htmlFor={"price"}
          className=" border-b-2 block py-[18px] xl:px-24 px-28 w-full border-[#2C007F30] dark:border-[#fff5]"
        >
          فیلتر بر اساس قیمت
        </label>
      </div>

      <div className={"content transition-all w-full overflow-hidden "}>
        <div className="flex flex-col w-52 py-5 gap-5 pr-3 mx-auto justify-center h-64 ">
          <div className="w-full">
            <input
              value={fromPrice}
              type="range"
              className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-darkblue4 dark:bg-darkblue"
              min="0"
              max="1000000"
              step='5000'
              id="customRange2"
              onChange={(event) => {
                setFromPrice(event.target.value);
                filterData();
              }}
            />
            <label htmlFor="fromPrice">شروع قیمت</label>
            <input
              type="number"
              id="fromPrice"
              value={fromPrice}
              min="0"
              max="1000000"
              step={5000}
              className="w-full dark:text-darkblue"
              onChange={(event) => {
                filterData();
                setFromPrice(event.target.value);
              }}
            />
          </div>
          <div className="w-full">
            <input
              value={toPrice}
              type="range"
              className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-darkblue4 dark:bg-darkblue"
              min="0"
              max="1000000"
              step={5000}
              id="customRange2"
              onInput={(event) => {
                filterData();
                setToPrice(event.target.value);
              }}
            />
            <label htmlFor="toPrice">پایان قیمت</label>
            <input
              type="number"
              id="toPrice"
              value={toPrice}
              min="0"
              max="1000000"
              step={5000}
              className="w-full dark:text-darkblue"
              onChange={(event) => {
                filterData();
                setToPrice(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownRange;
