import React from "react";
import FooterLinks from "./components/FooterLinks";
import ConectUs from "./components/ConectUs";
import FooterInput from "../common/FooterInput";
import Gradient1 from '../../assets/icons/logo-icon-gradient.svg';
import Gradient2 from '../../assets/icons/logo-icon-gradient-part.svg';
import FooterBottom from "./components/FooterBottom";
import Copyrights from "../common/Copyrights";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="w-full flex gap-10  justify-around md:items-start md:flex-row flex-col">
          <FooterLinks />
          <img src={Gradient1} alt="logo-icon-gradient" className="absolute opacity-40 top-10 right-32 lg:block hidden z-0"  />
          <img src={Gradient2} alt="logo-icon-gradient-part" className="absolute opacity-40 bottom-0 left-0 z-0"  />
          <ConectUs/>
          <FooterInput className={"my-16 hidden lg:block z-10"} />
        </div>
        <FooterBottom/>
      </div>
      <Copyrights/>
    </footer></>
  );
};

export default Footer;
