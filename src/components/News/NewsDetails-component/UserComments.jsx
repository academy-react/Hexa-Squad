import React, { Fragment, useState } from 'react';
import {AdminComments} from '../';

import userComment from '../../../assets/image/userComment.svg';


const UserComments = ({name, date, question}) => {
    const [adminCommentsList, setAdminComments] = useState([
        {
            name: "پشتیبانی سایت ",
            date: " 1402/06/02",
            answer: "با سلام، تفاوت این دوره با دوره ای قبلا تحت عنوان آموزش نرم افزار فیگما ارائه شده در مدت زمان دوره می‌باشد.مطالب دوره اپدیت شده و از دوره ی قبلی کاملتر است."
        }
    ])
    const adminComments =  adminCommentsList.map((item, index) => {
        return (
            <AdminComments
                name={item.name}
                date={item.date}
                answer={item.answer}
                key={index}
            />
        );
    })
    return(
        <Fragment>
        <div className='userComment'>
            <div className="userComment-pic">
                <img src={userComment} alt="picture" className="mx-auto" />
            </div>
            <div>
                <p className="inline text-xl text-darkblue2 dark:text-[#9996F9] pr-4">{name}-</p>
                <p className="inline text-base text-lightblue4 dark:text-[#9996F9] pr-4">ارسال شده در{date} </p>
                <p className="text-base text-justify text-darkblue4 dark:text-[#7e7cb1] px-4 pt-2">{question}</p>
            </div>
        </div>
        {adminComments}
        </Fragment>
    )
}

export default UserComments;