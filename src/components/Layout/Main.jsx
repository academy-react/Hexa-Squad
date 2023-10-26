import React, { Fragment } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const Main = () => {
  return (
    <div className="bg-lightPink dark:bg-darkblue min-h-[100vh]"dir="rtl" >
      <Header />
      <Outlet />
      <Footer/>
      <ScrollToTop smooth width={'20'} className="w-14 z-30 dark:bg-darkblue4 h-14 rounded-full" color="#b983ff" top={750}/>
    </div>
  );
};

export default Main;
