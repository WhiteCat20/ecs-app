import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("sahduasdasdsa");
  console.log(isAuthenticated);
  let auth = { token: isAuthenticated };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
