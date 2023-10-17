import React, { useState } from "react";
import Course from "../../components/course/Course";
import {
  CoursesHero,
  FiltersBTN,
  FiltersOptions,
} from "../../components/Courses";
const Courses = () => {
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. ",
  ];
  const [allData, setAllData] = useState([
    {
      id: 0,
      title: "آموزش php",
      professorName: "دکتر بحرالعلوم",
      price: "14000 تومان",
      category: "programming",
    },
    {
      id: 0,
      title: "آموزش figma",
      professorName: "دکتر بحرالعلوم",
      price: "14000 تومان",
      category: "design",
    },
    {
      id: 0,
      title: "آموزش JavaSript",
      professorName: "دکتر بحرالعلوم",
      price: "14000 تومان",
      category: "programming",
    },
    {
      id: 0,
      title: "آموزش premier",
      professorName: "دکتر بحرالعلوم",
      price: "14000 تومان",
      category: "edit",
    },
  ]);
  const [data, setData] = useState(allData);
  const mapData = data.map((data, index) => (
    <Course
      key={index}
      title={data.title}
      professorName={data.professorName}
      price={data.price}
    />
  ));
  return (
    <div className="py-32">
      <CoursesHero typeWriterWords={typeWriterWords} />
      <FiltersBTN data={allData} setData={setData} />

      <div className="flex w-full flex-wrap">
        <div className="flex w-full ">
          <FiltersOptions data={allData} setData={setData} />
          <div className="w-full flex flex-wrap transition-all justify-end">{mapData}</div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
