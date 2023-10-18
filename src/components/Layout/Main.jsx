import React, { Fragment } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="bg-lightPink dark:bg-darkblue min-h-[100vh]"dir="rtl" >
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
