import React, { Fragment, useState } from "react";
import "./common.css";
import "../../index.css";
import Course from '../course/Course'
import Title from "../common/Title";

const CourseEducation = () => {
  const [coursesList, setCoursesList] = useState([
    {
      title: "آموزش Figma",
      professorName: "دکتر بحرالعلوم",
      price: "14000 تومان",
    },
    {
      title: "آموزش Node.js",
      professorName: "دکتر بحرالعلوم",
      price: "14000 تومان",
    },
    {
      title: "آموزش JavaSript",
      professorName: "دکتر بحرالعلوم",
      price: "14000 تومان",
    },
    {
      title: "آموزش React.js",
      professorName: "دکتر بحرالعلوم",
      price: "14000 تومان",
    },
  ]);

  const mapCard = coursesList.map((item, index) => {
    return (
      <Course
        key={index}
        title={item.title}
        professorName={item.professorName}
        price={item.price}
        id={index}
      />
    );
  });
  return (
    <div className="lg:max-w-[1269px] md:max-w-[750px] sm:min-w-[640px] mx-auto mt-[-30px] ">
      <div className="course">
        <Title className={'lg:mt-40 mt-20 lg:block'} inner={'دوره های آموزشی'}/>
        <button className="primary-btn w-auto h-10 float-left mt-[-50px] ml-6 py-1 md:block lg:hidden">
          مشاهده ی همه
        </button>
      </div>
      <div className="mt-28 flex flex-wrap gap-4 lg:flex-row">{mapCard}</div>

      <button className="flex justify-center primary-btn text-center w-56 mx-auto my-16 hidden lg:block">
        مشاهده ی همه
      </button>
    </div>
  );
};

export default CourseEducation;
