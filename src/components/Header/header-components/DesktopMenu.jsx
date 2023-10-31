import React, { useState } from "react";
import { Link } from "react-router-dom";

const DesktopMenu = ({className}) => {
  const [menuItems, setMenuItems] = useState([
    {itemName:'صفحه اصلی',address:'/'},
    {itemName:'دوره ها',address:'/courses'},
    {itemName:'اخبار',address:'/news'},
  ])
  return (
    <ul className={"menu "+className}>
      {menuItems.map((item,index) => (
        <Link to={item.address} className="menu-item group" key={index}>
          {item.itemName}  <span className="underline-menu "></span>
        </Link>
      ))}
    </ul>
  );
};

export default DesktopMenu;
