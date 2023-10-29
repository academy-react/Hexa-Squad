import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const ListItem = ({ className, title, classNameIcon, address }) => {
  return (
    <motion.li
      whileTap={{ scale: 0.85 }}
      className={"list-items " + className}
    >
      <NavLink
        to={"/userPanel/" + address}
        className={"list-items " + className}
      >
        <h4>{title}</h4>
        <i className={"text-xl bi bi-" + classNameIcon}></i>
      </NavLink>
    </motion.li>
  );
};

export default ListItem;
