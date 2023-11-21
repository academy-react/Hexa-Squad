import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

import FieldInput from "../../common/FieldInput";
import phoneNumberToastObj from "../../../core/services/toastPromiseObj/phoneNumber";
import onSubmitFunction from "../../../core/services/api/PostData/Register";
const PhoneNumber = ({
  handleClick,
  setPhoneNumberValue,
  phoneNumberValue,
}) => {
  const onSubmit = (value) => {
    const obj ={ phoneNumber: value.phoneNumber };
    const api = "/Sign/SendVerifyMessage";
    onSubmitFunction(api,value,obj,phoneNumberToastObj,handleClick)
    setPhoneNumberValue(value.phoneNumber);
  };
  const validation = yup.object().shape({
    phoneNumber: yup
      .number()
      .min(9000000000, "شماره موبایل باید 11 رقم باشد")
      .max(9999999999, "شماره موبایل نباید بیشتر از 11 رقم باشد")
      .required("این فیلد الزامیست!"),
  });
  return (
    <div className="bg-[#e4dbff]">
      <h2 className="text-[#6652eb] dark:text-indigo-100 md:text-3xl text-2xl top-16 md:top-10 md:left-[340px] right-40 absolute">
        {" "}
        ثبت نام
      </h2>
      <div
        className=" text-newPurpleAlpha  w-[400px] absolute mt-16 md:left-44 left-0"
        dir="rtl"
      >
        <Formik
          initialValues={{
            phoneNumber: phoneNumberValue,
          }}
          validationSchema={validation}
          enableReinitialize={true}
          onSubmit={(value) => {
            onSubmit(value);
          }}
        >
          <Form autoComplete="off" className="text-[#a967ff]">
            <h2 className="md:text-sm text-xs mr-[44px] md:mr-0">
              {" "}
              جهت دریافت کد یک بار مصرف شماره تلفن خود را وارد کنید
            </h2>
            <FieldInput
              placeholder={" شماره موبایل خود را وارد کنید"}
              name="phoneNumber"
              type={"tel"}
            />

            <input
              type="submit"
              value="دریافت کد یک بار مصرف"
              className="w-72 absolute md:top-[120px] top-[100px] right-[60px] py-[12px]  rounded-md text-xs md:text-sm text-[#f4f1ff] bg-gradient-to-tr  from-[#7a0cff] to-[#4739ff] cursor-pointer hover:bg-gradient-to-tr hover:from-[#4739ff] hover:to-[#7a0cff]"
            />
            {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PhoneNumber;
