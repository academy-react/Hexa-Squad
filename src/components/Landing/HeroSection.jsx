import React, { useRef, useState, useEffect, useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";

import HeroSectionImage from "../../assets/image/woman working- Hero section image.png";
import HeroSectionImageCroped from "../../assets/image/woman working- Hero section image - croped.png";
import AutoTypeWriter from "../common/AutoTypeWriter";
import { SearchBox } from "../common";

import teacher from "../../assets/image/stat-teacher.svg";
import student from "../../assets/image/stat-student.svg";
import course from "../../assets/image/course-state.svg";
import heroImage from "../../assets/image/hero-image.png";
import AllData from "../../core/services/api/GetData/allCoursesApi";
import SuggestedCourse from "../UserPanel/UserDashboard/SuggestedCourse";
import fetchCoursesApi from "../../core/services/api/GetData/allCoursesApi";
import HeroSearchBox from "./HeroSearchBox";
import axios from "axios";
const HeroSection = () => {
  const text = [
    " مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی .",
  ];

  const [Data, setData] = useState({});
  const fetchLandingReport = useCallback(async () => {
    try {
      const result = await axios.get(
        "https://api-academy.iran.liara.run/api/Home/LandingReport"
      );
      setData(result.data);
      console.log('landing Report',result.data)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchLandingReport();
    return () => {};
  }, [fetchLandingReport]);

  return (
    <div className="hero-section-bg">
      <img src={heroImage} alt="hero Image" className="hero-image" />
      <div className="hero-gradient">
        <h4>پلتفرم اموزش طراحی وب</h4>
        <h1>مرجع اموزش برنامه نویسی</h1>
        <AutoTypeWriter Text={text} className={"hero-type-writer"} />
        <HeroSearchBox />
        <div className="information-section">
          <div>
            <img src={teacher} alt="مدرس" />
            <span>{Data.teacherCount}</span>
            <label>مدرس مجرب</label>
          </div>
          <div>
            <img src={course} alt="دوره" />
            <span>{Data.courseCount}</span>
            <label>دقیقه اموزش</label>
          </div>
          <div>
            <img src={student} alt="دانش آموز" />
            <span>{Data.studentCount}</span>
            <label>نفر دانشجو</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
