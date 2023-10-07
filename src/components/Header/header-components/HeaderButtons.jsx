import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";

const HeaderButtons = () => {
  const [checked, setChecked] = useState(true);
  const htmlTag = document.querySelector("html");
  const changeTheme = (value) => {
    setChecked(value);
    checked ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  return (
    <div className=" flex lg:justify-center justify-end items-center gap-5 pr-8 mt-[-10px]">
      <ReactSwitch
        className="scale-[1.1] "
        checked={checked}
        onChange={changeTheme}
        handleDiameter={28}
        offColor="#B9BAF8"
        onColor="#B9BAF8"
        offHandleColor="#fff"
        onHandleColor="#fff"
        height={30}
        width={65}
        uncheckedIcon={
          <div
            style={{
              fontSize: 7,
              paddingTop: 7,
              paddingLeft: 7,
            }}
          >
            DARK MODE
          </div>
        }
        checkedHandleIcon={
          <i className="bi bi-sun text-[#B4B4FF] text-center w-10/12 block m-[2px] pt-[0.5px] bg-[#E7E7FF] rounded-2xl"></i>
        }
        uncheckedHandleIcon={
          <i className="bi bi-moon text-[#B4B4FF] text-center w-10/12 block m-[2px] pt-[0.5px] bg-[#E7E7FF] rounded-2xl"></i>
        }
        checkedIcon={
          <div
            style={{
              fontSize: 7,
              paddingTop: 7,
              paddingLeft: 7,
            }}
          >
            LIGHT MODE
          </div>
        }
      />
      <Link to={'/authorize/login'}>
        <button className="primary-btn lg:flex gap-3 hidden text-[#fff] scale-90">
          <i className="bi bi-box-arrow-in-right pt-1"></i>
          ورود به سایت
        </button>
      </Link>
      <label htmlFor="openMenu" className=" openMenu ">
        <span className="w-9/12 openMenu-span"></span>
        <span className="w-full openMenu-span"></span>
        <span className="w-8/12 openMenu-span"></span>
      </label>
    </div>
  );
};

export default HeaderButtons;
