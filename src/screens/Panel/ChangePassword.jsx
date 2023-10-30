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
          <Form className="w-[370px] text-[#3F3F47aa]" dir="rtl">
            <div className="block relative my-5 ">
              <label className="block  my-1">رمز عبور فعلی</label>
              <Field type={"password"} name={"lastPassword"} className="bg-transparentPurple rounded-md border-[1px] w-full h-10" />
              <ErrorMessage name="lastPassword" className="text-lightblue" component={'span'}/>
            </div>
            <div className="block relative my-5">
              <label className="block  my-1">رمز عبور جدید</label>
              <Field type={"password"} name={"password"} className="bg-transparentPurple rounded-md border-[1px] w-full h-10" />
              <ErrorMessage name="password" className="text-lightblue" component={'span'}/>
            </div>
            <div className="block relative my-5">
              <label className="block  my-1">تکرار رمزعبور جدید</label>
              <Field type={"password"} name={"rePassword"} className="bg-transparentPurple rounded-md border-[1px] w-full h-10"  />
              <ErrorMessage name="rePassword" className="text-lightblue" component={'span'}/>
            </div>
            <input
              type="submit"
              value="ثبت اطلاعات"
              className="w-1/2 p-4 block mx-auto bg-lightblue rounded-lg text-[#fff] opacity-80 hover:opacity-100 cursor-pointer"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
