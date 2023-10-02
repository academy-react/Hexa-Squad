import React from 'react'
import { Formik ,Form } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import "../../assets/styles/compute.css";
import pic2 from '../../assets/image/picture2.svg';
import FieldInput from '../../components/common/FieldInput';

const Login = () => {
    const validation = yup.object().shape({
        email: yup.string().required('this field is required!'),
        password: yup.string().required('this field is required!'),
    })
  return (
    <div className="bg-lightPink min-h-[100vh]">
        <div className="md:flex container block">
            <div className="auth-image-side md:rounded-r-[150px] md:rounded-br-[150px] md:rounded-bl-[0] rounded-b-[150px] sm:h-[400px]  p-4 w-full lg:w-7/12 lg:h-[100vh]">
                <img src={pic2} className="lg:w-[537px] w-[250px] mr-12" alt="" />
            </div>
            <div className="flex justify-center lg:w-5/12 w-full">
                <div className="form-section-auth lg:top-[14%] lg:left-[-230px] left-[0] top-[0] ">
                    <h2 className="text-4xl text-center lg:mt-12 sm:mt-10 ">ورود به سایت</h2>
                    <Formik initialValues={{email:'',password:''}} validationSchema={validation} onSubmit={()=>alert('ورود به سایت')} >
                        <Form className="text-center px-12 mt-8 flex-col items-center flex">
                            <FieldInput placeholder={"ایمیل را وارد کنید"} name="email" icon={"telephone-fill"} classIcon={'rotate-[260deg]'}/>
                            <FieldInput placeholder={"رمز عبور را وارد کنید"} name="password" icon={"lock-fill"} />
                            <Link to={"/authorize/forget"} className="mb-12 ml-[-200px] pointer">فراموشی رمز؟</Link>
                            <input type="submit" value="ورود" className="primary-button w-full p-4"/>
                            <label className="mt-4" > قبلا ثبت نام نکرده‌اید؟ <Link to={"/authorize/register"} className="pointer underline">ثبت نام</Link></label>                            
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login