import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import Course from "../course/Course";
import CourseAutoplaySlider from "../course/CourseAutoplaySlider";
import CourseSlider from "../course/CourseSlider";
import WhishList from "../../core/services/api/Data/WhishList";

import "./common.css";
import "../../index.css";

const CourseEducation = () => {
  // const [coursesList, setCoursesList] = useState(WhishList);
  // const mapCard = coursesList.map((item, index) => {
  //   return (
  //     <Course
  //       key={index}
  //       title={item.title}
  //       courseCount={item.courseCount}
  //       time={item.time}
  //       date={item.date}
  //       professorName={item.professorName}
  //       like={item.like}
  //       width={"lg:w-[24%]"}
  //       dislike={item.dislike}
  //       studentCount={item.studentCount}
  //       price={item.price}
  //       image={item.imageUrl}
  //     />
  //   );
  // });
  return (
    <div className="lg:max-w-[1400px] md:max-w-[750px] sm:min-w-[640px] mx-auto mt-[-30px]">
      <div className="course">
        <Title
          className={"lg:mt-40 mt-20 lg:block"}
          inner={"دوره های آموزشی"}
        />
        <Link to="/Courses" className={"text-newWhite hover:text-newWhite"}>
          <button className="primary-btn w-auto h-10 float-left mt-[-50px] ml-6 py-1 lg:hidden">
            مشاهده ی همه
          </button>
        </Link>
      </div>
      <div className="mt-24 md:block gap-4 lg:gap-3 hidden">
        <CourseAutoplaySlider/>
      </div>
      {/* <div className="mt-24 md:flex gap-4 lg:gap-3 lg:flex-row md:flex-wrap hidden">
        {mapCard}
      </div> */}
      <div className="mt-20 md:hidden">
        <CourseSlider />
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
