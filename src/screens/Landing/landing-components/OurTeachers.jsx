import React, { useState } from "react";
import background from "../../../assets/image/bgDesign.svg";
import TeacherCard from "./TeacherCard";

const OurTeachers = () => {
  const [teacherCard, setTeacherCard] = useState([
    {
      title: "نام استاد شماره 1",
      course: " مدرس ری اکت",
      description: `”دوره‌های آنلاین انعطاف‌پذیری بیشتری را در برنامه‌ریزی روز خود و کار در کنار خانواده امکان‌پذیر می‌سازد.“`,
    },
    {
      title: "نام استاد شماره 2",
      course: " مدرس جاوا",
      description: `”دوره‌های آنلاین انعطاف‌پذیری بیشتری را در برنامه‌ریزی روز خود و کار در کنار خانواده امکان‌پذیر می‌سازد.“`,
    },
    {
      title: "نام استاد شماره 3",
      course: " مدرس انگولار",
      description: `”دوره‌های آنلاین انعطاف‌پذیری بیشتری را در برنامه‌ریزی روز خود و کار در کنار خانواده امکان‌پذیر می‌سازد.“`,
    },
  ]);
  return (
    <>
      <div className=" w-[540px] md:w-[740px] relative mt-20 lg:m-auto  mx-auto lg:mt-48">
        <h1 className="title1 lg:mt-48 mt-28 lg:m-auto">
          اساتید برتر
          <span className="absolute w-[100%] block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
        </h1>
      </div>
      <div className="flex items-center mt-20 lg:mt-20 justify-center  container mx-auto ">
        <div
          className=" bg-center bg-cover w-[300px] h-[420px] absolute left-0 mt-44 hidden lg:block "
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="grid grid-cols-1  md:grid-cols-3  md:gap-4 lg:gap-8">
          {teacherCard.map((item, index) => {
            return (
              <>
                <TeacherCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  course={item.course}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurTeachers;
