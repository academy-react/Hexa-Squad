import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import DesktopMenu from "./header-components/DesktopMenu";
import HeaderButtons from "./header-components/HeaderButtons";
import Logo from "../../assets/image/logo2.png";
import LogoIcon from "../../assets/image/logoWhite2.png";
import MobileMenu from "./header-components/MobileMenu";
import LogoWhite from "../../assets/image/logoWhite2.png";
import CheckboxInput from "../common/checkboxInput";
import Login from "../Modals/Login";
import { onThemeChange } from "../../redux/darkMode";
import { getProfile } from "../../core/services/api/GetData/profile";
import { onUserChange } from "../../redux/user";
const Header = () => {
  const lightMode = useSelector((state) => state.darkModeSlice.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  const [headerStyle, setHeaderStyle] = useState(false);
  const setLightMode = (lightMode) => {
    dispatch(onThemeChange(lightMode));
  };
  console.log("headerStyle", headerStyle);
  const getProfileFunction = async () => {
    const user = await getProfile();
    dispatch(onUserChange(user));
  };
  useEffect(() => {
    location.pathname == "/" ? setHeaderStyle(true) : setHeaderStyle(false);
    getProfileFunction();
  }, [location]);
  return (
    <>
      <CheckboxInput name={"showLoginModal"} />
      <Login />
      <header
        className={
          "rounded-xl absolute flex h-[110px] w-full z-50 " +
          (headerStyle ? "landing-header" : "")
        }
        id="header"
      >
        <ul className="w-full flex items-center px-[20px]  ">
          <li className="w-4/12 relative">
            <Link to="/" className="z-20 relative">
              <img
                src={Logo}
                alt="Hexa Squad Logo"
                className={
                  "logo dark:hidden  " +
                  (headerStyle ?'hidden': "block")
                }
              />
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                src={LogoWhite}
                alt="Hexa Squad Logo"
                className={
                  "logo dark:block " + (headerStyle ? "block" : "hidden")
                }
              />
            </Link>
          </li>
          <li className="lg:w-4/12 w-0 ">
            <DesktopMenu className={"hidden lg:flex"} />
          </li>
          <CheckboxInput name={"openMenu"} />
          <li className="lg:w-4/12 w-9/12 header-buttons ">
            <HeaderButtons
              lightMode={lightMode}
              setLightMode={setLightMode}
              headerStyle={headerStyle}
            />
          </li>
          <li className="mobile-menu-holder z-[5000]">
            <MobileMenu lightMode={lightMode} setLightMode={setLightMode} />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
