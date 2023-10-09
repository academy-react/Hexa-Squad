import React from "react";
import teacher from "../../../assets/image/teacher1.jpg";

const TeacherCard = ({ title, description, course }) => {
  return (
    
      <div className="relative gap-12 w-[340px] h-96 md:w-[300px] md:h-96 lg:w-[340px] lg:h-96">
        <div className="teacher-photo">
          <div className="rounded-full absolute shadow-shadow-auth overflow-hidden w-32 h-32  mx-4 my-4  md:w-[88px] md:h-[88px] md:mx-3 md:my-3 lg:w-32 lg:h-32  lg:mx-4 lg:my-4 ">
            <img className="object-cover " src={teacher} alt="image" />
          </div>
        </div>
        <div className="rounded-2xl cursor-pointer mx-auto  shadow-2xl group overflow-hidden shadow-shadow-Course-box hover:shadow-shadow-auth z-0 mt-[100px] lg:mt-[100px] md:mt-[90px] bg-semiWhite md:w-60 lg:w-full ">
          <div className="p-5 flex-col relative">
            <div className="contact-teachers1 absolute z-3 top-[-60%]">
              <div className=" bi bi-instagram icons-contact mt-3  "></div>
              <div className=" bi bi-telegram icons-contact"></div>
              <div className=" bbi bi-linkedin icons-contact"></div>
            </div>

            <h2 className="text-xl md:text-lg lg:text-2xl  mt-20 lg:mt-20 md:mt-12 group-hover:text-[#7400B2] text-darkblue2 ">
              {title}
            </h2>
            <h2 className="text-base text-[#6B3FEA] group-hover:text-[#0017C1] "> {course} </h2>
            <p className=" text-sm lg:text-sm text-[#4E40C4] group-hover:text-[#15006A] opacity-80 w-72 my-4 md:mt-2 md:text-xs md:w-56 lg:w-full ">
              {description}
            </p>
          </div>
        </div>
      </div>
  
  
    
  );
};

export default TeacherCard;