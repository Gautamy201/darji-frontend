import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ islogedIn }) => {
  return islogedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
