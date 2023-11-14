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
    <div id="loader" class={"loading visible " + (loadingHidden ? 'hidden ':'') + (loaderClass ? 'loaded ':'') }>
      <span class="loader"></span>
    </div>
  );
};

export default LoadingSpinner;
