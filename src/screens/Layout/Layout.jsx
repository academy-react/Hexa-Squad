import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
<<<<<<< HEAD
    <div className="bg-lightPink dark:bg-darkblue min-h-[100vh]" >
=======
    <div className="bg-lightPink min-h-[100vh]" >
>>>>>>> feature/news
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
