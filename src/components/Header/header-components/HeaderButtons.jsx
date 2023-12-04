import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import Moon from "../../../assets/image/Moon.svg";
import MoonColored from "../../../assets/image/Moon - colored.svg";
import { useSelector } from "react-redux";
const HeaderButtons = ({ setLightMode, lightMode, headerStyle }) => {
  const userInfo = useSelector((state) => state.userInfo.info);
  const htmlTag = document.querySelector("html");
  const changeTheme = () => {
    setLightMode(!lightMode);
    lightMode ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  return (
    <div className="header-btn">
      <div
        onClick={changeTheme}
        className={
          "cursor-pointer items-center hidden " +
          (headerStyle ? "lg:block" : "")
        }
      >
        <img src={Moon} className={lightMode ? "hidden" : "block"} />
        <i
          className={
            (lightMode ? "block" : "hidden") +
            " bi bi-brightness-high text-3xl mt-1 "
          }
        ></i>
      </div>
      <div
        onClick={changeTheme}
        className={
          "cursor-pointer items-center hidden " +
          (headerStyle ? "" : "lg:block")
        }
      >
        <img
          src={MoonColored}
          className={(lightMode ? "hidden" : "block") + " w-8 h-8 -mt-1 "}
        />
        <i
          className={
            (lightMode ? "block" : "hidden") +
            " bi bi-brightness-high text-[#3f40ea] text-3xl mt-1 "
          }
        ></i>
      </div>
      {/* <ShoppingPopover headerStyle={headerStyle} /> */}
      {userInfo == false ? (
        <Link to={"/authorize/login"}>
          <button className="primary-btn whitespace-nowrap">
            <i className="bi bi-box-arrow-in-right pt-1"></i>
            ورود به سایت
          </button>
        </Link>
      ) : (
        <Link
          to={"/userPanel"}
          className={
            "flex flex-row-reverse items-center mt-2 md:text-lg group " +
            (headerStyle ? "text-indigo-200" : "text-indigo-900")
          }
        >
          {/* <h2
            className={
              "bi bi-person text-4xl pl-2 group-hover:text-indigo-600 " +
              (headerStyle ? "text-violet-200 " : "text-indigo-900")
            }
          ></h2> */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <img
              src={userInfo.currentPictureAddress}
              className=" w-12 h-12 mt-4 rounded-full border-2 border-indigo-100"
            />
            <span className=" scale-0 rounded bg-gray-800 transition-all text-xs text-white group-hover:scale-100">
              ✨ {userInfo.fName + " " + userInfo.lName} ✨
            </span>
          </div>
        </Link>
      )}

      {/* <Link to={"/authorize/login"}>
        <button className="primary-btn">
          <i className="bi bi-box-arrow-in-right pt-1"></i>
          ورود به سایت
        </button>
      </Link> */}
      <label  htmlFor="openMenu" className=" openMenu ">
        <span className="w-9/12 openMenu-span"></span>
        <span className="w-full openMenu-span"></span>
        <span className="w-8/12 openMenu-span"></span>
      </label>
    </div>
  );
};

export default HeaderButtons;
