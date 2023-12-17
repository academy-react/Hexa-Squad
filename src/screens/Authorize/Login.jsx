import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import http from "../../core/services/interceptor";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { onThemeChange } from "../../redux/darkMode";
import Copyrights from "../../components/common/Copyrights";
import FieldInput from "../../components/common/FieldInput";
import loginImage from "../../assets/image/Login11.svg";
import loginDark from "../../assets/image/loginDark.svg";
import { setItem } from "../../core/services/local-storage/storage.services";
import LoadingSpinner from "../../components/common/loadingSpinner";
import { toast } from "react-toastify";

const Login = () => {
  const htmlTag = document.querySelector("html");
  const [visible, setVisibility] = useState(false);
  const theme = useSelector((state) => state.darkModeSlice.theme);
  const dispatch = useDispatch();
  const toggle = () => {
    setVisibility(!visible);
  };
  const setLightMode = (theme) => {
    dispatch(onThemeChange(theme));
  };
  const changeTheme = () => {
    setLightMode(!theme);
    theme ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  const onSubmitLogin = async (value) => {
    try {
      const result = await toast.promise(
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
        window.location.pathname = "/";
      } else {
        toast.error(result.errors == null ? result.message : result.errors[0]);
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  return (
    <>
      <LoadingSpinner />
      <div className="bg-lightPink  dark:bg-indigo-950 overflow-hidden min-h-screen flex items-center justify-center px-16">
        <div className=" relative  w-full max-w-lg mx-auto mb-20 ">
          <div className=" absolute top-0 -left-10 w-72 h-72 bg-[#b07eff]  rounded-full mix-blend-multiply dark:mix-blend-lighten  filter blur-xl  dark:bg-lightblue dark:opacity-40 opacity-80 animate-blob hidden lg:block"></div>
          <div className=" absolute top-0 -right-10 w-72 h-72 bg-lightPink2    rounded-full  mix-blend-multiply dark:mix-blend-lighten filter blur-xl dark:bg-violet-800 opacity-80 animate-blob animation-delay-2000  hidden lg:block"></div>
          <div className=" absolute  -bottom-20 left-20 w-72 h-72 bg-[#7D67FF]   rounded-full  mix-blend-multiply dark:mix-blend-lighten filter blur-xl dark:bg-darkblue4 opacity-80 animate-blob animation-delay-4000  hidden lg:block"></div>

          <div
            data-aos="zoom-in"
            className=" relative   mx-auto right-14   h-96 w-[300px] md:w-full md:h-[520px]  md:right-[160px]    lg:top-10 lg:right-40   xl:right-96 xl:top-10 "
          >
            <div className="w-[490px] dark:bg-indigo-800 dark:bg-opacity-30 bg-opacity-60 rounded-lg ml-[780px] bg-[#e4dbff] h-full   hidden xl:block">
              <img
                src={loginImage}
                className="object-cover w-[400px] mx-auto py-10 rounded-e-xl hidden lg:block dark:hidden"
                alt=""
              />
              <img
                src={loginDark}
                className="object-cover w-[400px] mx-auto py-10 rounded-e-xl hidden lg:hidden dark:block "
                alt=""
              />
            </div>
            <div className="bg-[#ECE9FF] dark:bg-darkblue2 rounded-md rounded-e-xl -top-10 md:top-0 w-[400px] h-[540px] md:block md:w-[800px] lg:h-full absolute">
              <Link to="/">
                {" "}
                <h1
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content=" بازگشت به خانه"
                  className="bi bi-house-door md:text-2xl   text-xl dark:text-indigo-200 text-[#6652eb] absolute left-4 top-4"
                ></h1>
              </Link>
              <Link to="http://localhost:3000/">
                {" "}
                <h1
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="ورود ادمین"
                  className="bi bi-person-check md:text-2xl  text-xl dark:text-indigo-200 text-[#6652eb] absolute left-24 top-4"
                ></h1>
                <Tooltip id="my-tooltip" />
              </Link>

              <h2
                className={
                  theme === true
                    ? "dark" +
                      " bi bi-brightness-high cursor-pointer text-[#6652eb] absolute left-14 top-4 text-xl "
                    : "light" +
                      "bi bi-moon text-[#ffffff] cursor-pointer absolute left-14 top-4 text-xl"
                }
                onClick={changeTheme}
              ></h2>

              <div className="bg-[#e4dbff]">
                <h2 className="text-[#6652eb] dark:text-indigo-100 md:text-3xl text-2xl top-12 md:top-10 md:left-[320px] left-[140px]  absolute">
                  {" "}
                  ورود به سایت
                </h2>
                <div
                  className=" text-newPurpleAlpha  mx-auto w-[400px] absolute mt-32 left-0 md:left-44"
                  dir="rtl"
                >
                  <Formik
                    initialValues={{
                      phoneOrGmail: "",
                      password: "",
                      rememberMe: false,
                    }}
                    enableReinitialize={true}
                    onSubmit={(value) => {
                      onSubmitLogin(value);
                    }}
                  >
                    <Form autoComplete="off" className="text-[#a967ff]">
                      <h2 className="md:text-sm text-xs mr-[44px] md:mr-0">
                        {" "}
                        نام کاربری و رمزعبور خود را وارد کنید
                      </h2>
                      <FieldInput
                        placeholder={"  شماره موبایل یا ایمیل   "}
                        name="phoneOrGmail"
                      />
                      <div className="w-full relative md:-mt-2 -mt-3">
                        <FieldInput
                          placeholder={" رمزعبور"}
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
                      <div className=" flex gap-2 justify-start w-full p-4 absolute -bottom-10 md:left-4 mr-8 md:mr-0">
                        <Field
                          type="checkbox"
                          name="rememberMe"
                          id="remember"
                          className="w-4 h-4 border-2  rounded-sm mt-1 bg-semiWhite cursor-pointer "
                        />
                        <label
                          htmlFor="remember"
                          className="md:text-base text-sm"
                        >
                          مرا به خاطر بسپار
                        </label>
                      </div>
                      <input
                        type="submit"
                        value=" ورود به سایت"
                        className="w-[270px] absolute top-64 right-[60px] py-[10px]  rounded-md text-sm text-[#f4f1ff] bg-gradient-to-tr  from-[#7a0cff] to-[#4739ff] cursor-pointer hover:bg-gradient-to-tr hover:from-[#4739ff] hover:to-[#7a0cff]"
                      />
                      {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link> */}
                    </Form>
                  </Formik>
                  <Link to="/authorize/Verification">
                    <span className="absolute top-[180px] z-20 dark:text-indigo-300  md:left-0 left-16 text-sm text-[#7F52FD]">
                      فراموشی رمز ؟
                    </span>
                  </Link>

                  <span className="absolute top-[320px]   right-[100px]  text-sm text-[#7F52FD] dark:text-indigo-400 ">
                    حساب کاربری ندارید ؟
                    <Link
                      to="/authorize/register"
                      className=" text-lightblue dark:text-indigo-200  "
                    >
                      {" "}
                      ثبت نام
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Copyrights />
    </>
  );
};

export default Login;
