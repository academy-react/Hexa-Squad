import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";

// @components
import { routerPublic } from "../Router/routerPublic";
import store from "../redux/store";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider store={store}>
      <div className="app-Body">
        <RouterProvider router={routerPublic} />
      </div>
    </Provider>
  );
};

export default App;
