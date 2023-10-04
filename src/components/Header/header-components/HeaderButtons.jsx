import React, { useState } from "react";
import ReactSwitch from "react-switch";

const HeaderButtons = () => {
  const [checked, setChecked] = useState(true);
  const changeTheme = (value) => {
    setChecked(value);
  };
  return (
    <div className=" flex justify-center items-center gap-5">
      <ReactSwitch
        className="scale-[1.3] "
        checked={checked}
        onChange={changeTheme}
        handleDiameter={28}
        offColor="#B9BAF8"
        onColor="#B9BAF8"
        offHandleColor="#fff"
        onHandleColor="#fff"
        height={35}
        width={70}
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
      <button className="primary-btn">
        <i className="bi bi-box-arrow-in-right"></i>
        ورود به سایت
      </button>
    </div>
  );
};

export default HeaderButtons;
