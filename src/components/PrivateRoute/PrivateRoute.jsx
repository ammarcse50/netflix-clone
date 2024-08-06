import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
