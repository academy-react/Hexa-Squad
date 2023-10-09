import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import background from "../../../assets/image/bgDesign2.svg";
import background2 from "../../../assets/image/bgDesign.svg";
const Suggestions = () => {
  const validation = yup.object().shape({
    email: yup.string().required("این فیلد الزامیست!"),
    massage: yup.string().required("این فیلد الزامیست!"),
  });
  return (
    <>
      <div className=" w-[540px] md:w-[740px] relative mt-20 lg:m-auto  mx-auto lg:mt-48">
        <h1 className="title relative title1 lg:mt-52 mt-20 md:mt-36 mx-auto">
          انتقادات و پیشنهادات
          <span className="absolute w-[100%]  block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
        </h1>
      </div>
      <div className="flex 	justify-center mb-56 content-center items-stretch lg:mt-10">
        <div
          className=" bg-center bg-cover w-[400px] h-[460px] absolute right-0 mt-20 hidden lg:block"
          style={{ backgroundImage: `url(${background})` }}
        ></div>

        <div className="suggestions-box ">
          <div dir="rtl">
            <Formik
              initialValues={{ email: "", massage: "" }}
              validationSchema={validation}
              onSubmit={() => alert(" پیام شما ثبت شد")}
            >
              <Form className="text-lightblue text-right  px-10 flex-col items-center flex">
                <Field
                  className="field-input2 relative w-full my-2 p-3"
                  placeholder={"ایمیل را وارد کنید"}
                  name="email"
                />

                <textarea
                  className="relative w-full h-[300px] field-input2"
                  placeholder="متن را وارد کنید"
                  name="obs"
                ></textarea>

                <input
                  type="submit"
                  value=" ارسال پیام"
                  className="primary-btn text-semiPink rounded-lg mt-2 w-full p-4"
                />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggestions;
