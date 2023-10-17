import React from 'react';
import {NewsListHero}from '../../components/News';

import bgNews from '../../assets/image/bg-news.svg';

const NewsList = () => {
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. "
  ];
  return (
    <div className="py-32">
      {/* <img src={bgNews} alt="picture" className='w-[100%] absolute pt-[200px]' /> */}
      <NewsListHero typeWriterWords={typeWriterWords} />
      <div className="w-[1200px] mx-auto mt-16 border-2 border-darkblue4 ">
        <div className="flex flex-row ">
        <ul className=" flex flex-row w-[835px] h-[86px] border-3 border-lightblue">
          <li className=" text-base text-lightblue w-[25%]">همه</li>
          <li className="text-base text-lightblue w-[25%]">محبوب ترین ها</li>
          <li className="text-base text-lightblue w-[25%]">پربازدید ترین ها</li>
          <li className="text-base text-lightblue w-[25%]">جدیدترین ها</li>
        </ul>
        <div className=" relative my-4 w-[330px] h-12">
          <input
            placeholder={"جستوجو..."}
            type={"search"}
            name={"search"}
            id="search"
            onKeyUp={()=>{filterData(data,setData)}}
            className="field-input outline-none text-darkblue2"
          />
          <i
            className={
              "bi bi-search absolute  top-3 text-xl left-4 text-[#12124266] dark:text-[#fff] "
            }
          ></i>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NewsList;