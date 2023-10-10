import React from 'react';
import "./common.css";
import servicesPic1 from "../../../assets/image/services-pic1.svg";
import servicesPic2 from "../../../assets/image/services-pic2.svg";
import servicesPic3 from "../../../assets/image/services-pic3.svg";

const Services = () => { 
  return (
    <div className="lg:max-w-[1357px] md:max-w-[750px] sm:max-w-[640px] mx-auto md:mt-[-30px]">
        <h1 className="title mt-[320px] lg:mt-40 md:mt-20">خدمات ما
        <span className="absolute w-[100%] block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
        </h1>
        <ul className="flex justify-between flex-row right overflow-hidden mt-16 ">
            <li className="services-box">
              <img src={servicesPic3} alt="picture" />
              <h2 className="services-title">سادگی خدمات</h2>
              <span className="botton-border"></span>
              <p  className="services-info">
                سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت 
              </p>
            </li>
            <li className="services-box">
              <img src={servicesPic2} className="" />
              <h2 className="services-title">فرصت های شغلی</h2>
              <span className="botton-border"></span>
              <p  className="services-info">
                سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت 
              </p>
            </li>
            <li className="services-box">
              <img src={servicesPic1} className="" />
              <h2 className="services-title">مدرک معتبر</h2>
              <span className="botton-border"></span>
              <p  className="services-info">
                سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت 
              </p>
            </li>
        </ul>
    </div>
  )
}

export default Services;