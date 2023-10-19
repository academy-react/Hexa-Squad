import React from "react";

const CourseHeader = ({image}) => {
  return (
    <div className="w-[280px] lg:w-[270px] h-[170px]  mx-auto mt-5 bg-lightblue5 dark:bg-[#1F0093] rounded-xl">
        <img src={image} className="z-2 w-[100%] h-[170px] object-cover rounded-xl shadow-shadow-Course-image-box" />
    </div>
  );
};

export default CourseHeader;
