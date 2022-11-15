import React from "react";

import { AuthProvider, } from "./auth/auth_provaider";
import MyRoutes from "./routes/routes";

export function App() {
  return (
    <AuthProvider>
      <MyRoutes />
    </ AuthProvider>
  );
}

