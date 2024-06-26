import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
