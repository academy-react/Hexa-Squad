import React, { useState } from "react";
import NewsCard from "./NewsCard";
import Title from "../common/Title";
const News = () => {
  const [newsList, setNewsList] = useState([
    {
      name: " چرا یک سئو کار باید برنامه نویس خوبی باشد؟",
      img: "https://toplearn.com/img/post/%DA%86%D8%B1%D8%A7_%DB%8C%DA%A9_%D8%B3%D8%A6%D9%88_%DA%A9%D8%A7%D8%B1_%D8%A8%D8%A7%DB%8C%D8%AF_%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87_%D9%86%D9%88%DB%8C%D8%B3_%D8%AE%D9%88%D8%A8%DB%8C_%D8%A8%D8%A7%D8%B4%D8%AF%D8%9F.jpg",
      description:
        " برای ساخت وب سایت شما می توانید از روش های گوناگونی چون وردپرس و .... استفاده کنید .  ",
    },
    {
      name: "8 دلیل انتخاب تایپ اسکریپت در سال 2022",
      img: "https://toplearn.com/img/post/google_colab_%DA%86%DB%8C%D8%B3%D8%AA%D8%9F.jpg",
      description:
        " محبوبیت جاوااسکریپت در میان توسعه دهندگان فرانت اند و بک اند کارآمدترین یا مقرون به صرفه ترین راه‌ حل نیست. ",
    },
  ]);
  const newsCardsMapper = newsList.map((item, index) => {
    return (
      <NewsCard
        img={item.img}
        name={item.name}
        description={item.description}
        key={index}
      />
    );
  });
  return (
    <section>
      <div className=" w-[440px] md:w-[740px] relative mt-20 lg:m-auto  mx-auto lg:mt-48">
        <Title inner={"اخبار و مقالات"} className={"title1"} />
        <button className="absolute primary-btn w-auto h-10 bottom-[-20px] lg:w-56 lg:my-10  py-1 md:block lg:hidden left-3">
          مشاهده ی همه
        </button>
      </div>

      <div className="news-wrapper">{newsCardsMapper}</div>
      <button className="primary-btn w-auto lg:w-56 lg:my-10 py-3 hidden md:hidden lg:block mx-auto">
        مشاهده ی همه
      </button>
    </section>
  );
};

export default News;
