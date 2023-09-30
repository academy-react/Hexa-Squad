import React, { useState } from "react";

const UnAuthenticatedApp = () => {
  const [state, setState] = useState("");

  const handleSubmit = () => {
    console.log("ss");
  };

  return (<h1>pleas login</h1>
  );
};
export { UnAuthenticatedApp };
