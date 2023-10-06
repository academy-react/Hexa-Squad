import React from "react";
import figma from "../../../../assets/image/figma.svg";

const CourseHeader = () => {
  return (
    <div className="lg:w-[100%] lg:h-[166px] shadow-shadow-Course-image-box mt-5 bg-lightblue5 rounded-xl">
        <img src={figma} className="mx-auto pt-10 z-2" />
    </div>
  );
};

export default CourseHeader;
