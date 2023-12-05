import React, { useState, Fragment } from "react";
import TeacherSocialMedia from "./TeacherSocialMedia";
import TeacherWishList from "./TeacherWishList";

import teacherImg from "../../../assets/image/Webinar-pana.svg";

const TeacherInfo = ({
  title,
  number,
  email,
  experiences,
  education,
  linkdin,
  image,
  courseCounts,
  newsCount
}) => {
  return (
    <Fragment>
      <div className="md:float-left md:w-2/5">
        <div className="md:text-2xl lg:text-4xl pb-8 text-center text-[#2C007F] dark:text-whitePink">
          {title}
        </div>
        <div className="relative">
          <figure className="img-figure">
            <img
              className="teacher-image"
              src={image ? image : teacherImg}
              alt="image"
              data-aos="zoom-in"
              data-aos-duration="2500"
            />
          </figure>
          {/* <span className="teacher-image-hover  -z-1"> تماس با استاد:{`\n`}{number}</span> */}
        </div>
        <div className="teacher-education">{education ? education : "مهندس نرم افزار"}</div>
      </div>
      <div
        className="md:float-left md:w-3/5 md:px-4 lg:px-12 rounded-lg md:shadow-shadow-Course-details dark:bg-darkblue2"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="teacherInfo">
          تجربه ها:
          <div className="py-4 px-4 text-base leading-8 md:text-base lg:text-lg lg:leading-10 text-[#03001C] opacity-80 dark:text-lightPink">
             استاد {title} از اساتید با تجربه و کاربلد تیم هگزا اسکواد هستند. 
             ایشان با مهارت های فوق العاده شان که از بهترین آنها میتوان از {education ==  undefined || education == null ? 'تدریس فوق العاده ایشان ': education}نام برد
          </div>
        </div>
        <div className="teacherInfo lg:pt-4 ">
          {" "}
          راه های ارتباطی:
          <TeacherSocialMedia number={number} email={email} linkdin={linkdin} />
        </div>
        <div className="teacherInfo lg:pt-8 border-none">
          {" "}
          تعداد دوره ها:
          <span className="py-4 px-4 text-base leading-8 md:text-base lg:text-lg lg:leading-10 text-[#03001C] opacity-80 dark:text-lightPink">
          {courseCounts}
          </span>
        </div>
        <div className="teacherInfo lg:pt-4 lg:pb-8 border-none">
          {" "}
          تعداد مقالات:
          <span className="py-4 px-4 text-base leading-8 md:text-base lg:text-lg lg:leading-10 text-[#03001C] opacity-80 dark:text-lightPink">
          {newsCount}
          </span>
        </div>
        {/* <div className="teacher-suggestion"><TeacherWishList/></div> */}
      </div>
      <TeacherWishList />
    </Fragment>
  );
};
export default TeacherInfo;
