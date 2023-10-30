import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import TitleSection from "../../components/UserPanel/TitleSection";
import { validation } from "../../core/validations/validations";
const ChangePassword = () => {
  return (
    <div>
      <TitleSection title={"تغییر رمزعبور"} />
      <div className="flex justify-center items-center pt-32">
        <Formik
          initialValues={{ lastPassword: "", password: "", rePassword: "" }}
          validationSchema={validation}
          onSubmit={() => alert("ثبت نام")}
        >
          <Form className="w-[370px] text-[#3F3F47aa] dark:text-semiWhite2" dir="rtl">
            <div className="block relative my-5 ">
              <label className="block  my-1">رمز عبور فعلی</label>
              <Field type={"password"} name={"lastPassword"} className="bg-transparentPurple rounded-md border-[1px] w-full h-10 mb-5 " />
              <ErrorMessage name="lastPassword" className="absolute -bottom-2 right-2  text-lightblue" component={'span'}/>
            </div>
            <div className="block relative my-5">
              <label className="block  my-1">رمز عبور جدید</label>
              <Field type={"password"} name={"password"} className="bg-transparentPurple rounded-md border-[1px] w-full h-10 mb-5" />
              <ErrorMessage name="password" className="absolute -bottom-2 right-2 text-lightblue" component={'span'}/>
            </div>
            <div className="block relative my-5">
              <label className="block  my-1">تکرار رمزعبور جدید</label>
              <Field type={"password"} name={"rePassword"} className="bg-transparentPurple rounded-md border-[1px] w-full h-10 mb-5"  />
              <ErrorMessage name="rePassword" className="absolute -bottom-2 right-2 text-lightblue" component={'span'}/>
            </div>
            <input
              type="submit"
              value="ثبت اطلاعات"
              className="primary-btn w-1/2 md:w-8/12 p-4 block mx-auto rounded-lg text-[#fff] cursor-pointer"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
