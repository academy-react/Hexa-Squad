import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({className , title ,classNameIcon,address}) => {
  return (
    <NavLink to={'/userPanel/'+address} className={"list-items "+className}>
      <h4>{title}</h4>
      <i className={"text-xl bi bi-"+classNameIcon}></i>
    </NavLink>
  );
};

export default ListItem;
