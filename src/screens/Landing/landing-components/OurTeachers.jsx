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
      <h1 className="title1 lg:mt-48 mt-28 mr-10  lg:m-auto">
        اساتید برتر
        <span className="absolute w-[100%] block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
      </h1>
      <div className="flex items-center mt-20 lg:mt-20 justify-center  container mx-auto ">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-8">
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
