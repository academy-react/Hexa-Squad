import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const Suggestions = () => {
  const validation = yup.object().shape({
    email: yup.string().required("این فیلد الزامیست!"),
    massage: yup.string().required("این فیلد الزامیست!"),
  });
  return (
    <>
<<<<<<< HEAD
      <h1 className="title">
        انتقادات و پیشنهادات
        <span className="absolute w-[100%]  block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
      </h1>
      <div className="flex 	justify-center mb-56 content-center items-stretch ">
        <div
          className=" flex w-[460px] relative self-center bg-semiWhite dark:bg-newPurpleAlpha2 lg:w-[600px] min-h-[400px] max-h-[530px] py-8
      mt-28 lg:flex rounded-lg  lg:shadow-shadow-auth shadow-shadow-transparent  flex-col "
=======
      <h1 className=" relative title1 lg:mt-52 mt-20 mr-16 md:mt-36 lg:m-auto">
        انتقادات و پیشنهادات
        <span className="absolute w-[100%]  block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
      </h1>
     
      <div className="flex 	justify-center mb-56 content-center items-stretch lg:mt-10">
        <div
          className="suggestions-box "
>>>>>>> feature/news
        >
          <div dir="rtl">
            <Formik
              initialValues={{ email: "", massage: "" }}
              validationSchema={validation}
              onSubmit={() => alert(" پیام شما ثبت شد")}
            >
              <Form className="text-lightblue text-right  px-10 flex-col items-center flex">
                <Field
<<<<<<< HEAD
                  className="field-input2 relative w-full my-2 p-3 dark:bg-transparentPurple"
                  placeholder={"ایمیل را وارد کنید"}
                  name="email"
                />
               
                <textarea
                  className="relative w-full h-[300px] field-input2 dark:bg-transparentPurple"
                  placeholder="متن را وارد کنید"
                  name="obs"
                ></textarea>
                
                <input
                  type="submit"
                  value=" ارسال پیام"
                  className="primary-button w-full p-4"
=======
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
>>>>>>> feature/news
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
