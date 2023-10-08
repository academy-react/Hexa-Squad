import React, { useState } from "react";

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
<<<<<<< HEAD
      <h1 className="title lg:mt-40 mt-20">
=======
      <h1 className="title1 lg:mt-40 mt-20 mr-10  lg:m-auto">
>>>>>>> feature/news
        اساتید برتر
        <span className="absolute w-[100%]  block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
      </h1>
      <div className="flex lg:gap-10 md:gap-5 mx-48 my-28 items-center justify-center flex-col gap-10 md:flex-row ">
        {teacherCard.map((item, index) => {
          return (
              <TeacherCard
                key={index}
                title={item.title}
                description={item.description}
                course={item.course}
              />
          );
        })}
      </div>
    </>
  );
};

export default OurTeachers;
