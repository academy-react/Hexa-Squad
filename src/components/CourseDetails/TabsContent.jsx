import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Accordions from "../../core/services/api/GetData/Topics";
import Accordion from "./Accordion";
import InputComment from "../common/InputComment";
import UserComments from "../common/UserComments";
import http from "../../core/services/interceptor/index";
import comments from "../../assets/image/comments.svg";
import { MdOutlinePreview } from "react-icons/md";
import Describe from "./Describe";

const TabsContent = ({ describe }) => {
  const [comment, setComment] = useState([]);
  const [urlParam, setUrlParam] = useState(useParams());
  const userComments = comment.map((item, index) => {
    return (
      <UserComments
        uid={item.id}
        name={item.title}
        date={item.insertDate}
        question={item.describe}
        key={index}
        like={item.likeCount}
        disLike={item.disslikeCount}
        acceptReplysCount={item.acceptReplysCount}
        courseId={item.courseId}
        setComment={setComment}
        author={item.author}
        accept={item.accept}
        currentUserDissLike={item.currentUserDissLike}
        currentUserEmotion={item.currentUserEmotion}
        pictureAddress={item.pictureAddress}
        currentUserLikeId={item.currentUserLikeId}
      />
    );
  });
  console.log(userComments);
  const fetchCommentData = useCallback(async () => {
    try {
      const result = await http.get(`/Course/GetCourseCommnets/` + urlParam.id);
      console.log(result);

      setComment(result);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchCommentData();
  }, []);
  return (
    <div>
      <Tabs>
        <Tab label="توضیحات ">
          <Describe describe={describe} />
        </Tab>
        <Tab label="پیش نمایش ها">
          <div className="py-4 ">
            <h2 className="hidden font-medium ">پیش نمایش ها</h2>
            <div className="w-full lg:mr-2 md:w-[600px] lg:w-[800px] wrapper md:mx-auto ">
              <h2 className="md:text-xl text-lg flex flex-row mt-6 gap-2  text-darkblue4 lg:text-right text-center  dark:text-indigo-200 ">
                <MdOutlinePreview className="w-6 h-6 mt-1 opacity-90 dark:opacity-60" />{" "}
                پیش نمایش های دوره اموزشی html{" "}
              </h2>
              <div className="max-w-[750px] w-full mt-8 flex flex-col gap-2">
                {Accordions.map((item, id) => {
                  const { title, desc, title2 } = item;

                  return (
                    <div
                      className="bg-[#8c5eff] dark:bg-[#4716E0] rounded-md "
                      key={id}
                    >
                      <Accordion title={title} desc={desc} title2={title2} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="نظرات کاربران">
          <div className="py-4">
            <InputComment
              uid={comment.id}
              name={comment.title}
              question={comment.describe}
              setComment={setComment}
              accept={comment.accept}
            />
            <h2 className="text-lg mb-2 hidden">نظرات کاربران</h2>
            <div className="w-[96%] mx-auto lg:mr-2 mt-6 ">
              <div className=" pb-5 border-b-2 border-b-[#9999f533] dark:border-b-[#3d3d70]">
                <img src={comments} className="inline pl-4 w-10 h-10 " />
                <h3 className="text-xl md:text-xl text-darkblue4 dark:text-indigo-200  inline">
                  نظرات کاربران در رابطه با این دوره{" "}
                </h3>
              </div>

              {userComments}
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsContent;
