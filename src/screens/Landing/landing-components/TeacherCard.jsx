import React from "react";
import teacher from "../../../assets/image/teacher1.jpg";

const TeacherCard = ({ title, description, course }) => {
  return (
    
      <div className="relative w-[340px] h-96 group  ">
        <div className="teacher-photo group-hover:scale-110 transition-all ">
          <div className="rounded-full absolute shadow-shadow-auth overflow-hidden w-32 h-32 mx-4 my-4">
            <img className="object-cover " src={teacher} alt="image" />
          </div>
        </div>
        <div className="rounded-2xl cursor-pointer shadow-2xl  overflow-hidden shadow-shadow-Course-box hover:shadow-shadow-auth z-0 mt-[100px] bg-semiWhite dark:bg-newPurpleAlpha2 ">
          <div className="p-5 flex-col  relative">
            <div className="contact-teachers1 absolute z-3 top-[-60%]">
              <div className=" bi bi-instagram icons-contact md:mx-4 md:text-base mt-3 "></div>
              <div className=" bi bi-telegram icons-contact md:mx-4 md:text-base"></div>
              <div className=" bbi bi-linkedin icons-contact md:mx-4 md:text-base"></div>
            </div>

            <h2 className="text-xl md:text-2xl mt-20 dark:text-[#888] group-hover:text-[#7400B2] dark:group-hover:text-[#bababa] text-darkblue2 ">
              {title}
            </h2>
            <h2 className="text-base text-[#6B3FEA] dark:text-[#7567a2]  dark:group-hover:text-[#aaa] group-hover:text-[#0017C1] "> {course} </h2>
            <p className=" text-sm text-[#4E40C4] group-hover:text-[#15006A] dark:text-[#a999db]  dark:group-hover:text-[#d9d9d9] opacity-80 w-72 my-4 ">
              {description}
            </p>
          </div>
        </div>
      </div>
  
  
    
  );
};

export default TeacherCard;
