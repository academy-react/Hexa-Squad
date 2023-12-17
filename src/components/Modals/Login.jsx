import { Field, Form, Formik } from "formik";
import React from "react";
import FieldInput from "../common/FieldInput";
import { Link } from "react-router-dom";
import http from "../../core/services/interceptor";
import { setItem } from "../../core/services/local-storage/storage.services";
import { toast } from "react-toastify";

const Login = () => {
  const onSubmitLogin = async (value) => {
    console.log(value);
    try {
      const result = await await toast.promise(
        http.post("/Sign/Login", {
          phoneOrGmail: value.phoneOrGmail,
          password: value.password,
          rememberMe: value.rememberMe,
        }),
        {
          pending: "در حال وارد شدن ، لطفا منتظر بمانید",
          success: "با موفقیت وارد شدید",
        }
      );
      setItem("token", result.token);
      if (result.success) {
        window.location.reload();
      } else {
        toast.error(result.errors == null ? result.message : result.errors[0]);
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  return (
    <div className="form-section-auth loginModal " dir="rtl">
      <label htmlFor="showLoginModal" className="cursor-pointer">
        <i className="absolute bi bi-x top-5 right-5  text-violet-800 dark:text-semiWhite2 text-4xl"></i>
      </label>

      <h2 className="auth-title mt-0 text-violet-800 dark:text-semiWhite2 ">
        ورود به سایت
      </h2>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        // validationSchema={validation}
        onSubmit={onSubmitLogin}
      >
        <Form className="auth-form text-[#a967ff]">
          <FieldInput
            placeholder={"ایمیل یا شماره تلفن را وارد کنید"}
            name="phoneOrGmail"
            icon={"telephone-fill"}
            classIcon={"rotate-[260deg]"}
          />
          <FieldInput
            placeholder={"رمز عبور را وارد کنید"}
            name="password"
            icon={"lock-fill"}
            type="password"
          />
          <div className=" flex gap-2 justify-start w-full p-4 absolute bottom-48 md:-left-8 mr-8 md:mr-0">
            <Field
              type="checkbox"
              name="rememberMe"
              id="remember"
              className="w-4 h-4 border-2  rounded-sm mt-1 bg-semiWhite cursor-pointer "
            />
            <label htmlFor="remember" className="md:text-base text-sm">
              مرا به خاطر بسپار
            </label>
          </div>
          <Link
            to={"/authorize/Verification"}
            className="mb-11 ml-[-200px] pointer text-violet-700 dark:text-slate-300"
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
            <Link
              to={"/authorize/register"}
              className="pointer underline text-[#7F52FD] dark:text-slate-400"
            >
              ثبت نام
            </Link>
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
