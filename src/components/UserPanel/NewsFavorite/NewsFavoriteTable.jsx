import React, { useState } from "react";
import { Link } from "react-router-dom";
import article from "../../../assets/image/Online article-amico.svg"

const NewsFavoriteTable = ({ data, addIcon }) => {

  const [visible, setVisible] = useState(true);
  // const deleteFavoriteCourse = async (id) => {
  //   if (id !== true) {
  //     const result = await DeleteCourseFavorite(id);
  //     console.log(result)
  //   }
  //   console.log(id)
  //   // setVisible(deleteFavoriteCourse);
  // };

  return (
    visible && (
      <tr className="text-[#36353B] dark:text-semiPink bg-[#CECCFF50] dark:bg-[#3f3fea45]  hover:bg-[#CECCFF80] pagination-table-tr ">
        <td className="whitespace-nowrap pl-12 py-4 text-xl">
          {/* <i
            onClick={() => {
              deleteFavoriteCourse(data.favoriteId);
            }}
            className={
              "bi cursor-pointer bi-" + addIcon + " text-[#fd0000] mx-3"
            }
          ></i> */}
          <Link
            to={"/newsDetails/" + data.newsId}
            className="bi bi-eye text-[#29209380] dark:text-semiPink"
          ></Link>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {data.updateDate.slice(0, 10)}
        </td>
        <td className="whitespace-nowrap pl-16 py-4">{data.currentView}</td>
        <td className="whitespace-nowrap pl-16 py-4">{data.currentLikeCount}</td>
        <td className="whitespace-nowrap pl-12 py-4" dir="rtl">
          {data.title}
        </td>
        <td className="whitespace-nowrap pl-12 py-4 font-medium">
          {" "}
          <img
            // src={data.currentImageAddressTumb}
            src={data.currentImageAddressTumb == null || undefined ? article : data.currentImageAddressTumb}
            className="min-w-[70px] w-[140px] h-16 rounded-lg "
            alt={data.title}
          />{" "}
        </td>
      </tr>
    )
  );
};

export default NewsFavoriteTable;
