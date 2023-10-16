import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

// @components
import { routerPublic } from "../Router/roterPublic";

const App = () => {
  return (
    <div className="app-Body">
      <RouterProvider router={routerPublic} />
    </div>
  );
};

export default App;
