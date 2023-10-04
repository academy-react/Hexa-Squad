import React from 'react'
import Header from '../../components/Header/Header';
import HeroSection from './landing-components/HeroSection';

const Landing = () => {

  return (
    <div className="bg-lightPink min-h-[100vh]" dir='rtl'>
      <Header/>
      <HeroSection/>
    </div>
  )
}

export default Landing