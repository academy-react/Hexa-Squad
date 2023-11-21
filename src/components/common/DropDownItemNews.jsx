import React from "react";

const DropDownItemNews = ({
  item,
  name,
  customFunction,
  courseData,
  setData,
  setCheckedData,
}) => {
  return (
    <div
      className="flex p-2"
      onClick={() => {
        customFunction(courseData, item.categoryName, setData, setCheckedData);
      }}
    >
      <input
        type={checkBoxType}
        name={name}
        className="m-1 accent-cyan-950"
        id={name + item.id}
      />
      <label htmlFor={name + item.id} className="pr-5">
        {item.categoryName}
      </label>
    </div>
  );
};

export default DropDownItemNews;
