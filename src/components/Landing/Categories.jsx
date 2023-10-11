import React from 'react';

import networkSecurity from "../../assets/image/networkSecurity.svg";
import game from "../../assets/image/game.svg";
import webDesign from "../../assets/image/webDesign.svg";
import dataAnalysis from "../../assets/image/dataAnalysis.svg";
import Title from '../common/Title';

const Categories = () => {

    return (
        <div className="lg:max-w-[1163px] mx-auto md:max-w-[760px] sm:max-w-[640px] mt-[-30px]">
            <Title inner={'دسته بندی ها '} className={'lg:mt-40 mt-20 lg:block'}/>
            <ul className="flex flex-wrap md:flex-row lg:flex-row justify-center right mt-24">
                <li className="categories-box ml-[20px] md:ml-[10px]">
                    <img className="categories-img" src={networkSecurity} />
                    <p className="text-2xl">امنیت شبکه</p>
                </li>
                <li className="categories-box ml-[20px] md:ml-[10px]">
                    <img className="categories-img" src={game} />
                    <p className="text-2xl">بازی</p>
                </li>
                <li className="categories-box ml-[20px] md:ml-[10px]">
                    <img className="categories-img" src={webDesign} />
                    <p className="text-2xl">وب دیزاین</p>
                </li>
                <li className="categories-box ">
                    <img className="categories-img" src={dataAnalysis} />
                    <p className="text-2xl">تحلیل داده</p>
                </li>
            </ul>
        </div>
    )

}

export default Categories;