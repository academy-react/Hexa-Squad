import React, { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { validation } from "../../../../core/validations/validations";
import PersianCalendar from "../../../common/PersianCalendar";

const EditProfileInfo = (
    {
        email, 
        phoneNumber, 
        lName, 
        fName, 
        nationalCode, 
        birthDay,
        userAbout,
        homeAdderess,
        gender,
        linkdinProfile,
        telegramLink,
        disable,
        handleEditProfileInfo
    }) => {

  return (
    <Fragment>
        <Formik
            initialValues={{ 
                firstName: fName, 
                lastName: lName, 
                idCode: nationalCode, 
                email: email, 
                birthDate: birthDay, 
                phoneNumber: phoneNumber, 
                userAbout: userAbout,
                homeAdderess: homeAdderess,
                gender: gender,
                linkdinProfile: linkdinProfile,
                telegramLink: telegramLink,
            }}
            enableReinitialize={true}
            // validationSchema={validation}
            onSubmit={(value) => {handleEditProfileInfo(value)}}
        >
            <Form className="flex flex-wrap gap-5 justify-center text-[#3F3F47aa] dark:text-semiWhite2" dir="rtl">
                <div className="editProf-input">
                    <label className="block  my-2">نام</label>
                    <Field name={"firstName"} className="editProf-field-input " disabled={disable} />
                    <ErrorMessage name="firstName" className="editProf-errorMessage" component={'span'}/>
                </div>
                <div className="editProf-input">
                    <label className="block my-2">نام خانوادگی</label>
                    <Field name={"lastName"} className="editProf-field-input" disabled={disable} />
                    <ErrorMessage name="lastName" className="editProf-errorMessage" component={'span'}/>
                </div>
                <div className="editProf-input">
                    <label className="block my-2">جنسیت</label>
                    <div className="w-full py-2 flex gap-2">
                        <Field name={"gender"} type="radio" value={gender} className="mr-4" disabled={disable} />
                        <label>زن</label>
                        <Field name={"gender"} type="radio"  value={gender} className="mr-8"  disabled={disable}/>
                        <label>مرد</label>  
                    </div>              
                </div>
                <div className="editProf-input">
                    <label className="block my-2">کد ملی</label>
                    <Field name={"idCode"} className="editProf-field-input" disabled={disable} />
                    <ErrorMessage name="idCode" className="editProf-errorMessage" component={'span'}/>
                </div>
                {/* <div className="editProf-input">
                    <label className="block my-2">شماره موبایل</label>
                    <Field name={"phoneNumber"} className="editProf-field-input" disabled={disable} />
                    <ErrorMessage name="phoneNumber" className="editProf-errorMessage" component={'span'}/>
                </div> */}
                <div className="editProf-input">
                    <label className="block my-2">تاریخ تولد</label>
                    <PersianCalendar name={"birthDate"} birthDate={birthDay}/>
                    <ErrorMessage name="birthDate" className="editProf-errorMessage" component={'span'}/>
                </div>
                {/* <div className="editProf-input">
                    <label className="block my-2">ایمیل</label>
                    <Field type={"email"} name={"email"} placeholder={"example@gmail.com"} className="editProf-field-input" disabled={disable} />
                    <ErrorMessage name="email" className="editProf-errorMessage" component={'span'}/>
                </div> */}
                <div className="editProf-input">
                    <label className="block my-2">لینکدین</label>
                    <Field name={"linkdinProfile"} className="editProf-field-input" disabled={disable} />
                    {/* <ErrorMessage name="" className="editProf-errorMessage" component={'span'}/> */}
                </div>
                <div className="editProf-input">
                    <label className="block my-2">تلگرام</label>
                    <Field name={"telegramLink"} className="editProf-field-input" disabled={disable} />
                    {/* <ErrorMessage name="" className="editProf-errorMessage" component={'span'}/> */}
                </div>                
                <div className="editProf-input lg:w-7/12">
                    <label className="block my-2">آدرس منزل</label>
                    <Field name={"homeAdderess"} className="editProf-field-input" disabled={disable} />
                    {/* <ErrorMessage name="" className="editProf-errorMessage" component={'span'}/> */}
                </div>  
                <div className="mt-5 mb-10 w-11/12">
                    <label className="block my-2 mx-4">درباره من</label>
                    <textarea defaultValue={userAbout} className="editProf-field-input inset-x-4 h-40 p-4" disabled={disable}></textarea>
                    {/* <ErrorMessage name="" className="editProf-errorMessage" component={'span'}/> */}
                </div>
                <input
                    type="submit"
                    value="ثبت اطلاعات"
                    className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
                    // onClick={handleEditProfileInfo}
                />
            </Form>
        </Formik>
    </Fragment>
  );
};

export default EditProfileInfo;