import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Course from './Course';

import 'swiper/css';
import 'swiper/css/navigation';

const CourseSlider = () => {
    const [coursesList, setCoursesList] = useState([
        {
          title: "آموزش JavaSript",
          courseCount: "199 درس",
          time: "24 ساعت",
          date: "2 خرداد 1402",
          professorName: "دکتر بحرالعلوم",
          like: "120",
          dislike: "0",
          studentCount: "267 دانش اموز",
          price: "500,000",
        },
        {
          title: "آموزش Figma",
          courseCount: "90 درس",
          time: "10 ساعت",
          date: "25 مهر 1402",
          professorName: "مهندس نظری",
          like: "78",
          dislike: "2",
          studentCount: "158 دانش اموز",
          price: "320,000",
        },
        {
          title: "آموزش Node.js",
          courseCount: "155 درس",
          time: "14 ساعت",
          date: "ا اذر 1402",
          professorName: "دکتر بحرالعلوم",
          like: "52",
          dislike: "3",
          studentCount: "128 دانش اموز",
          price: "480,000",
        },
        {
          title: "آموزش React.js",
          courseCount: "87 درس",
          time: "8 ساعت",
          date: "ا مرداد 1402",
          professorName: "مهندس اصغری",
          like: "150",
          dislike: "0",
          studentCount: "210 دانش اموز",
          price: "450,000",
        },
      ]);

    return(
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            initialSlide={1}
            navigation
        >
            {coursesList.map((item, index) => {
                return (
                    <SwiperSlide>
                        <Course
                            key={index}
                            title={item.title}
                            courseCount={item.courseCount}
                            time={item.time}
                            date={item.date}
                            professorName={item.professorName}
                            like={item.like}
                            dislike={item.dislike}
                            studentCount={item.studentCount}
                            price={item.price}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}
export default CourseSlider;