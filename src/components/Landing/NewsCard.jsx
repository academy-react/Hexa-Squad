import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ name, img, description, views, date }) => {
  return (
    <div
      data-aos="zoom-in"
      className=" relative rounded-xl bg-[#EAE5FF] dark:bg-[#13005A] shadow-shadow-auth hover:shadow-[#8b88c4] dark:hover:shadow-[#141339] duration-500 "
    >
      <div className=" w-[440px] h-[230px]  md:h-[240px]  md:w-[600px] cursor-pointer rounded-xl ">
        <Link to={"/newsDetails"}>
          <div className="absolute cursor-pointer group mr-[220px] md:mr-[260px] lg:mr-[265px] mt-5 md:mt-6 lg:mt-7 ">
            <h2 className="md:text-lg text-base text-newPurple3 group-hover:text-newPurple2 pl-6 h-14 dark:text-[#e9e8ff] dark:group-hover:text-[#F0E2FF]">
              {name}
            </h2>
            <div className="flex flex-row my-2">
              <h2 className="news-view text-indigo-900 dark:text-indigo-200 text-xs mt-[2px] ml-2">
                {" "}
                <i class="bi bi-eye text-sm ml-1 dark:text-indigo-200 "></i>
                {views} بازدید{" "}
              </h2>
              <div className="news-border h-[22px] mx-2 rotate-180  border border-[#ABA6EF]"></div>
              <h2 className="news-date text-indigo-900 text-xs dark:text-indigo-200 mt-[3px] mx-2">
                <i class="bi bi-calendar-event text-sm dark:text-indigo-200 ml-1"></i>
                {date}
              </h2>
            </div>
            <h2 className="news-description md:text-base h-[80px] w-[95%] text-justify text-sm md:my-2 mt-2 pl-6 text-lightblue dark:text-[#cbc7ff] dark:opacity-90 dark:group-hover:text-[#DEDCFF] opacity-60">
              {description}
            </h2>
            <div className="news-readMore flex flex-row absolute  md:-mt-3 left-3  md:left-5 ">
              <h2 className=" text-newPurple text-xs md:text-base group-hover:text-[#9100DB] dark:text-indigo-300 dark:group-hover:text-[#B882FF] ">
                {" "}
                ادامه مطلب
              </h2>

              <i className="bi bi-arrow-left  text-xs md:text-base group-hover:text-[#9100DB] text-newPurple dark:text-indigo-300 dark:group-hover:text-[#B882FF] mt-1 mx-2"></i>
            </div>
          </div>
        </Link>
        <img src={img} className="news-image" alt={name} />
      </div>
    </div>
  );
};

export default NewsCard;
