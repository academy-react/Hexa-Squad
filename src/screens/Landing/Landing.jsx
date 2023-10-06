import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from './landing-components/HeroSection';
import Services from './landing-components/Services';
import CourseEducation from './landing-components/CourseEducation';
import Categories from './landing-components/Categories';
import OurTeachers from './landing-components/OurTeachers';
import Footer from '../../components/Footer/Footer';
import News from './landing-components/News';

const Landing = () => {

  return (
    <div className="bg-lightPink min-h-[100vh]" dir='rtl'>
      <Header/>
      <HeroSection/>
      <Services />
      <CourseEducation />
      <Categories />
      <OurTeachers/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Landing;