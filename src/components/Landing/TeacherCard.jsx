import React from "react";
import { Link } from "react-router-dom";


const TeacherCard = ({ image,title, description, course }) => {
  return (
    
      <div className="relative gap-12 w-[340px] h-96 md:w-[300px] md:h-96 lg:w-[340px] lg:h-96">
        <div className="teacher-photo dark:bg-[#2a1079] dark:shadow-[#351476]">
          <div className="rounded-full absolute shadow-shadow-auth  overflow-hidden w-32 h-32  mx-2 my-2  md:w-[96px] md:h-[96px] md:mx-2 md:my-2 lg:w-32 lg:h-32  lg:mx-2 lg:my-2 ">
            <img className="object-cover shadow-shadow-auth " src={image} alt="image" />
          </div>
        </div>
        <div className="rounded-2xl  cursor-pointer mx-auto  shadow-2xl group overflow-hidden shadow-shadow-Course-box hover:shadow-shadow-auth  z-0 mt-[100px] lg:mt-[100px] md:mt-[90px] bg-semiWhite dark:bg-[#4116afe5] opacity md:w-60 lg:w-full dark:hover:shadow-[#220e6b] ">
          <div className="p-5 flex-col relative h-[260px] lg:h-[260px] md:h-[200px]">
            <div className="contact-teachers1 absolute z-3 top-[-60%] dark:bg-[#2a1079]">
              <div className=" bi bi-instagram icons-contact mt-3  "></div>
              <div className=" bi bi-telegram icons-contact"></div>
              <div className=" bbi bi-linkedin icons-contact"></div>
            </div>

            <Link to="/TeacherProfile">
              <h2 className="text-xl md:text-lg lg:text-2xl  mt-20 lg:mt-20 md:mt-12 group-hover:text-[#7400B2] text-darkblue2 dark:text-[#c9baff] dark:group-hover:text-[#e4defa]">
                {title}
              </h2>
            </Link>
            <h2 className="text-base text-[#6B3FEA] dark:text-[#7554F2] group-hover:text-[#0017C1] dark:group-hover:text-[#AC7CEB]"> {course} </h2>
            <p className=" text-sm md:text-xs  lg:text-sm text-[#1a1920] dark:text-[#8C7BFF] dark:group-hover:text-[#BAAFFF] group-hover:text-[#15006A] opacity-80 w-72 my-4 mt-4  md:w-48 lg:w-full ">
              {description}
            </p>
          </div>
        </div>
      </div>
  
    
  );
};

export default TeacherCard;