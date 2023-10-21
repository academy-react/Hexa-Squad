import React from "react";
import TitleSection from "../../components/UserPanel/titleSection";
import UserInfo from "../../components/UserPanel/UserDashboard/UserInfo";
import LatestCourses from "../../components/UserPanel/UserDashboard/LatestCourses";
import SuggestedCourses from "../../components/UserPanel/UserDashboard/SuggestedCourses";

const UserDashboard = () => {
  return (
    <div>
      <TitleSection title={" داشبورد کاربر"} />

      <UserInfo />

      <div className="flex flex-col lg:flex-row-reverse  mt-16 mx-auto mb-10 ">
        <LatestCourses />

        <SuggestedCourses />
      </div>
    </div>
  );
};

export default UserDashboard;
