import { Form, Formik } from "formik";
import React from "react";
import FieldInput from "../common/FieldInput";
import { Link } from "react-router-dom";
import { validation } from "../../core/validations/validations";

const Login = () => {
  return (
    <div
     
      className="form-section-auth loginModal  animate-zoom fixed w-[400px] pt-12 top-[16%] lg:left-[38%] md:left-[22%] sm:left-[10%] left-[5%] right-[50%] z-[500] shadow-shadow-all hidden bg-whitePink"
      dir="rtl"
    >
      <label htmlFor="showLoginModal" className="cursor-pointer">
        <i className="absolute bi bi-x top-5 right-5 text-newPurpleAlpha2 text-4xl"></i>
      </label>

      <h2 className="auth-title mt-0 text-lightblue ">ورود به سایت</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validation}
        onSubmit={() => alert("ورود به سایت")}
      >
        <Form className="auth-form  ">
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
            className="mb-12 ml-[-200px] pointer"
          >
            فراموشی رمز؟
          </Link>
          <input
            type="submit"
            value="ورود"
            className="primary-button w-full p-4"
          />
          <label className="mt-4">
            {" "}
            قبلا ثبت نام نکرده‌اید؟{" "}
            <Link to={"/authorize/register"} className="pointer underline">
              ثبت نام
            </Link>
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
