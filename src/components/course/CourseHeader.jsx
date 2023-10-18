import React from "react";
import HTML from "../../assets/image/HTML.svg";

const CourseHeader = ({image}) => {
  return (
    <div className="w-[270px] h-[166px] shadow-shadow-Course-image-box mt-5 bg-lightblue5 dark:bg-[#1F0093] rounded-xl">
        <img src={HTML} className="z-2 w-[100%]" />
    </div>
  );
};

export default CourseHeader;
