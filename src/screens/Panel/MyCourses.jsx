import React, { useEffect, useState } from "react";
import PanelCourses from "../../components/UserPanel/PanelCourses";
import fetchMyCoursesApi from "../../core/services/api/GetData/MyCourses";
const MyCourses = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState(allData);
  const [countInPage, setCountInPage] = useState(6);
  const pageCount = Math.ceil(data.length / countInPage);
  useEffect(() => {
    fetchMyCoursesApi(setData, pageCount, countInPage, setAllData);
  }, []);
  return (
    <PanelCourses
      countInPage={countInPage}
      allData={allData}
      data={data}
      setData={setData}
      setCountInPage={setCountInPage}
      pageCount={pageCount}
      title={"دوره های من"}
      AllData={allData}
    />
  );
};

export default MyCourses;
