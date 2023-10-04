import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

import pic2 from "../../assets/image/picture2.svg";
import FieldInput from "../../components/common/FieldInput";
const Login = () => {
  const validation = yup.object().shape({
    email: yup.string().required("این فیلد الزامیست!"),
    password: yup.string().required("این فیلد الزامیست!"),
  });
  return (
    <div className="bg-lightPink min-h-[100vh]">
      <div className="md:flex container block">
        <div className="auth-image-side">
          <img src={pic2} className="lg:w-2/3 w-[250px]" alt="" />
        </div>
        <div className="w-full lg:w-5/12 flex justify-center">
          <div className="form-section-auth" dir="rtl">
            <h2 className="auth-title">ورود به سایت</h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validation}
              onSubmit={() => alert("ورود به سایت")}
            >
              <Form className="auth-form">
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
                  to={"/authorize/forget"}
                  className="mb-12 ml-[-200px] pointer"
                >
                  فراموشی رمز؟
                </Link>
                <input
                  type="submit"
                  value="ورود"
                  className="primary-button w-full p-4 hover:gradient"
                />
                <label className="mt-4">
                  {" "}
                  قبلا ثبت نام نکرده‌اید؟{" "}
                  <Link
                    to={"/authorize/register"}
                    className="pointer underline"
                  >
                    ثبت نام
                  </Link>
                </label>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
