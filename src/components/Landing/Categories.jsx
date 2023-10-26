import React, { Fragment } from "react";
import Title from "../common/Title";

import dashedLine from "../../assets/image/dashedLine.svg";
import networkSecurity from "../../assets/image/networkSecurity.svg";
import game from "../../assets/image/game.svg";
import webDesign from "../../assets/image/webDesign.svg";
import dataAnalysis from "../../assets/image/dataAnalysis.svg";
import { useRef } from "react";
import anime from "animejs";
import { useEffect } from "react";

const Categories = () => {
  const svgPath = useRef();

  const svgText = anime({
    targets: svgPath.current,
    loop: true,
    direction: "alternate",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 700,
    delay: (el, i) => {
      return i * 500;
    },
  });
  useEffect(() => {
    svgText.play();
  }, [])
  
  return (
    <Fragment>
      {/* <img src={dashedLine} alt="picture" className='absolute hidden lg:block mt-24 w-[98%]' /> */}
      <svg width="1413"height="493"className="absolute hidden lg:block mt-24 w-[98%]"ref={svgPath}viewBox="0 0 1413 493"fill="none"xmlns="http://www.w3.org/2000/svg">
        <path d="M2 279.844C2 279.844 6.49995 370.171 88.4985 431.042C170.497 491.913 270.995 529.042 407.993 431.042C544.99 333.043 581.5 160.241 755 150.752C964.5 139.294 963.5 569.438 1193.5 466.938C1423.5 364.438 1348.5 142.441 1331 112.439C1313.5 82.4382 1271.04 96.4382 1267.5 128.938C1263.96 161.438 1310.73 186.715 1349.5 157.438C1398.5 120.438 1439.5 -32.0604 1416.5 8.93946" stroke="#6635FF"stroke-opacity="0.65"stroke-width="3"stroke-dasharray="20 20"/>
      </svg>
      <div className="lg:max-w-[1163px] mx-auto md:max-w-[760px] sm:max-w-[640px] mt-[-30px]">
        <Title inner={"دسته بندی ها "} className={"lg:mt-40 mt-20 lg:block"} />
        <ul className="relative flex flex-wrap md:flex-row justify-center gap-2 right mt-12 lg:mt-40">
          <li className="categories-box lg:mt-28">
            <img className="categories-img" src={networkSecurity} />
            <span className="categories-name">امنیت شبکه</span>
          </li>
          <li className="categories-box">
            <img className="categories-img w-[60%] md:w-auto mb-1" src={game} />
            <span className="categories-name">بازی</span>
          </li>
          <li className="categories-box lg:mt-28">
            <img className="categories-img" src={webDesign} />
            <span className="categories-name">وب دیزاین</span>
          </li>
          <li className="categories-box ">
            <img className="categories-img" src={dataAnalysis} />
            <span className="categories-name">تحلیل داده</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Categories;
