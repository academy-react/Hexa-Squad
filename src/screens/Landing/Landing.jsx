import React, { Fragment } from 'react';
import { HeroSection , Services , CourseEducation,Categories ,Suggestions ,OurTeachers ,News } from '../../components/Landing';
import LoadingSpinner from '../../components/common/loadingSpinner';
const Landing = () => {

  return (
    <Fragment >
      <LoadingSpinner/>
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