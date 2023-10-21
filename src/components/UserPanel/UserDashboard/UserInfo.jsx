import React from "react";

const UserInfo = () => {
  return (
    <div className="w-full mt-10 rounded-xl border-2 border-[#D4D4FF]">
      <div className="w-[95%] my-8  md:flex md:flex-row-reverse flex-col md:gap-0  mx-auto">
        <div className="flex flex-row-reverse  md:w-4/12    ">
          <h2 className="text-sm text-[#666686]  lg:text-lg">
            {" "}
            : نام و نام خانوادگی
          </h2>
          <h2 className="text-[#4229C5] text-sm mr-1  lg:text-lg">
            {" "}
            بیتا قنبری{" "}
          </h2>
        </div>
        <div className="flex flex-row-reverse   md:w-4/12 mt-8  md:mt-0  ">
          <h2 className=" text-sm text-[#666686]  lg:text-lg">
            {" "}
            : تاریخ تولد{" "}
          </h2>
          <h2 className="text-[#4229C5] text-sm mr-1  lg:text-lg">
            {" "}
            1402/03/26
          </h2>
        </div>
        <div className="flex flex-row-reverse  md:w-4/12 mt-8  md:mt-0 ">
          <h2 className="text-[#666686] text-sm  lg:text-lg">
            {" "}
            : شماره همراه{" "}
          </h2>
          <h2 className="text-[#4229C5]  text-sm mr-1  lg:text-lg">
            {" "}
            09031129980
          </h2>
        </div>
      </div>
      <div className=" w-[95%] md:mt-10 flex  md:flex-row-reverse flex-col gap-2 md:gap-0 mx-auto">
        <div className="flex flex-row-reverse  md:w-4/12  ">
          <h2 className="text-sm lg:text-lg text-[#666686]"> : شماره ملی </h2>
          <h2 className="text-[#4229C5] lg:text-lg text-sm mr-1">
            {" "}
            1234567890{" "}
          </h2>
        </div>
        <div className="flex flex-row-reverse  mt-6 md:mt-0  ">
          <h2 className=" text-sm text-[#666686]  lg:text-lg"> : ایمیل </h2>
          <h2 className="text-[#4229C5] text-sm mr-1  lg:text-lg">
            {" "}
            bitaghanbari@gmail.com
          </h2>
        </div>
      </div>

      <input
        type="submit"
        value="ویرایش"
        className="md:w-[100px] w-[70px] mt-10 md:mt-0  text-xs px-3 py-3 lg:text-sm lg:px-2 lg:py-3 block bg-[#6948fc] rounded-tr-xl rounded-bl-xl text-[#fff] opacity-80 hover:opacity-100 cursor-pointer"
      />
    </div>
  );
};

export default UserInfo;
