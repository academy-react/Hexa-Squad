import React from "react";
import { Link } from "react-router-dom";
import SeparationPrice from "../../core/services/SeparationPrice/SeparationPrice";
// import { deleteFavoriteCourse } from "../../core/services/api/DeleteData/deleteFavoriteCourse";

const WhishListTable = ({ data, addIcon }) => {
    console.log(data)
  return (
    <tr
      className="text-[#36353B] dark:text-semiPink bg-[#CECCFF50] dark:bg-[#3f3fea45]  hover:bg-[#CECCFF80] pagination-table-tr "
    >
      <td className="whitespace-nowrap px-6 py-4 text-xl">
        <i className={"bi bi-" + addIcon + " text-[#fd0000] mx-3"}></i>
        <Link to={'/CourseDetails/'+data.courseId} className="bi bi-eye text-[#29209380] dark:text-semiPink"></Link>
      </td>
      <td className="whitespace-nowrap px-6 py-4" dir="rtl">
        {SeparationPrice(data.cost)} تومان
      </td>
      <td className="whitespace-nowrap px-6 py-4">{data.lastUpdate.slice(0,10)}</td>
      <td className="whitespace-nowrap px-6 py-4">{data.teacheName}</td>
      <td className="whitespace-nowrap px-6 py-4" dir="rtl">
        {data.courseTitle}
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        {" "}
        <img
          src={data.tumbImageAddress}
          className="min-w-[70px] w-[80px] h-12 rounded-lg "
          alt={data.courseTitle}
        />{" "}
      </td>
    </tr>
  );
};

export default WhishListTable;
