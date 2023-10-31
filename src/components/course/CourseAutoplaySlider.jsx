import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Course from './Course';
import MyCourses from '../../core/services/api/Data/MyCourses';

import 'swiper/css';
import 'swiper/css/pagination';

const CourseAutoplaySlider = () => {
  const [coursesList, setCoursesList] = useState(MyCourses);
    return(
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={false}
            initialSlide={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
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
                        width={"lg:w-[24%]"}
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