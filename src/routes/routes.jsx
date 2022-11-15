import { Routes, Route } from "react-router-dom";

import ProtectedPage from "../pages/protected";
import PublicPage from "../pages/public";
import LoginPage from "../pages/login_page";
import Layout from "../pages/layout";

import { RequireAuth } from "../auth/auth_provaider"

export default function MyRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/protected" element={<RequireAuth> <ProtectedPage /> </RequireAuth>} />
      </Route>
    </Routes>
  )
}

