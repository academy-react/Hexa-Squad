import React, { useState, Fragment } from "react";
import TeacherSocialMedia from "./TeacherSocialMedia";
import TeacherWishList from "./TeacherWishList";

import image from "../../../assets/image/drBahr.jpg"

const TeacherInfo = ({title, number, email, experiences, education}) => {
    return (
        <Fragment>
            <div className="float-left w-2/5">
                <div className="text-4xl pb-8 text-center text-[#2C007F] dark:text-whitePink">{title}</div> 
                <div className="relative">
                    <figure className="img-figure">
                        <img className="teacher-image" src={image} alt="image" data-aos="zoom-in" data-aos-duration="2500"/>
                    </figure>
                    {/* <span className="teacher-image-hover  -z-1"> تماس با استاد:{`\n`}{number}</span> */}
                </div>
                <div className="teacher-education">{education}</div>

            </div>
            <div 
                className="float-left w-3/5 px-12 rounded-lg shadow-shadow-Course-details dark:bg-[#34239f]" 
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <div className="teacherInfo">تجربه ها:
                    <div className="py-4 px-4 text-md leading-8 md:text-base lg:text-lg lg:leading-10 text-[#03001C] opacity-80 dark:text-lightPin">{experiences}</div>
                </div>
                <div className="teacherInfo pt-8 border-none"> راه های ارتباطی:
                    <TeacherSocialMedia number={number} email={email}/>
                </div>
                {/* <div className="teacher-suggestion"><TeacherWishList/></div> */}
            </div>
            <TeacherWishList/>
            
        </Fragment>
    )
}
export default TeacherInfo;