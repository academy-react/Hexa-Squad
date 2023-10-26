import React from "react";
import { Formik, Form } from "formik";
import { validation } from "../../../core/validations/validations";
import FieldInput from "../../common/FieldInput";
const VerificationCode = () => {
  return (
    <div className="bg-[#e4dbff]">
      <h2 className="text-[#6652eb] md:text-3xl text-2xl top-16 md:top-10 md:left-[340px] right-[140px] absolute">
        {" "}
        دریافت کد
      </h2>
      <div
        className=" text-newPurpleAlpha mx-auto w-[400px] absolute mt-16 md:left-44 left-0 "
        dir="rtl"
      >
        <Formik
          initialValues={{
            phone: "",
            code: "",
            firstName: "",
            birthDate: "",
            email: "",
            verificationCode: "",
            password: "",
          }}
          validationSchema={validation}
          onSubmit={() => alert("ثبت نام")}
        >
          <Form autoComplete="off" className="text-[#a967ff]">
            <h2 className="md:text-sm text-xs mr-[44px] md:mr-0">
              {" "}
              کد ارسال شده برای شما را وارد کنید
            </h2>
            <FieldInput
              placeholder={"  کد را وارد کنید"}
              name="verificationCode"
              type={"verificationCode"}
            />

            {/* <input
              type="submit"
              value="دریافت کد یک بار مصرف"
              className="w-[260px] absolute top-[110px] right-[60px] py-[12px]  rounded-md text-sm text-[#f4f1ff] bg-gradient-to-tr  from-[#7a0cff] to-[#4739ff] cursor-pointer hover:bg-gradient-to-tr hover:from-[#4739ff] hover:to-[#7a0cff]"
            /> */}
            {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default VerificationCode;
