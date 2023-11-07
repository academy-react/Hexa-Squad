import React from "react";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import CourseAutoplaySlider from "../course/CourseAutoplaySlider";

import "./common.css";
import "../../index.css";

const CourseEducation = () => {
  return (
    <div className="lg:max-w-[1370px] md:max-w-[750px] sm:min-w-[640px] mx-auto mt-[-30px]">
      <div className="course">
        <Title
          className={"lg:mt-40 mt-28 lg:block"}
          inner={"دوره های آموزشی"}
        />
        <Link to="/Courses" className={"text-newWhite hover:text-newWhite"}>
          <button className="primary-btn w-auto h-10 float-left -mt-12 ml-6 py-1 lg:hidden">
            مشاهده ی همه
          </button>
        </Link>
      </div>
      <div className="mt-20 lg:mt-24 gap-4 lg:gap-3">
        <CourseAutoplaySlider/>
      </div>
      <Link to="/Courses" className={"text-newWhite hover:text-newWhite"}>
        <button className="justify-center primary-btn text-center w-56 mx-auto my-16 hidden lg:block">
          مشاهده ی همه
        </button>
      </Link>
    </div>
  );
};

export default CourseEducation;
