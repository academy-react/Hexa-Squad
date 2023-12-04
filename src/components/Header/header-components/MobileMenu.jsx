import React, { useState } from "react";
// import LogoIcon from '../../../assets/image/Logo-icon.svg'
import DesktopMenu from "./DesktopMenu";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import { Link } from "react-router-dom";
const MobileMenu = ({ setLightMode, lightMode }) => {
  return (
    <div className="mobile-menu ">
      {/* <img src={LogoIcon} width={90} /> */}

      <ThemeSwitcher
        className={"scale-110"}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />

      <DesktopMenu className={"my-5 w-full flex flex-col"} />

      <div className="flex whitespace-nowrap justify-center  w-full">
        <Link
          to={"/authorize/login"}
          className="primary-btn text-slate-300 hover:scale-100  hover:z-0 p-3 pl-6 rounded-s-lg  ml-[-10px]"
        >
          ورود به سایت
        </Link>
        <Link
          to={"/authorize/register"}
          className=" bg-[#EBE0FF] dark:bg-darkblue relative z-10  p-3 pl-5  rounded-e-xl  hover:border-none text-newPurple2"
        >
          عضویت
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
