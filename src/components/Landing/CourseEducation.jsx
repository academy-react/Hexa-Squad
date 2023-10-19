import React, { Fragment, useState } from "react";
import Title from "../common/Title";
import Course from "../course/Course";
import CourseSlider from "../course/CourseSlider";

import "./common.css";
import "../../index.css";
import { Link } from "react-router-dom";

const CourseEducation = () => {
  const [coursesList, setCoursesList] = useState([
    {
      title: "آموزش JavaSript",
      courseCount: "199 درس",
      time: "24 ساعت",
      imageUrl:
        "https://toplearn.com/img/course/%D8%AF%D9%88%D8%B1%D9%87_%D8%AC%D8%A7%D9%85%D8%B9_JavaScript_2020.jpg",
      date: "2 خرداد 1402",
      professorName: "دکتر بحرالعلوم",
      like: "120",
      dislike: "0",
      studentCount: "267 دانش اموز",
      price: "500000",
      category: "programming",
    },
    {
      title: "آموزش Figma",
      courseCount: "90 درس",
      time: "10 ساعت",
      imageUrl:
        "https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%86%D8%B1%D9%85_%D8%A7%D9%81%D8%B2%D8%A7%D8%B1_%D9%81%DB%8C%DA%AF%D9%85%D8%A7_%D8%A7%D8%B2_%D9%85%D8%A8%D8%AA%D8%AF%DB%8C_%D8%AA%D8%A7_%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87.jpg",
      date: "25 مهر 1402",
      professorName: "مهندس نظری",
      like: "78",
      dislike: "2",
      studentCount: "158 دانش اموز",
      price: "320000",
      category: "design",
    },
    {
      title: "آموزش premier",
      courseCount: "90 درس",
      time: "10 ساعت",
      imageUrl:
        "https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C_%D9%86%D8%B1%D9%85_%D8%A7%D9%81%D8%B2%D8%A7%D8%B1_Adobe_Premiere_Pro_2021.jpg",
      date: "25 مهر 1402",
      professorName: "مهندس نظری",
      like: "78",
      dislike: "2",
      studentCount: "158 دانش اموز",
      price: "320000",
      category: "edit",
    },
    {
      title: "آموزش Node.js",
      courseCount: "155 درس",
      time: "14 ساعت",
      imageUrl:
        "https://toplearn.com/img/course/typeorm%D8%A8%D8%B1%D8%A7%DB%8C_node_js.jpg",
      date: "ا اذر 1402",
      professorName: "دکتر بحرالعلوم",
      like: "52",
      dislike: "3",
      studentCount: "128 دانش اموز",
      price: "480000",
      category: "programming",
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
        image={item.imageUrl}
      />
    );
  });
  return (
    <div className="lg:max-w-[1340px] md:max-w-[750px] sm:min-w-[640px] mx-auto mt-[-30px]">
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
      <div className="mt-24 md:flex md:flex-wrap gap-4 lg:flex-row hidden">{mapCard}</div>
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
