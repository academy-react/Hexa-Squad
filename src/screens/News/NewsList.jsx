import React, { useState } from 'react';
import {NewsListHero, NewsFilterMenu}from '../../components/News';
import {NewsCard} from '../../components/Landing';

import bgNews from '../../assets/image/bg-news.svg';

const NewsList = () => {
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. "
  ];
  const [newsList, setNewsList] = useState([
    {
      name: "چگونه مطالعه موثر را برای شما آسان تر کنیم.",
      img: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "چگونه مطالعه موثر را برای شما آسان تر کنیم.",
      img: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "چگونه مطالعه موثر را برای شما آسان تر کنیم.",
      img: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "چگونه مطالعه موثر را برای شما آسان تر کنیم.",
      img: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);
  const newsCardsMapper = newsList.map((item, index) => {
    return <NewsCard img={item.img} name={item.name} key={index}/>;
  });
  return (
    <div className="py-32">
      {/* <img src={bgNews} alt="picture" className='w-[100%] absolute pt-[200px]' /> */}
      <NewsListHero typeWriterWords={typeWriterWords}/>
      <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[500px]  mx-auto mt-16">
        <NewsFilterMenu/>
        <div className="news-card w-full flex flex-col hover: gap-y-8">
            {newsCardsMapper}
        </div>       
      </div>
    </div>
  )
}

export default NewsList;