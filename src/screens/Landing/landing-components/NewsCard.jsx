import React from "react";

const NewsCard = ({ name, img }) => {
  return (
    <div className=" relative bg-semiWhite rounded-xl shadow-shadow-auth hover:scale-105 duration-500 ">
      <div className="w-[480px] h-[195px] md:h-[240px]  md:w-[600px] cursor-pointer  ">
        <div className="absolute cursor-pointer mr-[220px] md:mr-[260px] lg:mr-[265px] mt-5 md:mt-6 lg:mt-7 ">
          <h2 className="md:text-xl text-lg text-newPurple3 hover:text-newPurple2 pl-4">
            {name}
          </h2>
          <h2 className="md:text-base text-sm md:mt-6 mt-2 pl-6 text-lightblue opacity-60">
            ”دوره‌های آنلاین انعطاف‌پذیری بیشتری را در برنامه‌ریزی روز خود و کار
            در کنار خانواده امکان‌پذیر می‌سازد.“
          </h2>
          <div className="flex flex-row absolute left-3 mt-2 md:left-5 ">
            <h2 className="text-newPurple  hover:text-newPurple3 "> ادامه مطلب</h2>
            <i className="bi bi-arrow-left text-newPurple mt-1 mx-2"></i>
          </div>
        </div>
        <img
          src={img}
          className="news-image"
          alt={name}
        />
      </div>
    </div>
  );
};

export default NewsCard;