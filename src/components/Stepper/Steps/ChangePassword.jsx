import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validation } from "../../../core/validations/validations";
import FieldInput from "../../common/FieldInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigator = useNavigate();
  const [visible, setVisibility] = useState(false);
  const toggle = () => {
    setVisibility(!visible);
  };
  useEffect(() => {
    // navigator("/authorize/Verification/2");
  }, []);
  return (
    <div className="bg-[#e4dbff]">
      <h2 className="text-[#6652eb] md:text-3xl dark:text-indigo-100 text-2xl top-14 md:top-10 md:left-[320px] left-[140px]  absolute">
        {" "}
        رمز عبور جدید
      </h2>
      <div
        className=" text-newPurpleAlpha mx-auto w-[400px] absolute mt-16 left-0 md:left-44"
        dir="rtl"
      >
        <Formik
          initialValues={{
            password: "",
          }}
          validationSchema={validation}
          onSubmit={() => alert("ثبت نام")}
        >
          <Form autoComplete="off" className="text-[#a967ff] ">
            <h2 className="md:text-sm text-xs mr-[44px] md:mr-0">
              {" "}
              رمز عبور جدید خود را وارد کنید
            </h2>
            <div className="w-full relative  ">
              <FieldInput
                id="password1"
                name="Password"
                type={visible === false ? "password" : "text"}
                value="password1"
              />
              <div className="text-2xl absolute top-3 md:left-3 left-16 cursor-pointer">
                {visible === false ? (
                  <AiFillEyeInvisible onClick={toggle} />
                ) : (
                  <AiFillEye onClick={toggle} />
                )}
              </div>
            </div>

            <div className=" flex gap-2 justify-start w-full p-4 absolute -bottom-10 md:left-4 mr-8 md:mr-0">
              <input
                type="checkbox"
                name=""
                id="remember"
                className="w-4 h-4 border-2  rounded-sm mt-1 bg-semiWhite cursor-pointer "
              />
              <label htmlFor="remember" className="md:text-base text-sm">
                مرا به خاطر بسپار
              </label>
            </div>
            {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
