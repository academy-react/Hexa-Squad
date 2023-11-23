import React, { useEffect, useState, useCallback } from "react";
import http from "../../core/services/interceptor/index"
import { useParams } from "react-router-dom";

import fetchTopCourses from "../../core/services/api/GetData/getTopCourses";
import CoursePhoto from "../../components/CourseDetails/CoursePhoto";
import DetailsBox from "../../components/CourseDetails/DetailsBox";

import Course from "../../components/course/Course";
import TabsContent from "../../components/CourseDetails/TabsContent";
import LoadingSpinner from "../../components/common/loadingSpinner";

const CourseDetails = () => {
  const [coursesWhishList, setCoursesWhishList] = useState([]);
  const [urlParam, setUrlParam] = useState(useParams());
  const [data, setData] = useState([]);
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
        // dislike={item.dislike}
        studentCount={item.currentRegistrants}
        price={item.cost}
        width={"lg:w-[24%]"}
        image={item.tumbImageAddress}
      />
    );
  });

  const fetchData = useCallback(async () => {
    try {
      const result = await http.get(
        `/Home/GetCourseDetails?CourseId=` +
          urlParam.id
      );
      console.log(result);
      const receivedData = result;
      setData(receivedData);
    } catch (error) {}
  }, []);


  useEffect(() => {
    fetchData();
    fetchTopCourses(3, setCoursesWhishList);
  }, []);

  return (
    <div>
      <LoadingSpinner/>
      <div className="mx-auto flex mb-20 ">
        <div className="w-[90%] h-full overflow-hidden lg:max-w-[1260px] mx-auto mt-36 bg-[#D7D5FF] shadow-shadow-Categories-box rounded-2xl dark:bg-darkblue6">
          <div className="flex flex-col lg:flex-row">
            <CoursePhoto
              title={data.title}
              describe={data.describe}
              id={data.courseId}
              courseReseveId={data.courseReseveId}
              isCourseReseve={data.isCourseReseve}
              imageAddress={data.imageAddress}
              currentUserDissLike={data.currentUserDissLike}
              currentUserLike={data.currentUserLike}
            />

            {/* moshakhasat */}
            <DetailsBox
            id={data.courseId}
              startTime={data.startTime}
              capacity={data.capacity}
              courseStatusName={data.courseStatusName}
              endTime={data.endTime}
              title={data.title}
              teacherName={data.teacherName}
              currentRegistrants={data.currentRegistrants}
              courseLevelName={data.courseLevelName}
              cost={data.cost}
              isCourseReseve={data.isCourseReseve}
            />
          </div>
          <TabsContent />
          {/* Comments section */}

          <div className="lg:max-w-full md:max-w-[750px] sm:min-w-[640px] ml-8 mt-16 mb-12 md:ml-2 md:mx-12 lg:mt-40">
            <h2 className="text-xl md:text-lg lg:text-2xl mr-4 text-newPurple3 dark:text-whitePink mb-10  lg:mb-10">
              دوره های مرتبط :
            </h2>
            <div className="flex flex-wrap lg:flex-row mr-8 md:-mr-12">
              {mapCourses}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
