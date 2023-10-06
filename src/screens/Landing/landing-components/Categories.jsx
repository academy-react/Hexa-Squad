import React from 'react';
import "./common.css";
import networkSecurity from "../../../assets/image/networkSecurity.svg";
import game from "../../../assets/image/game.svg";
import webDesign from "../../../assets/image/webDesign.svg";
import dataAnalysis from "../../../assets/image/dataAnalysis.svg";

const Categories = () => {

    return (
        <div className="lg:max-w-[1163px] mx-auto">
            <h1 className="title">دسته بندی ها 
                <span className="absolute w-[100%] w-0 block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
            </h1>
            <ul className="flex justify-content flex-row-reverse right overflow-hidden mt-16 ">
                <li className="categories-box text-center ml-[20px] ">
                    <img className="categories-img " src={networkSecurity} />
                    <p className="categories-name">امنیت شبکه</p>
                </li>
                <li className="categories-box text-center lg:w-[24%] ml-[20px] ">
                    <img className="categories-img" src={game} />
                    <p className="categories-name">بازی</p>
                </li>
                <li className="categories-box text-center lg:w-[24%] ml-[20px] ">
                    <img className="categories-img" src={webDesign} />
                    <p className="categories-name">وب دیزاین</p>
                </li>
                <li className="categories-box text-center lg:w-[24%] ">
                    <img className="categories-img " src={dataAnalysis} />
                    <p className="categories-name">تحلیل داده</p>
                </li>
            </ul>

        </div>
    )

}

export default Categories;