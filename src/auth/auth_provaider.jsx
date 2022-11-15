import { Navigate, useLocation } from "react-router-dom";
import React from "react";

import { fakeAuthProvider } from "./auth";

let AuthContext = React.createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState();

  let signin = (newUser, callback) => {
    let user = fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
    return user
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}



