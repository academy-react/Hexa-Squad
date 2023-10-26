import React from "react";
import ProfileImage from "../../assets/image/teacher1.jpg";
import ListItem from "../common/ListItem";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CheckboxInput } from "../common";

const SideBar = ({ profileSrc }) => {
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
    <>
    <CheckboxInput name={'showUserPanelSidebar'}/>
      <div className="side-bar-container">
        <div className="side-bar-image">
          <img
            src={ProfileImage}
            alt=" profile image "
            className="my w-32 h-32 object-cover"
          />
          <h3 className="mt-3">{"کاربر سایت"}</h3>
          <label htmlFor="showUserPanelSidebar" className="bi bi-list sidebar-icon"></label>
          <label htmlFor="showUserPanelSidebar" className="bi bi-x sidebar-icon"></label>
          <NavLink
            className="bi bi-house-door sidebar-icon right-5"
            to={"/"}
          ></NavLink>
        </div>
        <ul>{mapList}</ul>
      </div>
    </>
  );
};

export default SideBar;
