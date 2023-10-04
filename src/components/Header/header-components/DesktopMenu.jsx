import React from "react";

const DesktopMenu = () => {
  return (
    <ul className="DesktopMenu hidden justify-between items-center text-lightblue gap-[15px] whitespace-nowrap  text-xl lg:flex">
      <li className="menu-item group">
        دوره ها<span className="underline-menu "></span>
      </li>
      <li className="menu-item group">
        اساتید<span className="underline-menu"></span>
      </li>
      <li className="menu-item group">
        اخبار<span className="underline-menu"></span>
      </li>
      <li className="menu-item group">
        ارتباط با ما<span className="underline-menu"></span>
      </li>
      <li className="menu-item group">
        صفحه اصلی<span className="underline-menu"></span>
      </li>
    </ul>
  );
};

export default DesktopMenu;
