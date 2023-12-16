import React, { useState, useEffect } from "react";
import Course from "../../course/Course";
import WhishListData from "../../../core/services/api/GetData/TeacherWhishListData";
import fetchTopCourses from "../../../core/services/api/GetData/getTopCourses";

const TeacherWishList = () => {
  const [coursesWhishList, setCoursesWhishList] = useState([]);
  const mapCourses = coursesWhishList.map((item, index) => {
    return (
      <Course
        key={index}
        id={item.courseId}
        bio={item.describe}
        title={item.title}
        courseCount={item.levelName}
        time={item.statusName}
        date={item.lastUpdate}
        professorName={item.teacherName}
        like={item.likeCount}
        dissLike={item.dissLikeCount}
        studentCount={item.currentRegistrants}
        price={item.cost}
        width={"lg:w-[24%]"}
        image={item.tumbImageAddress}
        courseRate={item.courseRate}
      />
    );
  });
  useEffect(() => {
    fetchTopCourses(3, setCoursesWhishList);
  }, []);

  return (
    <div className="lg:max-w-full md:max-w-[750px] sm:min-w-[640px] ml-8 mt-16 md:mt-[450px] lg:mt-[620px] mb-12">
      <h2 className="text-2xl md:text-lg lg:text-2xl mr-4 text-newPurple3 dark:text-whitePink mb-10 lg:mb-16">
        دوره های پیشنهادی استاد:
      </h2>
      <div className="flex flex-wrap lg:flex-row mr-8 md:-mr-12">
        {mapCourses}
      </div>
    </div>
  );
};

export default TeacherWishList;
