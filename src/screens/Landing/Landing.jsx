import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import HeroSection from './landing-components/HeroSection';
import Services from './landing-components/Services';
import CourseEducation from './landing-components/CourseEducation';
import Categories from './landing-components/Categories';
import OurTeachers from './landing-components/OurTeachers';
import Footer from '../../components/Footer/Footer';
import News from './landing-components/News';
import Suggestions from './landing-components/Suggestions';

const Landing = () => {

  return (
    <Fragment >
      <HeroSection/>
      <Services />
      <CourseEducation />
      <Categories />
      <OurTeachers/>
      <News/>
      <Suggestions/>
    </Fragment>
  )
}

export default Landing;