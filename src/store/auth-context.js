import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
