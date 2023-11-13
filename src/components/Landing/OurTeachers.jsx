import React, { useState,useEffect } from "react";
import TeacherCard from "./TeacherCard";
import Title from "../common/Title";
import axios from "axios";
import { useCallback } from "react";
import background from "../../assets/image/bgDesign.svg";

const OurTeachers = () => {
  const [teacherCard, setTeacherCard] = useState([
    {
      title: "  استاد مهدی اصغری",
      course: " مدرس ری اکت",
      description: `”موفقیت نهایی نیست. شکست کشنده نیست. این شجاعت ادامه دادن است که مهم است.“`,
    },
    {
      title: "  استاد محمدحسین بحرالعلوم",
      course: " مدرس جاوا اسکریپت",
      description: `”اهمیتی نداره تو چکار میکنی؛ راکستار آن باشید. اگر به همین راحتی بود، همه این کار را می کردند.“`,
    },
    {
      title: "  استاد محسن اسفندیاری",
      course: " مدرس انگولار",
      description: `”مثبت اندیشی فقط امید به بهترین ها نیست! بلکه بهتر است بهترین عملکرد خود را در عمل به کار ببندید.“`,
    },
  ]);
  const [teacherList, setTeacherList] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(
        "https://acadapi.etacorealtime.ir/api/Home/GetTeachers"
      );
      console.log(result.data);
      const receivedData = result.data;
      setTeacherList(receivedData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const mapTeacherCard = teacherList.map((item, index) => {
    return (
      <TeacherCard
        key={index}
        courseCount = {item.courseCount}
        pictureAddress={item.pictureAddress}
        title={item.fullName}
        description={item.teacherId}
        course={item.linkdinProfileLink}
        id={item.teacherId}
        
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
          className=" bg-center bg-cover w-[210px] h-[300px] absolute left-0 mt-[340px] hidden lg:block "
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="grid grid-cols-1  md:grid-cols-3  md:gap-4 lg:gap-8">
          {mapTeacherCard}
        </div>
      </div>
    </>
  );
};

// w-[300px] h-[420px]
export default OurTeachers;
