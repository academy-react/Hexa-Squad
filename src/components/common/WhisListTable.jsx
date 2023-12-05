import React, { useState } from "react";
import { Link } from "react-router-dom";
import SeparationPrice from "../../core/utility/SeparationPrice/SeparationPrice";
import DeleteCourseFavorite from "../../core/services/api/DeleteData/deleteFavoriteCourse";

import courseImg from "../../assets/image/Images-for-null 2.svg";

const WhishListTable = ({ data, addIcon }) => {
  const [visible, setVisible] = useState(true);
  const deleteFavoriteCourse = async (id) => {
    let result;
    if (id !== true) {
      result = await DeleteCourseFavorite(id);
    }
    setVisible(false);
  };
  return (
    visible && (
      <tr className="text-[#36353B] dark:text-semiPink bg-[#CECCFF50] dark:bg-[#3f3fea45]  hover:bg-[#CECCFF80] pagination-table-tr ">
        <td className="whitespace-nowrap pl-12 py-4 text-xl">
          <i
            onClick={() => {
              deleteFavoriteCourse(data.favoriteId);
            }}
            className={
              "bi cursor-pointer bi-" + addIcon + " text-[#fd0000] mx-3"
            }
          ></i>
          <Link
            to={"/CourseDetails/" + data.courseId}
            className="bi bi-eye text-[#29209380] dark:text-semiPink"
          ></Link>
        </td>
        <td className="whitespace-nowrap pl-12 py-4">
          {data.lastUpdate.slice(0, 10)}
        </td>
        <td className="whitespace-nowrap pl-12 py-4">{data.teacheName}</td>
        <td className="whitespace-nowrap pl-12 py-4" dir="rtl">
          {data.courseTitle}
        </td>
        <td className="whitespace-nowrap pl-12 py-4 font-medium">
          {" "}
          <img
            src={data.tumbImageAddress ? data.tumbImageAddress : courseImg }
            className="min-w-[70px] w-[80px] h-12 rounded-lg "
            alt={data.courseTitle}
          />{" "}
        </td>
      </tr>
    )
  );
};

export default WhishListTable;
