import React, { useEffect, useState } from "react";
import { addWishList } from "../../core/services/api/PostData/addCourseWishList";
import { addCart } from "../../core/services/api/PostData/addToCart";
import CourseHeader from "./CourseHeader";
import CourseBody from "./CourseBody";

import heart from "../../assets/image/heart.svg";
import fillHeart from "../../assets/image/fill - heart.svg";
import cart from "../../assets/image/cart.svg";
import "../Landing/common.css";

const Course = ({
  id,
  title,
  courseCount,
  time,
  date,
  professorName,
  bio,
  like,
  dislike,
  studentCount,
  price,
  image,
  addClass,
  userFavorite,
  userIsLiked,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false)
  const addFavorite = async ()=>{
    const result = await addWishList(id, userFavorite);
    setIsFavorite(result)
  }
  useEffect(() => {
    userFavorite == 1 && setIsFavorite(true)
  }, [])
  
  return (
    <div className={"course-box px-6 " + addClass}>
      <div className="hover-box z-3">
        <img
          src={cart}
          className="inline hover-box-img mr-6"
          onClick={() => addCart(id, isLogin)}
        />
        <img
          src={isFavorite ? fillHeart : heart}
          className="inline hover-box-img w-6"
          onClick={addFavorite}
        />
      </div>
      <CourseHeader image={image} />
      <CourseBody
        id={id}
        title={title}
        courseCount={courseCount}
        time={time}
        date={date}
        professorName={professorName}
        like={like}
        dislike={dislike}
        bio={bio}
        userIsLiked={userIsLiked}
        studentCount={studentCount}
        price={price}
      />
    </div>
  );
};

export default Course;
