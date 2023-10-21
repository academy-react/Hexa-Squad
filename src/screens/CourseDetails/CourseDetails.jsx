import React, { useState } from "react";
import { UserComments, InputComment } from "../../components/News";

import Topics from "../../components/CourseList/CourseDetails/Topics";
import CoursePhoto from "../../components/CourseList/CourseDetails/CoursePhoto";
import DetailsBox from "../../components/CourseList/CourseDetails/DetailsBox";
import comment from "../../assets/image/comments.svg"


const CourseDetails = () => {
  const [userCommentsList, setUserComments] = useState([
    {
      name: "محمدرضا ساداتی ",
      date: " 1402/05/23",
      question:
        "ممنون بابت مقاله، اما میتونست بیشتر باشه و علاوه بر اشاره به یک نکته به نکات دیگه ای که به آموزش بهتر کمک میکنه اشاره بشه، درکل خیلی کوتاه بود",
    },
    {
      name: "بیتا قنبری ",
      date: " 1402/04/15",
      question:
        "آیا مطالبی که در دوره جاری ارائه میدید با دوره قبلی تفاوت داره؟",
    },
  ]);
  const userComments = userCommentsList.map((item, index) => {
    return (
      <UserComments
        name={item.name}
        date={item.date}
        question={item.question}
        key={index}
      />
    );
  });
 
  return (
    <div>
      <div className="mx-auto flex">
        <div className="w-[90%] h-full lg:max-w-[1260px] mx-auto mt-36 bg-[#D7D5FF] shadow-shadow-Categories-box rounded-2xl dark:bg-darkblue6">
          <div className="flex flex-col lg:flex-row">
            <CoursePhoto />

            {/* moshakhasat */}
            <DetailsBox />
          </div>

          {/* Comments section */}

          <div className="w-full md:w-[600px] lg:w-[800px] mx-auto lg:mt-36 mt-10 ">
            <h2 className="md:text-2xl text-lg lg:mx-56 md:mx-32 mx-16 my-8 text-[#2C007F] dark:text-whitePink">
              {" "}
              سرفصل های دوره اموزشی html{" "}
            </h2>

            <Topics />
          </div>
          <div className="w-[90%] mx-auto my-10">
            <div className="lg:mt-36 mt-20 pb-6 border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70]">
              <img src={comment} className="inline pl-4" />
              <h3 className="text-xl md:text-2xl text-darkblue4 dark:text-[#6974FF] inline">
                نظرات کاربران در رابطه با این مقاله{" "}
              </h3>
            </div>
            {userComments}
            <InputComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
