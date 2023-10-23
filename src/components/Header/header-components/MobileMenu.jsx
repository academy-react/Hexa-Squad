import React, { useState } from "react";
// import LogoIcon from '../../../assets/image/Logo-icon.svg'
import DesktopMenu from "./DesktopMenu";
import ThemeSwitcher from '../../common/ThemeSwitcher'
const MobileMenu = ({setLightMode,lightMode}) => {
  return (
    <div className="mobile-menu ">
      {/* <img src={LogoIcon} width={90} /> */}
      
      <ThemeSwitcher className={'scale-110'} lightMode={lightMode} setLightMode={setLightMode} />
      
      <DesktopMenu className={"my-5 w-full flex flex-col"} />

      <div className="flex whitespace-nowrap justify-center w-full">
        <button className="primary-btn ml-[-10px]">ورود به سایت</button>
        <button className="w-32 bg-[#EBE0FF] dark:bg-darkblue hover:border-none text-newPurple2">
          عضویت
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
