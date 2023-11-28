import React, { useEffect, useLayoutEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider, useDispatch } from "react-redux";

import { routerPublic } from "../Router/routerPublic";
import store from "../redux/store";
// @components
import ToastAlert from "../components/common/ToastAlert";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/common/loadingSpinner";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider store={store}>
      <div className="app-Body">
        <ToastAlert />
        <RouterProvider router={routerPublic} />
      </div>
    </Provider>
  );
};

export default App;
