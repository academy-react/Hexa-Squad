import React from "react";
import { Typewriter } from "react-simple-typewriter";

import HeroSectionSvg from "./HeroSectionSvg";
import HeroSectionImage from "../../assets/image/woman working- Hero section image.png";
import HeroSectionImageCroped from "../../assets/image/woman working- Hero section image - croped.png";
import AutoTypeWriter from "../common/AutoTypeWriter";
const HeroSection = () => {
  const typeWriterWords =[
    'مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی .' ,
   'بهترین آموزش ها را از ما بیاموزید !',
   'هدف مجموعه هگزا اسکواد افزایش سطح کیفیت آموزش و ساختن راهی برای ورود دانشجویان به بازار کار تخصصی است !!'
  ]
  return (
    <div className="flex pt-[150px]">
      <div className="sm:w-8/12 w-full flex flex-col justify-center sm:items-start items-center lg:px-32 sm:px-20 px-0  lg:gap-7 z-20">
        <p className="md:text-lightblue text-lightPurple mb-1 lg:text-[20px] sm:text-sm">
          پلتفرم اموزش طراحی وب
        </p>
        <h2 className="lg:text-5xl sm:text-darkblue dark:sm:text-semiWhite mb-5 whitespace-nowrap text-3xl">
          مرجع اموزش برنامه نویسی
        </h2>
        <AutoTypeWriter Text={typeWriterWords}  className={"sm:text-[#03001CB2] lg:text-[24px] sm:text-md leading-[40px] sm:text-right text-center dark:text-[#fffb]"} typeSpeed={100}loop={0}/>
        <div className="flex gap-3 lg:mt-10 mt-10 w-full  whitespace-nowrap ">
          <button className="border hover:bg-[#4136C9] hover:text-[#fff] transition-all  border-[#4136C9] bg-[transparent] text-darkblue sm:block hidden dark:text-semiPink">
            برنامه نویسی چیست؟
          </button>
          <button className="primary-btn md:w-auto w-[600px] mx-20 md:mx-0">
            از کجا شروع کنیم؟
          </button>
        </div>
      </div>
      <div className="hero-section-image-side">
        <div className="lg:w-[600px] sm:w-[400px] relative inline-block w-full">
          <HeroSectionSvg />
          <div className="absolute w-full hero-gradient"></div>
          <img
            src={HeroSectionImage}
            className="z-[5] relative lg:w-[540px] sm:w-[340px] hidden sm:block"
          />
          <img
            src={HeroSectionImageCroped}
            className="hero-section-image w-full sm:hidden block"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
