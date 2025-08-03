import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const isAuthenticated = true; // Replace with your real logic
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;

/**
 * 
 * Demo usage:
 * {
  path: "/dashboard",
  element: <PrivateRoute />,
  children: [
    { path: "", element: <DashboardHome /> }
  ]
}

 */
