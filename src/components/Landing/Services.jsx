import React from "react";
import { Typewriter } from "react-simple-typewriter";

import servicesPic1 from "../../assets/image/services-pic1.svg";
import servicesPic2 from "../../assets/image/services-pic2.svg";
import servicesPic3 from "../../assets/image/services-pic3.svg";
import Title from "../common/Title";

import "./common.css";
import AutoTypeWriter from "../common/AutoTypeWriter";
const Services = () => {
  const TypeWriterWords = [
    " سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت ",
  ];
  return (
    <div className="lg:max-w-[1357px] md:max-w-[750px] sm:max-w-[640px] mx-auto md:mt-[-30px]">
      <Title inner={"خدمات ما"} className={"mt-[320px] lg:mt-40 md:mt-20"} />
      <ul className="flex justify-between flex-row right overflow-hidden mt-16 ">
        <li className="services-box">
          <img src={servicesPic3} alt="picture" />
          <h2 className="services-title">سادگی خدمات</h2>
          <span className="botton-border"></span>
          <AutoTypeWriter
            Text={TypeWriterWords}
            className={"services-info"}
            typeSpeed={120}
            loop={1}
          />
        </li>
        <li className="services-box">
          <img src={servicesPic2} className="" />
          <h2 className="services-title">فرصت های شغلی</h2>
          <span className="botton-border"></span>
          <AutoTypeWriter
            Text={TypeWriterWords}
            className={"services-info"}
            typeSpeed={100}
            loop={1}
          />
        </li>
        <li className="services-box">
          <img src={servicesPic1} className="" />
          <h2 className="services-title">مدرک معتبر</h2>
          <span className="botton-border"></span>
          <AutoTypeWriter
            Text={TypeWriterWords}
            className={"services-info"}
            typeSpeed={130}
            loop={1}
          />
        </li>
      </ul>
    </div>
  );
};

export default Services;
