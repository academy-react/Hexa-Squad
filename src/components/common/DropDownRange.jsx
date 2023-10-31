import React from "react";
import CheckboxInput from "./CheckboxInput";
import { useState } from "react";

const DropDownRange = ({ data, setData }) => {
  const [defaultValue, setDefaultValue] = useState(true);
  const [defaultFromPrice, setDefaultFromPrice] = useState(0);
  const [defaultToPrice, setDefaultToPrice] = useState(10000000);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(10000000);
  const filterData = () => {
    const filterData = data.filter((el) => {
      return el.price >= fromPrice && el.price <= toPrice;
    });
    setDefaultValue(false);
    setData(filterData);
  };
  return (
    <div className="bg-[#EAE5FF] text-[#2C007F] px-7 rounded-xl mb-5 mt-3 dark:bg-newPurpleAlpha2 dark:text-[#fff]">
      <CheckboxInput name={name} className={"checkbox"} />
      <div className="relative">
        <label
          htmlFor={name}
          className=" border-b-2 block py-[18px] xl:px-24 px-28 w-full border-[#2C007F30] dark:border-[#fff5]"
        >
          فیلتر بر اساس قیمت
        </label>
        <i
          className={
            (defaultValue == true && "hidden") +
            " bi bi-x absolute top-[33%] left-0 text-xl text-red-500 cursor-pointer"
          }
          onClick={() => {
            filterData();
            setDefaultValue(true);
          }}
        >
          {" "}
          <span className="text-lg"> حذف فیلتر</span>
        </i>
      </div>

      <div className={"content transition-all w-full overflow-hidden "}>
        <div className="flex w-72 py-5 gap-5 px-5 justify-center ">
          <div className="w-1/2">
            <input
              value={defaultValue ? defaultFromPrice:fromPrice}
              type="range"
              class="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-darkblue4 dark:bg-darkblue"
              min="0"
              max="10000000"
              step={5000}
              id="customRange2"
              onInput={(event) => {
                filterData();
                setFromPrice(event.target.value);
              }}
            />
            <label htmlFor="fromPrice">شروع قیمت</label>
            <input
              type="number"
              id="fromPrice"
              value={defaultValue ? defaultFromPrice:fromPrice}
              min="0"
              max="10000000"
              step={5000}
              className="w-full dark:text-darkblue"
              onChange={(event) => {
                filterData();
                setFromPrice(event.target.value);
              }}
            />
          </div>
          <div className="w-1/2">
            <input
              value={defaultValue ? defaultToPrice:toPrice}
              type="range"
              class="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-darkblue4 dark:bg-darkblue"
              min="0"
              max="10000000"
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
              value={defaultValue ? defaultToPrice:toPrice}
              min="0"
              max="10000000"
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
