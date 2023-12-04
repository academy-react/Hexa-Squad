import React, { useEffect } from "react";
import { removeItem } from "../../core/services/local-storage/storage.services";

const logOut = () => {
  const clickHandler = () => {
    removeItem("token");
    window.location.pathname = "/";
  };
  useEffect(() => {
    clickHandler();
  }, []);

  return <div onClick={clickHandler} className="my-1 text-black  "></div>;
};

export default logOut;
