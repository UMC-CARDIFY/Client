import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const STORAGE_KEY = "accessToken";
const TOKEN_PARAM = "accessToken";

const saveAccessToken = (token: string): void => {
  localStorage.setItem(STORAGE_KEY, token);
};

const removeTokenFromUrl = (navigate: ReturnType<typeof useNavigate>): void => {
  navigate("/", { replace: true });
};

const useAccessTokenFromUrl = (): void => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get(TOKEN_PARAM);

    if (!accessToken) return;

    saveAccessToken(accessToken);
    removeTokenFromUrl(navigate);
  }, [searchParams, navigate]);
};

export default useAccessTokenFromUrl;
