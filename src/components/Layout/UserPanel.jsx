import React, { Fragment }  from 'react';
import SideBar from '../UserPanel/SideBar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../common/ScrollToTop';
import { useState } from 'react';
import SideBarMobileMenu from '../UserPanel/SideBarMobileMenu';
import ListItem from '../common/ListItem';

const UserPanel = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const openSide =()=>{
    setOpenSideBar(openSideBar=>!openSideBar);
    console.log(openSideBar)
  }
  const [listItem, setListItem] = useState([
    { label: "داشبورد", classNameIcon: "columns-gap", address: "" },
    { label: "اطلاعات کاربر", classNameIcon: "person-circle", address: "editProfile/" },
    { label: "دوره های من", classNameIcon: "book", address: "MyCourses/" },
    {
      label: "لیست مورد علاقه ها",
      classNameIcon: "star",
      address: "WhishList/",
    },
    { label: "تمام دوره ها", classNameIcon: "book", address: "AllCourses/" },
    {
      label: "تغییر رمز عبور",
      classNameIcon: "key rotate-[-220deg]",
      address: "ChangePassword/",
    },
    { label: "نظرات ثبت شده", classNameIcon: "chat-left-text", address: "" },
    { label: "خروج از حساب", classNameIcon: "power", address: "login" },
  ]);
  const mapList = listItem.map((item, index) => (
    <ListItem
      title={item.label}
      classNameIcon={item.classNameIcon}
      key={index}
      address={item.address}
    />
  ));
  return (
    <Fragment>
      <ScrollToTop/>
      <div className='user-panel' >
        <div className='user-panel-container'>
          <Outlet/>
        </div>
        <SideBar listItem={listItem} openSide={openSide} mapList={mapList}/>
        <SideBarMobileMenu setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} listItem={listItem} mapList={mapList} openSide={openSide}/>
      </div>
    </Fragment>
  )
}

export default UserPanel;