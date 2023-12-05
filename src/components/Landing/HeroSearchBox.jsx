import React, { useEffect, useState } from "react";
import { SearchBox } from "../common";
import fetchCoursesApi from "../../core/services/api/GetData/allCoursesApi";
import SuggestedCourse from "../UserPanel/UserDashboard/SuggestedCourse";

const HeroSearchBox = () => {
  const [searching, setSearching] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [AllData, setAllData] = useState([]);
  const searchModal = (values) => {
    if (values == "") {
      setSearching(false);
    } else {
      setSearching(true);
      console.log("values", values);
      filterSearch(values);
    }
  };
  const filterSearch = (values) => {
    console.log('All data', AllData);
    let filteredData = AllData.filter((item) => {
      return item.title.toLowerCase().indexOf(values.toLowerCase()) != -1;
    });
    setCourseData(filteredData);
  };

  const mapData = courseData.map((data, index) => (
    <SuggestedCourse
      key={index}
      id={data.courseId}
      title={data.title}
      professorName={data.teacherName}
      price={data.cost}
      image={data.tumbImageAddress}
    />
  ));
  useEffect(() => {
    fetchCoursesApi(setCourseData, 1, 1000, setAllData);
  }, []);
  return (
    <div
      className={"hero-search transition-all " + (searching ? "active" : "")}
    >
      <SearchBox
        placeholder={"چه چیزی میخوای یاد بگیری ؟"}
        SearchFunction={searchModal}
      />
      <div className="contentModal pt-10 relative hidden" dir="ltr">
        <h2
          className="absolute text-slate-800 dark:text-slate-400 top-2 right-3 "
          dir="rtl"
        >
          دوره های مرتبط با جستجوی شما{" "}
        </h2>
        {mapData}
      </div>
    </div>
  );
};

export default HeroSearchBox;
