import React, { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { validation } from "../../../core/validations/validations";
import PersianCalendar from "../../../components/common/PersianCalendar";

const EditProfileInfo = ({email, phoneNumber, lastName, firstName, idCode, birthDate,profileImg}) => {
  return (
    <Fragment>
        <Formik
            initialValues={{ 
                firstName: firstName, 
                lastName: lastName, 
                idCode: idCode, 
                email: email, 
                birthDate: birthDate, 
                phoneNumber: phoneNumber 
            }}
            enableReinitialize={true}
            validationSchema={validation}
            onSubmit={() => alert("ثبت اطلاعات")}
        >
            <Form className="flex flex-wrap gap-5 justify-center text-[#3F3F47aa] dark:text-semiWhite2" dir="rtl">
                <div className="editProf-input">
                    <label className="block  my-2">نام</label>
                    <Field name={"firstName"} className="editProf-field-input " />
                    <ErrorMessage name="firstName" className="editProf-errorMessage" component={'span'}/>
                </div>
                <div className="editProf-input">
                    <label className="block my-2">نام خانوادگی</label>
                    <Field name={"lastName"} className="editProf-field-input" />
                    <ErrorMessage name="lastName" className="editProf-errorMessage" component={'span'}/>
                </div>
                <div className="editProf-input">
                    <label className="block my-2">کد ملی</label>
                    <Field name={"idCode"} className="editProf-field-input"  />
                    <ErrorMessage name="idCode" className="editProf-errorMessage" component={'span'}/>
                </div>
                <div className="editProf-input">
                    <label className="block my-2">ایمیل</label>
                    <Field type={"email"} name={"email"} placeholder={"example@gmail.com"} className="editProf-field-input" />
                    <ErrorMessage name="email" className="editProf-errorMessage" component={'span'}/>
                </div>
                <div className="editProf-input">
                    <label className="block my-2">تاریخ تولد</label>
                    <PersianCalendar name={"birthDate"}/>
                    <ErrorMessage name="birthDate" className="editProf-errorMessage" component={'span'}/>
                </div>
                <div className="editProf-input">
                    <label className="block my-2">شماره موبایل</label>
                    <Field name={"phoneNumber"} className="editProf-field-input"  />
                    <ErrorMessage name="phoneNumber" className="editProf-errorMessage" component={'span'}/>
                </div>

            </Form>
        </Formik>
    </Fragment>
  );
};

export default EditProfileInfo;