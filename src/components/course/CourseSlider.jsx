import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Course from './Course';
import WhishList from "../../core/services/api/Data/WhishList";

import 'swiper/css';
import 'swiper/css/navigation';

const CourseSlider = () => {
  const [coursesList, setCoursesList] = useState(WhishList);
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
                        image={item.imageUrl}
                      />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}
export default CourseSlider;