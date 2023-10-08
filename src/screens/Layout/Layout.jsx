import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-lightPink dark:bg-darkblue min-h-[100vh]"dir="rtl" >
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
