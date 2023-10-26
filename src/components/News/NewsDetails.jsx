import React, { useState, Fragment } from 'react';
import {UserComments, InputComment} from './';
import { motion, useScroll, useSpring } from "framer-motion";
import userCommentData from '../../core/services/api/Data/userCommentData';

import 
    { 
    facebook, 
    twitter, 
    instagram,
    } 
from '../../assets/icons/svgIcons';
import newsDetails1 from '../../assets/image/newsDetails1.svg';
import eye from '../../assets/image/eye.svg';
import calendar from '../../assets/image/calendar.svg';
import comment from '../../assets/image/comments.svg';
import '../Landing/common.css';

const NewsDetails = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    
    const [userCommentsList, setUserComments] = useState(userCommentData);
    const userComments = userCommentsList.map((item, index) => {
        return (
            <UserComments
                name={item.name}
                date={item.date}
                question={item.question}
                key={index}
            />
        );
    })

    return(
        <Fragment>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <div className="pt-24 lg:pt-40 mb-52">
                <div className="news-details">
                    <div className="flex lg:flex-row flex-wrap border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] mx-auto pb-12">
                        <div className='relative'>
                            <div className="inline ">
                                <img src={newsDetails1} alt="picture" className="mb-4 md:mb-8 lg:w-auto lg:h-auto md:w-[642px] md:h-[430px] lg:p-2 md:object-cover md:rounded-2xl"/>
                                <div className="news-pic-info">
                                    <img src={calendar} alt="picture" className='inline ml-2'  />
                                    <span className="inline text-base md:text-lg ml-8 md:ml-[310px] lg:ml-14">1402/02/08</span>                            
                                    <img src={eye} alt="picture" className='inline mr-4 ml-2' />
                                    <span className="inline text-base md:text-xl ">2057بازدید</span>
                                </div>                        
                            </div>
                        </div>
                        <div className="max-w-[660px] px-2 md:pr-1 lg:pr-6">
                            <h2 className="text-[#3B3CA7] dark:text-whitePink text-lg md:text-3xl mb-6">چگونه مطالعه ی موثر را برای شما اسان تر کنیم</h2>
                            <div className="inline text-[#403393] dark:text-[#8E8EAA] text-sm "> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#8E8EAA" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" ml-4 w-6 h-6 inline text-[#8E8EAA]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                هگزا اسکواد
                            </div>
                            <p className="news-details-text mt-6">
                                همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای آموزش است نخواهد بود و این مقاله به صورت جامع در مورد چگونگی آموزش دیدن و یادگیری است.همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش  دیدن و یادگیری است.همانطور که از عنوان مقاله 
                            </p>
                        </div>
                    </div>
                    <h2 className="text-xl lg:text-[26px] text-darkblue3 dark:text-whitePink py-6">چگونه اموزش ببینیم ؟</h2>
                    <p className="news-details-text">قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو برای همه افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت. ولی خب هدف تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون مطلب است ولی آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و همه به درک عمیقی از اون مطلب میرسند؟ قطعا خیر. در ادامه به نحوه رسیدن به درک عمیق مطلب، مناسب برای تمامی افراد صحبت خواهیم کرد.</p>
                    <h3 className="news-details-text pt-14 pb-4">مثال: </h3>
                    <p className="news-details-text">
                        فرض کنید شما در حال خواندن یک کتاب هستید، در صفحه 30 یک چیزی را متوجه نشدین. در حالت عادی شما به یک صفحه قبل میروید و دوباره خواندن را شروع میکنید و فرض کنید در صفحه 40 هم دقیقا همین اتفاق میافتد و به یک صفحه قبل برمیگردید و دوباره خواندن را شروع میکنید و تا رسیدن به آخرین صفحه این کتاب این چرخه بارها و بارها اتفاق میافتد. نکته و البته جواب ما اینجاست که شما اگر در صفحه 30 نکته را متوجه نشدین، برای رسیدن به درک عمیق باید به جای صفحه قبلی، به صفحه 1 کتاب برگردین و کتاب را از اول دوباره بخوانید، دوباره اگر در صفحه 50 نکته ای را متوجه نشدین، دوباره کتاب را از اول شروع کنید. شما تا پایان این کتاب به درک عمیق اون مطلبی که قرار بود آموزش ببینید میرسید.  
                    </p>
                    <p className="news-details-text py-12">
                        این مثال برای آموزش از روی کتاب بود ولی برای ویدئو یا پادکست یا هر آنچه که میتوانید از آن مطلبی یاد بگیرید هم صدق میکند. شما در مثال بالا با هر بار از نو آموزش دیدن، هم مطلب را مرور میکنید و هم نکته هایی مهم که در طول آموزش متوجه نشده بودین را متوجه میشوید و این اصل قضیه است.
                    </p>
                    <p className="news-details-text pb-6">امیدوارم مقاله مفیدی برای شما واقع بوده باشه.</p>
                    <p className="news-details-text  pb-12 border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] ">با تشکر از:
                        <span className="text-darkblue2 dark:text-[#9996F9] pr-2">نام گردآورنده</span>
                    </p>
                    <div className="flex flex-row justify-between border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70] py-6">
                        <h2 className="news-details-text pt-2">به اشتراک گذاری:</h2>
                        <div className="flex flex-row w-30 lg:w-[194px] ">
                            <div className="media-icons-border">
                                {facebook}
                            </div>
                            <div className="media-icons-border">
                                {twitter}
                            </div>
                            <div className="media-icons-border">
                                {instagram}
                            </div>
                        </div>
                    </div>
                    <div className="mt-40 pb-6 border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70]">
                        <img src={comment} className="inline pl-4"/>
                        <h2 className="text-xl md:text-2xl text-darkblue4 dark:text-[#6974FF] inline">نظرات کاربران در رابطه با این مقاله </h2>
                    </div>
                    {userComments}
                    <InputComment/>
                </div>
            </div>
        </Fragment>

    )
}
export default NewsDetails;