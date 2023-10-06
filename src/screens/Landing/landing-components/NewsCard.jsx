import React from "react";

const NewsCard = ({ name, img, cardStyle, handleMouseDown }) => {
  return (
    <article
      className={`${cardStyle} absolute w-[600px]  h-full transition-all`}
    >
      <div className="card" onMouseDown={handleMouseDown}>
        <div className="relative w-[590px] h-[270px] mt-24 bg-[#F9F6FF] shadow-shadow-auth  rounded-xl ">
          <div className="absolute cursor-pointer  mr-[290px] mt-10">
            {" "}
            <h2 className="text-xl text-newPurple3 hover:text-newPurple2">
              {name}
            </h2>
            <h2 className=" text-md mt-6 mx-2 text-lightblue opacity-60">
              ”دوره‌های آنلاین انعطاف‌پذیری بیشتری را در برنامه‌ریزی روز خود و
              کار در کنار خانواده امکان‌پذیر می‌سازد.“
            </h2>
          </div>
          <div className="flex flex-row absolute left-6 bottom-8">
            <h2 className="text-newPurple cursor-pointer "> ادامه مطلب</h2>
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
