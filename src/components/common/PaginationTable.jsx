import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

import SeparationPrice from "../../core/services/SeparationPrice/SeparationPrice";
const PaginationTable = ({data,itemsPerPage}) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  return (
    <div className=" py-5 flex flex-col items-scratch" >
      <table className="w-full text-left text-sm px-3 border-spacing-y-3 border-separate">
        <thead>
          <tr className="rounded-xl bg-lightblue text-center" >
            <th scope="col" className="px-6 py-4">
              مدیریت
            </th>
            <th scope="col" className="px-6 py-4">
              قیمت
            </th>
            <th scope="col" className="px-6 py-4">
              تاریخ شروع
            </th>
            <th scope="col" className="px-6 py-4">
              مدرس
            </th>
            <th scope="col" className="px-6 py-4">
              نام دوره
            </th>
            <th scope="col" className="px-6 py-4">
              تصویر
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((data, index) => (
            <tr className="text-[#36353B] bg-[#CECCFF50] hover:bg-[#CECCFF80] pagination-table-tr " key={index}>
              <td className="whitespace-nowrap px-6 py-4 text-xl">
                <i className="bi bi-trash text-[#fd0000]"></i>
                <i className="bi bi-eye text-[#29209380]"></i>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {SeparationPrice(data.price)} تومان
              </td>
              <td className="whitespace-nowrap px-6 py-4">{data.date}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {data.professorName}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{data.title}</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {" "}
                <img
                  src={data.imageUrl}
                  className="min-w-[70px] w-[80px] rounded-lg "
                  alt={data.title}
                />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
    </div>
  );
};

export default PaginationTable;
