import React, { useEffect, useState } from "react";
import PanelCourses from "../../components/UserPanel/PanelCourses";
import fetchCoursesApi from "../../core/services/api/GetData/allCoursesApi";
const AllCourse = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState(allData);
  const [countInPage, setCountInPage] = useState(6);
  const pageCount = Math.ceil(data.length / countInPage);
  useEffect(() => {
    fetchCoursesApi(setData, pageCount, countInPage, setAllData);
  }, []);
  return (
    <PanelCourses
      countInPage={countInPage}
      allData={allData}
      data={data}
      setData={setData}
      setCountInPage={setCountInPage}
      pageCount={pageCount}
      title={"همه دوره ها"}
      AllData={allData}
    />
  );
};

export default AllCourse;
