import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./screens/Layout/Layout";
import Landing from "./screens/Landing/Landing";
import Login from "./screens/Authorize/Login";
import Register from "./screens/Authorize/Register";

import Error404 from "./screens/ErrorPage/Error404";
import VerificationSteps from "./screens/Authorize/VerificationSteps";




const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Landing /> },
         
      ],
    },
    {
      path: "/authorize",
      children: [
        { path: "/authorize/login", element: <Login /> },
        { path: "/authorize/register", element: <Register /> },
        { path: "/authorize/Verification", element: <VerificationSteps/> },
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
