import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getProfileInfo from "../../../core/services/api/GetData/getProfileInfo";
import ContactMe from "./ContactMe";
import ProgressBar from "./ProgressBar";
const NewDesign = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getProfileInfo(setUserInfo);
  }, []);

  return (
    <>
      <div className="flex md:flex-row-reverse flex-col items-center ">
        <div className="mx-auto">
          <ProgressBar />
        </div>
        <div className="md:w-10/12 w-full md:mr-auto mt-10 rounded-xl pt-4 shadow-shadow-Course-details dark:bg-indigo-800">
          <div className="w-[95%] my-8  md:flex md:flex-row-reverse flex-col md:gap-0  mx-auto">
            <div className="flex flex-row-reverse  md:w-4/12    ">
              <h2 className="text-sm text-[#666686] dark:text-indigo-300  lg:text-lg">
                {" "}
                : نام
              </h2>
              <h2 className="text-[#4229C5] dark:text-slate-300 text-sm mr-1  lg:text-lg">
                {userInfo.fName}
              </h2>
            </div>
            <div className="flex flex-row-reverse   md:w-4/12 mt-8  md:mt-0  ">
              <h2 className=" text-sm text-[#666686] dark:text-indigo-300  lg:text-lg">
                {" "}
                : نام خانوادگی{" "}
              </h2>
              <h2 className="text-[#4229C5] dark:text-slate-300 text-sm mr-1  lg:text-lg">
                {userInfo.lName}
              </h2>
            </div>
            <div className="flex flex-row-reverse   md:w-4/12 mt-8  md:mt-0  ">
              <h2 className=" text-sm text-[#666686] dark:text-indigo-300  lg:text-lg">
                {" "}
                : تاریخ تولد{" "}
              </h2>
              <h2 className="text-[#4229C5]  dark:text-slate-300 text-sm mr-1  lg:text-lg">
                {" "}
                {userInfo.birthDay == undefined
                  ? ""
                  : userInfo.birthDay.slice(0, 10)}
              </h2>
            </div>
          </div>
          <div className=" w-[95%] md:mt-10 flex  md:flex-row-reverse flex-col gap-2 md:gap-0 mx-auto">
            <div className="flex flex-row-reverse md:mt-0  md:w-4/12  ">
              <h2 className=" text-sm text-[#666686] dark:text-indigo-300 lg:text-lg">
                {" "}
                : کدملی{" "}
              </h2>
              <h2 className="text-[#4229C5]  dark:text-slate-300 text-sm mr-1  lg:text-lg">
                {" "}
                {userInfo.nationalCode}
              </h2>
            </div>

            <div className="flex flex-row-reverse mt-6 md:mt-0  ">
              <h2 className="  text-sm lg:text-lg  text-[#666686] dark:text-indigo-300">
                {" "}
                : ادرس{" "}
              </h2>
              <h2 className="text-[#4229C5]  dark:text-slate-300 lg:text-lg text-sm mr-1">
                {" "}
                {userInfo.homeAdderess}
              </h2>
            </div>
          </div>

          <Link to="/userPanel/ProfileInfoTabs">
            <input
              type="submit"
              value="ویرایش"
              className="md:w-[100px] shadow-shadow-Services-box2 w-[70px] mt-10 md:mt-0  text-xs px-3 py-3 lg:text-sm lg:px-2 lg:py-3 block bg-[#6948fc] rounded-tr-xl rounded-bl-xl text-[#fff] opacity-80 hover:opacity-100 cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <ContactMe />
    </>
  );
};

export default NewDesign;
