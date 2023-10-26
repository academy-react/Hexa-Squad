import React from "react";
import course from "../../assets/image/course1.png";

const CoursePhoto = () => {
  return (
    <div
      data-aos="zoom-in-left"
      className="w-full lg:w-[860px]  md:w-[500px] relative  mx-auto md:my-10 lg:mt-10 lg:mx-12"
    >
      <div className="shadow-shadow-auth rounded-xl  ">
        <h2
          className="bi bi-heart text-3xl text-whitePink left-3 mt-4 absolute opacity-60 hover:opacity-100 cursor-pointer "
          alt="wishlist"
        />
        <img
          src={course}
          className="w-full h-full  lg:h-[420px] object-cover rounded-lg "
          alt="figma"
        />
      </div>
      <div className="mx-4 md:mx-0 mt-2 mb-10 md:mb-0">
        <h2 className="text-xl md:text-3xl mt-8 text-[#2C007F] dark:text-whitePink">
          اموزش رایگان html برای برنامه نویسان
        </h2>
        <p className=" mt-6 text-sm leading-8 md:text-md lg:text-base lg:leading-10 text-[#03001C] opacity-80 dark:text-lightPink ">
          محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و
          تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
          جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
          پیشرفته و تمیز؛
        </p>
      </div>
    </div>
  );
};

export default CoursePhoto;
