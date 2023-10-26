import React from "react";
import 
    {phone, 
    facebook, 
    twitter, 
    instagram, 
    whatsApp, 
    telegram, 
    mail} 
from '../../../assets/icons/svgIcons';

const TeacherSocialMedia = ({number, email}) => {
    return(
        <div className="my-4 pr-4 pb-8">
            {/* <div className="flex flex-row gap-8"> */}
            <div className="my-8 flex flex-row">{phone}
                <p className="pr-4 text-[#03001C] opacity-60 dark:text-whitePink">{number}</p>
            </div>
            <div className="my-8 flex flex-row">{mail}
                <p className="pr-4 text-[#03001C] opacity-60 dark:text-whitePink">{email}</p>
            </div>
            {/* </div> */}
            <div className="mt-12 flex flex-row gap-x-3 -mr-2">
                <div className="media-icons-border">{facebook}</div>
                <div className="media-icons-border">{twitter}</div>
                <div className="media-icons-border">{instagram}</div>
                <div className="media-icons-border">{whatsApp}</div>
                <div className="media-icons-border">{telegram}</div>
            </div>
        </div>
    )
}
export default TeacherSocialMedia;