import React from 'react';

import { Formik ,Form } from 'formik';
import * as yup from 'yup';
import pic3 from '../../assets/image/picture3.svg';
import FieldInput from '../../components/common/FieldInput';

const ForgetPassword = () => {
    const validation = yup.object().shape({
        email: yup.string().required('این فیلد الزامیست!'),
    })

  return (
    <div className="bg-lightPink min-h-[100vh]">
        <div className="md:flex container block">
            <div className="auth-image-side">
                <img src={pic3} className='lg:w-2/3 w-[250px]' alt="" />
            </div>
            <div className="w-full lg:w-5/12 flex justify-center">
                <div className="form-section-auth" dir='rtl'>
                    <h2 className='auth-title' >فراموشی رمز</h2>
                    <p className="w-[300px] mx-auto pr-[10px] text-base text-right lg:mt-12 mt-10 mb-10 text-lightblue ">در صورتی که رمز عبور خود را فراموش کرده اید، لطفا ایمیل یا موبایل خود را وارد کنید </p>
                    <Formik initialValues={{email:''}} validationSchema={validation} onSubmit={()=>alert('بازنشانی رمزعبور')} >
                        <Form className="auth-form">
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