import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Course from './Course';

import 'swiper/css';
import 'swiper/css/navigation';

const CourseSlider = () => {
    const [coursesList, setCoursesList] = useState([
        {
          title: "آموزش Figma",
          courseCount: "199 درس",
          time: "14 ساعت",
          date: "ا اذر 1402",
          professorName: "دکتر بحرالعلوم",
          like: "32",
          dislike: "0",
          studentCount: "267 دانش اموز",
          price: "500,000",
        },
        {
          title: "آموزش Node.js",
          courseCount: "199 درس",
          time: "14 ساعت",
          date: "ا اذر 1402",
          professorName: "دکتر بحرالعلوم",
          like: "32",
          dislike: "0",
          studentCount: "267 دانش اموز",
          price: "500,000",
        },
        {
          title: "آموزش JavaSript",
          courseCount: "199 درس",
          time: "14 ساعت",
          date: "ا اذر 1402",
          professorName: "دکتر بحرالعلوم",
          like: "32",
          dislike: "0",
          studentCount: "267 دانش اموز",
          price: "500,000",
        },
        {
          title: "آموزش React.js",
          courseCount: "199 درس",
          time: "14 ساعت",
          date: "ا اذر 1402",
          professorName: "دکتر بحرالعلوم",
          like: "32",
          dislike: "0",
          studentCount: "267 دانش اموز",
          price: "500,000",
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