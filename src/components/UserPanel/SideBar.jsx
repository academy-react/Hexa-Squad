import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ProfileImage from "../../assets/image/drBahr.jpg";
import getProfileInfo from "../../core/services/api/GetData/getProfileInfo";

import { motion } from "framer-motion";
import { getItem } from "../../core/services/local-storage/storage.services";

import pic from '../../assets/image/user-circle-icon-white.png';

const SideBar = ({ listItem, mapList, openSide }) => {
  const navigator = useNavigate();
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getProfileInfo(setUserInfo);
    const token = getItem("token");
    if (!token) {
      navigator("/authorize/login");
    }
  }, []);

  return (
    <>
      <div className="side-bar-container">
        <div className="side-bar-image">
          <img
            src={userInfo.currentPictureAddress === "Not-set" ? pic : userInfo.currentPictureAddress}
            alt=" profile image "
            className="my w-32 h-32 object-cover"
          />

          <h3 className="mt-3">{userInfo.fName + " " + userInfo.lName}</h3>

          <i className="bi bi-list sidebar-icon" onClick={openSide}></i>
          <NavLink
            className="bi bi-house-door sidebar-icon right-5"
            to={"/"}
          ></NavLink>
        </div>
        <motion.ul variants={variants}>{mapList}</motion.ul>
      </div>
    </>
  );
};

export default SideBar;
