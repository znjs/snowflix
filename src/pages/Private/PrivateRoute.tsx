import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const encodedToken = localStorage.getItem("encodedToken");
  return (
    <>{!!encodedToken ? children : <Navigate to="/login" state={{ from: location }} replace />}</>
  );
}

export { PrivateRoute };
