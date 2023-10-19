import React, { useState } from "react";
import { addWishList } from "../../core/services/api/addWishList";
import { addCart } from "../../core/services/api/addCart";
import CoutsrHeader from "./CourseHeader";
import CourseBody from "./CourseBody";

import heart from "../../assets/image/heart.svg";
import cart from "../../assets/image/cart.svg";
import "../Landing/common.css";


const Course = ({ data, title, courseCount, time, date, professorName, like, dislike, studentCount, price,image, id,width }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={"course-box px-6 "+width}>
      <div className="hover-box z-3">
        <img src={cart} className="inline hover-box-img mr-6" onClick={()=>addCart(id,isLogin)} />
        <img src={heart} className="inline hover-box-img" onClick={()=>addWishList(id ,isLogin)} />
      </div>
      <CoutsrHeader image={image} />
      <CourseBody 
        title={title} 
        courseCount={courseCount}
        time={time}
        date={date}
        professorName={professorName} 
        like={like} 
        dislike={dislike}
        studentCount={studentCount}
        price={price} 
      />
    </div>
  );
};

export default Course;
