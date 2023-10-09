import React, { useState } from "react";
import NewsCard from "./NewsCard";
const News = () => {
  const [newsList, setNewsList] = useState([
    {
      name: "چگونه مطالعه موثر را برای شما آسان تر کنیم.",
      img: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "چگونه مطالعه موثر را برای شما آسان تر کنیم.",
      img: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);

  return (
    <section>
    <div className=" w-[540px] md:w-[740px] relative mt-20 lg:m-auto  mx-auto lg:mt-48">
      <h1 className="title1">
        اخبار و مقالات
        <span className="absolute w-[100%]  block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
      </h1>
      
      <button className="absolute primary-btn w-auto h-10 bottom-[-20px] lg:w-56 lg:my-10  py-1 md:block lg:hidden left-3">
        مشاهده ی همه
      </button>
      
      </div>

      <div className="news-wrapper">
        {newsList.map((item, index) => {
          return (
            <>
              <NewsCard img={item.img} name={item.name} />
            </>
          );
        })}
      </div>
      <button className="primary-btn w-auto lg:w-56 lg:my-10 py-3 hidden md:hidden lg:block mx-auto">
        مشاهده ی همه
      </button>
    </section>
  );
};

export default News;