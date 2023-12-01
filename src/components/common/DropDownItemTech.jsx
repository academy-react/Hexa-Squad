import React from "react";

const DropDownItemTech = ({ item, name }) => {
  return (
    <div className="flex p-2">
      <input
        type={checkBoxType}
        name={name}
        onChange={0}
        className="m-1 accent-cyan-950"
        id={name + item.id}
      />
      <label htmlFor={name + item.id} className="pr-5">
        {item.techName}
      </label>
    </div>
  );
};

export default DropDownItemTech;
