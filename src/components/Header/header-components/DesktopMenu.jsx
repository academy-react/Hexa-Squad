import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const DesktopMenu = ({className}) => {
  const [menuItems, setMenuItems] = useState([
    {itemName:'صفحه اصلی',address:'/'},
    {itemName:'دوره ها',address:'/courses'},
    {itemName:'اخبار',address:'/news'},
  ])
  return (
    <ul className={"menu "+className}>
      {menuItems.map((item,index) => (
        <NavLink to={item.address} className={({ isActive }) => (isActive ? "active" : "")+" menu-item group"} key={index}>
          {item.itemName}  <span className="underline-menu "></span>
        </NavLink>
      ))}
    </ul>
  );
};

export default DesktopMenu;
