import React from 'react'
import PanelCourses from './PanelCourses'
import List from '../../core/services/api/Data/WhishList'
const WhishList = () => {
  return (
    <PanelCourses title={'لیست مورد علاقه ها'} AllData={List}/>
  )
}

export default WhishList