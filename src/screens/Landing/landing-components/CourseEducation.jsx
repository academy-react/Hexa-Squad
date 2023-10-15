import React, { Fragment, useState } from "react";
import "./common.css";
import "../../../index.css";
import Course from "./course-components/Course";

import CourseSlider from './course-components/CourseSlider';

const CourseEducation = () => {
  const [coursesList, setCoursesList] = useState([
    {
      title: "آموزش Figma",
      courseCount: "199 درس",
      time: "14 ساعت",
      date: "ا اذر 1402",
      professorName: "دکتر بحرالعلوم",
      like: "32",
      dislike: "0",
      studentCount: "267 دانش اموز",
      price: "500,000",
    },
    {
      title: "آموزش Node.js",
      courseCount: "199 درس",
      time: "14 ساعت",
      date: "ا اذر 1402",
      professorName: "دکتر بحرالعلوم",
      like: "32",
      dislike: "0",
      studentCount: "267 دانش اموز",
      price: "500,000",
    },
    {
      title: "آموزش JavaSript",
      courseCount: "199 درس",
      time: "14 ساعت",
      date: "ا اذر 1402",
      professorName: "دکتر بحرالعلوم",
      like: "32",
      dislike: "0",
      studentCount: "267 دانش اموز",
      price: "500,000",
    },
    {
      title: "آموزش React.js",
      courseCount: "199 درس",
      time: "14 ساعت",
      date: "ا اذر 1402",
      professorName: "دکتر بحرالعلوم",
      like: "32",
      dislike: "0",
      studentCount: "267 دانش اموز",
      price: "500,000",
    },
  ]);

  return (
    <div className="lg:max-w-[1340px] md:max-w-[750px] sm:min-w-[640px] mx-auto mt-[-30px]">
        <div className="course">
            <h1 className="title lg:mt-40 mt-20 lg:block">
            دوره های آموزشی
            <span className="absolute w-[100%] block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
            </h1>
            <button className="primary-btn w-auto h-10 float-left mt-[-50px] ml-6 py-1 md:block lg:hidden">
            مشاهده ی همه
            </button>
        </div>
        <div className="mt-20 md:flex lg:flex md:flex-wrap gap-2 lg:flex-row hidden ">
            {coursesList.map((item, index) => {
            return (
                <Course
                    key={index}
                    title={item.title}
                    courseCount={item.courseCount}
                    time={item.time}
                    date={item.date}
                    professorName={item.professorName}
                    like={item.like}
                    dislike={item.dislike}
                    studentCount={item.studentCount}
                    price={item.price}
                />
            );
            })}
        </div>
        <div className="mt-20 lg:hidden md:hidden">
            <CourseSlider />
        </div>
        <button className="justify-center primary-btn text-center w-56 mx-auto my-16 hidden lg:block">
          مشاهده ی همه
        </button>
    </div>
  );
};

export default CourseEducation;
