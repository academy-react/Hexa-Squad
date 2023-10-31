import { Form, Formik } from "formik";
import React from "react";
import FieldInput from "../common/FieldInput";
import { Link } from "react-router-dom";
import { validation } from "../../core/validations/validations";

const Login = () => {
  return (
    <div
     
      className="form-section-auth loginModal "
      dir="rtl"
    >
      <label htmlFor="showLoginModal" className="cursor-pointer">
        <i className="absolute bi bi-x top-5 right-5  text-violet-800 dark:text-semiWhite2 text-4xl"></i>
      </label>

      <h2 className="auth-title mt-0 text-violet-800 dark:text-semiWhite2 ">ورود به سایت</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validation}
        onSubmit={() => alert("ورود به سایت")}
      >
        <Form className="auth-form text-[#a967ff]">
          <FieldInput
            placeholder={"ایمیل را وارد کنید"}
            name="email"
            icon={"telephone-fill"}
            classIcon={"rotate-[260deg]"}
          />
          <FieldInput
            placeholder={"رمز عبور را وارد کنید"}
            name="password"
            icon={"lock-fill"}
            type="password"
          />
          <Link
            to={"/authorize/Verification"}
            className="mb-12 ml-[-200px] pointer text-violet-700 dark:text-slate-300"
          >
            فراموشی رمز؟
          </Link>
          <input
            type="submit"
            value="ورود"
            className="primary-button w-full p-4"
          />
          <label className="mt-4 mb-6 text-violet-700 dark:text-slate-300">
            {" "}
            قبلا ثبت نام نکرده‌اید؟{" "}
            <Link to={"/authorize/register"} className="pointer underline text-[#7F52FD] dark:text-slate-400">
              ثبت نام
            </Link>
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
