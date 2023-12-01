import React, { useState, useEffect, useCallback } from "react";
import http from "../../../core/services/interceptor";
import LatestCourse from "./LatestCourse";
import TitleRight from "../../../assets/icons/title right.svg";
// import fetchWhishListCoursesApi from "../../../core/services/api/GetData/WhishList";
const LatestCourses = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState(allData);
  const WhishListPanelApi = useCallback(async () => {
    try {
      const result = await http.get("/SharePanel/GetMyFavoriteCourses");
      const receivedData = result.favoriteCourseDto;
      let slicedData = receivedData.slice(receivedData.length -2 , receivedData.length)

      setData(slicedData);
      setAllData(result.favoriteCourseDto);


    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    WhishListPanelApi();
  }, []);

  const mapData = data.map((data, index) => (
    <LatestCourse
      key={index}
      id={data.courseId}
      title={data.courseTitle}
      professorName={data.teacheName}
      image={data.tumbImageAddress}
    />
  ));

  return (
    <div className="lg:w-6/12">
      <div className="text-[#3F3F47] dark:text-white px-12 relative mb-6">
        <img
          src={TitleRight}
          className="absolute top-[-10px] right-1"
          alt="TitleRight"
        />
        <h2 className="relative text-xl md:text-xl text-right">
          دوره های مورد علاقه شما
        </h2>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:mt-4">
        {mapData}
      </div>
    </div>
  );
};

export default LatestCourses;
