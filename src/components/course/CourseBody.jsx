import React, { useState } from "react";
import { Link } from "react-router-dom";
import SeparationPrice from "../../core/utility/SeparationPrice/SeparationPrice";
import { addLike } from "../../core/services/api/PutData/addLikeToCourse";
// import { addDisLike } from "../../core/services/api/addDisLike";
import handleCourseAddLike from "../../core/services/api/PostData/addCourseLike";

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
  dislike,
  studentCount,
  price,
  bio,
  courseId,
  userIsLiked,
}) => {
  // const [isLogin, setIsLogin] = useState(false);
  const [changeLikeColor, setChangeLikeColor] = useState(0);
  const [changeDisLikeColor, setChangeDisLikeColor] = useState(0);

  return (
    <div className="course-body mt-6 whitespace-nowrap select-none">
      <Link to={"/CourseDetails/" + courseId}>
        <h2 className="course-name">{title}</h2>
      </Link>
      <div className="">
        {countSvg}
        <h3 className="course-info pl-6">{courseCount}</h3>

        {timeSvg}
        <h3 className="course-info pl-6">{time}</h3>

        {calendarSvg}
        <h3 className="course-info" dir="ltr">
          {GregorianToSolar(date)}
        </h3>
      </div>
      <div className=" hidden course-bio">{bio}</div>

      <div className="pt-8 flex justify-between whitespace-nowrap">
        <div className="professor-name w-40 whitespace-nowrap overflow-hidden text-ellipsis">
          {graduationCapSvg}
          <Link to={"/TeacherProfile"} className="course-info text-sm">
            {professorName}
          </Link>
        </div>
        <div className="likes-box">
          <div
            className="course-like-box py-2 mr-4 bg-[#e3deff] "
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
              className={` cursor-pointer ${
                changeLikeColor || userIsLiked === true
                  ? `bbi bi-hand-thumbs-up-fill text-indigo-950 `
                  : `bi bi-hand-thumbs-up text-indigo-950`
              }`}
            >
              {" "}
              {likeCount}
            </span>
          </div>
          {/* <div
            className="course-like-box py-2 mr-4 bg-[#e3deff] "
            onClick={() => handleCourseDisLike(courseId, changeDisLikeColor, setChangeDisLikeColor)}
          >
            <span
              className={` cursor-pointer ${
                changeDisLikeColor || currentUserDissLike === "1"
                  ? `bbi bi-hand-thumbs-down-fill text-zinc-500 `
                  : `bbi bi-hand-thumbs-down text-zinc-500`
              }`}
            >
                {" "}
                {dissLikeCount}
            </span>
          </div> */}
        </div>
      </div>
      <div className="mt-6 border-t-2 border-[#00018533] pt-4 pb-8 flex justify-between whitespace-nowrap">
        <div className="student-count">
          {peopleSvg}
          <h3 className="course-info text-sm">{studentCount}</h3>
        </div>
        <h3 className="inline text-xl text-newPurple4 mr-10">
          {SeparationPrice(price.toString())}
          <span className="text-slate-600 dark:text-[#9996F9] text-base mr-3">
            تومان
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CourseBody;
