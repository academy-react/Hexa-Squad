import React from 'react';
import {NewsListHero}from '../../components/News';

const NewsList = () => {
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. "
  ];
  return (
    <div className="py-32">
      <NewsListHero typeWriterWords={typeWriterWords} />

    </div>
  )
}

export default NewsList;