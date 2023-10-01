import React from 'react'
import { Formik ,Form } from 'formik';
import * as yup from 'yup';
import pictureProgrammer from '../../assets/image/picture.svg';
import FieldInput from '../../components/common/FieldInput';
import "../../assets/styles/compute.css";
import { Link } from 'react-router-dom';
const Register = () => {
    const validation = yup.object().shape({
        email: yup.string().required('this field is required!'),
        password: yup.string().required('this field is required!'),
        rePassword: yup.string().required('this field is required!') ,
    })
  return (
    <div className=' bg-lightPink min-h-[100vh] '>
        <div className='md:flex container block'>
            <div className="auth-image-side md:rounded-r-[150px] md:rounded-br-[150px] md:rounded-bl-[0] rounded-b-[150px] p-4 w-full lg:w-7/12 lg:h-[100vh]">
                <img src={pictureProgrammer} className='lg:w-2/3 w-[250px]' alt="" />
            </div>
            <div className="w-full lg:w-5/12 flex justify-center">
                <div className="form-section-auth lg:top-[20%] lg:left-[-150px] left-[0] top-[0] ">
                    <h2 className='text-4xl text-center'>ثبت نام</h2>
                    <Formik initialValues={{email:'',password:'',rePassword:''}} validationSchema={validation} onSubmit={()=>alert('ثبت نام')} >
                        <Form className='text-center px-12 flex-col items-center flex'>
                            <FieldInput placeholder={'ایمیل را وارد کنید'} name='email' icon={"telephone-fill"} classIcon={'rotate-[260deg]'}/>
                            <FieldInput placeholder={'رمز عبور را وارد کنید'} name='password' icon={"lock-fill"} />
                            <FieldInput placeholder={'تکرار رمز عبور را وارد کنید'} name='rePassword' icon={"lock-fill"} />
                            <div className=' flex gap-2 justify-end w-full p-4'>    
                                <label htmlFor="remember">مرا به خاطر بسپار</label>
                                <input type="checkbox" name="" id="remember" />
                            </div>
                            <input type="submit" value="ثبت نام" className='w-full p-4 primary-button'/>
                            <a href="" className='my-2'>ورود به سایت</a>
                            {/* <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">و</Link> */}
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register