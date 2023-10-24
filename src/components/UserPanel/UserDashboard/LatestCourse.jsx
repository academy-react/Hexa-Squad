import React from "react";
const LatestCourse = ({ id, image, title, professorName, price }) => {
  return (
    <div className="latestCourse lg:w-[370px] lg:ml-auto mx-auto lg:mt-4 md:mx-0 w-full  flex flex-col  bg-[#fbfbff] shadow-shadow-auth rounded-lg ">
      <div className="latestCourse-div flex flex-row-reverse relative ">
        <img
          src={image}
          className="object-cover md:w-[100px] mr-3 my-3 hidden md:block rounded-lg shadow-shadow-auth h-[80px]"
          alt=""
        />

        <h2 className="text-base  text-darkblue3 absolute md:right-32 right-4  mt-3 hover:text-newPurple2 cursor-pointer">
          {" "}
          {title}
        </h2>

        <div className="latestCourse-div flex flex-row-reverse">
          <h2 className="bi bi-mortarboard text-[#727297] mt-14 md:mt-16 mr-5 text-xs"></h2>
          <h2 className="mr-2 mb-4 text-[#727297] mt-14 md:mt-16  text-xs">
            {" "}
            {professorName}
          </h2>

          <div className="latestCourse-div absolute left-6 flex flex-row-reverse mt-16">
            <h2 className=" ml-1 text-[#727297]  text-xs  md:hidden lg:block ">
              {" "}
              {price}
            </h2>
            <h2 className="text-[#727297] text-xs  md:hidden lg:block">
              {" "}
              تومان
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCourse;
