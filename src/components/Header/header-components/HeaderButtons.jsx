import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import ThemeSwitcher from "../../common/ThemeSwitcher";

const HeaderButtons = () => {
  return (
    <div className=" flex lg:justify-center justify-end items-center gap-5 pr-8 mt-[-10px]">
      <ThemeSwitcher className={'scale-110 hidden lg:inline-block ThemeSwitcher'}/>
      <Link to={"/authorize/login"}>
        <button className="primary-btn lg:flex gap-3 hidden text-[#fff] scale-[.85]">
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
