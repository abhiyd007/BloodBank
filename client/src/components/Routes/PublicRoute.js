import React from "react";
import { Navigate } from "react-router-dom";

//children refers to components wrapped within PrivateRoute in APP.js
const PublicRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PublicRoute;
