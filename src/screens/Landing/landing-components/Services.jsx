import React from 'react';
import "./common.css";
import servicesPic1 from "../../../assets/image/services-pic1.svg";
import servicesPic2 from "../../../assets/image/services-pic2.svg";
import servicesPic3 from "../../../assets/image/services-pic3.svg";

const Services = () => { 
  return (
    <div className="max-w-[1357px] mx-auto">
        <h1 className="title">خدمات ما
        <span className="absolute w-[100%] w-0 block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
        </h1>
        <ul className="flex justify-content flex-row-reverse right overflow-hidden mt-16 ">
            <li className="services-box lg:w-[30%] m-10 ">
              <img src={servicesPic3} alt="picture" />
              <h2 className="services-title  text-darkblue">سادگی خدمات</h2>
              <div className="w-[50px] border-b-4 border-[#3F40EA]"></div>
              <p  className="services-info">
                سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت 
              </p>
            </li>
            <li className="services-box lg:w-[30%] m-10">
              <img src={servicesPic2} className="" />
              <h2 className="services-title  text-darkblue">فرصت های شغلی</h2>
              <div className="w-[50px] border-b-4 border-[#3F40EA]"></div>
              <p  className="services-info">
                سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت 
              </p>
            </li>
            <li className="services-box lg:w-[30%] m-10">
              <img src={servicesPic1} className="" />
              <h2 className="services-title  text-darkblue">مدرک معتبر</h2>
              <div className="w-[50px] border-b-4 border-[#3F40EA]"></div>
              <p  className="services-info">
                سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت 
              </p>
            </li>
        </ul>
    </div>
  )
}

export default Services;