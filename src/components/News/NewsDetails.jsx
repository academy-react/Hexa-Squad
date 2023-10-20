import React, {useState} from 'react';
import {UserComments, InputComment} from './';

import newsDetails1 from '../../assets/image/newsDetails1.svg';
import eye from '../../assets/image/eye.svg';
import calendar from '../../assets/image/calendar.svg';
import comment from '../../assets/image/comments.svg';
import '../Landing/common.css';

const NewsDetails = () => {
    const [userCommentsList, setUserComments] = useState([
        {
            name: "محمدرضا ساداتی ",
            date: " 1402/05/23",
            question: "ممنون بابت مقاله، اما میتونست بیشتر باشه و علاوه بر اشاره به یک نکته به نکات دیگه ای که به آموزش بهتر کمک میکنه اشاره بشه، درکل خیلی کوتاه بود",
        },
        {
            name: "بیتا قنبری ",
            date: " 1402/04/15",
            question: "آیا مطالبی که در دوره جاری ارائه میدید با دوره قبلی تفاوت داره؟",
        },
    ]);
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
                        <h2 className="text-[#3B3CA7] dark:text-[#6974FF] text-lg md:text-3xl mb-6">چگونه مطالعه ی موثر را برای شما اسان تر کنیم</h2>
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
                <h2 className="text-xl lg:text-[26px] text-darkblue3 dark:text-[#6974FF] py-6">چگونه اموزش ببینیم ؟</h2>
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
                            <svg class="media-icons" fill="#8E8EAA" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="media-icons-border">
                            <svg class="media-icons" fill="#8E8EAA" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </div>
                        <div className="media-icons-border">
                            <svg class="media-icons" fill="#8E8EAA" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                            </svg>
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
    )
}
export default NewsDetails;