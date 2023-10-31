import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const ListItem = ({  title, classNameIcon, address }) => {
  return (
    <motion.li
      whileTap={{ scale: 0.85 }}
      data-aos='zoom-in'
    >
      <NavLink
        to={"/userPanel/" + address}
        className={({ isActive }) => (isActive ? "active" : "")+" list-items "}
      >
        <h4>{title}</h4>
        <i className={" text-xl bi bi-" + classNameIcon}></i>
      </NavLink>
    </motion.li>
  );
};

export default ListItem;
