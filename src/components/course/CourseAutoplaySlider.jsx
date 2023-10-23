import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Course from './Course';
import AllData from "../../core/services/api/Data/AllData";

import 'swiper/css';
import 'swiper/css/pagination';

const CourseAutoplaySlider = () => {
  const [coursesList, setCoursesList] = useState(AllData);
    return(
        <Swiper
            spaceBetween={10}
            slidesPerView={4}
            centeredSlides={false}
            initialSlide={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper pb-16"
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
                        image={item.imageUrl}
                      />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}
export default CourseAutoplaySlider;