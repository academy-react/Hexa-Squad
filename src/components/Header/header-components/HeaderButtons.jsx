import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import Moon from '../../../assets/image/Moon.svg';
import MoonColored from '../../../assets/image/Moon - colored.svg';
import { ShoppingPopover } from "../../common";
const HeaderButtons = ({setLightMode,lightMode,headerStyle}) => {
  const htmlTag = document.querySelector("html");
  const changeTheme = () => {
    setLightMode(!lightMode);
    lightMode ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  return (
    <div className="header-btn">
      <div onClick={changeTheme} className={"cursor-pointer items-center hidden "+(headerStyle?'lg:block':'')}>
        <img src={Moon} className={lightMode ? 'hidden':'block'} />
        <i className={(lightMode ?'block':'hidden')+ " bi bi-brightness-high text-3xl mt-1 "}></i>
      </div>
      <div onClick={changeTheme} className={"cursor-pointer items-center hidden "+(headerStyle?'':'lg:block')}>
        <img src={Moon} className={(lightMode ? 'hidden':'block') + ' w-8 h-8 -mt-1 '} />
        <i className={(lightMode ?'block':'hidden')+ " bi bi-brightness-high text-[#3f40ea] text-3xl mt-1 "}></i>
      </div>
      <ShoppingPopover headerStyle={headerStyle}/>
      <Link to={"/authorize/login"}>
        <button className="primary-btn">
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
