import React from "react";
import PanelCourses from "../../components/UserPanel/PanelCourses";
import List from "../../core/services/api/GetData/WhishList";
const WhishList = () => {
  return (
    <PanelCourses
      title={"لیست مورد علاقه ها"}
      addIcon={"trash"}
      AllData={List}
    />
  );
};

export default WhishList;
