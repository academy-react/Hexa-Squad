import React, { useState } from "react";
import { Link } from "react-router-dom";
import SeparationPrice from "../../core/services/SeparationPrice/SeparationPrice";
import {addLike} from "../../core/services/api/addLike";
import {addDisLike} from "../../core/services/api/addDisLike";

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

const CourseBody = ({
  title,
  courseCount,
  time,
  date,
  professorName,
  like,
  dislike,
  studentCount,
  price,
  bio,
  id
}) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="course-body mt-6 whitespace-nowrap">
      <Link to={"/CourseDetails"}>
        <h2 className="course-name">{title}</h2>
      </Link>
      <div className="">
        {countSvg}
        <h3 className="course-info pl-6">{courseCount}</h3>

        {timeSvg}
        <h3 className="course-info pl-6">{time}</h3>

        {calendarSvg}
        <h3 className="course-info">{date}</h3>
      </div>
      <div className=" hidden course-bio">{bio}</div>

      <div className="pt-8 flex justify-between whitespace-nowrap">
        <div className="professor-name">
          {graduationCapSvg}
          <h3 className="course-info text-sm">{professorName}</h3>
        </div>
        <div className="likes-box">
          <div className="course-like-box mr-8" onClick={()=>addLike(id,isLogin)} >
            <img src={likePic} alt="picture" className="inline" />
            <span className="course-like-count">{like}</span>
          </div>
          <div className="course-like-box mr-1.5 pl-4" onClick={()=>addDisLike(id,isLogin)} >
            <img src={dislikePic} alt="picture" className="inline" />
            <span className="course-like-count">{dislike}</span>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t-2 border-[#00018533] pt-4 pb-8 flex justify-between whitespace-nowrap">
        <div className="student-count">
          {peopleSvg}
          <h3 className="course-info text-sm">{studentCount}</h3>
        </div>
        <h3 className="inline text-xl text-newPurple4 mr-10">
          {SeparationPrice(price)}
          <span className="text-lightblue4 dark:text-[#9996F9] text-base mr-3">
            تومان
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CourseBody;
