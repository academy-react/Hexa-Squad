import React from 'react'

import  HeroSectionInfo from '../common/HeroSectionInfo';
import workshop from "../../assets/image/Coding workshop-rafiki 1.svg";

const CoursesHero = ({typeWriterWords}) => {
  return (
    <div className="w-full lg:flex-row flex relative flex-col-reverse justify-around items-center">
      <HeroSectionInfo
        typeWriterWords={typeWriterWords}
        upperTitle={"مهمه از کی یاد می گیری!!"}
        title={"دوره های آموزشی هگزا اسکواد"}
        typeSpeed={45}
        loop={1}
      />
      <div>
        <img src={workshop} alt="Coding workshop-rafiki" className="w-[468px] h-[468px] hidden lg:block ml-28" />
      </div>
    </div>
  )
}

export default CoursesHero