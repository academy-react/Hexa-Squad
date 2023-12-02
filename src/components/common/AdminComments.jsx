import React from "react";
import userCommentPic from "../../assets/image/usercommentpic.svg";
import GregorianToSolar from "../../core/utility/GregorianToSolar/GregorianToSolar";

const AdminComments = ({ insertDate, author, title, desc, pictureAddress }) => {
  return (
    <div className="mt-12 dark:bg-indigo-700">
      <div className="adminComment rounded-md ">
        <div className="userComment-pic border-4 border-violet-300">
          <img
            src={pictureAddress == null ? userCommentPic : pictureAddress}
            alt="picture"
            className="mx-auto w-full h-full rounded-full"
          />
        </div>
        <div className="">
          <p className="inline text-lg md:text-xl mr-4 text-violet-950 dark:text-[#d8d6ff]">
            {author + " - "}
          </p>
          <p className="inline text-sm md:text-base text-lightblue4 dark:text-[#b8b5ff] ">
            ارسال شده در {GregorianToSolar(insertDate)}{" "}
          </p>
          <p className="text-sm mr-4 md:text-sm text-justify text-darkblue4 dark:text-[#bebcff] pt-2">
            عنوان : {title}
          </p>
          <p className="text-xs mt-2 md:text-sm lg:text-base text-justify text-darkblue4 dark:text-[#7e7cb1] px-4 pt-2">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminComments;
