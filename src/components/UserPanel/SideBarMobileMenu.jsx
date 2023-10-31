import { motion } from "framer-motion";
import React from "react";

const SideBarMobileMenu = ({
  setOpenSideBar,
  listItem,
  mapList,
  openSideBar,
  openSide,
}) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <div
      className={
        (openSideBar ? "w-50 shadow-shadow-all px-10 " : "w-0 ") +
        " side-bar-mobile-menu"
      }
    >
      <i className="bi bi-x sidebar-icon text-white text-5xl " onClick={openSide}></i>
      <motion.ul variants={variants}>{mapList}</motion.ul>
    </div>
  );
};

export default SideBarMobileMenu;
