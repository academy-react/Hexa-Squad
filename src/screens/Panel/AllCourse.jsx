import React from "react";
import PanelCourses from "../../components/UserPanel/PanelCourses";

import AllData from "../../core/services/api/GetData/allCoursesApi";
const AllCourse = () => {
  return <PanelCourses title={"همه دوره ها"} AllData={AllData} />;
};

export default AllCourse;
