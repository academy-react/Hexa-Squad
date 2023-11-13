import React, { useState} from "react";

import Tab from "./Tab";
import Tabs from "./Tabs";
import Accordions from "../../core/services/api/GetData/Topics";
import Accordion from "./Accordion";
import { InputComment, UserComments } from "../News";

import comments from "../../assets/image/comments.svg";
import { MdOutlinePreview } from "react-icons/md";

const TabsContent = () => {
  const [userCommentsList, setUserComments] = useState([
    {
      name: "محمدرضا ساداتی ",
      date: " 1402/05/23",
      question:
        "ممنون بابت مقاله، اما میتونست بیشتر باشه و علاوه بر اشاره به یک نکته به نکات دیگه ای که به آموزش بهتر کمک میکنه اشاره بشه، درکل خیلی کوتاه بود",
    },
    {
      name: "بیتا قنبری ",
      date: " 1402/04/15",
      question:
        "آیا مطالبی که در دوره جاری ارائه میدید با دوره قبلی تفاوت داره؟",
    },
  ]);
  const [comment, setComment] = useState([]);

  const userComments = comment.map((item, index) => {
    return (
      <UserComments
        uid={item.userId}
        name={item.title}
        date={item.insertDate}
        question={item.describe}
        key={index}
      />
    );
  });

  return (
    <div>
      <Tabs>
        <Tab label="توضیحات ">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2 hidden">توضیحات</h2>

            <div className="text-gray-700 w-full mt-6 ">
              <h2 className="text-lg text-indigo-900 mt-2 dark:text-indigo-100 md:mx-2  ">
                {" "}
                HTML چیست؟
              </h2>
              <p className=" text-zinc-700 mt-3 leading-10  lg:ml-8 md:mx-2  dark:text-indigo-200 text-justify">
                واژه HTML (اچ‌‌تی‌‌ام‌ال) مخفف Hyper Text Markup Language به
                معنی زبان نشانه‌‌گذاری فوق متن است. HTML به عنوان زبان بنیادی
                طراحی وب، یکی از ساده‌ترین زبان‌های کامپیوتری است که با استفاه
                از آن می‌توانیم اسکلت اصلی وب‌سایت را طراحی کنیم. HTML از تگ‌ها
                یا نشانگرهای خاص برای نشان دادن محتوا و ساختار صفحات استفاده
                می‌کند، این تگ‌ها به مرورگر اعلام می‌‌کنند، که هر بخش از صفحه چه
                نوع عنصری است و باید به چه صورت نمایش داده شود.
              </p>
              <h2 className="text-lg text-indigo-900 mt-7 dark:text-indigo-100 md:mx-2 ">
                اهمیت یادگیری HTML چیست؟{" "}
              </h2>
              <p className=" text-zinc-700 mt-3 leading-10  lg:ml-8 text-justify dark:text-indigo-200 md:mx-2 ">
                {" "}
                وقتی حرف از طراحی وب‌‌سایت به میان می‌‌آید، ذهن تمامی افراد
                ناخواسته به سمت زبان HTML و CSS هدایت می‌‌شود. این زبان، زبان
                استاندارد صفحات وب است و زبان نهایی است که توسط مرورگر ترجمه‌
                شده و به کاربر نمایش داده می‌‌شود. به طور دقیق‌‌تر، وقتی شما
                وب‌‌سایتی را به زبان PHP و یا ASP.Net طراحی و برنامه‌‌نویسی
                می‌کنید، این وب‌‌سایت بعد از اجرا بر روی سرور و همین طور سیستم
                کاربر، تبدیل به قطعه کدهای HTML شده و بر روی مرورگر ترجمه شده و
                به کاربر نشان داده می‌‌شود. بنابراین، یادگیری HTML برای افرادی
                که در زمینه طراحی وب فعالیت می‌کنند، بسیار مهم است.
              </p>
            </div>
          </div>
        </Tab>
        <Tab label="پیش نمایش ها">
          <div className="py-4 ">
            <h2 className="hidden font-medium ">پیش نمایش ها</h2>
            <div className="w-full lg:mr-2 md:w-[600px] lg:w-[800px] wrapper md:mx-auto ">
              <h2 className="md:text-xl text-lg flex flex-row mt-6 gap-2  text-darkblue4 lg:text-right text-center  dark:text-indigo-200 ">
                <MdOutlinePreview className="w-6 h-6 mt-1 opacity-90 dark:opacity-60" />{" "}
                پیش نمایش های دوره اموزشی html{" "}
              </h2>
              <div className="max-w-[750px] w-full mt-8 flex flex-col gap-2">
                {Accordions.map((item, id) => {
                  const { title, desc, title2 } = item;

                  return (
                    <div
                      className="bg-[#8c5eff] dark:bg-[#4716E0] rounded-md "
                      key={id}
                    >
                      <Accordion title={title} desc={desc} title2={title2} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="نظرات کاربران">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2 hidden">نظرات کاربران</h2>
            <div className="w-[96%] mx-auto lg:mr-2 mt-6 ">
              <div className=" pb-5 border-b-2 border-b-[#9999f533] dark:border-b-[#3d3d70]">
                <img src={comments} className="inline pl-4 w-10 h-10 " />
                <h3 className="text-xl md:text-xl text-darkblue4 dark:text-indigo-200  inline">
                  نظرات کاربران در رابطه با این دوره{" "}
                </h3>
              </div>
              {userComments}
              <InputComment />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsContent;
