import React, { useState, useEffect, Fragment } from "react";
import ReactPaginate from "react-paginate";
import Course from "../../components/course/Course";
import {
  CoursesHero,
  FiltersBTN,
  FiltersOptions,
} from "../../components/CourseList";
import bgCourses from "../../assets/image/bg-ListHero.svg";
import bgCoursesDark from "../../assets/image/bg-ListHero-dark.svg";
import fetchCoursesApi from "../../core/services/api/GetData/allCoursesApi";
import LoadingSpinner from "../../components/common/loadingSpinner";
const Courses = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [filterDiv, setFilterDiv] = useState(true);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const countInPage = 8;
  const endOffset = itemOffset + countInPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / countInPage);
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. ",
  ];
  const showGridView = () => {
    setShowGrid((showGrid) => !showGrid);
  };

  // pagination function onChange
  const handlePageClick = (event) => {
    const newOffset = (event.selected * countInPage) % data.length;
    setItemOffset(newOffset);
  };

  // get courses data from api and fetch on data variable
  useEffect(() => {
    fetchCoursesApi(setData, pageCount, countInPage, setAllData);
    return () => {
      setFilterDiv(false);
      setShowGrid(false);
    };
  }, []);

  const mapData = currentItems.map((data, index) => {
    console.log(data.technologyList);
    return (
      <Course
        key={index}
        id={data.courseId}
        bio={data.describe}
        title={data.title}
        courseCount={data.levelName}
        time={data.statusName}
        date={data.lastUpdate}
        professorName={data.teacherName}
        like={data.likeCount}
        // dislike={data.dislike}
        studentCount={data.currentRegistrants}
        price={data.cost}
        addClass={"h-[441px] mx-auto"}
        image={data.tumbImageAddress}
      />
    );
  });
  return (
    <Fragment>
      <LoadingSpinner/>
      <div className="py-32">
        <img
          src={bgCourses}
          alt="picture"
          className="w-[100%] dark:hidden absolute top-0 z-0"
        />
        <img
          src={bgCoursesDark}
          alt="picture"
          className="w-[100%] dark:block hidden absolute top-0 z-0"
        />
        <CoursesHero typeWriterWords={typeWriterWords} />
        <FiltersBTN
          data={allData}
          setData={setData}
          showGridView={showGridView}
          filterDiv={filterDiv}
          setFilterDiv={setFilterDiv}
        />

        <div className="flex w-full flex-wrap ">
          <div className="flex md:flex-row flex-col w-full px-20 ">
            <FiltersOptions
              data={allData}
              setFilterDiv={setFilterDiv}
              setData={setData}
              filterDiv={filterDiv}
            />
            <div
              className={
                "w-full flex relative flex-wrap transition-all pt-0 justify-end gap-3 duration-1000 aos-init aos-animate " +
                (showGrid ? "grid-list" : "")
              }
              data-aos="zoom-in"
            >
              <span className="m-1 text-xl absolute -top-10 right-0 text-slate-950 dark:text-slate-400">
                {data.length} دوره مرتبط
              </span>

              {mapData}
            </div>
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            pageLinkClassName=" paginationLink"
            activeLinkClassName="active"
            containerClassName=" border-[#0001] w-full flex justify-center gap-4 mt-5 p-5"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Courses;
