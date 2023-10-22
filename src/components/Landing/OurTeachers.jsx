import React, { useState } from "react";
import TeacherCard from "./TeacherCard";
import Title from "../common/Title";

import background from "../../assets/image/bgDesign.svg";

const OurTeachers = () => {
  const [teacherCard, setTeacherCard] = useState([
    {
      title: "نام استاد شماره 1",
      course: " مدرس ری اکت",
      description: `”موفقیت نهایی نیست. شکست کشنده نیست. این شجاعت ادامه دادن است که مهم است.“`,
      imageUrl:
        "https://toplearn.com/img/user/teachers/9420_1b6e5884-854f-961b-725b-39f3fa1ee56a_%D9%85%D8%AC%D8%AA%D8%A8%DB%8C_%DA%A9%D8%B1%D9%85%D9%84%D9%88.jpg",
    },
    {
      title: "نام استاد شماره 2",
      course: " مدرس جاوا",
      description: `”اهمیتی نداره تو چکار میکنی؛ راکستار آن باشید. اگر به همین راحتی بود، همه این کار را می کردند.“`,
      imageUrl:
        "https://toplearn.com/img/user/teachers/user-profile-%DB%8C%DA%A9-%D8%B4%D9%86%D8%A8%D9%87-%DB%B7-%D8%A7%D8%B1%D8%AF%DB%8C%D8%A8%D9%87%D8%B4%D8%AA-%DB%B1%DB%B3%DB%B9%DB%B9-98501911-414.jpg",
    },
    {
      title: "نام استاد شماره 3",
      course: " مدرس انگولار",
      description: `”مثبت اندیشی فقط امید به بهترین ها نیست! بلکه بهتر است بهترین عملکرد خود را در عمل به کار ببندید.“`,
      imageUrl:
        "https://toplearn.com/img/user/teachers/fe05078d-ff6b-416d-bfac-5b10af7c54ef_software-developer-gd82689c10_1920.jpg",
    },
  ]);
  const mapTeacherCard = teacherCard.map((item, index) => {
    return (
      <TeacherCard
        key={index}
        title={item.title}
        description={item.description}
        course={item.course}
        image={item.imageUrl}
      />
    );
  });
  return (
    <>
      <div className=" w-[540px] md:w-[740px] relative mt-20 lg:m-auto  mx-auto lg:mt-48">
        <Title
          inner={"اساتید برتر"}
          className={"title1 lg:mt-48 mt-28 lg:m-auto"}
        />
      </div>
      <div className="flex items-center mt-20 lg:mt-20 justify-center  container mx-auto ">
        <div
          className=" bg-center bg-cover w-[300px] h-[420px] absolute left-0 mt-44 hidden lg:block "
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="grid grid-cols-1  md:grid-cols-3  md:gap-4 lg:gap-8">
          {mapTeacherCard}
        </div>
      </div>
    </>
  );
};

export default OurTeachers;
