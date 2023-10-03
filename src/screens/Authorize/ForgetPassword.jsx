import React from 'react';

import { Formik ,Form } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import "../../assets/styles/compute.css";
import pic3 from '../../assets/image/picture3.svg';
import FieldInput from '../../components/common/FieldInput';

const ForgetPassword = () => {
    const validation = yup.object().shape({
        email: yup.string().required('this field is required!'),
    })

  return (
    <div className="bg-lightPink min-h-[100vh]">
        <div className="md:flex container block">
            <div className="auth-image-side">
                <img src={pic3} className="lg:w-[537px] w-[250px] mr-[50px]" alt="" />
            </div>
            <div className="flex justify-center lg:w-5/12 w-full">
                <div className="form-section-auth">
                    <h2 className="text-4xl text-center lg:mt-12 sm:mt-8">فراموشی رمز</h2>
                    <p className="w-[300px] mx-auto pr-[10px] text-base text-right lg:mt-12">در صورتی که رمز عبور خود را فراموش کرده اید، لطفا ایمیل یا موبایل خود را وارد کنید </p>
                    <Formik initialValues={{email:''}} validationSchema={validation} onSubmit={()=>alert('بازنشانی رمزعبور')} >
                        <Form className="flex flex-col text-center px-12 mt-8  items-center">
                            <FieldInput placeholder={"ایمیل را وارد کنید"} name="email" icon={"telephone-fill"} classIcon={'rotate-[260deg]'}/>
                            <input type="submit" value="بازنشانی رمزعبور" className="primary-button w-full p-4 mt-10"/>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword