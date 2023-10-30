import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addCart } from "../../core/services/api/addCart";

import start from "../../assets/icons/start.svg";
import date from "../../assets/icons/date.svg";
import student from "../../assets/icons/student.svg";
import startDark from "../../assets/icons/startDark.svg";
import dateDark from "../../assets/icons/dateDark.svg";
import studentDark from "../../assets/icons/studentDark.svg";
import teacher from "../../assets/image/teacher'sProfile.jpg";

const DetailsBox = ({ id }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className=" lg:w-[620px]  md:w-[500px] w-full mx-auto lg:ml-14  ">
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="rounded-lg shadow-shadow-Course-details lg:h-[540px] bg-[#D7D5FF] lg:mt-10 md:mt-28 mt-20 dark:bg-[#34239f] "
      >
        <h2 className="w-28 h-6 mx-32 lg:my-10 md:mx-48 lg:mx-44 md:text-lg  py-6 text-md  text-[#210654]  dark:text-whitePink">
          {" "}
          مشخصات دوره
        </h2>
        <div className="mx-6 mt-8 my-2  border-b border-[#3D00B1] opacity-20 dark:border-[#b1a5ce] dark:opacity-70"></div>

        <div className="mx-6  border-b border-[#b1a5ce] h-10 relative">
          <img src={student} className="absolute right-0" alt="" />
          <img
            src={studentDark}
            className="absolute right-0 hidden dark:block"
            alt=""
          />
          <h2 className=" absolute left-2 text-[#210654]  dark:text-[#f5f1ff]  ">
            {" "}
            27{" "}
          </h2>
          <h2 className="text-sm mr-8 my-6 text-[#210654] opacity-80 dark:text-[#f5f1ff] ">
            {" "}
            تعداد دانشجو
          </h2>
        </div>

        <div className="mx-6 border-b border-[#b1a5ce] h-10 relative ">
          <img src={start} className="absolute right-0" alt="" />
          <img
            src={startDark}
            className="absolute right-0 hidden dark:block"
            alt=""
          />
          <h2 className="text-sm absolute left-2 text-[#210654] dark:text-[#f5f1ff]  ">
            {" "}
            در حال برگزاری{" "}
          </h2>
          <h2 className="text-sm mr-8 my-6 text-[#210654] opacity-80 dark:text-[#f5f1ff]  ">
            {" "}
            وضعیت دوره
          </h2>
        </div>
        <div className="mx-6 border-b border-[#b1a5ce] h-10 relative">
          <img src={date} className="absolute  right-0" alt="" />
          <img
            src={dateDark}
            className="absolute right-0 hidden dark:block"
            alt=""
          />
          <h2 className="text-sm absolute left-2 text-[#210654] dark:text-[#f5f1ff] ">
            {" "}
            1402/03/26
          </h2>
          <h2 className="text-sm mr-8 my-6 text-[#210654] opacity-80 dark:text-[#f5f1ff] ">
            {" "}
            تاریخ شروع
          </h2>
        </div>
        <div className="mx-6 border-b border-[#b1a5ce]  h-10 relative">
          <img src={date} className="absolute right-0" alt="" />
          <img
            src={dateDark}
            className="absolute right-0 hidden dark:block"
            alt=""
          />
          <h2 className="text-sm absolute left-2 text-[#210654] dark:text-[#f5f1ff] ">
            {" "}
            1402/04/26
          </h2>
          <h2 className="text-sm mr-8 my-6 text-[#210654] opacity-80 dark:text-[#f5f1ff] ">
            {" "}
            تاریخ پایان
          </h2>
        </div>
        <div className=" rounded-md mx-6 mt-10 h-14 border-2 border-[#3F40EA] dark:border-whitePink relative">
          <div className="flex flex-row absolute right-20 md:right-28 mt-3 ">
            <h2 className="text-lg text-darkblue dark:text-whitePink  ">
              قیمت:
            </h2>
            <h2 className="text-xl mr-2 text-[#C40F50] dark:text-[#f85691]">
              400,000
            </h2>
            <h2 className="text-md mr-1 text-darkblue opacity-90 dark:text-whitePink ">
              تومان
            </h2>
          </div>
        </div>
        <div className="mx-6 mt-3 mb-8 lg:mb-0 ">
          <input
            onClick={() => addCart(id, isLogin)}
            type="submit"
            value="ثبت نام در این دوره"
            className="gradient w-full py-4 lg:mb-0 mb-4 rounded-md cursor-pointer"
          />
        </div>
      </div>
      <Link to="/TeacherProfile">
        <div className="rounded-lg relative shadow-shadow-Course-details h-[140px] bg-[#D7D5FF] lg:mt-16 dark:bg-[#34239f]">
          <div className="flex flex-row absolute right-32 md:right-36 mt-8 ">
            <h2 className="text-lg md:text-xl text-darkblue dark:text-whitePink">
              مدرس:{" "}
            </h2>
            <h2 className="text-lg md:text-xl text-darkblue mr-1 dark:text-whitePink">
              مهندس مهدی اصغری{" "}
            </h2>
          </div>
          <h2 className="text-md text-darkblue right-32  md:right-36 mt-20 absolute opacity-80 dark:text-whitePink">
            مهندس نرم افزار{" "}
          </h2>
          <div className="w-24 h-24 rounded-full  right-6 mt-6 absolute">
            <img
              src={teacher}
              className="rounded-full w-24 h-24 object-cover"
              alt=""
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DetailsBox;
