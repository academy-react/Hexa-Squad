import React, { Fragment, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import TitleSection from "../../components/UserPanel/TitleSection";
import { validation } from "../../core/validations/validations";

import pic from '../../assets/image/drBahr.jpg';
import PersianCalendar from "../../components/common/PersianCalendar";

const EditProfile = () => {
    const [image, setImage] = useState()

  return (
    <Fragment>
        <TitleSection title={"حساب کاربری"} />
        <div className="flex items-center justify-center w-40 h-40 mx-auto mt-6">
            <label for="input-file" className="relative rounded-full w-full h-full shadow-shadow-Course-image-box cursor-pointer ">
                <div className="absolute bottom-0 w-full h-1/2 flex justify-center pt-6 bg-darkblue bg-opacity-40 rounded-b-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                </div>
                <img src={image ? URL.createObjectURL(image) : pic} alt="image"  className="w-full h-full rounded-full" />

                <input id="input-file" type='file' onChange={(e) => setImage(e.target.files[0])}  className="hidden" />
            </label>
        </div>
        <span className="text-[#3F3F47aa] dark:text-semiWhite2 flex justify-center mt-2">ویرایش تصویر</span>

        <div className="mt-8">
            <Formik
            initialValues={{ firstName: "محمد", lastName: "بحرالعلوم", idCode: "2090425610", email: "bahr.academy@gmail.com", birthDate: "", phoneNumber: "09112233445" }}
            validationSchema={validation}
            onSubmit={() => alert("ثبت اطلاعات")}
            >
                <Form className="flex flex-wrap gap-5 justify-center text-[#3F3F47aa] dark:text-semiWhite2" dir="rtl">
                    <div className="editProf-input">
                        <label className="block  my-1">نام</label>
                        <Field name={"firstName"} className="editProf-field-input" />
                        <ErrorMessage name="firstName" className="editProf-errorMessage" component={'span'}/>
                    </div>
                    <div className="editProf-input">
                        <label className="block my-1">نام خانوادگی</label>
                        <Field name={"lastName"} className="editProf-field-input" />
                        <ErrorMessage name="lastName" className="editProf-errorMessage" component={'span'}/>
                    </div>
                    <div className="editProf-input">
                        <label className="block my-1">کد ملی</label>
                        <Field name={"idCode"} className="editProf-field-input"  />
                        <ErrorMessage name="idCode" className="editProf-errorMessage" component={'span'}/>
                    </div>
                    <div className="editProf-input">
                        <label className="block my-1">ایمیل</label>
                        <Field type={"email"} name={"email"} placeholder={"example@gmail.com"} className="editProf-field-input" />
                        <ErrorMessage name="email" className="editProf-errorMessage" component={'span'}/>
                    </div>
                    <div className="editProf-input">
                        <label className="block my-1">تاریخ تولد</label>
                        <PersianCalendar name={"birthDate"}/>
                        <ErrorMessage name="birthDate" className="editProf-errorMessage" component={'span'}/>
                    </div>
                    <div className="editProf-input">
                        <label className="block my-1">شماره موبایل</label>
                        <Field name={"phoneNumber"} className="editProf-field-input"  />
                        <ErrorMessage name="phoneNumber" className="editProf-errorMessage" component={'span'}/>
                    </div>
                    <input
                    type="submit"
                    value="ثبت اطلاعات"
                    className="primary-btn block w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
                    />
                </Form>
            </Formik>
        </div>
    </Fragment>
  );
};

export default EditProfile;