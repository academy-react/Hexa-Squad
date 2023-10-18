import React from 'react'
import SideBar from '../UserPanel/SideBar'
import { Outlet } from 'react-router-dom'

const UserPanel = () => {
  return (
    <div className='w-full px-10 py-8 flex md:flex-row flex-col-reverse min-h-[100vh] gap-10 bg-whitePink' >
      <div className='md:w-9/12 w-full px-7 py-5 bg-[#fff] h-full min-h-[100vh] rounded-xl overflow-hidden'>
        <Outlet/>
      </div>
      <SideBar/>
    </div>
  )
}

export default UserPanel