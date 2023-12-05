import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { validation } from "../../../core/validations/validations";
import FieldInput from "../../common/FieldInput";
import { useNavigate } from "react-router-dom";
import http from "../../../core/services/interceptor";
import { toast } from "react-toastify";
const FirstStepPassword = ({ handleClick }) => {
  const navigator = useNavigate();
  const fetchForgetPassword = async (value) => {
    const obj = {
      email: value.email,
      baseUrl: "http://localhost:5173/authorize/Verification/1",
    };
    try {
      const fetch = await toast.promise(
        http.post("/Sign/ForgetPassword", obj),
        { pending: "ایمیل در حال ارسال است" }
      );
      if (fetch.success) {
        handleClick("next");
        toast.success('ایمیل با موفقیت ارسال شد');
      } else {
        toast.success('ارسال ایمیل با مشکل مواجه شد');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // navigator("/authorize/Verification/0");
  }, []);

  return (
    <div className="bg-[#e4dbff]">
      <h2 className="text-[#6652eb] md:text-3xl dark:text-indigo-100 text-2xl top-16 md:top-10 md:left-[315px] left-[150px]  absolute">
        {" "}
        تغییر رمزعبور
      </h2>
      <div
        className=" text-newPurpleAlpha  w-[400px] absolute mt-16 md:left-44 left-0"
        dir="rtl"
      >
        <Formik
          initialValues={{
            email: "",
          }}
          // validationSchema={validation}
          onSubmit={(v) =>{ fetchForgetPassword(v)}}
        >
          <Form autoComplete="off" className="text-[#a967ff]">
            <h2 className="md:text-sm text-xs mr-[44px] md:mr-0">
              {" "}
              جهت دریافت کد یک بار مصرف ایمیل خود را وارد کنید
            </h2>
            <FieldInput
              placeholder={" ایمیل خود را وارد کنید"}
              name="email"
              type={"phoneNumber"}
            />

            <input
              type="submit"
              value="دریافت کد یک بار مصرف"
              className="w-[260px] absolute md:top-[120px] top-[100px] right-[60px] py-[12px]  rounded-md text-xs md:text-sm text-[#f4f1ff] bg-gradient-to-tr  from-[#7a0cff] to-[#4739ff] cursor-pointer hover:bg-gradient-to-tr hover:from-[#4739ff] hover:to-[#7a0cff]"
            />
            {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FirstStepPassword;
