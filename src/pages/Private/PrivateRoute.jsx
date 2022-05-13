import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  return <>{!!encodedToken ? children : <Navigate to='/login' />}</>;
}

export { PrivateRoute };