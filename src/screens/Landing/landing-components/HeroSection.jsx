import React from "react";
import HeroSectionImage from "../../../assets/image/woman working- Hero section image.png";
import HeroSectionImageCroped from "../../../assets/image/woman working- Hero section image - croped.png";
import HeroSectionSvg from "./HeroSectionSvg";
const HeroSection = () => {
  return (
    <div className="flex pt-[150px]">
      <div className="sm:w-8/12 w-full flex flex-col justify-center sm:items-start items-center lg:px-32 sm:px-20 px-0  lg:gap-7 z-20">
        <p className="md:text-lightblue text-lightPurple mb-1 lg:text-[20px] sm:text-sm">
          پلتفرم اموزش طراحی وب
        </p>
        <h2 className="lg:text-5xl sm:text-darkblue dark:sm:text-semiWhite mb-5 whitespace-nowrap text-3xl">
          مرجع اموزش برنامه نویسی
        </h2>
        <p className="sm:text-[#03001CB2] dark:sm:text-whitePink lg:text-[22px] text-md leading-[40px] mx-14 md:mx-0 md:text-right text-center">
          مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به
          زبان فارسی .
        </p>
        {/* <p className="sm:text-[#03001CB2] lg:text-[24px] sm:text-md leading-[40px] sm:text-right text-center">
          مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به
          زبان فارسی .
        </p> */}
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
