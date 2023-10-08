import React from "react";
import FooterLinks from "./footer-components/FooterLinks";
import ConectUs from "./footer-components/ConectUs";
import FooterInput from "../common/FooterInput";

const Footer = () => {
  return (
    <footer className="bg-newPurple2 flex rounded-tl-[150px] gap-10 md:p-10 justify-around md:items-start md:flex-row flex-col py-10 px-20 dark:bg-darkblue2">
      <FooterLinks />
      <ConectUs/>
      <FooterInput className={"my-16 hidden lg:block"} />
    </footer>
  );
};

export default Footer;
