import React, { useState, useEffect } from "react";
import http from "../../core/services/interceptor";
import { DropDown } from "../common";
import filterData from "../../core/services/filterData/filterNewsData";

const NewsCategoriesFilter = ({
  data,
  setData,
  filterDiv,
  setFilterDiv,
  setList,
  filterList,
  pushList,
}) => {
  const [categoryData, setCategoryData] = useState([
    { label: "مقالات", category: "articles" },
    { label: "رویدادها", category: "event" },
    { label: "خبر های اقتصادی", category: "economicNews" },
    { label: "خبر های ورزشی", category: "sportsNews" },
    { label: "خبر تکنولوژی", category: "technologyNews" },
  ]);
  const getCategories = async () => {
    try {
      const result = await http.get("/News/GetListNewsCategory");
      try {
        setCategoryData(result);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      className={"lg:w-5/12 filter-options " + (filterDiv ? "block" : "hidden")}
      id="filterDiv"
    >
      <i
        className="bi bi-x block lg:hidden text-gray text-5xl"
        title="بستن فیلتر ها"
        onClick={() => {
          setFilterDiv(!filterDiv);
        }}
      ></i>
      <DropDown
        name={"category"}
        setData={setData}
        courseData={data}
        setList={setList}
        pushList={pushList}
        data={categoryData}
        filterList={filterList}
        checkBoxType={"radio"}
        height={"h-[400px]"}
        customFunction={filterData}
      />
    </div>
  );
};

export default NewsCategoriesFilter;
