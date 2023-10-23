import React from 'react'
import { useState } from 'react';
import ReactSwitch from 'react-switch'
const ThemeSwitcher = ({className,setLightMode,lightMode}) => {
  const htmlTag = document.querySelector("html");
  const changeTheme = (value) => {
    setLightMode(value);
    lightMode ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  return (
    <ReactSwitch
      className={className}
      checked={lightMode}
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
  )
}

export default ThemeSwitcher