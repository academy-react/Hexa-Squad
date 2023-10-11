import React from "react";

import figma from "../../assets/image/figma.svg";
import heart from "../../assets/image/details-heart.svg";
import star1 from "../../assets/image/star-empty.svg";
import star2 from "../../assets/image/star-full.svg";
import comments from "../../assets/image/comments-pic.jpg";
const CourseDetails = () => {
  return (
    <div>
      <div className="w-[100%]  mx-auto flex">
        <div className="w-[90%] h-full lg:w-[80%] mx-auto mt-36 bg-[#ECEBFF] shadow-shadow-auth rounded-2xl">
          <div className="flex flex-col">
            <div className=" flex flex-col lg:flex-row">
              <div className="w-[380px] h-[420px] relative shadow-shadow-auth rounded-xl  mx-auto  my-10 lg:mt-20 lg:mr-20 border border-[#3F40EA]">
                <img
                  src={heart}
                  className=" w-10 h-10 z-50 left-5 mt-4 absolute opacity-60 hover:opacity-100 cursor-pointer "
                  alt="wishlist"
                />
                <img
                  src={figma}
                  className="mx-auto my-[100px] w-[60%] h-[60%] "
                  alt="figma"
                />
              </div>

              <div className=" mx-auto lg:ml-16 lg:w-[630px] lg:h-[420px] w-[460px] h-[420px] lg:mt-20 ">
                <h2 className="text-3xl text-[#3B3CA7]">
                  اموزش فیگما - دوره ی جامع یادگیری فیگما
                </h2>
                <div className=" h-6 mt-6 flex flex-row gap-1">
                  <img src={star1} alt="star" className="w-5 h-5" />
                  <img src={star1} alt="star" className="w-5 h-5" />
                  <img src={star1} alt="star" className="w-5 h-5" />
                  <img src={star1} alt="star" className="w-5 h-5" />
                  <img src={star2} alt="star" className="w-5 h-5" />
                  <p className="text-[#3B3179]">(دیدگاه 10 کاربر)</p>
                </div>
                <h2 className="text-[#3B3179] text-2xl mt-8 ">
                  400،000 تومان{" "}
                </h2>
                <p className="text-[#3B3CA7] text-xl mt-4">
                  مدرس: نام مدرس دوره فیگما
                </p>
                <p className="text-[#03001C] text-lg mt-10 opacity-70">
                  مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی
                  اموزشی به زبان فارسی مرجع اموزش زنده و تعاملی دسترسی به بیش از
                  هفت رجع اموزش زنده و تعاملی دسترسی به بیش از هفت{" "}
                </p>
                <input
                  type="submit"
                  value="ثبت نام در این دوره"
                  className="gradient w-[160px] py-3 mt-14 rounded-md"
                />
              </div>
            </div>

{/* Comments section */}
            <div className="w-[460px] lg:w-[90%] my-40 relative  mx-auto ">
              <div className="flex flex-row">
                <div className="mx-auto">
                  <input
                    type="submit"
                    value=" نظرات (10)  "
                    className="gradient h-12 mx-1 cursor-pointer  rounded-tr-lg rounded-tl-lg w-[160px] "
                  />
                  <input
                    type="submit"
                    value=" توضیحات دوره"
                    className=" bg-semiPink cursor-pointer h-12 text-[#3F40EA]  border-2 border-[#3F40EA] mx-1 rounded-tr-lg rounded-tl-lg w-[160px] "
                  />
                </div>
              </div>
              <div className="w-full  bg-[#3F40EA] h-[2px] "></div>
              <div className="w-full h-44 border-b-2 border-lightblue my-4 flex flex-row">
                <img
                  src={comments}
                  className="w-[150px] object-cover h-[150px] mx-4 rounded-full"
                  alt="Avatar"
                />
                <div className="my-4  mx-10 w-[800px]">
                  <h2 className="text-2xl text-[#03001C] ">کاربر سایت -</h2>
                  <div className=" h-6 mt-2 flex flex-row gap-1">
                    <img src={star1} alt="star" className="w-4 h-4" />
                    <img src={star1} alt="star" className="w-4 h-4" />
                    <img src={star1} alt="star" className="w-4 h-4" />
                    <img src={star1} alt="star" className="w-4 h-4" />
                    <img src={star2} alt="star" className="w-4 h-4" />
                  </div>
                  <p className="text-[#03001C] text-lg opacity-70 mt-3 ">
                    مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی
                    اموزشی به زبان فارسی مرجع اموزش زنده و تعاملی دسترسی به بیش
                    از هفت رجع اموزش زنده و تعاملی دسترسی به بیش از هفت{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
