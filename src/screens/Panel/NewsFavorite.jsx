import React, { useEffect, useState } from "react";
// import PanelCourses from "../../components/UserPanel/PanelCourses";
import List from "../../core/services/api/GetData/getNewsData/getNewsFavorite";
import getNewsFavorite from "../../core/services/api/GetData/getNewsData/getNewsFavorite";
import PanelNewsFavorite from "../../components/UserPanel/NewsFavorite/PanelNewsFavorite";

const NewsFavorite = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState(allData);
  const [countInPage, setCountInPage] = useState(6);
  const pageCount = Math.ceil(data.length / countInPage);
  const whishList = true;
  useEffect(() => {
    getNewsFavorite(setData, setAllData);
  }, []);

  return (
    <PanelNewsFavorite
      countInPage={countInPage}
      allData={allData}
      data={data}
      setData={setData}
      whishList={whishList}
      setCountInPage={setCountInPage}
      pageCount={pageCount}
      title={"لیست اخبار مورد علاقه "}
      addIcon={"trash"}
      AllData={List}
    />
  );
};

export default NewsFavorite;
