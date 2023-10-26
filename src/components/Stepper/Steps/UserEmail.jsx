import React from "react";
import { Formik, Form } from "formik";
import { validation } from "../../../core/validations/validations";
import FieldInput from "../../common/FieldInput";
const UserEmail = () => {
  return (
    <div className="bg-[#e4dbff]">
      <h2 className="text-[#6652eb] text-3xl  top-10 mx-64 absolute">
        {" "}
        مشخصات کاربری
      </h2>
      <div
        className=" text-newPurpleAlpha mx-auto w-[400px] absolute mt-10 left-44 "
        dir="rtl"
      >
        <Formik
          initialValues={{
            phone: "",
            code: "",
            firstName: "",
            birthDate: "",
            email: "",
            idCode: "",
            password: "",
          }}
          validationSchema={validation}
          onSubmit={() => alert("ثبت نام")}
        >
          <Form autoComplete="off" className="text-[#a967ff]">
            <h2 className="text-sm">
              {" "}
              ایمیل و کدملی خود را وارد کنید.
            </h2>
            <FieldInput
              placeholder={"Hexaesquad@gmail.com  "}
              name="email"
              type={"email"}
            />
            <FieldInput
              placeholder={"کد ملی "}
              name="idCode"
              type={"idCode"}
            />

            {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UserEmail;
