import React, { useState } from "react";
import { Link } from "react-router-dom";
import SeparationPrice from "../../core/utility/SeparationPrice/SeparationPrice";
import DeleteCourseFavorite from "../../core/services/api/DeleteData/deleteFavoriteCourse";
import GregorianToSolar from "../../core/utility/GregorianToSolar/GregorianToSolar";
const MyReserveCoursesListTable = ({ data, addIcon }) => {
  const [visible, setVisible] = useState(true);
  const deleteFavoriteCourse = async (id) => {
    let result;
    if (id !== true) {
      result = await DeleteCourseFavorite(id);
      console.log(result);
    }
    setVisible(false);
  };
  return (
    visible && (
      <tr className="text-[#36353B] dark:text-semiPink bg-[#CECCFF50] dark:bg-[#3f3fea45]  hover:bg-[#CECCFF80] pagination-table-tr text-center ">
        <td className="whitespace-nowrap px-6 py-4 text-xl">
          <i
            onClick={() => {
              deleteFavoriteCourse(data.reserveId);
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
        <td className="whitespace-nowrap px-6 py-4" dir="rtl">
          {data.accept === false ? (
            <p className="px text-yellow-500">هنوز تایید نشد</p>
          ) : (
            <p className="px text-green-500">رزرو شما تایید شد</p>
          )}
        </td>
        <td className="whitespace-nowrap px-6 py-4" dir="rtl">
          {GregorianToSolar(data.reserverDate)}
        </td>
        <td className="whitespace-nowrap px-6 py-4" dir="rtl">
          {data.courseName}
        </td>
        {/* <td className="whitespace-nowrap px-6 py-4 font-medium">
          {" "}
          <img
            src={data.tumbImageAddress}
            className="min-w-[70px] w-[80px] h-12 rounded-lg "
            alt={data.courseTitle}
          />{" "}
        </td> */}
      </tr>
    )
  );
};

export default MyReserveCoursesListTable;
