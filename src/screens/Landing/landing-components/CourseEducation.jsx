import React, { Fragment, useState } from "react";
import "./common.css";
import "../../../index.css";
import Course from "./course-components/Course";

const CourseEducation = () => {
    return (
        <div className="max-w-[1269px] mx-auto">
            <div className="course">
                <h1 className="title">دوره های آموزشی 
                <span className="absolute w-[100%] w-0 block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
                </h1>
            </div>
            <div className="max-w-[1269px] mt-28 flex flex-row">
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
            <button className="primary-btn sm:w-auto lg:w-56 lg:my-16 lg:mx-[40%] ">مشاهده ی همه</button>
        </div>
    )
}

export default CourseEducation;