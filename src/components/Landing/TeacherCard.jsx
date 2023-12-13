import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import teacherImg from "../../assets/image/Webinar-pana.svg";

const TeacherCard = ({ title, description, course, pictureAddress,courseCount, id }) => {
  return (
    <Fragment>
      <Link
        to={"/TeacherProfile/" + id}
        className="relative gap-12 w-[340px] h-96 md:w-[300px] md:h-96 lg:w-[340px] lg:h-96"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <div className="teacher-photo dark:bg-[#2a1079] dark:shadow-[#351476] ">
          <div className="rounded-full absolute overflow-hidden shadow-[0_20px_50px_rgba(88,_0,_255,_1)] dark:shadow-shadow-auth w-32 h-32  mx-2 my-2  md:w-[96px] md:h-[96px] md:mx-2 md:my-2 lg:w-32 lg:h-32 lg:mx-2 lg:my-2 ">
            <img
              className="object-cover w-32 h-32"
              src={pictureAddress ? pictureAddress : teacherImg}
              alt="image"
            />
          </div>
        </div>
        <div className="rounded-br-3xl rounded-lg cursor-pointer mx-auto  shadow-[rgba(0,_0,_0,_0.15)_0px_25px_50px_-12px] group overflow-hidden  hover:shadow-shadow-auth  z-0 mt-[100px] lg:mt-[100px] md:mt-[90px]  bg-gradient-to-bl from-[#8800ff] to-[#8181ff] dark:bg-gradient-to-bl dark:from-[#13005A] dark:to-[#26126e]  opacity md:w-60 lg:w-full dark:hover:shadow-[#220e6b] ">
          <div className="p-5 flex-col relative h-[260px] lg:h-[260px] md:h-[200px]">
            <div className="contact-teachers1 text-purple-100 absolute z-3 top-[-60%] dark:bg-[#2a1079]">
              <div className=" bi bi-instagram icons-contact  mt-3  "></div>
              <div className=" bi bi-telegram icons-contact"></div>
              <div className=" bbi bi-linkedin icons-contact"></div>
            </div>
            <h2 className="text-xl md:text-sm lg:text-xl  mt-20 lg:mt-24 md:mt-14 text-[#ede8ff]   dark:text-[#c9baff] dark:group-hover:text-[#e4defa]">
              {title}
            </h2>
            {/* <h2 className="text-sm md:text-xs lg:text-sm mt-2 text-[#d5c7ff]">
              {" "}
              {course}{" "}
            </h2> */}
            <p className=" text-sm md:text-xs  lg:text-sm text-indigo-100 lg:leading-6  w-72 my-4   md:w-48 lg:w-full ">
              تعداد درس های ارائه شده توسط این استاد : {courseCount}
            </p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default TeacherCard;
