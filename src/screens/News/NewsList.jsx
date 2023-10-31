import React, { useState } from 'react';
import {NewsListHero, NewsFilterMenu}from '../../components/News';
import {NewsCard} from '../../components/Landing';
import newsAllData from '../../core/services/api/Data/newsAllData';
import bgNews from '../../assets/image/bg-news.svg';

const NewsList = () => {
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. "
  ];
  const [newsList, setNewsList] = useState(newsAllData);
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
  )});
  return (
    <div className="py-32" data-aos="zoom-out">
      {/* <img src={bgNews} alt="picture" className='w-[100%] absolute pt-[200px]' /> */}
      <NewsListHero typeWriterWords={typeWriterWords}/>
      <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[500px]  mx-auto mt-16">
        <NewsFilterMenu newsList={newsAllData} setNewsList={setNewsList}/>
        <div className="news-card">
            {newsCardsMapper}
        </div>       
      </div>
    </div>
  )
}

export default NewsList;