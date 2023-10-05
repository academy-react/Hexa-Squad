import React from 'react'
import Header from '../../components/Header/Header';
import HeroSection from './landing-components/HeroSection';
import OurTeachers from './landing-components/OurTeachers';
import Footer from '../../components/Footer/Footer';

const Landing = () => {

  return (
    <div className="bg-lightPink min-h-[100vh]" dir='rtl'>
      <Header/>
      <HeroSection/>
      <OurTeachers/>
      <Footer/>
    </div>
  )
}

export default Landing