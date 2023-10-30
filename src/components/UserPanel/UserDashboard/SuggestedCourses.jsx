import React, { useState } from "react";
import TitleRight from "../../../assets/icons/title right.svg";
import SuggestedCourse from "./SuggestedCourse";
const SuggestedCourses = () => {
  const [latestCourse, setLatestCourse] = useState([
    {
      title: "اموزش جنگو برای مبتدیان",
      professorName: "استاد محسن اسفندیاری",
      price: "150000",
      imageUrl:'https://toplearn.com/img/course/%D8%AF%D9%88%D8%B1%D9%87_%D8%AC%D8%A7%D9%85%D8%B9_JavaScript_2020.jpg',
    },
    {
      title: " اموزش پروژه محور تیلویند",
      professorName: " استاد بحرالعلوم ",
      price: "500000",
      imageUrl:'https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%86%D8%B1%D9%85_%D8%A7%D9%81%D8%B2%D8%A7%D8%B1_%D9%81%DB%8C%DA%AF%D9%85%D8%A7_%D8%A7%D8%B2_%D9%85%D8%A8%D8%AA%D8%AF%DB%8C_%D8%AA%D8%A7_%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87.jpg',
    },
  ]);
  const mapData = latestCourse.map((data, index) => (
    <SuggestedCourse
      key={index}
      title={data.title}
      professorName={data.professorName}
      price={data.price}
      image={data.imageUrl}
    />
  ));
  return (
    <div className="lg:w-6/12 lg:mr-10 mt-10 lg:mt-0">
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
