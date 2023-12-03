import React, { useEffect, useState } from "react";
import { addWishList } from "../../core/services/api/PostData/addCourseWishList";
import { addCart } from "../../core/services/api/PostData/addToCart";
import CourseHeader from "./CourseHeader";
import CourseBody from "./CourseBody";

import heart from "../../assets/image/heart.svg";
import fillHeart from "../../assets/image/fill - heart.svg";
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
  dissLike,
  courseRate,
  studentCount,
  price,
  image,
  addClass,
  userFavorite,
  userIsLiked,
  userIsDissLiked,
  userFavoriteId,
  skeleton,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addFavorite = async () => {
    const result = await addWishList(id, userFavorite);
    setIsFavorite(result);
  };
  useEffect(() => {
    if (userFavorite == 1) {
      setIsFavorite(true);
      id = userFavoriteId;
    }
  }, []);

  return (
    <div className={"course-box px-6 "+ addClass +' ' +( skeleton == true ? "skeleton" :'') }>
      <div className="hover-box z-3 skeleton-handler">
        <img
          src={isFavorite ? fillHeart : heart}
          className="inline hover-box-img w-6 "
          onClick={addFavorite}
        />
      </div>
      <CourseHeader image={image} />
      <CourseBody
        courseId={id}
        title={title}
        courseCount={courseCount}
        time={time}
        date={date}
        professorName={professorName}
        likeCount={like}
        dissLikeCount={dissLike}
        courseRate={courseRate}
        bio={bio}
        userIsLiked={userIsLiked}
        userIsDissLiked={userIsDissLiked}
        studentCount={studentCount}
        price={price}
      />
    </div>
  );
};

export default Course;
