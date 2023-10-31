import React, { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import HeroSectionImage from "../../assets/image/woman working- Hero section image.png";
import HeroSectionImageCroped from "../../assets/image/woman working- Hero section image - croped.png";
import AutoTypeWriter from "../common/AutoTypeWriter";
import { SearchBox } from "../common";

import teacher from "../../assets/image/stat-teacher.svg";
import student from "../../assets/image/stat-student.svg";
import course from "../../assets/image/course-state.svg";
import heroImage from "../../assets/image/hero-image.png";
import AllData from "../../core/services/api/Data/AllData";
import SuggestedCourse from "../UserPanel/UserDashboard/SuggestedCourse";
const HeroSection = () => {
  const [searching, setSearching] = useState(false)
  const text = [' مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی .']
  
  const [courseData, setCourseData] = useState(AllData);
  const [searchValue, setSearchValue] = useState('')
  const [Data, setData] = useState({
    teachers: "167",
    students: "460789",
    courses: "408228",
  });
  const searchModal = (values)=>{
    if (values == '') {
      setSearching(false)
    }else{
      setSearching(true)
      filterSearch(values)
    }
  }
  const filterSearch = (values) => {
    let filteredData = AllData.filter((item) => {
      return item.title.toLowerCase().indexOf(values.toLowerCase()) != -1;
    });
    setSearchValue(values)
    setCourseData(filteredData);
  };

  const mapData = courseData.map((data, index) => (
    <SuggestedCourse
      key={index}
      title={data.title}
      professorName={data.professorName}
      price={data.price}
      image={data.imageUrl}
    />
  ));
  return (
    <div className="hero-section-bg">
      <img src={heroImage} alt="hero Image" className="hero-image" />
      <div className="hero-gradient">
        <h4>پلتفرم اموزش طراحی وب</h4>
        <h1>مرجع اموزش برنامه نویسی</h1>
        <AutoTypeWriter Text={text} className={'hero-type-writer'} />
        <div className={"hero-search transition-all " + (searching ? 'active':'') }>
          <SearchBox placeholder={"چه چیزی میخوای یاد بگیری ؟"} SearchFunction={searchModal} />
          <div className="contentModal pt-10 relative hidden" dir="ltr">
            <h2 className="absolute text-slate-800 dark:text-slate-400 top-2 right-3 " dir="rtl">دوره های مرتبط با جستجوی شما  </h2>
            {mapData}
          </div>
        </div>
        <div className="information-section">
          <div>
            <img src={teacher} alt="مدرس" />
            <span>{Data.teachers}</span>
            <label>مدرس مجرب</label>
          </div>
          <div>
            <img src={course} alt="دوره" />
            <span>{Data.courses}</span>
            <label>دقیقه اموزش</label>
          </div>
          <div>
            <img src={student} alt="دانش آموز" />
            <span>{Data.students}</span>
            <label>نفر دانشجو</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
