import React, { Fragment, useState, useCallback, useEffect } from "react";
import AdminComments from "../common/AdminComments";
import http from "../../core/services/interceptor/index";
import userComment from "../../assets/image/userComment.svg";
import userCommentPic from "../../assets/image/usercommentpic.svg";
import { toast } from "react-toastify";
const UserComments = ({
  name,
  date,
  question,
  uid,
  like,
  disLike,
  currentEmotion,
}) => {
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState(0);
  const [disLikes, setDislikes] = useState(0);
  const [removeLike, setRemoveLike] = useState(0);
  const [changeDisLikeColor, setChangeDisLikeColor] = useState(0);
  const [changeLikeColor, setChangeLikeColor] = useState(false);
  const [liked, setLiked] = useState(false);
  // const emojis = ["😊", "🌟", "🎉"];
  const handleLikeClick = async () => {
    try {
      const response = await http.post(
        "/Course/AddCourseCommentLike?CourseCommandId=" + uid
      );
      setLikes(response);
      console.log(response);
      setChangeLikeColor(!changeLikeColor);
      setLiked(true);
      if (response.success) {
        toast.success("🎉 شما کامنت را لایک کردید");
      } else {
        toast.error("");
      }
      return false;
    } catch (error) {
      console.error(error);
    }
    setLikes(response);
  };
  const handleRemoveLike = async () => {
    try {
      const response = await http.delete(
        "/Course/DeleteCourseCommentLike?CourseCommandId=" + uid
      );
      setRemoveLike(response);
      console.log(response);
      setLiked(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDisLikeClick = async () => {
    try {
      const response = await http.post(
        "/Course/AddCourseCommentDissLike?CourseCommandId=" + uid
      );
      setDislikes(response);
      console.log(response);
      setChangeDisLikeColor(!changeDisLikeColor);
    } catch (error) {
      console.error(error);
    }
    setDislikes(response);
  };

  return (
    <Fragment>
      <div className="userComment">
        <div className="userComment-pic">
          <img
            src={userCommentPic}
            alt="picture"
            className="mx-auto w-full h-full"
          />
        </div>
        <div className="px-4 ">
          <p className="inline text-lg md:text-xl  text-darkblue2 dark:text-[#d8d6ff]">
            {name} -
          </p>
          <p className="inline text-sm md:text-base text-lightblue4 dark:text-[#b8b5ff] ">
            ارسال شده در{date.slice(0, 10)}{" "}
          </p>
          <p className="text-sm md:text-base text-justify text-darkblue4 dark:text-[#bebcff] pt-2">
            {question}
          </p>
          <div className="flex flex-row gap-4 mt-4">
            {/* {liked ? (
              <span
                className={` cursor-pointer ${
                  changeLikeColor === true
                    ? `bbi bi-hand-thumbs-up text-indigo-950 dark:text-indigo-300 `
                    : `bi bi-hand-thumbs-up text-indigo-950  dark:text-indigo-300`
                }`}
                onClick={handleRemoveLike}
              >
                {" "}
                removeLike
              </span>
            ) : (
              <span
                className={` cursor-pointer ${
                  changeLikeColor === true
                    ? `bbi bi-hand-thumbs-up-fill text-indigo-950 dark:text-indigo-300 `
                    : `bi bi-hand-thumbs-up text-indigo-950  dark:text-indigo-300`
                }`}
                onClick={handleLikeClick}
              >
                {" "}
                {like} like
              </span>
            )} */}
            <span
              className={` cursor-pointer ${
                changeLikeColor === true
                  ? `bbi bi-hand-thumbs-up-fill  text-indigo-950 dark:text-indigo-300`
                  : `bi bi-hand-thumbs-up  text-indigo-950 dark:text-indigo-300`
              }`}
              onClick={handleLikeClick}
            >
              {like} like
            </span>
            <span
              className={` cursor-pointer ${
                changeDisLikeColor === true
                  ? `bbi bi-hand-thumbs-down-fill text-zinc-500  dark:text-slate-400`
                  : `bi bi-hand-thumbs-down text-zinc-500 dark:text-slate-400`
              }`}
              onClick={handleDisLikeClick}
            >
              {disLike} DisLike
            </span>
          </div>
        </div>
      </div>
      {/* {adminComments} */}
    </Fragment>
  );
};

export default UserComments;
