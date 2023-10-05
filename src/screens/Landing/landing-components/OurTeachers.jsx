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
      <div className="mr-48 mt-48">
        <h1 className=" text-4xl  text-darkblue2 "> اساتید ما</h1>
        <div className="underline-menu w-24 "></div>
      </div>
      <div className="flex lg:gap-10 md:gap-5 mx-48 my-20 items-center justify-center flex-col gap-10 md:flex-row ">
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
    </>
  );
};

export default OurTeachers;
