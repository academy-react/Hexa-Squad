import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Landing from "./screens/Landing/Landing";
import Login from "./screens/Authorize/Login";
import Register from "./screens/Authorize/Register";
import ForgetPassword from "./screens/Authorize/ForgetPassword";
const App = () => {
  const Router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    {
      path: "/authorize",
      children: [
        { path: "/authorize/login", element: <Login /> },
        { path: "/authorize/register", element: <Register /> },
        { path: "/authorize/forget", element: <ForgetPassword /> },
      ],
    },
  ]);
  return (
    <div className="app-Body">
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
