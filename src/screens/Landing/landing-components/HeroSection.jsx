import React from 'react'
import HeroSectionImage from '../../../assets/image/woman working- Hero section image.png'
import HeroSectionImageCroped from '../../../assets/image/woman working- Hero section image - croped.png'
import HeroSectionSvg from './HeroSectionSvg'
const HeroSection = () => {
  return (
    <div className='flex pt-[150px]'>
        <div className="sm:w-8/12 w-full flex flex-col justify-center sm:items-start items-center lg:px-32 sm:px-20 px-0  lg:gap-7 z-20">
            <p className='sm:text-lightblue lg:text-[20px] sm:text-sm'>پلتفرم اموزش طراحی وب</p>
            <h2 className='lg:text-6xl sm:text-darkblue mb-5 whitespace-nowrap text-3xl'>مرجع اموزش برنامه نویسی</h2>
            <p className='sm:text-[#03001CB2] lg:text-[24px] sm:text-md leading-[40px] sm:text-right text-center'>مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی .</p>
            <div className='flex gap-6 lg:mt-20 mt-10 w-full px-10 whitespace-nowrap'>
                <button className='border hover:bg-[#4136C9] hover:text-[#fff] transition-all  border-[#4136C9] bg-[transparent] text-darkblue sm:block hidden'>برنامه نویسی چیست؟</button>
                <button className='primary-btn sm:w-auto w-full'>از کجا شروع کنیم؟</button>
            </div>
        </div>
        <div className="hero-section-image-side">
          <div className='lg:w-[600px] sm:w-[400px] relative inline-block w-full'>
            <HeroSectionSvg/>
            <div className="absolute w-full hero-gradient"></div>
            <img src={HeroSectionImage} className='z-[5] relative lg:w-[523px] sm:w-[340px] hidden sm:block'  />
            <img src={HeroSectionImageCroped} className='hero-section-image w-full'  />
          </div>
        </div>
    </div>
  )
}

export default HeroSection