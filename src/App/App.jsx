import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// @components
import { routerPublic } from "../Router/routerPublic";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="app-Body">
      <RouterProvider router={routerPublic} />
    </div>
  );
};

export default App;
