import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollToTop from "../common/ScrollToTop";

const Main = () => {
  return (
    <div className="bg-lightPink dark:bg-darkblue min-h-[100vh]"dir="rtl" >
      <ScrollToTop/>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
