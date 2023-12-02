import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

import WhishListTable from "./WhisListTable";
import AllCoursesTable from "./AllCoursesTable";
import MyReserveCoursesListTable from "./myReserveCoursesListTable";
const PaginationTable = ({
  data,
  itemsPerPage,
  addIcon,
  whishList,
  reserveCourses,
}) => {
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
                  {whishList === undefined && reserveCourses === undefined && (
                    <th scope="col" className="px-6 py-4">
                      قیمت
                    </th>
                  )}
                  {reserveCourses !== undefined && (
                    <th scope="col" className="px-6 py-4">
                      وضعیت تایید
                    </th>
                  )}
                  {reserveCourses !== undefined && (
                    <th scope="col" className="px-6 py-4">
                      تاریخ رزرو
                    </th>
                  )}
                  {reserveCourses === undefined && (
                    <th scope="col" className="px-6 py-4">
                      تاریخ شروع
                    </th>
                  )}
                  {reserveCourses === undefined && (
                    <th scope="col" className="px-6 py-4">
                      مدرس
                    </th>
                  )}
                  <th scope="col" className="px-6 py-4">
                    نام دوره
                  </th>

                  {reserveCourses === undefined && (
                    <th scope="col" className="px-6 py-4">
                      تصویر
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((data, index) => {
                  if (whishList !== undefined) {
                    return (
                      <WhishListTable
                        key={index}
                        data={data}
                        addIcon={addIcon}
                      />
                    );
                  }
                  if (reserveCourses !== undefined) {
                    return (
                      <MyReserveCoursesListTable
                        data={data}
                        addIcon={addIcon}
                        key={index}
                      />
                    );
                  } else {
                    return <AllCoursesTable key={index} data={data} />;
                  }
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
              pageLinkClassName="paginationLink"
              activeLinkClassName="active"
              containerClassName="w-8/12 flex justify-center gap-4 p-5"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PaginationTable;
