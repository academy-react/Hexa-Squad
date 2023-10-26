import React, { Fragment }  from 'react';
import SideBar from '../UserPanel/SideBar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../common/ScrollToTop';

const UserPanel = () => {
  return (
    <Fragment>
      <ScrollToTop/>
      <div className='w-full px-10 py-8 flex lg:flex-row flex-col-reverse min-h-[100vh] gap-10 bg-whitePink' >
        <div className='lg:w-9/12 w-full px-7 py-5 bg-[#fff] h-full min-h-[100vh] rounded-xl overflow-hidden'>
          <Outlet/>
        </div>
        <SideBar/>
      </div>
    </Fragment>
  )
}

export default UserPanel;