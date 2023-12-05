import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const ListItem = ({ title, classNameIcon, address }) => {
  return (
    <li>
      <NavLink
        to={"/userPanel/" + address}
        className={({ isActive }) =>
          (isActive ? "active" : "") + " list-items "
        }
      >
        <h4>{title}</h4>
        <i className={" text-xl bi bi-" + classNameIcon}></i>
      </NavLink>
    </li>
  );
};

export default ListItem;
