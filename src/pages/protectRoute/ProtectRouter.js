import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRouter = ({ component: Component, ...props }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectRouter;
