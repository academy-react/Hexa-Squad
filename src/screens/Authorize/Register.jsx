import React from 'react'
import { Formik ,Form } from 'formik';
import { Link } from 'react-router-dom';

import pictureProgrammer from '../../assets/image/picture.svg';
import {validation} from '../../core/validations/validations';
import FieldInput from '../../components/common/FieldInput';
const Register = () => {
  return (
    <div className=' bg-lightPink min-h-[100vh] '>
        <div className='lg:flex block'>
            <div className="auth-image-side">
                <img src={pictureProgrammer} className='lg:w-[460px] w-[250px]' alt="" />
            </div>
            <div className="w-full lg:w-5/12 flex justify-center">
                <div className="form-section-auth" dir='rtl'>
                    <h2 className='auth-title' >ثبت نام</h2>
                    <Formik initialValues={{email:'',password:'',rePassword:''}} validationSchema={validation} onSubmit={()=>alert('ثبت نام')} >
                        <Form className='auth-form'>
                            <FieldInput placeholder={'ایمیل را وارد کنید'} name='email' icon={"telephone-fill"} classIcon={'rotate-[260deg]'} type={'text'} />
                            <FieldInput placeholder={'رمز عبور را وارد کنید'} name='password' icon={"lock-fill"} type={'password'} />
                            <FieldInput placeholder={'تکرار رمز عبور را وارد کنید'} name='rePassword' icon={"lock-fill"}  type={'password'} />
                            <div className=' flex gap-2 justify-start w-full p-4'>    
                                <input type="checkbox" name="" id="remember" />
                                <label htmlFor="remember">مرا به خاطر بسپار</label>
                            </div>
                            <input type="submit" value="ثبت نام" className='w-full p-4 primary-button'/>
                            <Link to={"/authorize/login"} className="pointer w-100 h-100 d-inline-block">ورود به سایت</Link>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register