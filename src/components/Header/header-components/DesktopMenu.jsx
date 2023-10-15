import React, { useState } from "react";
import { Link } from "react-router-dom";

const DesktopMenu = ({className}) => {
  const [menuItems, setMenuItems] = useState([
    {itemName:'دوره ها',address:'/courses'},
    {itemName:'اساتید',address:'/'},
    {itemName:'اخبار',address:'/'},
    {itemName:'ارتباط با ما',address:'/'},
    {itemName:'صفحه اصلی',address:'/'}
  ])
  return (
    <ul className={"DesktopMenu justify-between items-center text-lightblue gap-[15px] whitespace-nowrap  text-xl "+className}>
      {menuItems.map((item,index) => (
        <Link to={item.address} className="menu-item group" key={index}>
          {item.itemName}  <span className="underline-menu "></span>
        </Link>
      ))}
    </ul>
  );
};

export default DesktopMenu;
