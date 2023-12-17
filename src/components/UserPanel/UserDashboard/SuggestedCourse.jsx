import React from "react";

import NullImage from "../../../assets/image/Images-for-null 2.svg";
import { Link } from "react-router-dom";
import SeparationPrice from "../../../core/utility/SeparationPrice/SeparationPrice";
const SuggestedCourse = ({ id, title, professorName, image, price }) => {
  return (
    <Link
      to={"/CourseDetails/" + id}
      className=" md:w-6/12 lg:w-[370px] hover:scale-105 transition-all lg:ml-auto lg:mt-4 mx-auto md:mx-0 w-full  flex flex-col bg-[#fbfbff] dark:bg-indigo-800 shadow-shadow-auth rounded-lg "
    >
      <div className="flex flex-row-reverse relative  ">
        <img
          src={image == null ? NullImage : image}
          className="object-cover md:w-[100px] mr-3 my-3 hidden md:block rounded-lg shadow-shadow-auth h-[80px]"
          alt=""
        />

        <h2
          dir="rtl"
          className="text-base  text-darkblue3 dark:text-semiWhite2 absolute md:right-32 right-4  mt-3 hover:text-newPurple2 cursor-pointer"
        >
          {" "}
          {title}
        </h2>

        <h2
          dir="rtl"
          className="text-base  text-indigo-700 dark:text-indigo-300 absolute md:right-32 right-4  mt-9 hover:text-newPurple2 cursor-pointer"
        >
          {SeparationPrice(price)} تومان
        </h2>

        <div className="flex flex-row-reverse">
          <h2 className="bi bi-mortarboard text-[#727297] dark:text-slate-300 mt-14 md:mt-16 mr-5 text-xs"></h2>
          <h2 className="mr-2 mb-4 text-[#727297] dark:text-slate-300 mt-14 md:mt-16  text-xs">
            {" "}
            {professorName}
          </h2>

          {/* <div className="absolute left-6 flex flex-row-reverse mt-16">
            <h2 className=" ml-1 text-[#727297] dark:text-slate-300  text-xs  md:hidden lg:block ">
              {" "}
              {}
            </h2>
            <h2 className="text-[#727297] dark:text-slate-300 text-xs  md:hidden lg:block">
              {" "}
              تومان
            </h2>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default SuggestedCourse;
