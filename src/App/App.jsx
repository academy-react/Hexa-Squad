import { AuthenticatedApp } from "./AuthenticatedApp/AuthenticatedApp";
import { UnAuthenticatedApp } from "./UnAuthenticatedApp/UnAuthenticatedApp";

import '../assets/styles/comput.css'
const App = () => {
  const isLoggedIn = false; //handle after

  return isLoggedIn ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
};

export default App;
