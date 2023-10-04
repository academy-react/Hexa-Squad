import React from 'react'
import HeroSectionImage from '../../../assets/image/woman working- Hero section image.png'
import HeroSectionSvg from './HeroSectionSvg'
const HeroSection = () => {
  return (
    <div className='flex pt-[150px]'>
        <div className="w-7/12 flex flex-col justify-center items-start px-32 gap-7">
            <p className='text-lightblue text-[20px]'>پلتفرم اموزش طراحی وب</p>
            <h2 className='text-6xl text-darkblue mb-5'>مرجع اموزش برنامه نویسی</h2>
            <p className='text-[#03001CB2] text-[24px] leading-[40px]'>مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی .</p>
            <div className='flex gap-6 mt-20'>
                <button className='border hover:bg-[#4136C9] hover:text-[#fff] transition-all  border-[#4136C9] bg-[transparent] text-darkblue'>برنامه نویسی چیست؟</button>
                <button className='primary-btn'>از کجا شروع کنیم؟</button>
            </div>
        </div>
        <div className="w-5/12 relative">
            <HeroSectionSvg/>
            <img src={HeroSectionImage} className='z-[5] relative'  />
        </div>
    </div>
  )
}

export default HeroSection