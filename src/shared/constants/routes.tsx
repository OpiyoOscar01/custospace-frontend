export const ROUTES = {
  login: "/auth/login",
  register: "/auth/register",
  dashboard: "/dashboard",
  home: "/",
};

export const BASE_URL="http://127.0.0.1:8000/api";

/**
 * usage:
 * import { ROUTES } from 'src/shared/constants/routes';
 * <Route path={ROUTES.login} element={<Login />} />
 * <Route path={ROUTES.register} element={<Register />} />
 * <Link to={ROUTES.login}>Login</Link>

 */
