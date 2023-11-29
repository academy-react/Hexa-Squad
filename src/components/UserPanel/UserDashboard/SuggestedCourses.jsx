import React, { useState, useEffect, useCallback } from "react";

import fetchData from "../../../core/services/api/GetData/getTopCourses";
import TitleRight from "../../../assets/icons/title right.svg";
import SuggestedCourse from "./SuggestedCourse";
const SuggestedCourses = () => {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    fetchData(2, setCoursesList);
  }, []);

  const mapData = coursesList.map((item, index) => (
    <SuggestedCourse
      key={index}
      id={item.courseId}
      bio={item.describe}
      title={item.title}
      courseCount={item.levelName}
      time={item.statusName}
      date={item.lastUpdate}
      professorName={item.teacherName}
      like={item.likeCount}
      // dislike={item.dislike}
      studentCount={item.currentRegistrants}
      price={item.cost}
      width={"lg:w-[24%]"}
      image={item.tumbImageAddress}
    />
  ));
  return (
    <div className="lg:w-9/12 lg:mr-6 mt-10 lg:mt-0">
      <div className="text-[#3F3F47] dark:text-white px-12 relative mb-6">
        <img
          src={TitleRight}
          className="absolute top-[-10px] right-1"
          alt="TitleRight"
        />
        <h2 className="relative text-xl md:text-xl text-right">
          دوره های پیشنهادی
        </h2>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-col gap-4  md:mt-4">
        {mapData}
      </div>
    </div>
  );
};

export default SuggestedCourses;
