import React from "react";
import { Formik, Form } from "formik";
import { validation } from "../../../core/validations/validations";
import FieldInput from "../../common/FieldInput";
import VerifyCodeObj from "../../../core/services/toastPromiseObj/VerifyCode";
import axios from "axios";
import { toast } from "react-toastify";
const VerificationCode = ({ phoneNumberValue, handleClick }) => {
  const onSubmit = async (value) => {
    console.log(value);
    try {
      await toast.promise(
        axios.post(
          "https://api-academy.iran.liara.run/api/Sign/VerifyMessage",
          { phoneNumber: value.phoneNumber, verifyCode: value.verifyCode }
        ),
        VerifyCodeObj
      );
      try {
        setTimeout(() => {
          toast.dismiss();
          handleClick("next");
        }, 3500);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#e4dbff]">
      <h2 className="text-[#6652eb] dark:text-indigo-100 md:text-3xl text-2xl top-16 md:top-10 md:left-[340px] right-[140px] absolute">
        {" "}
        دریافت کد
      </h2>
      <div
        className=" text-newPurpleAlpha mx-auto w-[400px] absolute mt-16 md:left-44 left-0 "
        dir="rtl"
      >
        <Formik
          initialValues={{
            phoneNumber: phoneNumberValue,
            verifyCode: "",
          }}
          onSubmit={(value) => {onSubmit(value)}}
        >
          <Form autoComplete="off" className="text-[#a967ff]">
            <h2 className="md:text-sm text-xs mr-[44px] md:mr-0">
              {" "}
              کد ارسال شده برای شما را وارد کنید
            </h2>
            <FieldInput
              placeholder={"  کد را وارد کنید"}
              name="verifyCode"
              type={"verificationCode"}
            />

            <input
              type="submit"
              value="تایید کد یک بار مصرف"
              className=" w-72 absolute md:top-[120px] top-[100px] right-[60px] py-[12px]  rounded-md text-xs md:text-sm text-[#f4f1ff] bg-gradient-to-tr  from-[#7a0cff] to-[#4739ff] cursor-pointer hover:bg-gradient-to-tr hover:from-[#4739ff] hover:to-[#7a0cff]"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default VerificationCode;
