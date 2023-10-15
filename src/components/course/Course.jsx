import React, { useState } from "react";
import "../Landing/common.css";
import CoutsrHeader from "./CourseHeader";
import CourseBody from "./CourseBody";
import heart from "../../assets/image/heart.svg";
import cart from "../../assets/image/cart.svg";
import { Link } from "react-router-dom";
import { addWishList } from "../../core/services/api/addWishList";
import { addCart } from "../../core/services/api/addCart";

const Course = ({ title, professorName, price ,id}) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="course-box">
      <div className="hover-box top-3 float-left h-[44px] w-[110px] absolute mb-[-50px] bg-[#9371FF] dark:bg-[#261A97] dark:shadow-shadow-auth rounded-r-[10px] z-3 left-[-50%]">
        <img src={cart} className="inline hover-box-img mr-6" onClick={()=>addCart(id,isLogin)} />
        <img src={heart} className="inline hover-box-img" onClick={()=>addWishList(id ,isLogin)} />
      </div>
      <div className="mx-auto w-64">
        <CoutsrHeader />
        <CourseBody title={title} professorName={professorName} price={price} />
        <Link to={"/CourseDetails"}>
          <p className="text-[#6635FF] dark:text-[#8576b3] text-base text-left border-t-2 border-[#00018533] py-4">
            {" "}
            مشاهده ی جزئیات
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline pr-1 w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Course;
