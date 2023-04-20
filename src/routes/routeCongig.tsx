import { Navigate, Outlet } from 'react-router-dom';

const PublicRouteConfig = () => {
  const token: string | null | boolean = false;

  return !token ? <Outlet /> : <Navigate to="/" />;
};

export { PublicRouteConfig };
