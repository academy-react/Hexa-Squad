import React, { Fragment, useState } from "react";
import Title from "../common/Title";
import Course from '../course/Course';
import CourseSlider from '../course/CourseSlider';

import "./common.css";
import "../../index.css";
import { Link } from "react-router-dom";

const CourseEducation = () => {
  const [coursesList, setCoursesList] = useState([
    {
      title: "آموزش JavaSript",
      courseCount: "199 درس",
      time: "24 ساعت",
      date: "2 خرداد 1402",
      professorName: "دکتر بحرالعلوم",
      like: "120",
      dislike: "0",
      studentCount: "267 دانش اموز",
      price: "500,000",
    },
    {
      title: "آموزش Figma",
      courseCount: "90 درس",
      time: "10 ساعت",
      date: "25 مهر 1402",
      professorName: "مهندس نظری",
      like: "78",
      dislike: "2",
      studentCount: "158 دانش اموز",
      price: "320,000",
    },
    {
      title: "آموزش Node.js",
      courseCount: "155 درس",
      time: "14 ساعت",
      date: "ا اذر 1402",
      professorName: "دکتر بحرالعلوم",
      like: "52",
      dislike: "3",
      studentCount: "128 دانش اموز",
      price: "480,000",
    },
    {
      title: "آموزش React.js",
      courseCount: "87 درس",
      time: "8 ساعت",
      date: "ا مرداد 1402",
      professorName: "مهندس اصغری",
      like: "150",
      dislike: "0",
      studentCount: "210 دانش اموز",
      price: "450,000",
    },
  ]);

  const mapCard = coursesList.map((item, index) => {
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
  });
  return (
    <div className="lg:max-w-[1340px] md:max-w-[750px] sm:min-w-[640px] mx-auto mt-[-30px]">
      <div className="course">
        <Title className={'lg:mt-40 mt-20 lg:block'} inner={'دوره های آموزشی'}/>
        <Link to="/Courses" className={"text-newWhite hover:text-newWhite"}>
          <button className="primary-btn w-auto h-10 float-left mt-[-50px] ml-6 py-1 lg:hidden">
            مشاهده ی همه
          </button>      
        </Link>
      </div>
      <div className="mt-24 md:flex gap-4 lg:flex-row hidden">{mapCard}</div>
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
