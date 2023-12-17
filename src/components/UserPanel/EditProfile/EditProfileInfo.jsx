import React, { Fragment, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { EditProfileValidation } from "../../../core/validations/EditProfileValidation";
import PersianCalendar from "../../common/PersianCalendar";
// import PersianCalendarNew from "../../../common/newDatePicker/PersianCalendarNew";
// import MakeDatePickerDatePersian from "../../../common/newDatePicker/MakeDatePickerDatePersian";
// import MakeDateEnglish from "../../../common/newDatePicker/MakeDateEnglish";

const EditProfileInfo = ({
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
  setBirthDay,
  handleEditProfileInfo,
}) => {
  // const [datePickerDateTime, setDatePickerDateTime] = useState(
  //     MakeDatePickerDatePersian(birthDay)
  // );

  // const handleSubmit = (value) => {
  //     const newValue = {
  //       ...value,
  //     //   LinkdinProfile: value.LinkdinProfile?.toString(),
  //       Gender: Boolean(value.Gender),
  //       BirthDay: MakeDateEnglish(datePickerDateTime),
  //     };

  //     handleEditProfileInfo(newValue)
  //   };

  return (
    <Fragment>
      <Formik
        initialValues={{
          fName: fName,
          lName: lName,
          nationalCode: nationalCode,
          email: email,
          birthDay: birthDay,
          phoneNumber: phoneNumber,
          userAbout: userAbout,
          homeAdderess: homeAdderess,
          gender: gender,
          linkdinProfile: linkdinProfile,
          telegramLink: telegramLink,
        }}
        enableReinitialize={true}
        // validationSchema={EditProfileValidation}
        onSubmit={(value) => {
          handleEditProfileInfo(value);
        }}
      >
        <Form
          className="flex flex-wrap gap-5 pb-8 justify-center text-[#3F3F47aa] dark:text-semiWhite2"
          dir="rtl"
        >
          <div className="editProf-input">
            <label className="block  my-2">نام</label>
            <Field name={"fName"} className="editProf-field-input " />
            <ErrorMessage
              name="fName"
              className="editProf-errorMessage"
              component={"span"}
            />
          </div>
          <div className="editProf-input">
            <label className="block my-2">نام خانوادگی</label>
            <Field name={"lName"} className="editProf-field-input" />
            <ErrorMessage
              name="lName"
              className="editProf-errorMessage"
              component={"span"}
            />
          </div>
          <div className="editProf-input">
            <label className="block my-2">جنسیت</label>
            <div className="w-full py-2 flex gap-2">
              <Field
                name={"gender"}
                type="radio"
                value={gender}
                className="mr-4"
              />
              <ErrorMessage
                name="gender"
                className="editProf-errorMessage"
                component={"span"}
              />
              <label>زن</label>
              <Field
                name={"gender"}
                type="radio"
                value={gender}
                className="mr-8"
              />
              <ErrorMessage
                name="gender"
                className="editProf-errorMessage"
                component={"span"}
              />
              <label>مرد</label>
            </div>
          </div>
          <div className="editProf-input">
            <label className="block my-2">کد ملی</label>
            <Field name={"nationalCode"} className="editProf-field-input" />
            <ErrorMessage
              name="nationalCode"
              className="editProf-errorMessage"
              component={"span"}
            />
          </div>
          {/* <div className="editProf-input">
                    <label className="block my-2">شماره موبایل</label>
                    <Field name={"phoneNumber"} className="editProf-field-input" />
                    <ErrorMessage name="phoneNumber" className="editProf-errorMessage" component={'span'}/>
                </div> */}
          <div className="editProf-input">
            <label className="block my-2">تاریخ تولد</label>
            <PersianCalendar
              name={"birthDay"}
              date={birthDay}
              setDate={setBirthDay}
            />
            {/* <PersianCalendarNew
                        datePickerDateTime={datePickerDateTime}
                        setDatePickerDateTime={setDatePickerDateTime}
                    /> */}
            <ErrorMessage
              name="birthDay"
              className="editProf-errorMessage"
              component={"span"}
            />
          </div>
          {/* <div className="editProf-input">
                    <label className="block my-2">ایمیل</label>
                    <Field type={"email"} name={"email"} placeholder={"example@gmail.com"} className="editProf-field-input" />
                    <ErrorMessage name="email" className="editProf-errorMessage" component={'span'}/>
                </div> */}
          <div className="editProf-input">
            <label className="block my-2">لینکدین</label>
            <Field name={"linkdinProfile"} className="editProf-field-input" />
            <ErrorMessage
              name="linkdinProfile"
              className="editProf-errorMessage"
              component={"span"}
            />
          </div>
          <div className="editProf-input">
            <label className="block my-2">تلگرام</label>
            <Field name={"telegramLink"} className="editProf-field-input" />
            <ErrorMessage
              name="telegramLink"
              className="editProf-errorMessage"
              component={"span"}
            />
          </div>
          <div className="editProf-input lg:w-7/12">
            <label className="block my-2">آدرس منزل</label>
            <Field name={"homeAdderess"} className="editProf-field-input" />
            <ErrorMessage
              name="homeAdderess"
              className="editProf-errorMessage"
              component={"span"}
            />
          </div>
          <div className="mt-5 mb-10 w-11/12">
            <label className="block my-2 mx-4">درباره من</label>
            <textarea
              name="userAbout"
              defaultValue={userAbout}
              className="editProf-field-input inset-x-4 h-40 p-4"
            ></textarea>
            {/* <ErrorMessage name="userAbout" className="editProf-errorMessage" component={'span'}/> */}
          </div>
          <input
            type="submit"
            value="ثبت اطلاعات"
            className="primary-btn block mx-auto my-8 w-2/5 md:1/6 lg:w-3/12 p-4 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
          />
        </Form>
      </Formik>
    </Fragment>
  );
};

export default EditProfileInfo;
