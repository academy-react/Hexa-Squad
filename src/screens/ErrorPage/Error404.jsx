import React from 'react'
import image from '../../assets/image/char.svg'
import light404 from '../../assets/image/light404.svg'
const Error404 = () => {
  return (
    <div className='bg-[#4500d8] w-full h-[100vh] overflow-hidden flex items-start' dir='rtl'>
        <img src={image} className='lg:w-[600px] w-[400px] inline-block'  />
        <img src={light404} className='w-full inline-block absolute scale-x-[-1] lg:top-[180px] lg:right-[95px] top-[116px] right-[61px] lg:h-[76%] h-[84.5%] '  />
        <div className="w-8/12 py-32 hidden md:block z-10" >
            <h3 className='lg:text-5xl text-2xl lg:my-5 my-0'>سلام؟؟ کسی اینجاست!؟</h3>
            <p className='lg:text-lg text-md'>میدونیم که این ترسناکه , ولی صفحه ای که میخواهید در دسترس نمیباشد. شاید این فقط یک لینک خراب بود؟</p>
        </div>
    </div>
  )
}

export default Error404