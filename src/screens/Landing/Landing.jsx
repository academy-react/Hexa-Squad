import React, { Fragment } from 'react';
import { HeroSection , Services , CourseEducation,Categories ,Suggestions ,OurTeachers ,News } from '../../components/Landing';
const Landing = () => {

  return (
    <Fragment >
      <HeroSection/>
      <Services />
      <CourseEducation />
      <Categories />
      <OurTeachers/>
      <News/>
      {/* <Suggestions/> */}
    </Fragment>
  )
}

export default Landing;