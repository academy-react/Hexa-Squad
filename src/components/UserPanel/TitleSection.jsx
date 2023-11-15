import React, {useState, useEffect} from "react";
import TitleRight from "../../assets/icons/title right.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onThemeChange } from "../../redux/darkMode";
const TitleSection = ({title}) => {
  const htmlTag = document.querySelector("html");
  const theme = useSelector((state)=>state.darkModeSlice.theme);
  const dispatch = useDispatch();

  const setLightMode = (theme)=>{
    dispatch(onThemeChange(theme));
  }
  const changeTheme = () => {
    setLightMode(!theme);
    theme ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between w-full border-b-[2px] border-solid border-[#ccccd66f] dark:border-white pb-4 gap-4 ">
      <div className="text-[#666666] dark:text-white text-2xl md:flex hidden  gap-4">
        <Link to={'/shoppingCard'} className="bi bi-cart"></Link>
        {/* <i class="bi bi-bell"></i> */}
        <h2 className={
          theme === true
          ? "dark" + 
            "bi bi-brightness-high cursor-pointer text-lightblue"
          : "light" + 
            "bi bi-moon cursor-pointer"
        } 
        onClick={changeTheme}
        ></h2>

      </div>
      <div className="text-[#3F3F47] dark:text-white px-12 relative">
        <img
          src={TitleRight}
          className="absolute top-[0] right-1"
          alt="TitleRight"
        />
        <h2 className="relative z-10 text-xl md:text-3xl text-right">{title}</h2>
      </div>
    </div>
  );
};

export default TitleSection;
