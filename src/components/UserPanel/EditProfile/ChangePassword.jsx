import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { validation } from "../../../core/validations/validations";

const ChangePassword = () => {
  return (
    <div>
      <div className="flex justify-center items-center pt-20">
        <Formik
          initialValues={{ lastPassword: "", password: "", rePassword: "" }}
          validationSchema={validation}
          onSubmit={() => alert("ثبت نام")}
        >
          <Form className="w-[370px] text-[#3F3F47aa] dark:text-semiWhite2" dir="rtl">
            <div className="block relative my-5 ">
              <label className="block  my-2">رمز عبور فعلی</label>
              <Field type={"password"} name={"lastPassword"} className="editProf-field-input mb-5" />
              <ErrorMessage name="lastPassword" className="absolute -bottom-2 right-2  text-[#A80065]" component={'span'}/>
            </div>
            <div className="block relative my-5">
              <label className="block  my-2">رمز عبور جدید</label>
              <Field type={"password"} name={"password"} className="editProf-field-input mb-5" />
              <ErrorMessage name="password" className="absolute -bottom-2 right-2 text-[#A80065]" component={'span'}/>
            </div>
            <div className="block relative my-5">
              <label className="block  my-2">تکرار رمزعبور جدید</label>
              <Field type={"password"} name={"rePassword"} className="editProf-field-input mb-5"  />
              <ErrorMessage name="rePassword" className="absolute -bottom-2 right-2 text-[#A80065]" component={'span'}/>
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
