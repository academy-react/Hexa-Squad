import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import ChangeTheme from "../../common/ChangeTheme";

const HeaderButtons = () => {
  const [checked, setChecked] = useState(true);
  const htmlTag = document.querySelector("html");
  const changeTheme = (value) => {
    setChecked(value);
    checked ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  return (
    <div className=" flex lg:justify-center justify-end items-center gap-5 pr-8 mt-[-10px]">
      <ChangeTheme className={"ReactSwitch-toggler"}/>
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
