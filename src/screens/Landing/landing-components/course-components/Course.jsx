import React from "react";
import CoutsrHeader from "./CourseHeader";
import CourseBody from "./CourseBody";

import heart from "../../../../assets/image/heart.svg";
import cart from "../../../../assets/image/cart.svg";
import "../common.css";

const Course = ({ title, courseCount, time, date, professorName, like, dislike, studentCount, price, coursesList }) => {
  return (
    <div className="course-box px-6">
      <div className="hover-box top-3 float-left h-[44px] w-[110px] absolute mb-[-50px] bg-[#6736FF] dark:bg-[#261A97] dark:shadow-shadow-auth rounded-r-[10px] z-3 left-[-50%]">
        <img src={cart} className="inline hover-box-img mr-6" />
        <img src={heart} className="inline hover-box-img" />
      </div>
      <CoutsrHeader />
      <CourseBody 
        title={title} 
        courseCount={courseCount}
        time={time}
        date={date}
        professorName={professorName} 
        like={like} 
        dislike={dislike}
        studentCount={studentCount}
        price={price} 
      />
    </div>
  );
};

export default Course;
