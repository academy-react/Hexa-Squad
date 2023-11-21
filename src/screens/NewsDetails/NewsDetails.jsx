import React, { useState, Fragment, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import http from "../../core/services/interceptor"
import { motion, useScroll, useSpring } from "framer-motion";
import LoadingSpinner from "../../components/common/loadingSpinner";

import userCommentData from "../../core/services/api/GetData/userCommentData";
import UserComments from "../../components/common/UserComments";
import InputComment from "../../components/common/InputComment";
import { addWishList } from "../../core/services/api/PostData/addCourseWishList";
import handleNewsLikeClick from "../../core/services/api/PostData/addNewsLike"; 

import {
  userSvg,
  facebookSvg,
  twitterSvg,
  instagramSvg,
} from "../../assets/icons/svgIcons";
import eye from "../../assets/image/eye.svg";
import calendar from "../../assets/image/calendar.svg";
import commentImg from "../../assets/image/comments.svg";
import likePic from "../../assets/image/like.svg";
import dislikePic from "../../assets/image/dislike.svg";
import "../../components/Landing/common.css";
import NewsRate from "../../components/NewsDetails/NewsRate";

const NewsDetails = () => {
  const [urlParam, setUrlParam] = useState(useParams());
  const [Param, setParam] = useState(useParams());
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [likes, setLikes] = useState(0);
const [changeLikeColor, setChangeLikeColor] = useState(0);
  console.log(comment)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [userCommentsList, setUserComments] = useState(userCommentData);
  const userComments = comment.map((item, index) => {
    return (
      <UserComments
        key={index}
        uid={item.userId}
        name={item.title}
        date={item.insertDate}
        question={item.describe}
      />
    );
  });
  const fetchData = useCallback(async () => {
    try {
      const result = await http.get(
        "/News/" + urlParam.id
      );
      console.log(result);
      setData(result.detailsNewsDto);
      setComment(result.commentDtos);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // News Like
  const handleNewsLikeClick = useCallback(async () => {
    try {
      const result = await http.post(
        "/News/NewsLike/" + urlParam.id
      );
      setLikes(result);
      console.log(result);
      setChangeLikeColor(!changeLikeColor);
    } catch (error) {
      console.error(error);
    }
    setLikes(result);
  });

  // News Rate
  const [stars, setStars] = useState(0);
  const [newsRate, setNewsRate] = useState();
  const NewsId = data.id
  const RateNumber = stars
  console.log(NewsId)
  console.log(RateNumber)

  return (
    <Fragment>
      <LoadingSpinner/>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="pt-24 lg:pt-40 mb-52">
        <div className="news-details">
          <div className="flex lg:flex-row flex-wrap border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] mx-auto pb-12">
            <div className="relative">
              <div className="inline scale-x-110 ">
                <img
                  src={data.currentImageAddress}
                  alt={data.title == undefined ? "" : data.title}
                  className="mb-4 md:mb-8 lg:w-[420px]  lg:h-[450px] md:w-[642px] md:h-[430px] lg:p-2 md:object-cover md:rounded-2xl"
                />
                <div className="news-pic-info">
                  <img src={calendar} alt="picture" className="inline ml-2" />
                  <span className="inline text-base md:text-lg ml-8 md:ml-[310px] lg:ml-14 mx-3">
                    {data.insertDate == undefined
                      ? ""
                      : data.insertDate.slice(0, 10)}
                  </span>
                  <img src={eye} alt="picture" className="inline mr-4 ml-2" />
                  <span className="inline text-base md:text-xl ">
                    {data.currentView == undefined ? "" : data.currentView}
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-[660px] px-2 md:pr-1 lg:pr-6">
              <h2 className="text-[#3B3CA7] dark:text-whitePink text-lg md:text-3xl mb-6">
                {data.title == undefined ? "" : data.title}
              </h2>
              <Link
                to={"/TeacherProfile"}
                className="inline text-[#403393] dark:text-[#8E8EAA] text-sm "
              >
                {userSvg}
                {data.addUserFullName == undefined ? "" : data.addUserFullName}
              </Link>
              <p className="news-details-text mt-6">
                {data.miniDescribe == undefined ? "" : data.miniDescribe}
              </p>
            </div>
          </div>
          <h2 className="text-xl lg:text-[26px] text-darkblue3 dark:text-whitePink py-6">
            {data.title == undefined ? "" : data.title}
          </h2>
          <p className="news-details-text">
            {data.describe == undefined ? "" : data.describe}
          </p>
          {/*           
          <h3 className="news-details-text pt-14 pb-4">مثال: </h3>
          <p className="news-details-text">
            فرض کنید شما در حال خواندن یک کتاب هستید، در صفحه 30 یک چیزی را
            متوجه نشدین. در حالت عادی شما به یک صفحه قبل میروید و دوباره خواندن
            را شروع میکنید و فرض کنید در صفحه 40 هم دقیقا همین اتفاق میافتد و به
            یک صفحه قبل برمیگردید و دوباره خواندن را شروع میکنید و تا رسیدن به
            آخرین صفحه این کتاب این چرخه بارها و بارها اتفاق میافتد. نکته و
            البته جواب ما اینجاست که شما اگر در صفحه 30 نکته را متوجه نشدین،
            برای رسیدن به درک عمیق باید به جای صفحه قبلی، به صفحه 1 کتاب برگردین
            و کتاب را از اول دوباره بخوانید، دوباره اگر در صفحه 50 نکته ای را
            متوجه نشدین، دوباره کتاب را از اول شروع کنید. شما تا پایان این کتاب
            به درک عمیق اون مطلبی که قرار بود آموزش ببینید میرسید.
          </p>
          <p className="news-details-text py-12">
            این مثال برای آموزش از روی کتاب بود ولی برای ویدئو یا پادکست یا هر
            آنچه که میتوانید از آن مطلبی یاد بگیرید هم صدق میکند. شما در مثال
            بالا با هر بار از نو آموزش دیدن، هم مطلب را مرور میکنید و هم نکته
            هایی مهم که در طول آموزش متوجه نشده بودین را متوجه میشوید و این اصل
            قضیه است.
          </p>
          <p className="news-details-text pb-6">
            امیدوارم مقاله مفیدی برای شما واقع بوده باشه.
          </p> */}
          <p className="news-details-text  pb-12 border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] ">
            با تشکر از:
            <span className="text-darkblue2 dark:text-[#9996F9] pr-2">
              {data.addUserFullName == undefined ? "" : data.addUserFullName}
            </span>
          </p>
          <div className="flex flex-row justify-between border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] py-6">
            <h2 className="news-details-text pt-2">به اشتراک گذاری:</h2>
            <div className="flex flex-row w-30 lg:w-[194px] ">
              <div className="media-icons-border">{facebookSvg}</div>
              <div className="media-icons-border">{twitterSvg}</div>
              <div className="media-icons-border">{instagramSvg}</div>
            </div>
          </div>




          <div className="flex flex-row justify-between border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] py-8">
            <div className="flex flex-row">
            <h2 className="text-xl mt-1 dark:text-indigo-400 text-[#302064]">
              آیا از این مقاله راضی بودید؟
            </h2>
            <div
              className="course-like-box py-2 mr-4 bg-[#e3deff] "
              onClick={handleNewsLikeClick}
            >
              <span
                className={` cursor-pointer ${
                  changeLikeColor === true
                    ? `bbi bi-hand-thumbs-up-fill text-indigo-950 `
                    : `bi bi-hand-thumbs-up text-indigo-950`
                }`}
              >
                {" "}
                {data.currentLikeCount}
              </span>
            </div>
            <div
              className="course-like-box py-2 mr-1.5 pl-4 bg-[#e3deff]"
              // onClick={() => addWishList(id, isLogin)}
            >
              <span
                className="bbi bi-hand-thumbs-down text-zinc-500"
              >
              </span>
            </div>
            </div>
            <div className="flex flex-row gap-x-4">
              <h2 className="text-xl mt-1 dark:text-indigo-400 text-[#302064]">
                میزان رضایت مندی خود نسبت به این مقاله را ثبت نمایید!
              </h2>
              <NewsRate/>
            </div>
          </div>



          <div className="mt-40 pb-6 border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70]">
            <img src={commentImg} className="inline pl-4" />
            <h2 className="text-xl md:text-2xl text-darkblue4 dark:text-[#6974FF] inline">
              نظرات کاربران در رابطه با این مقاله{" "}
            </h2>
          </div>
          {userComments}
          <InputComment />
        </div>
      </div>
    </Fragment>
  );
};
export default NewsDetails;
