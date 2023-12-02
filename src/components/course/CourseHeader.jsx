import React from "react";
import NullImage from '../../assets/image/Images-for-null 2.svg'
const CourseHeader = ({image}) => {
   return (
    <div className="skeleton-handler w-[280px] lg:w-[270px] h-[170px]  mx-auto mt-5 bg-lightblue5 dark:bg-[#1F0093] rounded-xl">
       { image !== undefined && <img src={image ==null ? NullImage:image} className="z-2 w-[280px] h-[170px] object-cover rounded-xl shadow-shadow-Course-image-box" />}
    </div>
  );
};

export default CourseHeader;
