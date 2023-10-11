import React from "react";
import { Link } from "react-router-dom";

import DesktopMenu from "./header-components/DesktopMenu";
import HeaderButtons from "./header-components/HeaderButtons";
import Logo from "../../assets/image/Logo.svg";
import LogoIcon from "../../assets/image/Logo-icon.svg";
import MobileMenu from "./header-components/MobileMenu";
import LogoWhite from "../../assets/image/Logo - white.svg";
import LogoBg from "../../assets/image/logo-bg.svg";
import CheckboxInput from "../common/checkboxInput";
import Login from "../Modals/Login";
import { useEffect } from "react";
const Header = () => {
  const headerPosition = () => {
    let header = document.getElementById("header");
    if (window.scrollY > 110) {
      header.classList.remove("w-full", "absolute");
      header.classList.add("header");
      // header.classList.add("bg-lightPink");
      // header.classList.add("shadow-shadow-Services-box");
    } else {
      header.classList.add("w-full", "absolute");
      header.classList.remove("header");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", headerPosition);
    return window.removeEventListener("scroll", headerPosition);
  }, []);
  return (
    <>
      <CheckboxInput name={"showLoginModal"} />
      <Login />
      <header
        className="rounded-xl absolute flex h-[110px] w-full z-50"
        id="header"
      >
        <ul className="w-full flex items-center px-[20px]  ">
          <li className="w-4/12 relative">
            <Link to="/" className="z-20 relative">
              <img
                src={Logo}
                alt="Hexa Squad Logo"
                className="md:logo md:block hidden dark:hidden "
              />
              <img
                src={LogoIcon}
                alt="Hexa Squad Logo"
                className="logo md:hidden "
              />
              <img
                src={LogoWhite}
                alt="Hexa Squad Logo"
                className="md:logo hidden dark:md:block"
              />
            </Link>

            <img src={LogoBg} alt="Logo Bg" className="logo-bg" />
          </li>
          <li className="lg:w-4/12 w-0 ">
            <DesktopMenu className={"hidden lg:flex"} />
          </li>
          <CheckboxInput name={"openMenu"} />
          <li className="lg:w-4/12 w-7/12 header-buttons ">
            <HeaderButtons />
          </li>
          <li className="mobile-menu-holder">
            <MobileMenu />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
