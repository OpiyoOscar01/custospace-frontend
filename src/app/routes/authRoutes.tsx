import AuthLayout from "../../shared/layouts/AuthLayout";
import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";

export const authRoutes = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "register", element: <Register /> },
  ],
};
