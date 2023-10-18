import React from "react";
import HTML from "../../assets/image/HTML.svg";

const CourseHeader = () => {
  return (
    <div className="w-[280px] lg:w-[270px] h-[170px] shadow-shadow-Course-image-box mx-auto mt-5 bg-lightblue5 dark:bg-[#1F0093] rounded-xl">
        <img src={HTML} className="z-2 object-cover" />
    </div>
  );
};

export default CourseHeader;
