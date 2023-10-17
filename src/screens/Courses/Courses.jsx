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
      title: "آموزش JavaSript",
      courseCount: "199 درس",
      time: "24 ساعت",
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
      date: "ا اذر 1402",
      professorName: "دکتر بحرالعلوم",
      like: "52",
      dislike: "3",
      studentCount: "128 دانش اموز",
      price: "480000",
      category: "programming",
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
      price: "450000",
      category: "react",
    },
    {
      title: "آموزش Photoshop",
      courseCount: "90 درس",
      time: "10 ساعت",
      date: "25 مهر 1402",
      professorName: "مهندس نظری",
      like: "78",
      dislike: "2",
      studentCount: "158 دانش اموز",
      price: "320000",
      category: "design",
    },
    {
      title: "آموزش Ruby",
      courseCount: "199 درس",
      time: "24 ساعت",
      date: "2 خرداد 1402",
      professorName: "دکتر بحرالعلوم",
      like: "120",
      dislike: "0",
      studentCount: "267 دانش اموز",
      price: "500000",
      category: "Ruby",
    },
    {
      title: "آموزش TypeScript",
      courseCount: "90 درس",
      time: "10 ساعت",
      date: "25 مهر 1402",
      professorName: "مهندس نظری",
      like: "78",
      dislike: "2",
      studentCount: "158 دانش اموز",
      price: "320000",
      category: "TypeScript",
    },
    {
      title: "آموزش Sass",
      courseCount: "155 درس",
      time: "14 ساعت",
      date: "ا اذر 1402",
      professorName: "دکتر بحرالعلوم",
      like: "52",
      dislike: "3",
      studentCount: "128 دانش اموز",
      price: "480000",
      category: "Sass",
    },
    {
      title: "آموزش TailwindCss",
      courseCount: "87 درس",
      time: "8 ساعت",
      date: "ا مرداد 1402",
      professorName: "مهندس اصغری",
      like: "150",
      dislike: "0",
      studentCount: "210 دانش اموز",
      price: "450000",
      category: "TailwindCss",
    },
  ]);
  const [data, setData] = useState(allData);
  const mapData = data.map((data, index) => (
    <Course
      key={index}
      title={data.title}
      courseCount={data.courseCount}
      time={data.time}
      date={data.date}
      professorName={data.professorName}
      like={data.like}
      dislike={data.dislike}
      studentCount={data.studentCount}
      price={data.price}
    />
  ));
  return (
    <div className="py-32">
      <CoursesHero typeWriterWords={typeWriterWords} />
      <FiltersBTN data={allData} setData={setData} />

      <div className="flex w-full flex-wrap">
        <div className="flex md:flex-row flex-col w-full ">
          <FiltersOptions data={allData} setData={setData} />
          <div className="w-full flex flex-wrap transition-all justify-end">
            {mapData}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
