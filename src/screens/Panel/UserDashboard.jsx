import React, { useState, useEffect, useCallback } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import TitleSection from "../../components/UserPanel/TitleSection";
import UserInfo from "../../components/UserPanel/UserDashboard/UserInfo";
import LatestCourses from "../../components/UserPanel/UserDashboard/LatestCourses";
import SuggestedCourses from "../../components/UserPanel/UserDashboard/SuggestedCourses";
import NewDesign from "../../components/UserPanel/UserDashboard/UserInfo2";
import ProgressBar from "../../components/UserPanel/UserDashboard/ProgressBar";

const UserDashboard = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <TitleSection title={" داشبورد کاربر"} />

      <NewDesign />

      <div className="flex flex-col lg:flex-row-reverse  mt-16 mx-auto mb-10 ">
        <LatestCourses />

        <SuggestedCourses />

        {/* <Calendar
          calendar={persian}
          locale={persian_fa}
          className="dark:bg-indigo-400 "
        />  */}
      </div>
    </div>
  );
};

export default UserDashboard;
