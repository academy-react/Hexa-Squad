import React, { Fragment } from 'react';
import Title from '../common/Title';

import dashedLine from "../../assets/image/dashedLine.svg";
import networkSecurity from "../../assets/image/networkSecurity.svg";
import game from "../../assets/image/game.svg";
import webDesign from "../../assets/image/webDesign.svg";
import dataAnalysis from "../../assets/image/dataAnalysis.svg";

const Categories = () => {

    return (
        <Fragment>
            <img src={dashedLine} alt="picture" className='absolute hidden lg:block mt-24 w-[98%]' />
            <div className="lg:max-w-[1163px] mx-auto md:max-w-[760px] sm:max-w-[640px] mt-[-30px]">
                <Title inner={'دسته بندی ها '} className={'lg:mt-40 mt-20 lg:block'}/>
                <ul className="relative flex flex-wrap md:flex-row justify-center gap-2 right mt-12 lg:mt-40">
                    <li className="categories-box lg:mt-28" data-aos="fade-up" data-aos-duration="1000">
                        <img className="categories-img" src={networkSecurity} />
                        <span className="categories-name">امنیت شبکه</span>
                    </li>
                    <li className="categories-box"  data-aos="fade-down" data-aos-duration="1000">
                        <img className="categories-img w-[60%] md:w-auto mb-1" src={game} />
                        <span className="categories-name">بازی</span>
                    </li>
                    <li className="categories-box lg:mt-28"  data-aos="fade-up" data-aos-duration="1000">
                        <img className="categories-img" src={webDesign} />
                        <span className="categories-name">وب دیزاین</span>
                    </li>
                    <li className="categories-box "  data-aos="fade-down" data-aos-duration="1000">
                        <img className="categories-img" src={dataAnalysis} />
                        <span className="categories-name">تحلیل داده</span>
                    </li>
                </ul>
            </div>        
        </Fragment>

    )

}

export default Categories;