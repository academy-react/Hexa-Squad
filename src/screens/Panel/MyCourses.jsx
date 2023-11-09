import React from "react";
import PanelCourses from "../../components/UserPanel/PanelCourses";
import Courses from "../../core/services/api/GetData/MyCourses";
const MyCourses = () => {
  return <PanelCourses title={"دوره های من"} AllData={Courses} />;
};

export default MyCourses;
