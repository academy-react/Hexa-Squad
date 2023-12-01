import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

// import WhishListTable from "./NewsFavoriteTable";
// import AllCoursesTable from "./AllCoursesTable";
import NewsFavoriteTable from "./NewsFavoriteTable";

const NewsPaginationTable = ({ data, itemsPerPage, addIcon, whishList }) => {

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className=" py-5 flex flex-col items-scratch" dir="rtl">
      {data.length == 0 ? (
        <div className="w-full h-96 text-slate-900 flex justify-center items-center">
          لیست مد نظر شما خالی میباشد !
        </div>
      ) : (
        <>
          <div className="my-2 overflow-auto text-right">
            <table
              className="w-full text-left text-sm px-3 border-spacing-y-2 border-separate"
              dir="ltr"
            >
              <thead>
                <tr className="rounded-xl bg-lightblue text-center">
                  <th scope="col" className="px-6 py-4">
                    مدیریت
                  </th>
                  {whishList === undefined && (
                    <th scope="col" className="px-6 py-4">
                      قیمت
                    </th>
                  )}
                  <th scope="col" className="px-6 py-4">
                    تاریخ نشر
                  </th>
                  <th scope="col" className="px-6 py-4">
                    تعداد بازدید
                  </th>
                  <th scope="col" className="px-6 py-4">
                    تعداد لایک
                  </th>
                  <th scope="col" className="px-6 py-4">
                    نام مقاله
                  </th>
                  <th scope="col" className="px-6 py-4">
                    تصویر
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((data, index) => {
                    return (
                      <NewsFavoriteTable
                        key={index}
                        data={data}
                        addIcon={addIcon}
                      />
                    );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-center">
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
              containerClassName="border-[1px] border-[#0001] w-8/12 flex justify-center gap-4 p-5"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NewsPaginationTable;
