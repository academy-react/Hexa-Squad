import React, { useEffect, useState } from "react";
import PanelCourses from "../../components/UserPanel/PanelCourses";
import List from "../../core/services/api/GetData/WhishList";
import fetchWhishListCoursesApi from "../../core/services/api/GetData/WhishList";
const WhishList = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState(allData);
  const [countInPage, setCountInPage] = useState(6);
  const pageCount = Math.ceil(data.length / countInPage);
  const whishList = true;
  useEffect(() => {
    fetchWhishListCoursesApi(setData, setAllData);
  }, []);

  return (
    <PanelCourses
      countInPage={countInPage}
      // allData={allData}
      allData={allData}
      data={data}
      setData={setData}
      whishList={whishList}
      setCountInPage={setCountInPage}
      pageCount={pageCount}
      title={"لیست مورد علاقه ها"}
      addIcon={"trash"}
      AllData={List}
    />
  );
};

export default WhishList;
