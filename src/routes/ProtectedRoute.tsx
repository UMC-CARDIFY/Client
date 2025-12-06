import { useEffect, useState } from "react";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { PATHS } from "./paths";

const ACCESS_TOKEN_KEY = "accessToken";

const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

const ProtectedRoute = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);

  const tokenFromUrl = searchParams.get(ACCESS_TOKEN_KEY);

  useEffect(() => {
    if (tokenFromUrl) {
      localStorage.setItem(ACCESS_TOKEN_KEY, tokenFromUrl);
      searchParams.delete(ACCESS_TOKEN_KEY);
      setSearchParams(searchParams, { replace: true });
    }
    setIsProcessing(false);
  }, [tokenFromUrl, searchParams, setSearchParams]);

  if (isProcessing) {
    return null;
  }

  const tokenFromStorage = getAccessToken();
  const isAuthenticated = Boolean(tokenFromStorage);

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
