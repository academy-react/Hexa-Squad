import React, {Fragment} from "react";
import TeacherSocialMedia from "./TeacherSocialMedia";
import TeacherWishList from "./TeacherWishList";

const TeacherInfo = ({title, number, email, experiences, education,  image}) => {
    return (
        <Fragment>
            <div className="float-left w-2/5">
                <div className="text-4xl pb-8 text-center text-[#2C007F] dark:text-whitePink">{title}</div> 
                <div className="relative">
                    <figure className="img-figure">
                        <img className="teacher-image" src={image} alt="image" />
                    </figure>
                    {/* <span className="teacher-image-hover  -z-1"> تماس با استاد:{`\n`}{number}</span> */}
                </div>
                <div className="w-72 h-24 mx-auto my-8 py-8 text-2xl text-darkblue2 dark:text-whitePink rounded-lg shadow-shadow-Course-details text-center bg-[#c4b5fd] dark:bg-[#34239f]">{education}</div>

            </div>
            <div className="float-left w-3/5 pr-12">
                <div className="teacherInfo-title">تجربه ها:
                    <div className="py-4 text-md leading-8 md:text-base lg:text-lg lg:leading-10 text-[#03001C] opacity-80 dark:text-lightPin">{experiences}</div>
                </div>
                <div className="teacherInfo-title py-4"> راه های ارتباطی:
                    <TeacherSocialMedia number={number} email={email}/>
                </div>
                <div className="teacher-suggestion"><TeacherWishList/></div>
            </div>

        </Fragment>
    )
}
export default TeacherInfo;