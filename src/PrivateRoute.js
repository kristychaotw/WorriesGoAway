import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./firebase";

const PrivateRoute = () => {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
