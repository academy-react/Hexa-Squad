import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import Moon from '../../../assets/image/Moon.svg';
import shoppingCart from '../../../assets/image/shopping-cart.svg'
import shoppingCartLayout from '../../../assets/image/shopping-cart-layout.svg'
const HeaderButtons = ({setLightMode,lightMode,headerStyle}) => {
  const htmlTag = document.querySelector("html");
  const changeTheme = () => {
    setLightMode(!lightMode);
    lightMode ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  return (
    <div className="header-btn">
      <div onClick={changeTheme} className={"cursor-pointer items-center hidden "+(headerStyle?'lg:block':'')}>
        <img src={Moon} className={lightMode ? 'block':'hidden'} />
        <i className={lightMode ?'hidden':'block'+ " bi bi-brightness-high text-3xl mt-1 "}></i>
      </div>
      <ThemeSwitcher lightMode={lightMode} setLightMode={setLightMode} className={headerStyle?'hidden-theme-switcher':'lg:block'} />
      <Link>
        <img src={shoppingCart} alt="shoppingCart" className={headerStyle?'block':'hidden'} />
        <img src={shoppingCartLayout} alt="shoppingCartLayout" className={headerStyle?'hidden':'block'} />
      </Link>
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
