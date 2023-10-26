import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackToTop from "react-scroll-to-top";
import ScrollToTop from "../common/ScrollToTop";

const Main = () => {
  return (
    <div className="bg-lightPink dark:bg-darkblue min-h-[100vh]"dir="rtl" >
      <ScrollToTop/>
      <Header />
      <Outlet />
      <Footer/>
      <BackToTop smooth width={'20'} className="scroll-to-top dark:bg-darkblue4" color="#b983ff" top={500}/>
    </div>
  );
};

export default Main;
