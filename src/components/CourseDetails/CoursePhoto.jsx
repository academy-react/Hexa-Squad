import React, { useEffect, useState } from "react";
import { addWishList } from "../../core/services/api/PostData/addCourseWishList";
import { addReserve } from "../../core/services/api/PostData/addCourseReserve";
import handleCourseAddLike from "../../core/services/api/PostData/addCourseLike";
import handleCourseDisLike from "../../core/services/api/PostData/addCourseDisLike";
import handleCourseDeleteLike from "../../core/services/api/DeleteData/deleteCourseLike";
import Rate from "../common/Rate";
import handleCourseRate from "../../core/services/api/PostData/addCourseRate";

import NullImage from "../../assets/image/Images-for-null 2.svg";

const CoursePhoto = ({
  id,
  courseId,
  title,
  describe,
  imageAddress,
  currentUserDissLike,
  currentUserLike,
  likeCount,
  dissLikeCount,
  userLikeId,
  isUserFavorite,
  miniDescribe,
  currentUserSetRate,
  currentUserRateNumber,
}) => {
  const [changeLikeColor, setChangeLikeColor] = useState(0);
  const [changeDisLikeColor, setChangeDisLikeColor] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const addFavorite = async () => {
    const result = await addWishList(id, isUserFavorite);
    setIsFavorite(result);
  };
  useEffect(() => {
    // if course is user favorite show fill heart
    isUserFavorite === true && setIsFavorite(true);
  }, [isUserFavorite]);

  // const [currentUserIsLike, setCurrentUserIsLike] = useState(currentUserLike);

  return (
    <div
      data-aos="zoom-in-left"
      data-aos-duration="1000"
      className="w-full lg:w-[860px]  md:w-[500px] relative  mx-auto md:my-10 lg:mt-10 lg:mx-12"
    >
      <div className="shadow-shadow-auth dark:shadow-shadow-userComments-pic  rounded-xl  ">
        <h2
          className={`bi bi-${
            isFavorite ? "heart-fill" : "heart"
          } text-3xl text-violet-700 left-3 mt-4 absolute  hover:scale-110 transition-all cursor-pointer `}
          alt="wishlist"
          onClick={addFavorite}
        />
        <img
          src={
            imageAddress === null || imageAddress === "<string>"
              ? NullImage
              : imageAddress
          }
          className="w-full h-[300px] md:h-[400px]  lg:h-[420px]  rounded-lg "
          alt="course image"
        />
      </div>
      <div className="mx-4 md:mx-0 mt-2 mb-10 md:mb-0">
        <h2 className="text-xl md:text-3xl mt-8 text-[#2C007F] dark:text-[#ffff]">
          {title}
        </h2>
        <p className="h-48 mt-6 md:mt-7  text-sm leading-8 md:text-md lg:text-lg lg:leading-10 text-indigo-950  dark:text-[#E7E7FF] ">
          {miniDescribe}
        </p>
      </div>
      <div className="flex flex-col mt-10 ">
        <div className="flex md:flex-row flex-wrap gap-x-4">
          <h2 className="lg:text-lg text-sm mt-1 dark:text-indigo-400 text-[#302064]">
            میزان رضایت مندی خود نسبت به این دوره را ثبت نمایید!
          </h2>
          <Rate
            id={courseId}
            handleRate={handleCourseRate}
            currentUserSetRate={currentUserSetRate}
            currentUserRateNumber={currentUserRateNumber}
          />
        </div>
        <div className="flex flex-row mt-8">
          <h2 className="lg:text-base text-sm mt-1 dark:text-indigo-400 text-[#302064]">
            آیا از این دوره راضی بودید؟
          </h2>
          <div
            className="course-like-box py-2 mr-4 bg-[#e3deff] "
            onClick={
              currentUserLike === "0"
                ? () =>
                    handleCourseAddLike(
                      courseId,
                      likeCount,
                      changeLikeColor,
                      setChangeLikeColor,
                    )
                : () =>
                    handleCourseDeleteLike(
                      userLikeId,
                      changeLikeColor,
                      setChangeLikeColor
                    )
            }
          >
            <span
              className={` cursor-pointer ${
                changeLikeColor || currentUserLike === "1"
                  ? `bbi bi-hand-thumbs-up-fill text-indigo-950 `
                  : `bi bi-hand-thumbs-up text-indigo-950`
              }`}
            >
              {" "}
              {likeCount}
            </span>
          </div>
          <div
            className="course-like-box py-2 mr-4 bg-[#e3deff] "
            onClick={() =>
              handleCourseDisLike(
                courseId,
                changeDisLikeColor,
                setChangeDisLikeColor
              )
            }
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePhoto;
