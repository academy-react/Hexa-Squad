import React, { useState, useEffect } from "react";
import Course from "../../components/course/Course";
import {
  CoursesHero,
  FiltersBTN,
  FiltersOptions,
} from "../../components/CourseList";
import AllData from "../../core/services/api/Data/AllData";
const Courses = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [filterDiv, setFilterDiv] = useState(true);
  const [data, setData] = useState(AllData);
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. ",
  ];
  const showGridView = () => {
    setShowGrid((showGrid) => !showGrid);
  };
  useEffect(() => {
    return () => {
      setFilterDiv(false);
      setShowGrid(false);
    };
  }, []);

  const mapData = data.map((data, index) => (
    <Course
      key={index}
      bio={data.bio}
      title={data.title}
      courseCount={data.courseCount}
      time={data.time}
      date={data.date}
      professorName={data.professorName}
      like={data.like}
      dislike={data.dislike}
      studentCount={data.studentCount}
      price={data.price}
      addClass={"h-[441px]"}
      image={data.imageUrl}
    />
  ));
  return (
    <div className="py-32">
      <CoursesHero typeWriterWords={typeWriterWords} />
      <FiltersBTN
        data={AllData}
        setData={setData}
        showGridView={showGridView}
        filterDiv={filterDiv}
        setFilterDiv={setFilterDiv}
      />

      <div className="flex w-full flex-wrap">
        <div className="flex md:flex-row flex-col w-full px-20 ">
          <FiltersOptions
            data={AllData}
            setFilterDiv={setFilterDiv}
            setData={setData}
            filterDiv={filterDiv}
          />
          <div
            className={
              "w-full flex relative flex-wrap transition-all pt-10 justify-end gap-3 duration-1000 aos-init aos-animate " +
              (showGrid ? "grid-list" : "")
            }
            data-aos="zoom-in"
          >
            <span className="m-1 text-xl absolute top-0 right-0 text-slate-950">{data.length} دوره مرتبط</span>
            
            {mapData}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
