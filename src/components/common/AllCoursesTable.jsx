import React from "react";
import SeparationPrice from "../../core/utility/SeparationPrice/SeparationPrice";
import { Link } from "react-router-dom";

import courseImg from "../../assets/image/Images-for-null 2.svg";

const AllCoursesTable = ({ data, addIcon }) => {
  console.log(data);
  return (
    <tr className="text-[#36353B] dark:text-semiPink bg-[#CECCFF50] dark:bg-[#3f3fea45]  hover:bg-[#CECCFF80] pagination-table-tr ">
      <td className="whitespace-nowrap pl-6 py-4 text-xl">
        <i className={"bi bi-" + addIcon + " text-[#fd0000] mx-3"}></i>
        <Link
          to={"/CourseDetails/" + data.courseId}
          className="bi bi-eye text-[#29209380] dark:text-semiPink"
        ></Link>
      </td>
      <td className="whitespace-nowrap pl-12 py-4" dir="rtl">
        {SeparationPrice(data.cost)} تومان
      </td>
      <td className="whitespace-nowrap pl-12 py-4">{data.statusName}</td>
      <td className="whitespace-nowrap pl-12 py-4">
        {data.teacherName || data.fullName}
      </td>
      <td className="whitespace-nowrap pl-12 py-4" dir="rtl">
        {data.title || data.courseTitle}
      </td>
      <td className="whitespace-nowrap pl-12 py-4 font-medium">
        {" "}
        <img
          src={data.tumbImageAddress ? data.tumbImageAddress : courseImg}
          className="min-w-[70px] w-[80px] h-12 rounded-lg "
          alt={data.title}
        />{" "}
      </td>
    </tr>
  );
};

export default AllCoursesTable;
