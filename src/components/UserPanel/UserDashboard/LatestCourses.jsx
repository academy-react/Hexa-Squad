import React, { useState } from "react";
import LatestCourse from "./LatestCourse";
import TitleRight from "../../../assets/icons/title right.svg";

const LatestCourses = () => {
  const [latestCourse, setLatestCourse] = useState([
    {
      title: "اموزش نود جی اس",
      professorName: "استاد بحرالعلوم",
      price: "500000",
      imageUrl:
        "https://toplearn.com/img/course/typeorm%D8%A8%D8%B1%D8%A7%DB%8C_node_js.jpg",
    },
    {
      title: "اموزش ری اکت",
      professorName: "استاد مهدی اصغری",
      price: "456000",
      imageUrl:
        "https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D8%B5%D9%81%D8%B1_%D8%AA%D8%A7_%D8%B5%D8%AF_ReactJs.jpg",
    },
  ]);
  const mapData = latestCourse.map((data, index) => (
    <LatestCourse
      key={index}
      title={data.title}
      professorName={data.professorName}
      price={data.price}
      image={data.imageUrl}
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
          اخرین دوره ثبت شده
        </h2>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:mt-4">
        {mapData}
      </div>
    </div>
  );
};

export default LatestCourses;
