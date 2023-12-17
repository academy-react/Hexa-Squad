import React, { useState } from "react";
import { Link } from "react-router-dom";
import SeparationPrice from "../../core/utility/SeparationPrice/SeparationPrice";
import { addLike } from "../../core/services/api/PutData/addLikeToCourse";
// import { addDisLike } from "../../core/services/api/addDisLike";
import handleCourseAddLike from "../../core/services/api/PostData/addCourseLike";
import handleCourseDisLike from "../../core/services/api/PostData/addCourseDisLike";

import likePic from "../../assets/image/like.svg";
import dislikePic from "../../assets/image/dislike.svg";
import {
  countSvg,
  timeSvg,
  calendarSvg,
  graduationCapSvg,
  peopleSvg,
} from "../../assets/icons/svgIcons";
import "../Landing/common.css";
import GregorianToSolar from "../../core/utility/GregorianToSolar/GregorianToSolar";

const CourseBody = ({
  title,
  courseCount,
  time,
  date,
  professorName,
  likeCount,
  dissLikeCount,
  courseRate,
  studentCount,
  price,
  bio,
  courseId,
  userIsLiked,
  userIsDissLiked,
}) => {
  // const [isLogin, setIsLogin] = useState(false);
  const [changeLikeColor, setChangeLikeColor] = useState(0);
  const [changeDisLikeColor, setChangeDisLikeColor] = useState(0);

  return (
    <div className="course-body mt-6 whitespace-nowrap select-none">
      <Link
        to={"/CourseDetails/" + courseId}
        className=" text-ellipsis overflow-hidden whitespace-nowrap w-full block"
      >
        <h2 className="course-name">{title}</h2>
      </Link>
      <div className="">
        <span className="skeleton-handler inline-block mx-1">
          {countSvg}
          <h3 className="  course-info pl-6">{courseCount}</h3>
        </span>
        <span className="skeleton-handler inline-block mx-1">
          {timeSvg}
          <h3 className="course-info pl-6 ">{time}</h3>
        </span>
        <span className="skeleton-handler inline-block mx-1">
          {calendarSvg}
          <h3 className="course-info  " dir="ltr">
            {date && GregorianToSolar(date)}
          </h3>
        </span>
      </div>
      <div className=" hidden course-bio skeleton-handler">{bio}</div>

      <div className="pt-8 flex justify-between whitespace-nowrap">
        <div className="professor-name w-40 whitespace-nowrap overflow-hidden text-ellipsis skeleton-handler">
          {graduationCapSvg}
          <span to={"/TeacherProfile/"} className="course-info text-sm">
            {professorName}
          </span>
        </div>
        <div className="likes-box">
          <div
            className="course-like-box py-2 mr-4 bg-[#e3deff] skeleton-handler"
            onClick={() =>
              handleCourseAddLike(
                courseId,
                likeCount,
                changeLikeColor,
                setChangeLikeColor
              )
            }
          >
            <span
              className={` cursor-pointer text-indigo-950 bi ${
                changeLikeColor || userIsLiked === true
                  ? ` bi-hand-thumbs-up-fill `
                  : ` bi-hand-thumbs-up `
              }`}
            >
              {" "}
              {likeCount}
            </span>
          </div>
          <div
            className="course-like-box py-2 mr-4 bg-[#e3deff] skeleton-handler "
            onClick={() =>
              handleCourseDisLike(
                courseId,
                changeDisLikeColor,
                setChangeDisLikeColor
              )
            }
          >
            <span
              className={` cursor-pointer bbi  text-indigo-900 ${
                changeDisLikeColor || userIsDissLiked === true
                  ? `bi-hand-thumbs-down-fill`
                  : `bi-hand-thumbs-down`
              }`}
            >
              {" "}
              {dissLikeCount}
            </span>
          </div>
          {/* {courseRate !== undefined && (
            <div className="course-like-box py-2 mr-4 bg-transparent text-zinc-500 skeleton-handler">
              <span className={"cursor-pointer  bi bi-star mx-1 "}></span>
              {courseRate}
            </div>
          )} */}
        </div>
      </div>
      <div className="mt-6 border-t-2 border-[#00018533] pt-4 pb-8 flex justify-between whitespace-nowrap">
        {/* <div className="student-count skeleton-handler">
          {studentCount && peopleSvg}
          <h3 className="course-info text-sm">{studentCount}</h3>
        </div> */}
        {courseRate !== undefined && (
          <div className="course-like-box mr-4 bg-transparent text-zinc-500 skeleton-handler">
            <span className={"bi bi-star ml-3 "}></span>
            {courseRate}
          </div>
        )}
        <h3 className="inline text-xl text-newPurple4 mr-10 skeleton-handler">
          {price && SeparationPrice(price)}
          <span className="text-slate-600 dark:text-[#9996F9] text-base mr-3">
            {price && "تومان"}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CourseBody;
