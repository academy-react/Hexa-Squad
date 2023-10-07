import React, { useState } from "react";
import "../common.css";
import CoutsrHeader from "./CourseHeader";
import CourseBody from "./CourseBody";
import heart from "../../../../assets/image/heart.svg"
import cart from "../../../../assets/image/cart.svg"

const Course = ({ title, professorName,price }) => {

  return (

    <div className="course-box">
      <div className="hover-box top-3 float-left h-[44px] w-[110px] absolute mb-[-50px] bg-[#9371FF] rounded-r-[10px] z-3 left-[-50%]">
        <img src={cart} className="inline hover-box-img mr-6"/>
        <img src={heart} className="inline hover-box-img"/>
      </div>
      <div className="mx-auto w-64">
          <CoutsrHeader  />
          <CourseBody title={title} professorName={professorName} price={price} />
          <p className="course-details"> مشاهده ی جزئیات 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline pr-1 w-6 h-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
          </p>
      </div>
    </div>
  );
};

export default Course;
