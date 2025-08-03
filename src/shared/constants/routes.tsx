export const ROUTES = {
  login: "/auth/login",
  register: "/auth/register",
  dashboard: "/dashboard",
};

/**
 * usage:
 * import { ROUTES } from 'src/shared/constants/routes';
 * <Route path={ROUTES.login} element={<Login />} />
 * <Route path={ROUTES.register} element={<Register />} />
 * <Link to={ROUTES.login}>Login</Link>

 */
