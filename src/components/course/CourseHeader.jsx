import React from "react";

const CourseHeader = ({image}) => {
  return (
    <div className="w-[270px] h-[166px] shadow-shadow-Course-image-box mt-5 bg-lightblue5 dark:bg-[#1F0093] rounded-xl">
        <img src={image} className="z-2 w-[100%] h-[150px] " />
    </div>
  );
};

export default CourseHeader;
