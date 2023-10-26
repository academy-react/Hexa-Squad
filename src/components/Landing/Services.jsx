import React from "react";
import Title from "../common/Title";

import servicesPic1 from "../../assets/image/services-pic1.svg";
import servicesPic2 from "../../assets/image/services-pic2.svg";
import servicesPic3 from "../../assets/image/services-pic3.svg";
import "./common.css";

const Services = () => {
  const TypeWriterWords = [
    " سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت ",
  ];
  return (
    <div className="lg:max-w-[1357px] md:max-w-[750px] sm:max-w-[640px] mx-auto md:mt-[-30px]">
      <Title inner={"خدمات ما"} className={"lg:mt-40 mt-20"} />
      <ul className="flex justify-between flex-row right overflow-hidden mt-16 ">
        <li className="services-box">
          <img src={servicesPic3} alt="image"/>
          <h2 className="services-title">سادگی خدمات</h2>
          <span className="botton-border"></span>

          <p className="services-info">
            سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و
            بدون نیاز مراجعه حضوری در کل فرایند ثبت
          </p>
        </li>
        <li className="services-box">
          <img src={servicesPic2} alt="image"/>
          <h2 className="services-title">فرصت های شغلی</h2>
          <span className="botton-border"></span>
          <p className="services-info">
            سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و
            بدون نیاز مراجعه حضوری در کل فرایند ثبت
          </p>
        </li>
        <li className="services-box">
          <img src={servicesPic1} alt="image"/>
          <h2 className="services-title">مدرک معتبر</h2>
          <span className="botton-border"></span>
          <p className="services-info">
            سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و
            بدون نیاز مراجعه حضوری در کل فرایند ثبت
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
