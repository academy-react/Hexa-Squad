import React, { Fragment } from 'react';

import dashedLine from "../../../assets/image/dashedLine.svg";
import networkSecurity from "../../../assets/image/networkSecurity.svg";
import game from "../../../assets/image/game.svg";
import webDesign from "../../../assets/image/webDesign.svg";
import dataAnalysis from "../../../assets/image/dataAnalysis.svg";
import "./common.css";

const Categories = () => {

    return (
        <Fragment>
            <img src={dashedLine} alt="picture" className='absolute hidden lg:block mt-24 w-[98%]' />
            <div className="lg:max-w-[1163px] mx-auto md:max-w-[760px] sm:max-w-[640px] mt-[-30px]">
                <h1 className="title lg:mt-48 mt-20">دسته بندی ها 
                    <span className="w-[100%] block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
                </h1>
                <ul className="relative flex flex-wrap md:flex-row justify-center gap-2 right mt-12 lg:mt-40">
                    <li className="categories-box lg:mt-28">
                        <img className="categories-img" src={networkSecurity} />
                        <span className="text-2xl">امنیت شبکه</span>
                    </li>
                    <li className="categories-box">
                        <img className="categories-img" src={game} />
                        <span className="text-2xl">بازی</span>
                    </li>
                    <li className="categories-box lg:mt-28">
                        <img className="categories-img" src={webDesign} />
                        <span className="text-2xl">وب دیزاین</span>
                    </li>
                    <li className="categories-box ">
                        <img className="categories-img" src={dataAnalysis} />
                        <span className="text-2xl">تحلیل داده</span>
                    </li>
                </ul>
            </div>        
        </Fragment>

    )

}

export default Categories;