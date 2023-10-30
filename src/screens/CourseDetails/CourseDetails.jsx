import React, { useState } from "react";
import CoursePhoto from "../../components/CourseDetails/CoursePhoto";
import DetailsBox from "../../components/CourseDetails/DetailsBox";
import WhishListData from "../../core/services/api/Data/TeacherWhishListData";
import Course from "../../components/course/Course";
import TabsContent from "../../components/CourseDetails/TabsContent";
const CourseDetails = ({ like, dislike }) => {
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
  });
  return (
    <div>
      <div className="mx-auto flex mb-20 ">
        <div className="w-[90%] h-full overflow-hidden lg:max-w-[1260px] mx-auto mt-36 bg-[#D7D5FF] shadow-shadow-Categories-box rounded-2xl dark:bg-darkblue6">
          <div className="flex flex-col lg:flex-row">
            <CoursePhoto like={like} dislike={dislike} />

            {/* moshakhasat */}
            <DetailsBox />
          </div>
          <TabsContent />
          {/* Comments section */}

          <div className="lg:max-w-full md:max-w-[750px] sm:min-w-[640px] ml-8 mt-16 mb-12 md:ml-2 md:mx-12 lg:mt-40">
            <h2 className="text-xl md:text-lg lg:text-2xl mr-4 text-newPurple3 dark:text-whitePink mb-10  lg:mb-10">
              دوره های مرتبط :
            </h2>
            <div
              className="flex flex-wrap lg:flex-row mr-8 md:-mr-12"
              data-aos="fade-up"
            >
              {mapCourses}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
