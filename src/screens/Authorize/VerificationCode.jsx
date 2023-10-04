import React from "react";

import { Formik, Form } from "formik";
import * as yup from "yup";
import pic4 from "../../assets/image/picture4.svg";
import FieldInput from "../../components/common/FieldInput";

const VerificationCode = () => {
  const validation = yup.object().shape({
    email: yup.string().required("این فیلد الزامیست!"),
  });

  return (
    <div className="bg-lightPink min-h-[100vh]">
      <div className="lg:flex block">
        <div className="auth-image-side">
          <img src={pic4} className="lg:w-2/3 w-[250px]" alt="" />
        </div>
            <div className="w-full lg:w-5/12 flex justify-center">
          <div className="form-section-auth" dir="rtl">
            <h2 className="auth-title"> کد را وارد کنید</h2>
            <p className="w-[300px] mx-auto pr-[10px] text-base text-right lg:mt-12 mt-10 mb-10 text-lightblue ">
              لطفا کد ارسال شده برای شما را وارد کنید{" "}
            </p>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validation}
              onSubmit={() => alert("بازنشانی رمزعبور")}
            >
              <Form className="auth-form">
                <FieldInput
                  placeholder={"رمز را وارد کنید"}
                  name="email"
                  icon={"bi bi-envelope-arrow-down-fill"}
                  classIcon={"mr-1"}
                />
                <input
                  type="submit"
                  value="بازنشانی رمزعبور"
                  className="primary-button w-full p-4 mt-10 hover:gradient"
                />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
