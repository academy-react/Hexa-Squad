import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ name, img }) => {
  return (
    <div className=" relative rounded-xl bg-semiWhite dark:bg-[#13005A] shadow-shadow-auth hover:scale-105 duration-500 ">
      <div className="w-[430px] h-[205px] sm:w-[480px] sm:h-[205px]  md:h-[240px]  md:w-[600px] cursor-pointer rounded-xl ">
        <div className="absolute cursor-pointer group mr-[220px] md:mr-[260px] lg:mr-[265px] mt-5 md:mt-6 lg:mt-7 ">
          <h2 className="md:text-xl text-lg text-newPurple3 group-hover:text-newPurple2 pl-4 dark:text-[#BBB8FF] dark:group-hover:text-[#F0E2FF]">
            {name}
          </h2>
          <h2 className="md:text-base text-sm md:mt-6 mt-2 pl-6 text-lightblue dark:text-[#ABA6EF]  dark:group-hover:text-[#DEDCFF] opacity-60">
            ”دوره‌های آنلاین انعطاف‌پذیری بیشتری را در برنامه‌ریزی روز خود و کار
            در کنار خانواده امکان‌پذیر می‌سازد.“
          </h2>
          <div className="flex flex-row absolute left-3 mt-2 md:left-5 ">
            <Link to={"/newsDetails"}>
              <h2 className="text-newPurple  group-hover:text-[#9100DB] dark:text-[#603CE9] dark:group-hover:text-[#B882FF] ">
                {" "}
                ادامه مطلب
              </h2>
            </Link>
            <i className="bi bi-arrow-left group-hover:text-[#9100DB] text-newPurple dark:text-[#603CE9] dark:group-hover:text-[#B882FF] mt-1 mx-2"></i>
          </div>
        </div>
        <img src={img} className="news-image" alt={name} />
      </div>
    </div>
  );
};

export default NewsCard;
