import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import { validation } from "../../../core/validations/validations";

import tick from "../../../assets/image/tick.svg";
import { useEffect } from "react";
const LastStep = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.pathname = "/authorize/login";
    }, 1500);
  }, [])
  
  return (
    <div className="md:bg-[#e4dbff] relative">
      <div
        className=" text-newPurpleAlpha mx-auto w-[300px] md:w-[400px] absolute md:left-44 "
        dir="rtl"
      >
        {" "}
        <div className="w-full h-40  ">
          <img src={tick} className="w-32 h-32 md:mx-auto mr-16" alt="" />
          <h2 className="absolute md:right-24 mt-4 right-8 dark:text-indigo-200">
            ثبت نام شما با موفقیت انجام شد
          </h2>
        </div>
        <Formik validationSchema={validation} onSubmit={() => alert("ثبت نام")}>
          <Form autoComplete="off" className="text-[#a967ff]">
            <Link to="/">
              <input
                type="submit"
                value=" بازگشت به خانه"
                className="w-[260px] absolute top-[180px] md:right-[75px] right-0 py-[12px]  rounded-md text-sm text-[#f4f1ff] bg-gradient-to-tr  from-[#7a0cff] to-[#4739ff] cursor-pointer hover:bg-gradient-to-tr hover:from-[#4739ff] hover:to-[#7a0cff]"
              />
            </Link>
            {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LastStep;
