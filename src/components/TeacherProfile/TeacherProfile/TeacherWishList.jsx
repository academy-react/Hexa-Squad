import React, { useState } from "react";
import Course from "../../course/Course";
import WhishListData from "../../../core/services/api/Data/TeacherWhishListData";

const TeacherWishList = () => {
  const [coursesWhishList, setCoursesWhishList] = useState([]);
  const mapCourses = coursesWhishList.map((item, index) => {
    return (
      <Course
        key={index}
        title={item.title}
        courseCount={item.courseCount}
        time={item.time}
        date={item.date}
        professorName={item.professorName}
        like={item.like}
        width={"lg:w-[24%]"}
        background={"dark:bg-darkblue2"}
        dislike={item.dislike}
        studentCount={item.studentCount}
        price={item.price}
        image={item.imageUrl}
      />
    );
  });

  return (
    <div className="lg:max-w-full md:max-w-[750px] sm:min-w-[640px] ml-8 mt-16 md:mt-[450px] lg:mt-[620px] mb-12">
      <h2 className="text-2xl md:text-lg lg:text-2xl mr-4 text-newPurple3 dark:text-whitePink mb-10 lg:mb-16">
        دوره های پیشنهادی استاد:
      </h2>
      <div
        className="flex flex-wrap lg:flex-row mr-8 md:-mr-12"
      >
        {mapCourses}
      </div>
    </div>
  );
};

export default TeacherWishList;
