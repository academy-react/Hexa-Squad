import React, { useState, useEffect, useCallback } from "react";
import { NewsListHero, NewsFilterMenu } from "../../components/News";
import { NewsCard } from "../../components/Landing";
import fetchNewsApi from "../../core/services/api/GetData/allNewsApi";
import bgNews from "../../assets/image/bg-ListHero.svg";
import bgNewsDark from "../../assets/image/bg-ListHero-dark.svg";

const NewsList = () => {
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. ",
  ];

  const [newsData, setNewsData] = useState([]);
  const [newsAllData, setNewsAllData] = useState([]);

  // get News data from api and fetch
  useEffect(() => {
    fetchNewsApi(setNewsData, setNewsAllData);
  }, []);

  const newsCardsMapper = newsData.map((item, index) => {
    return (
      <NewsCard
        key={index}
        id={item.id}
        img={item.currentImageAddressTumb}
        name={item.title}
        description={item.miniDescribe}
        views={item.currentView}
        date={item.updateDate}
      />
    );
  });
  return (
    <div className="py-32" data-aos="zoom-out">
      <img
        src={bgNews}
        alt="picture"
        className="w-[100%] dark:hidden absolute top-0 z-0"
      />
      <img
        src={bgNewsDark}
        alt="picture"
        className="w-[100%] dark:block hidden absolute top-0 z-0"
      />
      <NewsListHero typeWriterWords={typeWriterWords} />
      <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[500px]  mx-auto mt-16">
        <NewsFilterMenu newsData={newsAllData} setNewsData={setNewsData} />
        <div className="news-card">{newsCardsMapper}</div>
      </div>
    </div>
  );
};

export default NewsList;
