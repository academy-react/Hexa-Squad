import React, { useState, useEffect, useCallback, Fragment } from "react";
import ReactPaginate from "react-paginate";

import {
  NewsListHero,
  NewsFilterMenu,
  NewsCategoriesFilter,
} from "../../components/News";
import { NewsCard } from "../../components/Landing";
import fetchNewsApi from "../../core/services/api/GetData/getNewsData/allNewsApi";
import LoadingSpinner from "../../components/common/loadingSpinner";

import bgNews from "../../assets/image/bg-ListHero.svg";
import bgNewsDark from "../../assets/image/bg-ListHero-dark.svg";

const NewsList = () => {
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. ",
  ];

  const [newsData, setNewsData] = useState([{skeleton: true},{skeleton: true},{skeleton: true}]);
  console.log(newsData);
  const [newsAllData, setNewsAllData] = useState([{skeleton: true},{skeleton: true},{skeleton: true}]);
  const [filterDiv, setFilterDiv] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const countInPage = 5;
  const endOffset = itemOffset + countInPage;
  const currentItems = newsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newsData.length / countInPage);
  const [isLoading, setIsLoading] = useState(false);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * countInPage) % newsData.length;
    setItemOffset(newOffset);
  };

  // get News data from api and fetch
  useEffect(() => {
    fetchNewsApi(setNewsData, setNewsAllData, pageCount, 10000, setIsLoading );
    return () => {
      setFilterDiv(false);
    };
  }, [fetchNewsApi]);

  const newsCardsMapper = currentItems.map((item, index) => {
    console.log(item);
    return (
      <NewsCard
        key={index}
        id={item.id}
        img={item.currentImageAddressTumb}
        name={item.title}
        skeleton={item.skeleton}
        description={item.miniDescribe}
        views={item.currentView}
        date={item.updateDate}
      />
    );
  });
  return (
    <Fragment>
      {/* <LoadingSpinner/> */}
      <div className="py-32">
        <img
          src={bgNews}
          alt="picture"
          className="w-[100%] dark:hidden absolute top-0 z-0"
        />
        <img
          src={bgNewsDark}
          alt="picture"
          className="w-[100%] dark:block hidden absolute top-0 z-0"
        />
        <NewsListHero typeWriterWords={typeWriterWords} />
        <div className="md:mx-10 lg:mx-40 mt-16">
          <NewsFilterMenu
            newsData={newsAllData}
            filterDiv={filterDiv}
            setFilterDiv={setFilterDiv}
            setNewsData={setNewsData}
            setNewsAllData={setNewsAllData}
            pageCount={pageCount}
            countInPage={countInPage}
            setIsLoading={setIsLoading}
          />
          <section className="flex flex-row">
            <NewsCategoriesFilter
              data={newsAllData}
              setFilterDiv={setFilterDiv}
              setData={setNewsData}
              filterDiv={filterDiv}
            />
            {isLoading ? ( <LoadingSpinner/> ) : <div className="news-card">{newsCardsMapper}</div>}
            
          </section>
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
            containerClassName=" border-[#0001] w-full flex justify-center gap-4 mt-16 p-5"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default NewsList;
