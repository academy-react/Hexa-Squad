import React, { Fragment, useState, useCallback, useEffect } from "react";
import userCommentPic from "../../assets/image/usercommentpic.svg";
import GregorianToSolar from "../../core/utility/GregorianToSolar/GregorianToSolar";
import http from "../../core/services/interceptor/index";
import { toast } from "react-toastify";
import ReplyComment from "../CourseDetails/ReplyComment";
import AddReplyComment from "../CourseDetails/AddReplyComment";
import AddNewsReply from "./AddNewsReply";

const NewsComments = ({
  uid,
  name,
  date,
  question,
  replyCount,
  likeCount,
  dissLikeCount,
  autor,
  newsId,
  pictureAddress,
  currentUserIsLike,
  currentUserIsDissLike,
}) => {
  const [changeDisLikeColor, setChangeDisLikeColor] = useState(0);
  const [changeLikeColor, setChangeLikeColor] = useState(false);
  const [comment, setComment] = useState({});

  const handleLikeClick = async () => {
    try {
      const response = await http.post("/News/CommentLike/" + uid);
      setComment(response);
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

  const handleDisLikeClick = async () => {
    try {
      // const response = await http.post(
      //   "/Course/AddCourseCommentDissLike?CourseCommandId=" + uid
      // );
      // setDislikes(response);
      setChangeDisLikeColor(!changeDisLikeColor);
      // if (response.success) {
      //   toast.success("نظر شما ثبت شد");
      // } else {
      //   toast.error(" شما قبلا نظر خود را درباره ی این دیدگاه ثبت کردید");
      // }
      // return false;
    } catch (error) {
      console.error(error);
    }
  };

  const [adminComment, setAdminComment] = useState([]);
  const [show, setShow] = useState(false);
  const fetchAdminCommentData = useCallback(async () => {
    try {
      const result = await http.get(`/News/GetRepliesComments?Id=` + uid);
      setAdminComment(result);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchAdminCommentData();
  }, []);

  const replyComments = adminComment.map((item, index) => {
    return (
      <ReplyComment
        key={index}
        pictureAddress={item.pictureAddress}
        author={item.autor}
        title={item.title}
        desc={item.describe}
        insertDate={item.inserDate}
      />
    );
  });

  return (
    <>
      <div className="userComment relative ">
        <div className="userComment-pic border-4 border-violet-300 ">
          <img
            src={pictureAddress == null ? userCommentPic : pictureAddress}
            alt="picture"
            className="mx-auto w-full h-full rounded-full"
          />
        </div>
        <div className="pr-4">
          <p className="inline text-lg md:text-xl  text-violet-950 dark:text-[#d8d6ff]">
            {autor + " - "}
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
          <div className="flex flex-row gap-4  ">
            <h2 className="absolute left-40  lg:left-[160px]  lg:bottom-5 text-sm text-indigo-800 dark:text-indigo-300">
              ایا این دیدگاه مفید بود ؟
            </h2>
            <span
              className={` cursor-pointer  absolute left-[120px]  lg:bottom-4  ${
                currentUserIsLike === true || changeLikeColor === true
                  ? `bbi bi-hand-thumbs-up-fill  text-zinc-600 dark:text-indigo-300`
                  : `bi bi-hand-thumbs-up  text-zinc-600 dark:text-indigo-300`
              }`}
              onClick={handleLikeClick}
            >
              {likeCount}
            </span>
            <span
              className={` cursor-pointer absolute left-[83px]  lg:bottom-4 ${
                currentUserIsDissLike === true || changeDisLikeColor === true
                  ? `bbi bi-hand-thumbs-down-fill text-zinc-600  dark:text-slate-400`
                  : `bi bi-hand-thumbs-down text-zinc-600 dark:text-slate-400`
              }`}
              onClick={handleDisLikeClick}
            >
              {dissLikeCount}
            </span>
            <span
              onClick={() => setShow(!show)}
              className="bi bi-chat-dots absolute left-8  lg:bottom-4 cursor-pointer text-zinc-600  dark:text-slate-400"
            >
              {" " + replyCount}
            </span>
          </div>

          <AddNewsReply
            title={adminComment.title}
            describe={adminComment.describe}
            author={adminComment.author}
            uid={uid}
            NewsId={newsId}
            parentId={adminComment.parentId}
            setAdminComment={setAdminComment}
          />
        </div>
      </div>
      {show && replyComments}
      {/* {replyCount > 0 ? show && replyComments : " "} */}
    </>
  );
};

export default NewsComments;
