import React, { useCallback, useState, useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import TitleRight from "../../../assets/icons/title right.svg";
import getProfileInfo from "../../../core/services/api/GetData/getProfileInfo";
const ContactMe = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getProfileInfo(setUserInfo);
  }, []);
  return (
    <div className="mt-12  flex md:flex-row flex-col-reverse gap-8 mx-auto ">
      <div className="md:w-8/12 shadow-shadow-Course-details rounded-xl py-4 dark:bg-indigo-800">
        <div className="text-[#3F3F47]  dark:text-white px-12 relative mb-6 ">
          <img
            src={TitleRight}
            className="absolute top-[-4px] right-6 w-32  "
            alt="TitleRight"
          />
          <h2 className="relative text-lg md:text-xl text-right mr-3 ">
            درباره ی من
          </h2>
        </div>
        <div className=" h-20 rounded-xl mx-5 border-2 border-[#D4D4FF] md:flex md:flex-row-reverse flex-col md:gap-0">
          <p className="text-right mx-4 my-5 lg:text-lg text-base text-[#4229C5] dark:text-slate-300">
            {userInfo.userAbout}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:w-[370px] w-full ml-auto  shadow-shadow-Course-details rounded-xl py-6 dark:bg-indigo-800">
        <div className="text-[#3F3F47] dark:text-white px-12  relative mb-6 ">
          <img
            src={TitleRight}
            className="absolute top-[-4px] right-6 w-32 "
            alt="TitleRight"
          />
          <h2 className="relative text-xl md:text-xl text-right mr-3 ">
            راه های ارتباطی من
          </h2>
        </div>
        <div className="  text-sm text-indigo-950 dark:text-indigo-300  rounded-xl flex flex-col gap-7 px-6 py-3 md:ml-auto">
          <div className="flex flex-row-reverse  ">
            <h2 className=" lg:text-base ">
              {" "}
              : ایمیل <i className="bi bi-envelope-at  ml-1 "></i>
            </h2>
            <h2 className=" text-indigo-800  dark:text-slate-300 text-sm mr-1 lg:text-base  ">
              {" "}
              {userInfo.email}
            </h2>
          </div>
          <div className="flex flex-row-reverse ">
            <h2 className="  lg:text-base   ">
              {" "}
              : شماره همراه <i className="bi bi-telephone ml-1"></i>
            </h2>
            <h2 className="text-indigo-800 dark:text-slate-300 mr-1 lg:text-base ">
              {userInfo.phoneNumber}
            </h2>
          </div>
          {/* <div className="flex flex-row-reverse relative ">
            <h2 className="lg:text-base mr-6">
              {" "}
              : اکانت لینکدین
            </h2>
            <div className="  absolute -right-[2px] text-xl">
              <CiLinkedin />
            </div>

            <h2 className="text-indigo-800  dark:text-slate-300  mr-1 lg:text-base ">
              {" "}
              {userInfo.linkdinProfile}
            </h2>
          </div> */}
          {/* <div className="flex flex-row-reverse relative ">
            <h2 className=" lg:text-base  mr-6 ">
              {" "}
              : اکانت تلگرام{" "}
            </h2>
            <div className=" absolute -right-[2px] text-xl">
              <PiTelegramLogoLight />
            </div>
            <h2 className="text-indigo-800 dark:text-slate-300 lg:text-base  mr-1">
              {" "}
              {userInfo.telegramLink}
            </h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
