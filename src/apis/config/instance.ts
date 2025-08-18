import axios, { AxiosInstance } from "axios";

let loadingCount = 0;
let loadingCallback: ((isLoading: boolean) => void) | null = null;

export const setLoadingCallback = (callback: (isLoading: boolean) => void) => {
  loadingCallback = callback;
};

const updateLoadingState = () => {
  if (loadingCallback) {
    loadingCallback(loadingCount > 0);
  }
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}${import.meta.env.VITE_API_VERSION}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  loadingCount++;
  updateLoadingState();

  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    loadingCount = Math.max(0, loadingCount - 1);
    updateLoadingState();
    return response;
  },
  (error) => {
    loadingCount = Math.max(0, loadingCount - 1);
    updateLoadingState();

    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
