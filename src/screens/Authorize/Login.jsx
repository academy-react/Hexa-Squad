import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { validation } from "../../core/validations/validations";
import FieldInput from "../../components/common/FieldInput";
import loginImage from "../../assets/image/Login11.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [visible, setVisibility] = useState(false);
  const toggle = () => {
    setVisibility(!visible);
  };
  return (
    <div className="bg-lightPink  min-h-screen flex items-center justify-center px-16">
      <div className=" relative w-full max-w-lg mx-auto mb-20 ">
        <div className=" absolute top-0 -left-10 w-72 h-72 bg-[#b07eff] rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob hidden lg:block"></div>
        <div className=" absolute top-0 -right-10 w-72 h-72 bg-lightPink2 rounded-full  mix-blend-multiply  filter blur-xl opacity-80 animate-blob animation-delay-2000  hidden lg:block"></div>
        <div className=" absolute  -bottom-20 left-20 w-72 h-72 bg-[#7D67FF] rounded-full  mix-blend-multiply  filter blur-xl opacity-80 animate-blob animation-delay-4000  hidden lg:block"></div>

        <div className="bg-[#e4dbff] mx-auto right-14 bg-opacity-60 rounded-lg relative h-96 w-[300px] md:min-w-[100vh] md:h-[520px]  md:right-[160px] lg:min-w-[90vh] lg:h-[70vh]  lg:top-10 lg:right-40 xl:min-w-[173vh] xl:min-h-[70vh] xl:right-96 xl:top-10">
          <div className="w-[460px] h-full top-4 absolute right-2 hidden xl:block">
            <img
              src={loginImage}
              className="object-cover rounded-e-xl hidden lg:block"
              alt=""
            />
          </div>
          <div className="bg-[#ECE9FF] rounded-md rounded-e-xl -top-10 md:top-0 w-[400px] h-[540px] md:block md:w-[800px] lg:h-full absolute">
            <Link to="/">
              {" "}
              <h1 class="bi bi-house-door md:text-2xl  text-xl text-[#6652eb] absolute left-4 top-4"></h1>
            </Link>

            <div className="bg-[#e4dbff]">
              <h2 className="text-[#6652eb] md:text-3xl text-2xl top-12 md:top-10 md:left-[320px] left-[140px]  absolute">
                {" "}
                ورود به سایت
              </h2>
              <div
                className=" text-newPurpleAlpha mx-auto w-[400px] absolute mt-32 left-0 md:left-44"
                dir="rtl"
              >
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={validation}
                  onSubmit={() => alert("ثبت نام")}
                >
                  <Form autoComplete="off" className="text-[#a967ff]">
                    <h2 className="md:text-sm text-xs mr-[44px] md:mr-0">
                      {" "}
                      نام کاربری و رمزعبور خود را وارد کنید
                    </h2>
                    <FieldInput
                      placeholder={"  نام کاربری   "}
                      name="email"
                      type={"email"}
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
                    {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link> */}
                  </Form>
                </Formik>
                <Link to="/authorize/Verification">
                  <span className="absolute top-[180px]  md:left-0 left-16 text-sm text-[#7F52FD]">
                    فراموشی رمز ؟
                  </span>
                </Link>

                <Link to="/">
                  <input
                    type="submit"
                    value=" ورود به سایت"
                    className="w-[270px] absolute top-64 right-[60px] py-[10px]  rounded-md text-sm text-[#f4f1ff] bg-gradient-to-tr  from-[#7a0cff] to-[#4739ff] cursor-pointer hover:bg-gradient-to-tr hover:from-[#4739ff] hover:to-[#7a0cff]"
                  />
                </Link>

                <span className="absolute top-[320px]   right-[100px]  text-sm text-[#7F52FD]">
                  حساب کاربری ندارید ؟
                  <Link to="/authorize/register" className=" text-lightblue">
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
  );
};

export default Login;
