import React, { Fragment, useState, useCallback, useEffect } from "react";
import AdminComments from "../common/AdminComments";
import { useParams } from "react-router-dom";
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

  courseId,
}) => {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState({});
  const [disLikes, setDislikes] = useState(0);
  const [removeLike, setRemoveLike] = useState(0);
  const [changeDisLikeColor, setChangeDisLikeColor] = useState(0);
  const [changeLikeColor, setChangeLikeColor] = useState(false);
  const [liked, setLiked] = useState(false);
  const [urlParam, setUrlParam] = useState(useParams());
  // const emojis = ["😊", "🌟", "🎉"];

  const handleLikeClick = async () => {
    try {
      const response = await http.post(
        "/Course/AddCourseCommentLike?CourseCommandId=" + uid
      );

      setLikes(response);
      setChangeLikeColor(!changeLikeColor);
      setLiked(true);
      if (response.success) {
        toast.success("🎉 شما کامنت را لایک کردید");
      } else {
        toast.error(" شما یکبار این کامنت را لایک کردید");
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  };

  // const handleLike = async () => {
    
  //   let result = await http.get("/Course/GetCourseCommnets/" + urlParam.id);
  //   setLikes(result);
  // };
  const handleRemoveLike = async () => {
    try {
      const response = await http.delete(
        "/Course/DeleteCourseCommentLike?CourseCommandId=" + uid
      );
      setRemoveLike(response);
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
      setChangeDisLikeColor(!changeDisLikeColor);
    } catch (error) {
      console.error(error);
    }
    setDislikes(response);
  };

  const [adminComment, setAdminComment] = useState({});
  const fetchAdminCommentData = useCallback(async () => {
    try {
      const result = await http.get(
        `/Course/GetCourseReplyCommnets/${courseId}/${uid}`
      );
      setAdminComment(result);
    } catch (error) {}
  }, []);

  useEffect(() => {

    fetchAdminCommentData();
  }, []);

  // const replyComments = adminComment.map((item, index) => {
  //   return (
  //     <AdminComments key={index}  />
  //   );
  // });
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
      {adminComment[0] ? (
        <AdminComments
          title={adminComment[0].title}
          desc={adminComment[0].describe}
        />
      ) : (
        " "
      )}
      {/* {adminComments} */}
    </Fragment>
  );
};

export default UserComments;
