import React, { useState } from "react";

const DesktopMenu = ({className}) => {
  const [menuItems, setMenuItems] = useState([
    {itemName:'دوره ها'},
    {itemName:'اساتید'},
    {itemName:'اخبار'},
    {itemName:'ارتباط با ما'},
    {itemName:'صفحه اصلی'}
  ])
  return (
    <ul className={"DesktopMenu justify-between items-center text-lightblue gap-[15px] whitespace-nowrap  text-xl "+className}>
      {menuItems.map((item,index) => (
        <li className="menu-item group" key={index}>
          {item.itemName}  <span className="underline-menu "></span>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
