import React, { useState } from "react";
import { Formik, Form } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import * as yup from "yup";
// import { validation } from "../../../core/validations/validations";
import FieldInput from "../../common/FieldInput";
import axios from "axios";
import onSubmitFunction from "../../../core/services/api/PostData/Register";

const validation = yup.object().shape({
  gmail: yup
    .string()
    .email("  ایمیل را به درستی وارد کنید")
    .required("این فیلد الزامیست!"),
  password: yup.string().required("این فیلد الزامیست!"),
});
const PersonalInfo = ({ phoneNumberValue, handleClick }) => {
  const [visible, setVisibility] = useState(false);
  const toggle = () => {
    setVisibility(!visible);
  };

  const onSubmit = async (value) => {
    const toastifyMessage = {
      pending: "ثبت نام در حال انجام است",
      success: "ثبت نام با موفقیت انجام شد",
      error: "مشکلی بوجود آمد . ثبت نام ناموفق بود",
    };
    const api = "/Sign/Register";
    const obj = {
      phoneNumber: value.phoneNumber,
      verifyCode: value.verifyCode,
      gmail: value.gmail,
      password: value.password,
    };
    onSubmitFunction(api, value, obj, toastifyMessage, handleClick);
  };
  return (
    <div className="bg-[#e4dbff]">
      <h2 className="text-[#6652eb] dark:text-indigo-100 md:text-3xl text-2xl top-12 md:top-10 md:left-[300px] left-[130px]  absolute">
        {" "}
        مشخصات کاربری
      </h2>
      <div
        className=" text-newPurpleAlpha mx-auto w-[400px] absolute mt-8 left-0 md:left-44"
        dir="rtl"
      >
        <Formik
          initialValues={{
            phoneNumber: phoneNumberValue,
            gmail: "",
            password: "",
          }}
          validationSchema={validation}
          onSubmit={(value) => {
            onSubmit(value);
          }}
        >
          <Form autoComplete="off" className="text-[#a967ff]">
            <h2 className="md:text-sm text-xs mr-[44px] md:mr-0">
              {" "}
              ایمیل و پسورد خود را وارد کنید
            </h2>
            <FieldInput
              placeholder={"hexasquad@gmail.com"}
              name="gmail"
              type={"email"}
            />
            <div className=" relative md:-mt-2 -mt-4">
              <FieldInput
                placeholder={"رمز عبور  "}
                name="password"
                type={visible === false ? "password" : "text"}
              />

              <div className="text-2xl absolute top-3 md:left-3 left-16 cursor-pointer">
                {visible === false ? (
                  <AiFillEyeInvisible onClick={toggle} />
                ) : (
                  <AiFillEye onClick={toggle} />
                )}
              </div>
            </div>
            {/* <div className=" flex gap-2 justify-start w-full p-4 absolute -bottom-10 md:left-4 mr-8 md:mr-0">
              <input
                type="checkbox"
                name=""
                id="remember"
                className="md:w-4 md:h-4 w-3 h-3 border-2  rounded-sm mt-1 bg-semiWhite cursor-pointer accent-purple2 "
              />
              <label htmlFor="remember" className="md:text-base text-sm">
                مرا به خاطر بسپار
              </label>
            </div> */}
            <input
              type="submit"
              value="ثبت  اطلاعات"
              className="md:w-72 py-[12px] mx-auto block rounded-md text-xs md:text-sm text-[#f4f1ff] bg-gradient-to-tr  from-[#7a0cff] to-[#4739ff] cursor-pointer hover:bg-gradient-to-tr hover:from-[#4739ff] hover:to-[#7a0cff]"
            />
            {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PersonalInfo;
