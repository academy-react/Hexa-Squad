import React, { Fragment, useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../../core/services/interceptor/index";
import userCommentPic from "../../assets/image/usercommentpic.svg";
import GregorianToSolar from "../../core/utility/GregorianToSolar/GregorianToSolar";
import { toast } from "react-toastify";
import ReplyComment from "../CourseDetails/ReplyComment";
const UserComments = ({
  name,
  date,
  question,
  uid,
  like,
  disLike,
  author,
  courseId,
  accept,
  acceptReplysCount,
  currentUserEmotion,
  pictureAddress,
}) => {
  const [likes, setLikes] = useState(0);
  const [addLike, setAddLike] = useState(like);
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

      setComment(response);

      console.log(response);
      setChangeLikeColor(!changeLikeColor);

      if (response.success) {
        toast.success("🎉 نظر شما ثبت شد");
      } else {
        toast.error(" شما یکبار این کامنت را لایک کردید");
      }
      return false;
    } catch (error) {
      console.error(error);
    }
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
  const handleDisLikeClick = async (value) => {
    try {
      const response = await http.post(
        "/Course/AddCourseCommentDissLike?CourseCommandId=" + uid
      );
      setDislikes(response);
      console.log(response);
      setChangeDisLikeColor(!changeDisLikeColor);
      if (response.success) {
        toast.success("نظر شما ثبت شد");
      } else {
        toast.error(" شما قبلا نظر خود را درباره ی این دیدگاه ثبت کردید");
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  };

  const [adminComment, setAdminComment] = useState([]);
  const fetchAdminCommentData = useCallback(async () => {
    try {
      const result = await http.get(
        `/Course/GetCourseReplyCommnets/${courseId}/${uid}`
      );
      // console.log("aadmin",result);
      setAdminComment(result);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchAdminCommentData();
  }, []);

  const handleDeleteComment = async () => {
    try {
      const response = await http.delete(
        "/Course/DeleteCourseComment?CourseCommandId=" + uid
      );
      console.log(uid);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccept = async () => {
    let formData = new FormData();
    formData.append("CommentCourseId", uid);

    try {
      const response = await http.post("/Course/AcceptCourseComment", formData);
      console.log(uid);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className="userComment relative ">
        <div className="userComment-pic border-4 border-violet-300">
          <img
            src={pictureAddress == null ? userCommentPic : pictureAddress}
            alt="picture"
            className="mx-auto w-full h-full rounded-full"
          />
        </div>
        <div className="px-4 ">
          {accept ? (
            ""
          ) : (
            <h2 className="text-pink-500 cursor-pointer" onClick={handleAccept}>
              not accepted
            </h2>
          )}
          <p className="inline text-lg md:text-xl  text-violet-950 dark:text-[#d8d6ff]">
            {author + " - "}
          </p>
          <p className="inline text-sm md:text-base text-lightblue4 dark:text-[#b8b5ff] ">
            ارسال شده در {GregorianToSolar(date)}
            {""}
          </p>
          <p className="text-sm md:text-sm text-justify text-darkblue4 dark:text-[#bebcff] pt-2">
            عنوان : {name}
          </p>
          <p className="text-sm md:text-base my-3 text-justify text-darkblue4 dark:text-[#bebcff] pt-2">
            {question}
          </p>
          <div className="flex flex-row gap-4 mt-4 ">
            <h2 className="absolute left-[160px] bottom-5 text-sm text-indigo-800 dark:text-indigo-300">
              ایا این دیدگاه مفید بود ؟
            </h2>
            <span
              className={` cursor-pointer  absolute left-[120px] bottom-4  ${
                currentUserEmotion === "LIKED" || changeLikeColor === true
                  ? `bbi bi-hand-thumbs-up-fill  text-zinc-600 dark:text-indigo-300`
                  : `bi bi-hand-thumbs-up  text-zinc-600 dark:text-indigo-300`
              }`}
              onClick={handleLikeClick}
            >
              {addLike}
            </span>
            <span
              className={` cursor-pointer absolute left-[83px]  bottom-4 ${
                currentUserEmotion === "DISSLIKED" ||
                changeDisLikeColor === true
                  ? `bbi bi-hand-thumbs-down-fill text-zinc-600  dark:text-slate-400`
                  : `bi bi-hand-thumbs-down text-zinc-600 dark:text-slate-400`
              }`}
              onClick={handleDisLikeClick}
            >
              {disLike}
            </span>
            {/* <span
              className="bg-red-500 w-4 h-4"
              onClick={handleDeleteComment}
            ></span> */}
          </div>
          <span
            onClick={() => setShow(!show)}
            className="bi bi-chat-dots absolute left-8 bottom-4 cursor-pointer text-zinc-600  dark:text-slate-400"
          >
            {" " + acceptReplysCount}
          </span>
        </div>
      </div>

      {acceptReplysCount > 0
        ? show &&
          adminComment.map((item, index) => {
            return (
              <ReplyComment
                key={index}
                pictureAddress={item.pictureAddress}
                author={item.author}
                title={item.title}
                desc={item.describe}
                insertDate={item.insertDate}
              />
            );
          })
        : " "}
    </Fragment>
  );
};

export default UserComments;
