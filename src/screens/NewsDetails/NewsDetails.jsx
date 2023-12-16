import React, { useState, Fragment, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import LoadingSpinner from "../../components/common/loadingSpinner";
import Rate from "../../components/common/Rate";
import handleNewsRate from "../../core/services/api/PostData/addNewsRate";

import {
  userSvg,
  facebookSvg,
  twitterSvg,
  instagramSvg,
} from "../../assets/icons/svgIcons";
import eye from "../../assets/image/eye.svg";
import calendar from "../../assets/image/calendar.svg";
import commentImg from "../../assets/image/comments.svg";
import article from "../../assets/image/Online article-amico.svg";
import "../../components/Landing/common.css";
import addNewsFavorite from "../../core/services/api/PostData/addNewsFavorite";
import NewsComments from "../../components/NewsDetails/NewsComments";
import AddNewsComment from "../../components/NewsDetails/AddNewsComment";
import GetNewsDetails from "../../core/services/api/GetData/getNewsData/getNewsDetailsById";
import NewsLikeDissLike from "../../components/NewsDetails/NewsLikeDissLike";

const NewsDetails = () => {
  const [urlParam, setUrlParam] = useState(useParams());
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const userComments = comment.map((item, index) => {
    return (
      <NewsComments
        key={index}
        uid={item.id}
        name={item.title}
        date={item.inserDate}
        question={item.describe}
        replyCount={item.replyCount}
        likeCount={item.likeCount}
        dissLikeCount={item.dissLikeCount}
        autor={item.autor}
        newsId={item.newsId}
        pictureAddress={item.pictureAddress}
        currentUserIsLike={item.currentUserIsLike}
        currentUserIsDissLike={item.currentUserIsDissLike}
      />
    );
  });
  useEffect(() => {
    GetNewsDetails(urlParam.id, setData, setComment);
  }, [GetNewsDetails]);

  // Add News Favorite
  const addFavorite = async () => {
    const result = await addNewsFavorite(data);
    setIsFavorite(result);
  };
  useEffect(() => {
    data.isCurrentUserFavorite && setIsFavorite(true);
  }, []);

  return (
    <Fragment>
      <LoadingSpinner />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="pt-24 lg:pt-40 mb-52">
        <div className="news-details">
          <div className="flex lg:flex-row flex-wrap border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] mx-auto pb-12">
            <div className="relative">
              <div className="inline scale-x-110 ">
                <h2
                  className={`bi bi-${
                    isFavorite || data.isCurrentUserFavorite === true
                      ? "heart-fill"
                      : "heart"
                  } text-3xl text-violet-500 left-3 mt-4 absolute  hover:text-violet-700 hover:scale-110 transition-all cursor-pointer `}
                  alt="wishlist"
                  onClick={addFavorite}
                />
                <img
                  src={
                    data.currentImageAddress == null || undefined
                      ? article
                      : data.currentImageAddress
                  }
                  alt={data.title == undefined ? "" : data.title}
                  className="mb-4 md:mb-8  border-2 w-[420px] h-[350px] lg:w-[420px] lg:h-[450px] md:w-[642px] md:h-[430px] lg:p-2 md:rounded-2xl"
                />
                <div className="news-pic-info flex justify-between px-8">
                  <div>
                    <img src={calendar} alt="picture" className="inline ml-2" />
                    <span className="inline text-base md:text-lg ml-8 md:ml-[310px] lg:ml-14 mx-3">
                      {data.insertDate == undefined
                        ? ""
                        : data.insertDate.slice(0, 10)}
                    </span>
                  </div>
                  <div>
                    <img src={eye} alt="picture" className="inline mr-8 ml-2" />
                    <span className="inline text-base md:text-xl ">
                      {data.currentView == undefined ? "" : data.currentView}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[660px] px-2 md:pr-1 lg:pr-6">
              <h2 className="text-[#3B3CA7] dark:text-whitePink text-lg md:text-3xl mb-6">
                {data.title == undefined ? "" : data.title}
              </h2>
              <span className="inline text-[#403393] dark:text-[#8E8EAA] text-sm ">
                {userSvg}
                {data.addUserFullName == undefined ? "" : data.addUserFullName}
              </span>
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
          <p className="news-details-text  py-12 border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] ">
            با تشکر از:
            <span className="text-blue-800 dark:text-[#9996F9] pr-2">
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
          <div className="flex lg:flex-row flex-col gap-y-6 justify-between border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] py-8">
            {data.id && <NewsLikeDissLike
              data={data}
              id={urlParam.id}
              newsLikeId={data.likeId}
              currentUserLike={data.currentUserIsLike}
              currentUserDissLike={data.currentUserIsDissLike}
              likeCount={data.currentLikeCount}
              dissLikeCount={data.currentDissLikeCount}
              setData={setData}
            />}
            <div className="flex md:flex-row flex-wrap gap-x-4">
              <h2 className="text-xl mt-1 dark:text-indigo-400 text-[#302064]">
                میزان رضایت مندی خود نسبت به این مقاله را ثبت نمایید!
              </h2>
              {data.id && <Rate 
                id={data} 
                handleRate={handleNewsRate} 
                currentUserSetRate={data.currentUserSetRate}
                currentUserRateNumber={data.currentUserRateNumber}
              />}
            </div>
          </div>
          <AddNewsComment
            uid={comment.id}
            newsId={comment.newsId}
            setComment={setComment}
          />
          <div className="my-10 border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70]">
            <img src={commentImg} className="inline pl-4" />
            <h2 className="text-xl md:text-2xl text-darkblue4 dark:text-[#6974FF] inline">
              نظرات کاربران در رابطه با این مقاله{" "}
            </h2>
          </div>{" "}
          {userComments}
          {/* <AdminComments/> */}
        </div>
      </div>
    </Fragment>
  );
};
export default NewsDetails;
