import React, { useLayoutEffect, useState } from "react";

const LoadingSpinner = () => {
    const [loadingHidden, setLoadingHidden] = useState(false)
    const [loaderClass, setLoaderClass] = useState(false)
  useLayoutEffect(() => {
    setLoaderClass(true)
    setTimeout(() => {
      setLoadingHidden(true)
    }, 700);
  }, []);
  return (
    <div id="loader" className={"loading visible " + (loadingHidden ? 'hidden ':'') + (loaderClass ? 'loaded ':'') }>
      <span className="loader"></span>
    </div>
  );
};

export default LoadingSpinner;
