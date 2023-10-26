import React from "react";
import 
    {phoneSvg, 
    facebookSvg, 
    twitterSvg, 
    instagramSvg, 
    whatsAppSvg, 
    telegramSvg, 
    mailSvg} 
from '../../../assets/icons/svgIcons';

const TeacherSocialMedia = ({number, email}) => {
    return(
        <div className="my-4 pr-4 md:pb-4 lg:pb-8">
            {/* <div className="flex flex-row gap-8"> */}
            <div className="my-6 lg:my-8 flex flex-row">
                <i className=" bi bi-telephone rotate-[260deg] text-[#03001C] dark:text-whitePink opacity-60"></i>
                <p className="contact-teacher">{number}</p>
            </div>
            <div className="my-6 lg:my-8 flex flex-row">
                <i className="bi bi-envelope-at text-[#03001C] dark:text-whitePink opacity-60"></i>
                <p className="contact-teacher">{email}</p>
            </div>
            {/* </div> */}
            <div className="md:mt-8 lg:mt-12 flex flex-row lg:gap-x-3 -mr-2">
                <div className="media-icons-border teacher-media-icons">{facebookSvg}</div>
                <div className="media-icons-border teacher-media-icons">{twitterSvg}</div>
                <div className="media-icons-border teacher-media-icons">{instagramSvg}</div>
                <div className="media-icons-border teacher-media-icons">{whatsAppSvg}</div>
                <div className="media-icons-border teacher-media-icons">{telegramSvg}</div>
            </div>
        </div>
    )
}
export default TeacherSocialMedia;