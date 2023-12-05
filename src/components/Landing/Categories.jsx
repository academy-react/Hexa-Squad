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
import { Link } from "react-router-dom";
import Category from "../common/Category";

const Categories = () => {
  const svgPath = useRef();

  return (
    <Fragment>
      <img
        src={dashedLine}
        alt="picture"
        className="absolute hidden lg:block mt-24 w-[98%]"
      />
      <div className="lg:max-w-[1163px] mx-auto md:max-w-[760px] sm:max-w-[640px] mt-[-30px]">
        <Title inner={"دسته بندی ها "} className={"lg:mt-40 mt-20 lg:block"} />
        <ul className="relative flex flex-wrap md:flex-row justify-center gap-2 right mt-12 lg:mt-40">
          <Category title={"ّFront-End"} image={webDesign} link={"/courses"} />
          <Category title={"ّReactJS"} image={dataAnalysis} link={"/courses"} />
          <Category
            title={"ّNextJs"}
            image={networkSecurity}
            link={"/courses"}
          />
          <Category title={"JAVASCRIPTS"} image={game} link={"/courses"} />
        </ul>
      </div>
    </Fragment>
  );
};
export default Categories;
