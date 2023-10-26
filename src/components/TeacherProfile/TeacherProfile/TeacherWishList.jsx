import React, { useState } from "react";
import Course from "../../course/Course";
import WhishListData from "../../../core/services/api/Data/TeacherWhishListData";

const TeacherWishList = () => {
  const [coursesWhishList, setCoursesWhishList] = useState(WhishListData);
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
  })

  return (
    <div className="lg:max-w-full md:max-w-[750px] sm:min-w-[640px] ml-8 mt-[620px] mb-12">
      <h2 className="lg:text-3xl md:text-2xl text-newPurple3 dark:text-whitePink text-xl mb-16">
        دوره های پیشنهادی استاد:
      </h2>
      <div 
        className="flex md:flex-wrap lg:flex-row -mr-12"  
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {mapCourses}
      </div>
    </div>
  );
};

export default TeacherWishList;
