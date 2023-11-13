import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";

import { routerPublic } from "../Router/routerPublic";
import store from "../redux/store";
// @components
import ToastAlert from "../components/common/ToastAlert";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getItem } from "../core/services/local-storage/storage.services";
import { getProfile } from "../core/services/api/GetData/profile";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const getProfileFunction = async () => {
    const user = await getProfile();
  };
  useEffect(() => {
    getProfileFunction();
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
