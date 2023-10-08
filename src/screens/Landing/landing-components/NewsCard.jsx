import React from "react";

<<<<<<< HEAD
const NewsCard = ({ name, img, cardStyle, handleMouseDown }) => {
  return (
    <article
      className={`${cardStyle} absolute w-[600px]  h-full transition-all`}
    >
      <div className="card" onMouseDown={handleMouseDown}>
        <div className="relative w-[590px] h-[270px] mt-24 bg-[#F9F6FF] dark:bg-darkblue2 shadow-shadow-auth  rounded-xl ">
          <div className="absolute cursor-pointer  mr-[290px] mt-10">
            {" "}
            <h2 className="text-xl text-newPurple3 hover:text-newPurple2 dark:text-semiWhite">
              {name}
            </h2>
            <h2 className=" text-md mt-6 mx-2 text-lightblue opacity-60 dark:text-semiPink">
              ”دوره‌های آنلاین انعطاف‌پذیری بیشتری را در برنامه‌ریزی روز خود و
              کار در کنار خانواده امکان‌پذیر می‌سازد.“
            </h2>
          </div>
          <div className="flex flex-row absolute left-6 bottom-8">
            <h2 className="text-newPurple dark:text-lightblue cursor-pointer "> ادامه مطلب</h2>
            <i className="bi bi-arrow-left text-newPurple mt-1 mx-2 "></i>
          </div>

          <img
            src={img}
            className="w-[250px] h-[220px] absolute shadow-shadow-Course-box my-6 mx-6 rounded-xl bg-center object-cover duration-500"
            alt={name}
          />
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
=======
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
>>>>>>> feature/news
