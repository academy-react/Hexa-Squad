import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from './landing-components/HeroSection';
import Services from './landing-components/Services';
import Categories from './landing-components/Categories';
import CourseEducation from './landing-components/CourseEducation';

const Landing = () => {

  return (
    <div className="bg-lightPink min-h-[100vh]" dir='rtl'>
      <Header/>
      <HeroSection/>
      <Services />
      <CourseEducation />
      <Categories />
    </div>
  )
}

export default Landing;