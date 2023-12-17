import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

import Course from "./Course";
import fetchData from "../../core/services/api/GetData/getTopCourses";

const CourseAutoplaySlider = () => {
  const [coursesList, setCoursesList] = useState([{skeleton: true},{skeleton: true},{skeleton: true},{skeleton: true}]);
  console.log(coursesList);
  const dataMapper = coursesList.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <Course
          id={item.courseId}
          bio={item.describe}
          skeleton={item.skeleton}
          title={item.title}
          courseCount={item.levelName}
          time={item.statusName}
          date={item.lastUpdate}
          professorName={item.teacherName}
          like={item.likeCount}
          dissLike={item.dissLikeCount}
          courseRate={item.courseRate}
          userFavorite={item.isUserFavorite}
          userIsLiked={item.userIsLiked}
          userIsDissLiked={item.userIsDissLiked}
          studentCount={item.currentRegistrants}
          price={item.cost}
          width={"lg:w-[24%]"}
          image={item.tumbImageAddress}
          userFavoriteId={item.userFavoriteId}        
        />
      </SwiperSlide>
    );
  });
  
  useEffect(() => {
    fetchData(8, setCoursesList);
  }, []);

  return (
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
      {dataMapper}
    </Swiper>
  );
};
export default CourseAutoplaySlider;
