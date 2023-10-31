import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import Title from "../common/Title";
const News = () => {
  const [newsList, setNewsList] = useState([
    {
      name: " چرا یک سئو کار باید برنامه نویس خوبی باشد؟",
      img: "https://toplearn.com/img/post/%DA%86%D8%B1%D8%A7_%DB%8C%DA%A9_%D8%B3%D8%A6%D9%88_%DA%A9%D8%A7%D8%B1_%D8%A8%D8%A7%DB%8C%D8%AF_%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87_%D9%86%D9%88%DB%8C%D8%B3_%D8%AE%D9%88%D8%A8%DB%8C_%D8%A8%D8%A7%D8%B4%D8%AF%D8%9F.jpg",
      description:
        " برای ساخت وب سایت شما می توانید از روش های گوناگونی چون وردپرس و .... استفاده کنید .  ",

      views: "123",
      date: "1402/02/08",
    },
    {
      name: "8 دلیل انتخاب تایپ اسکریپت در سال 2022",
      img: "https://toplearn.com/img/post/google_colab_%DA%86%DB%8C%D8%B3%D8%AA%D8%9F.jpg",
      description:
        "  جاوااسکریپت در میان توسعه دهندگان فرانت اند و بک اند کارآمدترین یا مقرون به صرفه ترین ... ",
      views: "173",
      date: "1401/03/09",
    },
  ]);
  const newsCardsMapper = newsList.map((item, index) => {
    return (
      <NewsCard
        img={item.img}
        name={item.name}
        description={item.description}
        views={item.views}
        date={item.date}
        key={index}
      />
    );
  });
  return (
    <section className="mb-28 overflow-hidden">
      <div className=" w-[440px] md:w-[740px] relative mt-20 lg:m-auto  mx-auto lg:mt-56">
        <Title inner={"اخبار و مقالات"} className={"title1"} />
        <Link to="/news" className={"text-newWhite hover:text-newWhite"}>
          <button className="absolute primary-btn w-auto h-10 bottom-[-20px] lg:w-56 lg:my-10  py-1 md:block lg:hidden left-3">
            مشاهده ی همه
          </button>
        </Link>
      </div>

      <div className="news-wrapper">{newsCardsMapper}</div>
      <Link to="/news" className={"text-newWhite hover:text-newWhite"}>
        <button className="primary-btn w-auto lg:w-56 lg:my-10 py-3 hidden md:hidden lg:block mx-auto">
          مشاهده ی همه
        </button>
      </Link>
    </section>
  );
};

export default News;
