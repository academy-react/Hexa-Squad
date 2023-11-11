import React, { useState, useEffect, useCallback } from "react";
import {NewsListHero, NewsFilterMenu}from '../../components/News';
import {NewsCard} from '../../components/Landing';
import fetchNewsApi from "../../core/services/api/Data/allNewsApi";
import bgNews from '../../assets/image/bg-ListHero.svg';
import bgNewsDark from '../../assets/image/bg-ListHero-dark.svg';
import NewsCategoriesFilter from "../../components/News/NewsCategoriesFilter";

const NewsList = () => {
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. "
  ];

  const [newsData, setNewsData] = useState([]);
  const [newsAllData, setNewsAllData] = useState([]);
  const [filterDiv, setFilterDiv] = useState(true);

  // get News data from api and fetch
  useEffect(() => {
    fetchNewsApi(setNewsData,setNewsAllData);
    return () => {
      setFilterDiv(false);
    };
  }, [fetchNewsApi]);  

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
        category = {item.newsCatregoryName}
      />
  )});
  return (
    <div className="py-32" >
      <img src={bgNews} alt="picture" className='w-[100%] dark:hidden absolute top-0 z-0' />
      <img src={bgNewsDark} alt="picture" className='w-[100%] dark:block hidden absolute top-0 z-0' />
      <NewsListHero typeWriterWords={typeWriterWords}/>
      <div className="md:mx-10 lg:mx-40 mt-16">
        <NewsFilterMenu 
          newsData={newsAllData} 
          setNewsData={setNewsData} 
          filterDiv={filterDiv} 
          setFilterDiv={setFilterDiv} 
        />
        <section className="flex flex-row">
          <NewsCategoriesFilter
            data={newsAllData}
            setFilterDiv={setFilterDiv}
            setData={setNewsData}
            filterDiv={filterDiv}          
          /> 
          <div className="news-card">
              {newsCardsMapper}
          </div>   
        </section>
      </div>
    </div>
  )
}

export default NewsList;