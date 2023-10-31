import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import DesktopMenu from "./header-components/DesktopMenu";
import HeaderButtons from "./header-components/HeaderButtons";
import Logo from "../../assets/image/Logo.svg";
import LogoIcon from "../../assets/image/Logo-icon.svg";
import MobileMenu from "./header-components/MobileMenu";
import LogoWhite from "../../assets/image/Logo - white.svg";
import CheckboxInput from "../common/checkboxInput";
import Login from "../Modals/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onThemeChange } from "../../redux/darkMode";
const Header = () => {
  const lightMode = useSelector((state)=>state.darkModeSlice.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  const [headerStyle, setHeaderStyle] = useState(false);
  const setLightMode = (lightMode)=>{
    dispatch(onThemeChange(lightMode));
  }
  useEffect(() => {
    location.pathname == '/' ? setHeaderStyle(true) : setHeaderStyle(false)
  }, [location]);
  return (
    <>
      <CheckboxInput name={"showLoginModal"} />
      <Login />
      <header
        className={"rounded-xl absolute flex h-[110px] w-full z-50 " + (headerStyle?'landing-header':'')}
        id="header"
      >
        <ul className="w-full flex items-center px-[20px]  ">
          <li className="w-4/12 relative">
            <Link to="/" className="z-20 relative">
              <img
                src={Logo}
                alt="Hexa Squad Logo"
                className={"logo hidden dark:hidden " +  (headerStyle ? '':'md:block')}
              />
              <img
                src={LogoIcon}
                alt="Hexa Squad Logo"
                className="logo md:hidden "
              />
              <img
                src={LogoWhite}
                alt="Hexa Squad Logo"
                className={"md:logo hidden dark:md:block " + (headerStyle ? 'md:block':'')}
              />
            </Link>
          </li>
          <li className="lg:w-4/12 w-0 ">
            <DesktopMenu className={"hidden lg:flex"} />
          </li>
          <CheckboxInput name={"openMenu"} />
          <li className="lg:w-4/12 w-9/12 header-buttons ">
            <HeaderButtons lightMode={lightMode} setLightMode={setLightMode} headerStyle={headerStyle} />
          </li>
          <li className="mobile-menu-holder">
            <MobileMenu lightMode={lightMode} setLightMode={setLightMode} />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
