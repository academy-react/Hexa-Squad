import React, { useState } from "react";
import Course from "../../components/course/Course";
import {
  CoursesHero,
  FiltersBTN,
  FiltersOptions,
} from "../../components/CourseList";
import AllData from "../../core/services/api/Data/AllData";
const Courses = () => {
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. ",
  ];

  const [data, setData] = useState(AllData);
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
      addClass={'h-[441px]'}
      image={data.imageUrl}
    />
  ));
  return (
    <div className="py-32">
      <CoursesHero typeWriterWords={typeWriterWords} />
      <FiltersBTN data={AllData} setData={setData} />

      <div className="flex w-full flex-wrap">
        <div className="flex md:flex-row flex-col w-full px-5 ">
          <FiltersOptions data={AllData} setData={setData} />
          <div className="w-full flex flex-wrap transition-all justify-end gap-3">
            {mapData}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
