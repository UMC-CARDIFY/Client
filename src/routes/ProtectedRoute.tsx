import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { PATHS } from "./paths";

const ACCESS_TOKEN_KEY = "accessToken";

const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

const ProtectedRoute = () => {
  const [searchParams] = useSearchParams();

  const tokenFromUrl = searchParams.get(ACCESS_TOKEN_KEY);
  const tokenFromStorage = getAccessToken();
  const isAuthenticated = Boolean(tokenFromUrl || tokenFromStorage);

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
