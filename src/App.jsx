import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./screens/Layout/Layout";
import Landing from "./screens/Landing/Landing";
import Login from "./screens/Authorize/Login";
import Register from "./screens/Authorize/Register";
import ForgetPassword from "./screens/Authorize/ForgetPassword";
import VerificationCode from "./screens/Authorize/VerificationCode";
import Error404 from "./screens/ErrorPage/Error404";
import CourseDetails from "./screens/Landing/landing-components/CourseDetails";
import NewsDetails from './components/NewsDetails';

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/CourseDetails", element: <CourseDetails/> },
        { path: "/NewsDetails", element: <NewsDetails/> },
      ],
    },
    {
      path: "/authorize",
      children: [
        { path: "/authorize/login", element: <Login /> },
        { path: "/authorize/register", element: <Register /> },
        { path: "/authorize/forget", element: <ForgetPassword /> },
        { path: "/authorize/Verification", element: <VerificationCode /> },
      ],
    },
    { path: "/*", element: <Error404 /> },
  ]);
  return (
    <div className="app-Body">
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
