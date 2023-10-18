import React from 'react'
import PanelCourses from './PanelCourses'

import AllData from "../../core/services/api/Data/AllData";
const AllCourse = () => {
  return (
    <PanelCourses title={'همه دوره ها'} AllData={AllData}/>
  )
}

export default AllCourse