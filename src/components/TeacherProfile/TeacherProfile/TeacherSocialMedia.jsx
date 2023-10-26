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
        <div className="my-4 pr-4 pb-8">
            {/* <div className="flex flex-row gap-8"> */}
            <div className="my-8 flex flex-row">
                <i className=" bi bi-telephone rotate-[260deg] text-[#03001C] dark:text-whitePink opacity-60"></i>
                <p className="pr-4 text-[#03001C] opacity-60 dark:text-whitePink">{number}</p>
            </div>
            <div className="my-8 flex flex-row">
                <i className="bi bi-envelope-at text-[#03001C] dark:text-whitePink opacity-60"></i>
                <p className="pr-4 text-[#03001C] opacity-60 dark:text-whitePink">{email}</p>
            </div>
            {/* </div> */}
            <div className="mt-12 flex flex-row gap-x-3 -mr-2">
                <div className="media-icons-border">{facebookSvg}</div>
                <div className="media-icons-border">{twitterSvg}</div>
                <div className="media-icons-border">{instagramSvg}</div>
                <div className="media-icons-border">{whatsAppSvg}</div>
                <div className="media-icons-border">{telegramSvg}</div>
            </div>
        </div>
    )
}
export default TeacherSocialMedia;